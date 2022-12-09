import React, { useEffect, useState } from 'react'
import { View,Text,Image } from 'react-native'
import Button from '@mui/material/Button';
import Doctor from '../assets/doctor.png'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const ViewSomeDoctors = () => {
    const navigation = useNavigation();

    const[data,setData]=useState([]);
    useEffect(()=>{
        axios
          .get('http://localhost:3010/patient/threepatient')
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
            // <View style={{backgroundColor:'white',padding:'20px',flexDirection:'row',gap:'20px'}}>
                <View style={{justifyContent:'center',alignItems:'center',width:'200px',border:'1px solid #eee',padding:'1px'}}>
                    <Image source={Doctor} style={{width:'143px',height:'143px'}} />
                    <Text style={{fontSize:'20px',margin:'5px'}}>{data.name}</Text>
                    <Text style={{marginBottom:'10px',color:'grey'}}>{data.speciality}</Text>
                    {/* <Button variant="outlined" style={{marginBottom:'15px'}}
                    onClick={() => navigation.navigate('Add',{
                    docId:data._id,
                    docName:data.name,
                    price:data.price
                    })}

                    
                    >Book Appointment</Button> */}
                </View>
                
        );
      })

  return (
    <View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:'20px'}}>
            <Text style={{textAlign:'Left',fontSize:'22px',fontWeight:'bold',margin:'10px'}}>View Patients</Text>
            <Button variant="text" style={{width:'200px',height:'50px'}}
            onClick={() => navigation.navigate('SearchScreen')}
             >View All Patients</Button>
        </View>
        {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{textAlign:'Left',fontSize:'40px',fontWeight:'bold',margin:'10px'}}>View Doctors</Text>
            <Button variant="outlined" style={{width:'200px',height:'50px'}}
            onClick={() => navigation.navigate('SearchScreen')}
             >View All Doctors</Button>
        </View> */}
        
        {/* <View style={{backgroundColor:'white',padding:'20px',flexDirection:'row',gap:'20px'}}>
            <View style={{justifyContent:'center',alignItems:'center',width:'200px',border:'1px solid #eee',padding:'1px'}}>
                <Image source={Doctor} style={{width:'75px',height:'75px'}} />
                <Text style={{fontSize:'20px',margin:'5px'}}>Doctor Faizan</Text>
                <Text style={{marginBottom:'10px',color:'grey'}}>ENT</Text>
                <Button variant="outlined" style={{width:'150px',marginBottom:'15px'}}>View Details</Button>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',width:'200px',border:'1px solid #eee',padding:'1px'}}>
                <Image source={Doctor} style={{width:'75px',height:'75px'}} />
                <Text style={{fontSize:'20px',margin:'5px'}}>Doctor Faizan</Text>
                <Text style={{marginBottom:'10px',color:'grey'}}>ENT</Text>
                <Button variant="outlined" style={{width:'150px',marginBottom:'15px'}}>View Details</Button>
            </View>

            <View style={{justifyContent:'center',alignItems:'center',width:'200px',border:'1px solid #eee',padding:'1px'}}>
                <Image source={Doctor} style={{width:'75px',height:'75px'}} />
                <Text style={{fontSize:'20px',margin:'5px'}}>Doctor Faizan</Text>
                <Text style={{marginBottom:'10px',color:'grey'}}>ENT</Text>
                <Button variant="outlined" style={{width:'150px',marginBottom:'15px'}}>View Details</Button>
            </View>
        </View> */}
        <View style={{backgroundColor:'white',padding:'20px',flexDirection:'row',gap:'20px'}}>
            {arr}
        </View>
        
    </View>
  )
}

export default ViewSomeDoctors