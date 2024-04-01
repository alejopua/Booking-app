import { useQuery } from '@tanstack/react-query'

const fetchHotels = async () => {
  fetch('http://localhost:3000/hotels')
    .then( res => {
      if ( !res.ok ) {
        throw new Error('Network response was not ok')
      }
      return res.json()
    })
}

const hotelList = () => {
  const { data: hotels, isLoading, error } = useQuery({ queryKey: ['hotels'], queryFn: fetchHotels })

  if ( isLoading ) {
    return <div>Loading...</div>
  }
  if ( error ) {
    return <div>Error: {error.message}</div>
  }
}