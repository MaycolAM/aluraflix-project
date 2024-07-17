import styled from "styled-components"
import GlobalStyles from "./componentes/GlobalStyles"
import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import Banner from "./componentes/Banner"
import banner from "./assets/banner.png"
import Front from "./componentes/Categorias/FrontEnd"
import Backend from "./componentes/Categorias/BackEnd"
import InnovYGest from "./componentes/Categorias/InnovYGest/indes"
import tacho from "../public/iconos/tacho.png"
import editar from "../public/iconos/editar.png"


const FondoOscuro = styled.div`
background: #262626;
width:100%;
min-height:100vh;

`
const TituloF = styled.p`
  font-size:60px;
  width:35%;
  background: #6BD1FF;
  color:white;
  height:100px;
  display:inherit;
  text-align:center;
  align-content:center;
  margin:20px;
  border-radius:30px;
`
const TituloB = styled.p`
  font-size:60px;
  width:35%;
  background: #00C86F;
  color:white;
  height:100px;
  display:inherit;
  text-align:center;
  align-content:center;
  margin:20px;
  border-radius:30px;
`
const TituloI = styled.p`
  font-size:60px;
  width:35%;
  background: #FFBA05;
  color:white;
  height:100px;
  display:inherit;
  text-align:center;
  align-content:center;
  margin:20px;
  border-radius:30px;
`



function App() {

  return (
    <>
      <FondoOscuro>
        <GlobalStyles />
        <Header />

        <Banner backgroundImage={banner} />

        <TituloF>FRONT END</TituloF>

        <Front imgEditar={editar} imgTacho={tacho} />
        <TituloB>BACK END</TituloB>
        <Backend imgEditar={editar} imgTacho={tacho} />
        <TituloI>Innovacion y mas</TituloI>
        <InnovYGest imgEditar={editar} imgTacho={tacho} />
        <Footer />
      </FondoOscuro>
    </>
  )
}

export default App
