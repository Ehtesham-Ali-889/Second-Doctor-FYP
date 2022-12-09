import React,{useState,useEffect} from 'react'
import { View,Text, Image } from 'react-native'
import Doctor from '../assets/doctor.png'
import Comment from '../assets/comment.png'
import VideoCall from '../assets/video-call.png'
import Calendar from '../assets/calendar.png'
import Clock from '../assets/clock.png'
import axios from 'axios';
import Button from '@mui/material/Button';

import { useNavigation } from '@react-navigation/native';
const SingleUpcomingAppointment = () => {
    const navigation = useNavigation();
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios
          .get('http://localhost:3010/appointment/singleappointments')
          .then((res) => {
            console.log(res.data);
            setData(res.data);
            const result = res.data;
            const { name, date, time, description } = result;
            // setNameDoctor(name);
            // setDate(date);
            // setTime(time);
            // setDescription(description);
          })
          .catch((err) => console.log(err));
      },[])
      const arr=data.map((data,index)=>{
        return (
            <View style={{backgroundColor:'white',flexDirection:'row',padding:'42px'}}>
                <View style={{marginLeft:'-20px'}}>
                    <Image source={Doctor} style={{width:'150px',height:'150px'}} />
                </View>
                
                <View style={{flexDirection:'column',justifyContent:'center',marginLeft:'10px'}}>
                    <Text style={{fontSize:'32px',fontWeight:'500'}}>{data.patientname}</Text>
                    
                    {/* <Text style={{fontSize:'18px',backgroundColor:'red',color:'white',width:'160px',borderRadius:'20px',padding:'2px',paddingLeft:'15px'}}>{data.description}</Text> */}
                    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',padding:'10px',borderRadius:'20px'}}>
                    <Text style={{color:'white'}}>{data.description}</Text>
                    </View>
                    
                </View>
                <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:'10px',marginLeft:'40px'}}>
                    <Image source={Calendar} style={{width:'30px',height:'30px'}} />
                    <Text>{data.date}</Text>
                    <Image source={Clock} style={{width:'30px',height:'30px'}} />
                    <Text>{data.time}</Text>

                    {/* <Image source={Comment} style={{width:'70px',height:'70px'}} />
                    <Image source={VideoCall} style={{width:'70px',height:'70px'}} /> */}
                </View>
            </View>
        );
      })
  return (
    <View style={{width:'600px'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:'20px'}}>
            <Text style={{fontSize:'22px',fontWeight:'bold',margin:'10px',marginLeft:'0px'}}>Upcoming Appointment</Text>
            <Button variant="text" onClick={() => navigation.navigate('UpcomingAppointmentScreen')} style={{fontSize:'12px'}}>View Upcoming Appointment
                    </Button>
        </View>
        
        {/* <View style={{backgroundColor:'white',flexDirection:'row',padding:'42px'}}>
            <View style={{marginLeft:'-20px'}}>
                <Image source={Doctor} style={{width:'150px',height:'150px'}} />
            </View>
            
            <View style={{flexDirection:'column',justifyContent:'center',marginLeft:'10px'}}>
                <Text style={{fontSize:'32px',fontWeight:'500'}}>Doctor Asad</Text>
                <Text style={{fontSize:'18px',backgroundColor:'red',color:'white',width:'80px',borderRadius:'10px',padding:'2px',paddingLeft:'15px'}}>Heart</Text>
            </View>
            <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:'30px',marginLeft:'40px'}}>
                <Image source={Comment} style={{width:'70px',height:'70px'}} />
                <Image source={VideoCall} style={{width:'70px',height:'70px'}} />
            </View>
        </View> */}
        {arr}
        
    </View>
  )
}

export default SingleUpcomingAppointment