import styled from "styled-components";
// import CampoTexto from "../CampoTexto";

const FooterEstilizado = styled.footer`
padding:40px 0;
display:flex;
justify-content:center;
background: rgba(0, 0, 0, 0.9);
border-top: 4px solid #2271D1;
/* box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7); */

/* justify-content:space-between; */
img{
    width:220px;
}
`
const Footer = () => {
    return <FooterEstilizado>
        <img src="img/Logo.svg" alt="logo de Space App" />
        {/* <CampoTexto /> */}
    </FooterEstilizado>
}
export default Footer