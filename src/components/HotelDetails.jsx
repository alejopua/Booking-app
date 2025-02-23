import { useQuery } from '@tanstack/react-query'
import { useRoute } from 'wouter'
import { Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import ReservationForm from './ReservationForm'

const fetchHotel = async (id) => {
  const res = await fetch(`http://localhost:3001/hotels/${id}`)
    if ( !res.ok ) {
      throw new Error('Network response was not ok')
    }
    return res.json()
}

export const HotelDetails = () => {
  const [ match, params ] = useRoute("/hotel/:id")

  const { data: hotel, isLoading, error } = useQuery({ queryKey: ['hotel', params.is], queryFn: () => fetchHotel(params.id) })

  if ( isLoading ) {
    return <div>Loading...</div>
  }

  if ( error ) {
    return <div>Error: {error.message}</div>
  }

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#e8e8e1'}}>
      <CardMedia sx={{ height: 140 }} title={hotel.name} image={hotel.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{hotel.name}</Typography>
        <Typography variant="body2" color="text.secondary">{hotel.description}</Typography>
      </CardContent>
      <CardActions>
        <ReservationForm hotel={hotel} />
      </CardActions>
    </Card>
  )
}
