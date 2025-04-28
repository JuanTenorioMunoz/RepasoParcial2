import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAll } from "../services/fetch";

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
            {loading ? (<p>mamaguevo</p>):(bodies.map(info => {
                return(
                    <Card key={info.id} onClick={() => navigate(`/details/${info.id}`)}>
                    <CardContent>
                        <Typography>
                            {info.englishName}
                        </Typography>   
                    </CardContent>
                </Card>
            )}))}
            
        </>
    )
}

export default Home;