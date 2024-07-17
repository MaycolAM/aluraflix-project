import styled from "styled-components";
import HeaderCambio from "./HeaderCambio"

const HeaderFondo = styled.header`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
padding: 0px;
width:100%;
height:150px;
box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
position:relative;
gap:50%;


img{
    width:220px;
}

`;
const HeaderBotones = styled.div`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    /* box-sizing: border-box; */
    /* width: 226px; */
    font-weight: 400;
    font-size: 30px;
    line-height: 20px;
    outline: none;
    position:relative;
    display:flex;
`;

const Separador = styled.div`
display:flex;
gap:20px;
`


const Header = () => {
    return (

        <HeaderFondo>
            <img src="img/Logo.svg" alt="logo de Space App" />
            <Separador>
                <HeaderBotones>
                    <HeaderCambio>
                        HOME
                    </HeaderCambio>
                </HeaderBotones>
                <HeaderBotones>
                    <HeaderCambio>
                        NUEVO VIDEO
                    </HeaderCambio>
                </HeaderBotones>
            </Separador>
        </HeaderFondo>
    )
}
export default Header

