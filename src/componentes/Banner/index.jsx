import videos from "../../componentes/Categorias/FrontEnd/Front.json"
import { styled } from "styled-components"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    display: grid;
    background-size: cover;
    height:100vh;
    grid-template-columns:repeat(14,1fr);
    grid-template-rows:repeat(6,1fr);
`
const TituloFrontEnd = styled.h1`
    background:#6BD1FF;
    grid-row:3/4;
    grid-column:2/5;
    font-size:60px;
    color:white;
    border-radius:30px;
    text-align:center;
    align-content:center;
    height:80%;
`
const TituloEstilizado = styled.h2`
    font-weight: 600;
    font-size: 60px;
    color: #FFFFFF;
    grid-row:4/5;
    grid-column:2/8;
    align-content:center;

`
const TituloDescripcion = styled.h3`
    font-weight: 400;
    font-size: 25px;
    color: #FFFFFF;
    grid-row:5/6;
    grid-column:2/8;
    
`
const TituloVideo = styled.img`
    background-color:white;
    grid-row:2/5;
    grid-column:8/14;
    border-radius:30px;
`

const Banner = ({ backgroundImage }) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            <TituloVideo
                src="https://i.ibb.co/p42fsrB/player.png"
                key={videos.id} />
            <TituloFrontEnd>
                FRONT END
            </TituloFrontEnd>
            <TituloEstilizado>
                Challenge React
            </TituloEstilizado>
            <TituloDescripcion>
                Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
            </TituloDescripcion>
        </FigureEstilizada>)
}

export default Banner