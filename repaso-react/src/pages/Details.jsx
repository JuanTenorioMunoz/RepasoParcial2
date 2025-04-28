import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';
import { fetchById } from '../services/fetch';

const Details = () => {
  const { id } = useParams();
  const [body, setBody] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchById(id)
      .then(data => setBody(data))
      .catch(err => setError(err.message));
  }, [id]);

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  if (!body) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Card sx={{ margin: 4, padding: 2 }}>
      <CardContent>
        <Typography variant="h4">{body.englishName}</Typography>
        <Typography>Mass: {body.mass?.massValue} x10^{body.mass?.massExponent} kg</Typography>
        <Typography>Density: {body.density} g/cm³</Typography>
        <Typography>Gravity: {body.gravity} m/s²</Typography>
        <Typography>Mean Radius: {body.meanRadius} km</Typography>
        <Typography>Discovered By: {body.discoveredBy || 'Unknown'}</Typography>
        <Typography>Discovery Date: {body.discoveryDate || 'Unknown'}</Typography>
      </CardContent>
    </Card>
  );
};

export default Details;
