// index.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import Layout from '../../components/Layout';
import * as S from './style';
import { Icon } from '@iconify/react';
import { Package } from '../../interfaces/package';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';

enum PaymentOption {
    PIX = 'pix',
    CREDIT_CARD = 'credit_card',
    BOLETO = 'boleto',
}

const CheckoutPage = () => {
    const [selectedPaymentOption, setSelectedPaymentOption] = useState<PaymentOption | null>(PaymentOption.CREDIT_CARD);
    const [packageSelected, setPackageSelected] = useState<Package | null>(null);
    const [packageDate, setPackageDate] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const user = JSON.parse(localStorage.getItem('user') as string);
    const params = useParams();
    const { id } = params;
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [cpf, setCpf] = useState('');

    useEffect(() => {
        if (id) {
            setLoading(true);
            api.get(`/travel-packages/${id}`)
                .then((response) => {
                    setPackageSelected(response.data);
                    setLoading(false);
                    const date = new Date(response.data?.startDate);
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    setPackageDate(date.toLocaleDateString('pt-BR', options as any));

                })
                .catch(() => {

                    toast.error('Erro ao carregar pacote dados do pacote!');
                    setLoading(false);
                });
        }
    }, [id]);

    const handlePaymentOptionChange = (option: PaymentOption) => {
        setSelectedPaymentOption(option);
    };

    useEffect(() => {
        if (!user) {
            navigate('/login', {
                state: {
                    redirectUrl: '/checkout/' + id
                }
            });
        }
    }, [user, navigate, id])

    const validateField = (field: string, fieldName: string): boolean => {
        if (!field.trim()) {
            toast.error(`Prencha o campo ${fieldName}!`);
            return false;
        }
        return true;
    };

    const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const isFullNameValid = validateField(fullName, 'Nome Completo');
        const isAddressValid = validateField(address, 'Endereço');
        const isCityValid = validateField(city, 'Cidade');
        const isPostalCodeValid = validateField(postalCode, 'Código Postal');
        const isCountryValid = validateField(country, 'País');
        const isCardNameValid = selectedPaymentOption === PaymentOption.CREDIT_CARD && validateField(cardName, 'Nome do Titular do Cartão');
        const isCardNumberValid = selectedPaymentOption === PaymentOption.CREDIT_CARD && validateField(cardNumber, 'Número do Cartão');
        const isExpiryMonthValid = selectedPaymentOption === PaymentOption.CREDIT_CARD && validateField(expiryMonth, 'Mês de Validade');
        const isExpiryYearValid = selectedPaymentOption === PaymentOption.CREDIT_CARD && validateField(expiryYear, 'Ano de Validade');
        const isCvcValid = selectedPaymentOption === PaymentOption.CREDIT_CARD && validateField(cvc, 'CVC');
        const isCpfValid = (selectedPaymentOption === PaymentOption.BOLETO || selectedPaymentOption === PaymentOption.PIX) && validateField(cpf, 'CPF');


        if (
            isFullNameValid &&
            isAddressValid &&
            isCityValid &&
            isPostalCodeValid &&
            isCountryValid &&
            (selectedPaymentOption !== PaymentOption.CREDIT_CARD || (isCardNameValid && isCardNumberValid && isExpiryMonthValid && isExpiryYearValid && isCvcValid)) ||
            isCpfValid
        ) {
            api.post('/bookings', {
                userID: user?.id,
                packageID: packageSelected?.packageID,
                bookingDate: new Date(),
                numberOfTravelers: 1,
                status: 'paid',
            }).then(() => {
                toast.success('Reserva realizada com sucesso!');
                navigate('/reservas');
            }).catch((error) => {
                if (error.response.status === 401) {
                    toast.error('Ops a sessão expirou!');
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/login', {
                        state: {
                            redirectUrl: window.location.pathname
                        }
                    })
                    return;
                }
                toast.error('Erro ao realizar reserva!');
            });
        }
    };
    return (
        <Layout>
            <Loading isLoading={loading} />
            <S.BackgroundImage />
            <S.CheckoutContainer>
                <S.PaymentHeader>Pagamento</S.PaymentHeader>
                <S.PaymentSection>
                    <S.ItemDetailsCard>
                        <h3>Detalhes do Item </h3>
                        <p>Nome do Pacote: {packageSelected?.packageName}</p>
                        <p>Preço: R$ {packageSelected?.price}</p>
                        <p>Data da Viagem: {packageDate}</p>
                    </S.ItemDetailsCard>
                </S.PaymentSection>
                <S.PaymentDescription>Escolha o metodo de pagamento abaixo</S.PaymentDescription>
                <S.PaymentOptions>
                    <S.PaymentOption
                        active={selectedPaymentOption === PaymentOption.CREDIT_CARD}
                        onClick={() => handlePaymentOptionChange(PaymentOption.CREDIT_CARD)}
                    >
                        <Icon icon="ph:credit-card" width={55} />
                        Cartão de crédito
                    </S.PaymentOption>
                    <S.PaymentOption
                        active={selectedPaymentOption === PaymentOption.PIX}
                        onClick={() => handlePaymentOptionChange(PaymentOption.PIX)}
                    >
                        <Icon icon="ic:baseline-pix" width={55} color='#008b8b' />
                        PIX
                    </S.PaymentOption>
                    <S.PaymentOption
                        active={selectedPaymentOption === PaymentOption.BOLETO}
                        onClick={() => handlePaymentOptionChange(PaymentOption.BOLETO)}
                    >
                        <Icon icon="bx:bxs-barcode" width={55} />
                        Boleto
                    </S.PaymentOption>
                </S.PaymentOptions>
                <S.PaymentForm>
                    <S.FormRow>
                        <S.FormPersonalDetails>
                            <S.StepIndicator active>
                                <S.StepNumber>1</S.StepNumber>
                                <S.StepDescription>Informações Pessoais</S.StepDescription>
                            </S.StepIndicator>
                            <S.FormGroup>
                                <S.Label htmlFor="fullName">Nome Completo</S.Label>
                                <S.Input onChange={(e) => setFullName(e.target.value)} id="fullName" type="text" required />
                            </S.FormGroup>
                            <S.FormGroup>
                                <S.Label htmlFor="address">Endereço</S.Label>
                                <S.Input onChange={(e) => setAddress(e.target.value)} id="address" type="text" required />
                            </S.FormGroup>
                            <S.FlexGroup>
                                <S.FormGroup className="half-width">
                                    <S.Label htmlFor="city">Cidade</S.Label>
                                    <S.Input onChange={(e) => setCity(e.target.value)} id="city" type="text" required />
                                </S.FormGroup>
                                <S.FormGroup className="half-width">
                                    <S.Label htmlFor="postalCode">Código Postal</S.Label>
                                    <S.Input onChange={(e) => setPostalCode(e.target.value)} id="postalCode" type="text" required />
                                </S.FormGroup>
                            </S.FlexGroup>
                            <S.FormGroup>
                                <S.Label htmlFor="country">País</S.Label>
                                <S.Input onChange={(e) => setCountry(e.target.value)} id="country" type="text" required />
                            </S.FormGroup>
                        </S.FormPersonalDetails>
                        {selectedPaymentOption === PaymentOption.CREDIT_CARD && (
                            <S.FormPaymentDetails>
                                <S.StepIndicator active>
                                    <S.StepNumber>2</S.StepNumber>
                                    <S.StepDescription>Informações do Cartão de Crédito</S.StepDescription>
                                </S.StepIndicator>
                                <S.FormGroup>
                                    <S.Label htmlFor="cardName">Nome do Titular do Cartão</S.Label>
                                    <S.Input onChange={(e) => setCardName(e.target.value)} id="cardName" type="text" required />
                                </S.FormGroup>
                                <S.FormGroup>
                                    <S.Label htmlFor="cardNumber">Número do Cartão</S.Label>
                                    <S.Input onChange={(e) => setCardNumber(e.target.value)} id="cardNumber" type="text" pattern="\d*" maxLength={16} required />
                                </S.FormGroup>
                                <S.FlexGroup>
                                    <S.FormGroup className="half-width">
                                        <S.Label htmlFor="expiryMonth">Mês de Validade</S.Label>
                                        <S.Input onChange={(e) => setExpiryMonth(e.target.value)} id="expiryMonth" type="text" maxLength={2} required />
                                    </S.FormGroup>
                                    <S.FormGroup className="half-width">
                                        <S.Label htmlFor="expiryYear">Ano de Validade</S.Label>
                                        <S.Input onChange={(e) => setExpiryYear(e.target.value)} id="expiryYear" type="text" maxLength={4} required />
                                    </S.FormGroup>
                                </S.FlexGroup>
                                <S.FormGroup>
                                    <S.Label htmlFor="cvc">Número CVC</S.Label>
                                    <S.Input onChange={(e) => setCvc(e.target.value)} id="cvc" type="text" maxLength={3} required />
                                </S.FormGroup>
                            </S.FormPaymentDetails>
                        )}

                        {selectedPaymentOption === PaymentOption.PIX && (
                            <S.FormPaymentDetails>
                                <S.StepIndicator active>
                                    <S.StepNumber>2</S.StepNumber>
                                    <S.StepDescription>Informações do PIX</S.StepDescription>
                                </S.StepIndicator>
                                <S.FormGroup>
                                    <S.Label htmlFor="cpf">CPF do Pagador</S.Label>
                                    <S.Input onChange={(e) => setCpf(e.target.value)} id="cpf" type="text" pattern="\d*" maxLength={11} required />
                                </S.FormGroup>
                            </S.FormPaymentDetails>
                        )}

                        {selectedPaymentOption === PaymentOption.BOLETO && (
                            <S.FormPaymentDetails>
                                <S.StepIndicator active>
                                    <S.StepNumber>2</S.StepNumber>
                                    <S.StepDescription>Informações do Boleto</S.StepDescription>
                                </S.StepIndicator>
                                <S.FormGroup>
                                    <S.Label htmlFor="cpf">CPF do Pagador</S.Label>
                                    <S.Input onChange={(e) => setCpf(e.target.value)} id="cpf" type="text" pattern="\d*" maxLength={11} required />
                                </S.FormGroup>
                            </S.FormPaymentDetails>
                        )}
                    </S.FormRow>
                    <S.SubmitButton onClick={handleFormSubmit} type="submit">Prosseguir</S.SubmitButton>
                </S.PaymentForm>
            </S.CheckoutContainer>
        </Layout>
    );
};

export default CheckoutPage;
