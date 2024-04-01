import  { useForm } from "react-hook-form";
import { Typography, Input, Button } from '@mui/material'
import useStore from "../store";
import toast from 'react-hot-toast' 

export const ReservationForm = ({hotel}) => {
  const { register, handleSubmit, formState: {errors} } = useForm()
  const addReservation = useStore((state) => state.addReservation)

  const onSubmit = (data) => {
    addReservation(hotel, data)
    toast.success('Reservation added')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="date" { ...register("startDate", { required: true })} />
      { errors.startDate && (<Typography color='red'>Start date is required</Typography>) }
      <br />

      <Input type="date" { ...register("endDate", { required: true })} />
      { errors.endDate && (<Typography color='red'>End date is required</Typography>) }
      <br />

      <Button variant="contained" type="submit">Make Reservation</Button>
    </form>
  )
}

export default ReservationForm;