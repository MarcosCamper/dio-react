import { useNavigate } from 'react-router-dom';
import {
    Container,
    TextContent,
    TitleHighlight,
    Title

} from './styles'

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
//TODO: Importar Banner


const Home = () => {
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }
    return (<>
    <Header/>
    <Container>
        <div>
            <Title>
                
                <TitleHighlight>
                    Implemente 
                    <br/>
                </TitleHighlight>
                O seu futuro Global agora!
            </Title>
            <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                 desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Comecar agora" variant="secundary" onClick={handleClickSignIn}/>
        </div>
        <div>
            <img src="https://assets-staging.fusoesaquisicoes.com/uploads/2022/01/DIO.png" alt="Imagem principal" />
        </div>
    </Container>
    </>)
}

export {Home}