import { MdEmail, MdPassword } from "react-icons/md";
import {
    Column,
    Container,
    CriarText,
    EsqueciText, 
    Row, 
    SubTitleLogin, 
    Title, 
    TitleLogin, 
    Wrapper

} from './styles'


import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";




const Login = () => {
    return (<>
    <Header/>
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
                <form>
                    <Input placeholder="Email" leftIcon={<MdEmail/>}/>
                    <Input placeholder="Senha" type="password" leftIcon={<MdPassword/>}/>
                    <Button title="Entrar" variant="secundary"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
            </Wrapper>
            
        </Column>
    </Container>
    </>)
}

export { Login }