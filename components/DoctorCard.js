import React from 'react'
import { View,Text, Image } from 'react-native'
import Doctor from '../assets/doctor.png'
import Location from '../assets/placeholder.png'
import Money from '../assets/money.png'

import { useNavigation } from '@react-navigation/native';

import Button from '@mui/material/Button';

const DoctorCard = ({user}) => {
    const navigation = useNavigation();
  return (
    <View style={{width:'600px'}}>
        {/* <Text style={{fontSize:'40px',fontWeight:'bold',margin:'10px',marginLeft:'0px'}}>All Doctors</Text> */}
        <View style={{backgroundColor:'white',flexDirection:'row',padding:'25px'}}>
            <View style={{marginLeft:'-20px'}}>
                <Image source={Doctor} style={{width:'150px',height:'150px'}} />
            </View>
            
            <View style={{flexDirection:'column',justifyContent:'center',marginLeft:'10px'}}>
                <Text style={{fontSize:'32px',fontWeight:'500'}}>{user.name}</Text>
                <Text style={{fontSize:'18px',backgroundColor:'red',color:'white',width:'80px',borderRadius:'10px',padding:'2px',paddingLeft:'15px'}}>{user.speciality}</Text>
            </View>
            {/* <View  style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:'40px'}}>
                
                <Button variant="outlined" onClick={() => navigation.navigate('Add',{
                    docId:user._id,
                    docName:user.name,
                    price:user.price
                })}>Book Appointment</Button>
                
            </View> */}
        </View>
        
    </View>
  )
}

export default DoctorCard