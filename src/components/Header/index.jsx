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
                    <img src="../../assets/logo-dio.png" alt="Logo da dio"/>
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