import { Link } from 'react-router-dom';
import {
    Container,
    Column,
    TitleHighlight,
    Title

} from './styles'

import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import { Card } from "../../components/Card";
import React from 'react';



const Feed = () => {
    return (<>
    <Header autenticado={true}/>
    <Container>
        <Column flex ={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={98} nome={"Marcos Gabriel"} image="https://avatars.githubusercontent.com/u/94796956?s=400&u=610f064aefadcb97d64e08791a69d9522c041499&v=4"/>
            <UserInfo percentual={79} nome={"Hornet"} image="https://avatars.githubusercontent.com/u/94796956?s=400&u=610f064aefadcb97d64e08791a69d9522c041499&v=4"/>
            <UserInfo percentual={66} nome={"Viper"} image="https://avatars.githubusercontent.com/u/94796956?s=400&u=610f064aefadcb97d64e08791a69d9522c041499&v=4"/>
            <UserInfo percentual={50} nome={"Tomcat"} image="https://avatars.githubusercontent.com/u/94796956?s=400&u=610f064aefadcb97d64e08791a69d9522c041499&v=4"/>
            <UserInfo percentual={23} nome={"Raptor"} image="https://avatars.githubusercontent.com/u/94796956?s=400&u=610f064aefadcb97d64e08791a69d9522c041499&v=4"/>
        </Column>
    </Container>
    </>)
}

export {Feed}