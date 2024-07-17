import styled from "styled-components"


const CambioColorDos = styled.a`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(87, 85, 85, 0.3);
    border-radius: 10px;
    cursor: pointer;
    padding: 12px;
    width:200px;
    height:60px;
    box-sizing: border-box;
    border: 2px solid white;
    text-align:center;
    align-content:center;
    &:hover {
      border-color: blue;
      color:royalblue;
    }
`
const HeaderCambioDos = ({ children = false, }) => {
    return <CambioColorDos href="/index" children={children} />
}


export default HeaderCambioDos