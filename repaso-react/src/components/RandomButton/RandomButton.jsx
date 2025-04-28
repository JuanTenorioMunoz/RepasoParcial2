import { useNavigate } from "react-router-dom"

const RandomButton = (giveMeTheListPls) => {    

    const navigate = useNavigate();

    const randomize = (giveMeTheListPls) => {
        const randomIndex = Math.floor(Math.random()*giveMeTheListPls.lenght)
        const randomSelected = giveMeTheListPls[randomIndex];
        navigate(`/details/${randomSelected}`)
        
    }
    
    return(
        <>
        <Button onClick={() => randomize()}>Presioname wacho</Button>
        </>
    )
}

export default RandomButton;