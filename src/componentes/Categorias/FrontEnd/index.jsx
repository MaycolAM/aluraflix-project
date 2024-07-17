import styled from "styled-components";
import img from "./Front.json"
import editar from "../../../../public/iconos/editar.png"
import tacho from "../../../../public/iconos/tacho.png"


const ColumnaVideos = styled.section`
    display:flex;
    padding:0 20px;
    height:450px;
    margin-bottom:20px;
`
const Contenedor = styled.div`
    display: flex;
    height:300px;
    width:100%;
    justify-content: space-between;
    position:relative;
    `
const TodoImg = styled.div`
    position:relative;
    width: 500px;
`
const Imagen = styled.img`
    widows: 100%;
    grid-column:1/6;
    /* grid-row:1/2; */
    position:relative;
    
    &:nth-child(1n +4){
        display:none;
    }
`

const TachoImagen = styled.img`
    width:30px;
    height:30px;
    /* position:absolute; */
    /* z-index:10; */
`
const EditarImagen = styled.img`
    width:30px;
    height:30px;
    /* position:absolute; */
    /* z-index:10; */
    
`
const OtroDiv = styled.div`
    background-color:#03122F;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:70px;
    padding:20px;
    border-radius: 0 0 30px 30px;
    border: 8px solid #6BD1FF;
    font-size:30px;
    color:white;
    height:120px;
`
const OtroDiv2 = styled.div`
    display:flex;
    gap:10px;
    cursor:pointer;
`

const Front = () => {
    return (
        <ColumnaVideos>
            <Contenedor>
                {img.map(imagenes =>
                    <TodoImg>
                        <Imagen
                            key={imagenes.id}
                            src={imagenes.path}
                            alt={imagenes.alt}
                        />
                        <OtroDiv>
                            <OtroDiv2>
                                <TachoImagen src={tacho} />
                                BORRAR
                            </OtroDiv2>
                            <OtroDiv2>
                                <EditarImagen src={editar} />
                                EDITAR
                            </OtroDiv2>
                        </OtroDiv>
                    </TodoImg>)}
            </Contenedor>
        </ColumnaVideos>
    )
}
export default Front
