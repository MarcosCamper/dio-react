import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
import {
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture} from './styles';

const Card =() => {
  return (
    <CardContainer>
        <ImageBackground src="https://www.markstyling.com/f_a_18s/f_a-18c.01a.jpg"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/94796956?s=400&u=610f064aefadcb97d64e08791a69d9522c041499&v=4"/>
                <div>
                    <h4>Marcos Gabriel</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de HTML e CSS</h4>
                <p>Projeto feito e curso de html e css no bootcamp... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascrpit</h4>
                <p>
                    <FiThumbsUp/> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
