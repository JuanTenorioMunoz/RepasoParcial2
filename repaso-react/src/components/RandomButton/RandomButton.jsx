import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom"

const RandomButton = ({giveMeTheListPls}) => {    

    const navigate = useNavigate();

    const randomize = (giveMeTheListPls) => {
        const randomIndex = Math.floor(Math.random()*giveMeTheListPls.length)
        const randomSelected = giveMeTheListPls[randomIndex];
        console.log(randomSelected)
        navigate(`/details/${randomSelected}`)
        
    }
    
    return(
        <>
        <Button onClick={() => randomize(giveMeTheListPls)}>Presioname wacho</Button>
        </>
    )
}

export default RandomButton;