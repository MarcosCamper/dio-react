import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { MdEmail, MdPassword, MdPerson } from "react-icons/md";
import React from 'react'
import { useForm } from "react-hook-form";
import { Column, Container, Row, SubTitleLogin, Title, TitleLogin, Wrapper, FazerLogin, ClicarLogin } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { IFormData } from "./types";
import { api } from "../../services/api";

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
    nome: yup.string().required('Campo obrigatório'),
  }).required();

const Cadastro= () => {
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    };    
    
    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',

    });
    
    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&users?senha=${formData.senha}`);
            if(data.length === 1){
                navigate('/feed');
                
            }else{
                alert('Email ou senha inválido');
            };
        }catch{
            alert('Houve um erro, tente novamente')
        }
    };
  
    return (
    <>
    <Header autenticado={false} />
    <Container>
        <Column>
            <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
        </Column>
        <Column>
        <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome Completo" leftIcon={<MdPerson/>}/>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Password" type="password" leftIcon={<MdPassword/>}/>
                    <Button title="Criar minha conta" variant="secundary" type="submit"/>
                </form>
            <Row>
                <SubTitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubTitleLogin>
            </Row>
            <Row>
                <FazerLogin>Já tenho conta.</FazerLogin>
                <ClicarLogin onClick={handleClickSignIn}>Fazer login</ClicarLogin>
            </Row>
        </Wrapper>
        </Column>
    </Container></>
  )
}

export {Cadastro}


