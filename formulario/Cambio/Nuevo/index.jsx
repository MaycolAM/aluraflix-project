import styled from "styled-components"


const FormularioForm = styled.form`
color:white;
`

const Nuevo = () => {
    return (
        <FormularioForm>
            <h1>Nuevo Video</h1>
            <h2>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO (no hace nada, solo hice que se pueda volver presionando denuevo los botones)</h2>

            <input type="text" placeholder="Titulo" />
            <input type="text" placeholder="Categoria" />
            <input type="url" placeholder="Imagen" />
            <input type="url" placeholder="Video" />
            <input type="text" placeholder="Descripcion" />
            <button>Guardar</button>
            <button>Limpiar</button>

        </FormularioForm>
    )
}
export default Nuevo