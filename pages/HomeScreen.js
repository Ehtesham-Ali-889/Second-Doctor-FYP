import React from 'react'
import { View,Text,Image } from 'react-native'
import Categories from '../components/Categories'
import SingleUpcomingAppointment from '../components/SingleUpcomingAppointment'
import ViewSomeDoctors from '../components/ViewSomeDoctors'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Video from '../assets/video.png'
import Tooltip from '@mui/material/Tooltip';
import Chat from '../assets/chat.png'

import MyMenu from '../assets/menu.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  const addprofile=(popupState)=>{
    navigation.navigate("AddDoctorInfo");
    setAnchorEl(null);
  }
  const myprofile=(popupState)=>{
    navigation.navigate("ViewProfile");
    setAnchorEl(null);
  }
const mycomplete=(popupState)=>{
    navigation.navigate("AccountPaymentScreen");
    setAnchorEl(null);
}

const mylogout=(popupState)=>{
    navigation.navigate("Login");
    setAnchorEl(null);
}

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
setAnchorEl(event.currentTarget);
};
const handleClose = () => {
setAnchorEl(null);
};
  return (
    <View style={{margin:'10px',marginLeft:'60px',marginTop:'30px'}}>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
            <Text style={{textAlign:'Left',fontSize:'50px',fontWeight:'bold',marginBottom:'10px'}}>Home</Text>
            



            <Tooltip title="Menu">
                <Fab style={{backgroundColor:'WHITE',marginRight:'50px'}} aria-label="add"  id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
                <Image source={MyMenu} style={{width:'30px',height:'30px'}} />
                </Fab>
            </Tooltip>
            
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            style={{marginTop:'55px'}}
          >
            <MenuItem onClick={addprofile}>Add Profile</MenuItem>
            <MenuItem onClick={myprofile}>Profile</MenuItem>
            <MenuItem onClick={mycomplete}>Payment Details</MenuItem>
            <MenuItem onClick={mylogout}>Logout</MenuItem>
          </Menu>
            
        </View>
      <View style={{flexDirection:'row',gap:'50px',marginTop:'30px'}}>
      <SingleUpcomingAppointment />
      <ViewSomeDoctors />
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{marginTop:'10px'}}>
          <Tooltip title="Chat">
            <Fab style={{backgroundColor:'black'}} aria-label="add" onClick={() => navigation.navigate('MyChatApp')}>
            <Image source={Chat} style={{width:'30px',height:'30px'}} />
            </Fab>
          </Tooltip>
          
        </View>
        <View style={{marginTop:'10px',marginRight:'50px'}}>
          <Tooltip title="Video Call">
            <Fab style={{backgroundColor:'black'}} aria-label="add" onClick={() => navigation.navigate('MyVideoCall')}>
            <Image source={Video} style={{width:'30px',height:'30px'}} />
            </Fab>
          </Tooltip>
          
        </View>
      </View>
      {/* <View style={{marginTop:'10px'}}>
        <Tooltip title="Video">
          <Fab style={{backgroundColor:'black'}} aria-label="add" onClick={() => navigation.navigate('MyVideoCall')}>
          <Image source={Video} style={{width:'30px',height:'30px'}} />
          </Fab>
        </Tooltip>
        
      </View> */}
      
    </View>
  )
}

export default HomeScreen