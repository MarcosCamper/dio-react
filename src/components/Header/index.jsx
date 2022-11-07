import React from 'react'
//TODO: Importar Logo e Banner da DIO
//import { logo } from '../../assets/logo-dio.png'
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,   
    Wrapper,
} from './style';
 const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src="https://lp.dio.me/wp-content/uploads/2022/03/Group-1.png" alt="Logo da dio"/>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"></Button>
                    <Button title="Cadastrar"></Button>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header}