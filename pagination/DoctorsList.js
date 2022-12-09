import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import DoctorCard from '../components/DoctorCard';


import Grid from '@mui/material/Grid';


const DoctorsList = ({ users,updateUsers }) => {
  return (
    <Grid container spacing={2}>
        
        {users.map((user,index) => (
          <Grid item xs={6} key={index}>
          <DoctorCard user={user}  />
          </Grid>
        ))}
        
      </Grid>
  )
}

export default DoctorsList