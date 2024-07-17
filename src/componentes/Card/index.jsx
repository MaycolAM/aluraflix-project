
const ColumnaVideos = styled.section`
    display:flex;
    padding:0 20px;
    height:600px;

`
const Contenedor = styled.div`
    display: flex;
    height:300px;
    width:100%;
    justify-content: space-around;
`
const Imagen = styled.img`

    /* grid-row:2/3; */
    width: 500px;
    &:nth-child(1n +4){
        display:none;
    }
`



const Fs = () => {
    return (
        <ColumnaVideos>
            <Contenedor>
                {videos.map(video => <Imagen key={video.id} src={video.path} alt={video.alt} />)}
            </Contenedor>
        </ColumnaVideos>
    )
}
export default Fs