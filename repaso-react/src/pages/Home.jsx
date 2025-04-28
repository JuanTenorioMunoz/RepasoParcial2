import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAll } from "../services/fetch";
import RandomButton from "../components/RandomButton/RandomButton";

const Home = () => {

    const [bodies, setBodies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState([]);
    const navigate = useNavigate()

     useEffect(() => {
        setLoading(true);
        fetchAll()
        .then(data => {
            setBodies(data);
            setLoading(false);})
        .catch(err => setError(err.message))
     }, [])

    return(
        <>  
            {loading ? (<Typography>Mamaguevo</Typography>):
            (
            
            <><RandomButton giveMeListPls={bodies}></RandomButton>
            {  bodies.map(info => {return(
                <Card onClick={() => navigate(`/details/${info.id}`)}>
                    <CardContent>
                        <Typography>{info.name}</Typography>
                    </CardContent>
                </Card>
            )
            })}</>)}
        </>
    )
}

export default Home;