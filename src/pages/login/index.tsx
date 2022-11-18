import { MdEmail, MdPassword } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {    Column,  Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles'
import { api } from '../../services/api'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { IFormData } from "./types";
import React from "react";


const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Login = () => {
    const handleClickSignIn = () => {
        navigate('/cadastro')
    };  

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',

    });
// O usuário está logando mesmo com a senha errada, basta passar o login correto // 
    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&users?senha=${formData.senha}`);
            if(data.length === 1){
                navigate('/feed');
                console.log(data);
            }else{
                alert('Email ou senha inválido');
            };

        }catch{
            alert('Houve um erro, tente novamente')
        }

    }; 



    return (<>
    <Header autenticado={false}/>
    <Container>
        <Column>
            <Title>
                A Plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas mais desejadas.
            </Title>
            
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>Faca seu Cadastro</TitleLogin>
                <SubTitleLogin>Faca seu Login e make the change._</SubTitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" leftIcon={<MdEmail/>}/>
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdPassword/>}/>
                    <Button title="Entrar" variant="secundary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={handleClickSignIn}>Criar Conta</CriarText>
                </Row>
            </Wrapper>
            
        </Column>
    </Container>
    </>)
}

export { Login }