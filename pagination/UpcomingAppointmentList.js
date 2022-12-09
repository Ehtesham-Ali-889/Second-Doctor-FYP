import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'



import Grid from '@mui/material/Grid';
import UpcomingAppointmentCard from '../components/UpcomingAppointmentCard';


const AppointmentList = ({ users,updateUsers }) => {
  return (
    <Grid container spacing={2}>
        
        {users.map((user,index) => (
          <Grid item xs={6} key={index}>
          <UpcomingAppointmentCard user={user}  updateUsers={updateUsers} />
          </Grid>
        ))}
        
      </Grid>
  )
}

export default AppointmentList