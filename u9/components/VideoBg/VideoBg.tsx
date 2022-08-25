import * as Styled from "./VideoBg.styles";

const VideoBg = () => {
    return (
        <Styled.Video autoPlay muted loop> 
            <source src={"./bg.mp4"} type="video/mp4" />
        </Styled.Video>
    )
}

export default VideoBg;