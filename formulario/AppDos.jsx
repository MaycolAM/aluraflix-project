import Cabecera from "./Cabecera"
import styled from "styled-components"
import GlobalStyles from "../src/componentes/GlobalStyles"
import Footer from "../src/componentes/Footer"
import Nuevo from "./Cambio/Nuevo"

const FondoOscuro = styled.div`
background: #262626;
width:100%;
min-height:100vh;

`

const AppDos = () => {
    return (
        <>
            <FondoOscuro>
                <GlobalStyles />
                <Cabecera />
                <Nuevo />
                <Footer />
            </FondoOscuro>
        </>
    )
}
export default AppDos