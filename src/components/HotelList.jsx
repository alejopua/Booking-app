import { useQuery } from '@tanstack/react-query'
import { Typography, Stack, Card, CardMedia, CardContent, CardActions, Button, Box } from '@mui/material'
import { Link } from 'wouter'

const fetchHotels = async () => {
  const res = await fetch('http://localhost:3001/hotels')
    if ( !res.ok ) {
      throw new Error('Network response was not ok')
    }
    return res.json()
}

export const HotelList = () => {
  const { data: hotels, isLoading, error } = useQuery({ queryKey: ['hotels'], queryFn: fetchHotels })

  if ( isLoading ) {
    return <div>Loading...</div>
  }
  if ( error ) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} flexWrap={'wrap'} alignItems={'center'}>
        <Typography variant="h4" component='h2'>Booking App</Typography>
        <Stack spacing={2}>
          {hotels.map( hotel => (
            <Link style={{ textDecoration: 'none' }} key={hotel.id} href={`/hotel/${hotel.id}`}>
              <Card sx={{ maxWidth: 345, backgroundColor: '#e8e8e1'}}>
                <CardMedia sx={{ height: 140 }} title={hotel.name} image={hotel.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">{hotel.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{hotel.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>
                    See Details
                  </Button>
                </CardActions>
              </Card>
            </Link>
          ))}
        </Stack>
      </Box>
    
    </>
  )
}
