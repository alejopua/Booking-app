import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Switch } from 'wouter'
import { Toaster } from 'react-hot-toast'
import { HotelList } from './components/HotelList'
import { HotelDetails } from './components/HotelDetails'

const client = new QueryClient()

export const App = () => {

  return (
    <>
    <Toaster
      position="top-left"
      reverseOrder={false}
    />
      <QueryClientProvider client={client}>
        <Switch>
          <Route path='/' component={HotelList}/>
          <Route path='/hotel/:id' component={HotelDetails}/>
        </Switch>
      </QueryClientProvider>
    </>
  )
}
