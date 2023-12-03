import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import * as S from "./style";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const BookingsPage = () => {
    const [bookings, setBookings] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        api.get('/bookings')
            .then((response) => {
                setBookings(response.data);
                setLoading(false);
            })
            .catch((error) => {
                toast.error("Erro ao carregar reservas, tente novamente mais tarde e se persistir contacte o Renam");
                setLoading(false);
            });
    }, []);

    const cancelBooking = (bookingId: string) => {
        api.delete(`/bookings/${bookingId}`).then((response) => {
            setBookings(bookings.filter((booking: any) => booking.bookingID !== bookingId));
        }).catch(() => {
            toast.error("Erro ao cancelar reserva, tente novamente mais tarde e se persistir contacte o Renam");
        })

    };

    return (
        <Layout>
            <Loading isLoading={loading} />
            <S.BackgroundImage />
            {bookings.length > 0 ? (
                <S.BookingsContainer>
                    {bookings.map((booking: any) => (
                        <S.BookingCard key={booking.bookingID}>
                            <S.BookingDetails>
                                <h2>{booking?.travelPackage?.destination}</h2>
                                <p>Nome: {booking?.travelPackage?.packageName}</p>
                                <p>Data: {booking?.travelPackage?.startDate}</p>
                                <p>Preço: R$ {booking?.travelPackage?.price}</p>
                                <p>Quantidade de pessoas: {booking?.numberOfTravelers}</p>
                                <p>Descrição da viagem: {booking?.travelPackage?.description}</p>
                            </S.BookingDetails>
                            <S.CancelButton onClick={() => cancelBooking(booking.bookingID)}>
                                Cancelar Reserva
                            </S.CancelButton>
                        </S.BookingCard>
                    ))}
                </S.BookingsContainer>
            ) : (
                <S.NoBookingsContainer>
                    <S.NoBookingsMessage>
                        Ops, Você ainda não tem reservas, mas não se preocupe pode acessar nossos pacotes de viagens e fazer uma agora mesmo.
                    </S.NoBookingsMessage>
                    <S.BrowsePackagesButton onClick={() => navigate('/pacotes')}>
                        Ver Pacotes
                    </S.BrowsePackagesButton>
                </S.NoBookingsContainer>
            )}
        </Layout>
    );
}

export default BookingsPage;