import React,{useState,useEffect} from 'react'
import { View,Text, Image } from 'react-native'
import Doctor from '../assets/doctor.png'
import Edit from '../assets/pencil.png'
import Delete from '../assets/delete.png'
import Location from '../assets/placeholder.png'
import Money from '../assets/money.png'

import Calendar from '../assets/calendar.png'
import Clock from '../assets/clock.png'

import { useNavigation } from '@react-navigation/native';

import Button from '@mui/material/Button';


import axios from 'axios'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const UpcomingAppointmentCard = ({user,updateUsers}) => {
    const navigation = useNavigation();
    const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteUserData = async (id) => {
    axios
      .delete('http://localhost:3010/appointment/removeappointment/' + id)
      .then((res) => {
        console.log(res.data);
        console.log(id);
      })
      .catch((err) => console.log(err));
    // await deletePatient(id);
    handleClose();
    // getAllUsers();
    const response = await axios.get(
      "http://localhost:3010/appointment/futureappointments"
    );
    updateUsers(response.data);
    alert("Deleted")
    window.location.reload(); 
    // navigation.navigate('UpcomingAppointmentScreen')
    // navigation.navigate('New')
  }



  return (
    <View style={{width:'600px'}}>
        {/* <Text style={{fontSize:'40px',fontWeight:'bold',margin:'10px',marginLeft:'0px'}}>All Doctors</Text> */}
        <View style={{backgroundColor:'white',flexDirection:'row',padding:'25px'}}>
            <View style={{marginLeft:'-20px'}}>
                <Image source={Doctor} style={{width:'150px',height:'150px'}} />
            </View>
            
            <View style={{flexDirection:'column',justifyContent:'center',marginLeft:'10px'}}>
                <Text style={{fontSize:'32px',fontWeight:'500'}}>{user.patientname}</Text>
                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',padding:'10px',borderRadius:'20px'}}>
                    <Text style={{color:'white'}}>{user.description}</Text>
                </View>
                <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap:'10px',marginTop:'10px'}}>
                    <Image source={Calendar} style={{width:'30px',height:'30px'}} />
                    <Text>{user.date}</Text>
                    <Image source={Clock} style={{width:'30px',height:'30px'}} />
                    <Text>{user.time}</Text>

            
                </View>
            </View>
            
            <View  style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginLeft:'40px'}}>
                
                    
                <View style={{flexDirection:'row'}}>
                    <Button onClick={() => navigation.navigate('EditAppointment',{
                        id:user._id,
                        name:user.namedoctor,
                        description:user.description,
                        date:user.date,
                        time:user.time
                    })} >
                        <Image source={Edit} style={{width:'30px',height:'30px'}} />
                    </Button>

                    <Button onClick={handleClickOpen} >
                        <Image source={Delete} style={{width:'30px',height:'30px'}} />
                    </Button>
                    {/* <Button mode='outlined' onClick={handleClickOpen}>Cancel Appointment</Button> */}

                    <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>{"Delete Appointment"}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Do you confirm to delete Appointment record?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={() => deleteUserData(user._id)}>Confirm</Button>
                            </DialogActions>
                    </Dialog>
                </View>
                
                
            </View>
        </View>
        
    </View>
  )
}

export default UpcomingAppointmentCard