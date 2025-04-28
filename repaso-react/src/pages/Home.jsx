import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import fetchAll from "../services/fetch";

const Home = () => {

    const [bodies, setBodies] = useState([])
    const [error, setError] = useState(null)

     useEffect(() => {
        fetchAll()
        .then(data => setBodies(data))
        .catch(err => setError(err.message))
     }, [])

    return(
        <>
            {bodies.map(info => {return(
                <Card>
                    <CardContent>
                        <Typography>
                            {info.englishName}
                        </Typography>
                    </CardContent>
                </Card>
            )})}
        </>
    )
}

export default Home;