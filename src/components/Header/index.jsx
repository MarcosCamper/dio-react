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
    UserPicture
} from './style';
 const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src="https://lp.dio.me/wp-content/uploads/2022/03/Group-1.png" alt="Logo da dio"/>
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </> ) : null }
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/94796956?s=400&u=610f064aefadcb97d64e08791a69d9522c041499&v=4"/>
                    ) : (
                        <>    
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar"></Button>
                            <Button title="Cadastrar"></Button>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header}