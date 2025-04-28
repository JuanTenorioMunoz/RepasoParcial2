import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RandomButton = ({giveMeListPls}) => {  
    
    const navigate = useNavigate();
    
    const randomize = (giveMeListPls) => {
        const randomIndex = Math.floor(Math.random() * giveMeListPls.length);
        const randomPlanet = giveMeListPls[randomIndex];
        console.log(randomPlanet)
        navigate(`/details/${randomPlanet.id}`)
    }

    return(
        <Button onClick={() => randomize(giveMeListPls)}>PRESIONAME WACHO</Button>
    )
}

export default RandomButton;