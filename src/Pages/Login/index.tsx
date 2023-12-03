import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import * as S from './style';
import { User } from '../../interfaces/user';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';


const LoginPage: React.FC = () => {
    const [isLogin, setIsLogin] = React.useState(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const location = useLocation();
    const [redirectUrl, setRedirectUrl] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isLogin) {
            try {
                if (email === '' || password === '') {
                    toast.error("Preencha todos os campos!")
                    return;
                }
                const user: User = {
                    email,
                    password,
                    name
                }
                const response = await api.post('/auth', { email: user.email, password: user.password });
                api.defaults.headers.authorization = `Bearer ${response.data.access_token}`;
                localStorage.setItem('token', 'Bearer ' + response.data.access_token);
                localStorage.setItem('user', JSON.stringify({
                    email: response.data.email,
                    name: response.data.name,
                    id: response.data.id
                }));
                navigate(redirectUrl || '/');
            } catch (error) {
                toast.error("Email ou senha invalidos!")
            }
        } else {
            try {
                if (password !== confirmPassword) {
                    toast.error("As senhas não coincidem!")
                    return;
                }
                if (password.length < 6) {
                    toast.error("A senha deve ter no minimo 6 caracteres!")
                    return;
                }
                if (name === '' || email === '' || password === '' || confirmPassword === '') {
                    toast.error("Preencha todos os campos!")
                    return;
                }
                const user: User = {
                    email,
                    password,
                    name
                }
                await api.post('/users', user);
                toast.success("Cadastro realizado com sucesso!")
                setIsLogin(true);
            } catch (error) {
                toast.error("Ocorreu um erro ao fazer o cadastro tente novamente mais tarde")
            }
        }
    };

    useEffect(() => {
        if (location.state) {
            setRedirectUrl(location.state.redirectUrl);
        }
    }, [location]);
    return (
        <Layout>
            <S.BackgroundImage>
                <S.LoginContainer>
                    <S.BackgroundImageColumn>
                    </S.BackgroundImageColumn>
                    {
                        isLogin ?
                            (
                                <S.LoginFormColumn>
                                    <S.RowLogin >
                                        <S.TitleLogin>Entrar na minha conta</S.TitleLogin>
                                    </S.RowLogin>
                                    <S.FormLogin onSubmit={handleSubmit}>
                                        <S.LoginInput onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Digite seu email' id="email" name="email" required />
                                        <S.LoginInput onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Digite sua senha' id="password" name="password" required />
                                        <S.LoginButton type="submit">ENTRAR</S.LoginButton>
                                        <S.FieldSet>
                                            <legend>OU</legend>
                                        </S.FieldSet>
                                        <S.LoginButton onClick={() => setIsLogin(false)}>CADASTRE-SE</S.LoginButton>
                                    </S.FormLogin>
                                </S.LoginFormColumn>
                            )
                            :
                            (
                                <S.LoginFormColumn>
                                    <S.RowLogin >
                                        <S.TitleLogin>Criar minha conta</S.TitleLogin>
                                    </S.RowLogin>
                                    <S.FormLogin onSubmit={handleSubmit}>
                                        <S.LoginInput onChange={(e) => setName(e.target.value)} type="text" placeholder='Digite seu nome' id="name" name="name" required />
                                        <S.LoginInput onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Digite seu email' id="email" name="email" required />
                                        <S.LoginInput onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Digite sua senha' id="password" name="password" required />
                                        <S.LoginInput onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder='Confirme sua senha' id="password" name="password" required />
                                        <S.LoginButton type="submit">CADASTRAR</S.LoginButton>
                                        <S.FieldSet>
                                            <legend>OU</legend>
                                        </S.FieldSet>
                                        <S.LoginButton onClick={() => setIsLogin(true)}>JÁ POSSUI LOGIN?</S.LoginButton>
                                    </S.FormLogin>
                                </S.LoginFormColumn>
                            )
                    }

                </S.LoginContainer>
            </S.BackgroundImage>
        </Layout>
    );
}

export default LoginPage;