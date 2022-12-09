import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'



import Grid from '@mui/material/Grid';
import PastAppointmentCard from '../components/PastAppointmentCard';


const PastAppointmentList = ({ users,updateUsers }) => {
  return (
    <Grid container spacing={2}>
        
        {users.map((user,index) => (
          <Grid item xs={6} key={index}>
          <PastAppointmentCard user={user}  updateUsers={updateUsers} />
          </Grid>
        ))}
        
      </Grid>
  )
}

export default PastAppointmentList