import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Switch } from 'wouter'
import { HotelList } from './components/HotelList'
import { HotelDetails } from './components/HotelDetails'

const client = new QueryClient()

export const App = () => {

  return (
    <QueryClientProvider client={client}>
      <Switch>
        <Route path='/' component={HotelList}/>
        <Route path='/hotel/:id' component={HotelDetails}/>
      </Switch>
    </QueryClientProvider>
  )
}
