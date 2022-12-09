import React from 'react'
import { View,Text,Image } from 'react-native'
import Heart from '../assets/heart.png'
import Lungs from '../assets/lungs.png'
import Brain from '../assets/brain.png'
// import Child from '../assets/child.png'
import Liver from '../assets/liver.png'
import Kidney from '../assets/kidney.png'
import Button from '@mui/material/Button';
import { useNavigation } from '@react-navigation/native';
import MyMenu from '../assets/menu.png'

import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import SmallMenu from './SmallMenu'
const Categories = () => {
    const navigation = useNavigation();
    const myprofile=(popupState)=>{
        navigation.navigate("ViewProfile");
        setAnchorEl(null);
    }
    const mycomplete=(popupState)=>{
        navigation.navigate("PastAppointmentScreen");
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
    <View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
            <Text style={{textAlign:'Left',fontSize:'50px',fontWeight:'bold',marginBottom:'10px'}}>Categories</Text>
            {/* <Tooltip title="Menu">
                <Fab style={{backgroundColor:'WHITE'}} aria-label="add">
                <Image source={MyMenu} style={{width:'30px',height:'30px'}} />
                </Fab>
            </Tooltip> */}
            {/* <SmallMenu /> */}



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
        <MenuItem onClick={myprofile}>Profile</MenuItem>
        <MenuItem onClick={mycomplete}>Past Appointments</MenuItem>
        <MenuItem onClick={mylogout}>Logout</MenuItem>
      </Menu>
            {/* <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                    
                    <Tooltip title="Menu" {...bindTrigger(popupState)}>
                        <Fab style={{backgroundColor:'WHITE',marginRight:'50px'}} aria-label="add">
                            <Image source={MyMenu} style={{width:'30px',height:'30px'}} />
                        </Fab>
                    </Tooltip>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Profile</MenuItem>
                        <MenuItem onClick={popupState.close} >Completed Appointments</MenuItem>
                        <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                    </React.Fragment>
                )}
            </PopupState> */}
        </View>
        

        <View style={{display:'flex',flexDirection:'row',gap:70}}>
            <View style={{width:'210px',height:'210px',borderRadius:'50%',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <Button variant="text" onClick={() => {
                    navigation.navigate('SingleCategory',{
                        value:'Heart'
                    });
                }}
                style={{flexDirection:'column'}} 
                >
                    <Image source={Heart} style={{width:'130px',height:'130px'}} />
                    <Text style={{fontSize:'24px'}}>Heart</Text>
                </Button>
                {/* <Image source={Heart} style={{width:'130px',height:'130px'}} />
                <Text style={{fontSize:'24px'}}>Heart</Text> */}
            </View>

            <View style={{width:'210px',height:'210px',borderRadius:'50%',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <Button variant="text" onClick={() => {
                        navigation.navigate('SingleCategory',{
                            value:'Lungs'
                        });
                    }}
                    style={{flexDirection:'column'}} 
                    >
                    <Image source={Lungs} style={{width:'130px',height:'130px'}} />
                    <Text style={{fontSize:'24px'}}>Lungs</Text>
                </Button>
                
            </View>

            <View style={{width:'210px',height:'210px',borderRadius:'50%',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <Button variant="text" onClick={() => {
                            navigation.navigate('SingleCategory',{
                                value:'Mind'
                            });
                        }}
                        style={{flexDirection:'column'}} 
                        >
                    <Image source={Brain} style={{width:'130px',height:'130px'}} />
                    <Text style={{fontSize:'24px'}}>Mind</Text>
                </Button>
                
            </View>

            <View style={{width:'210px',height:'210px',borderRadius:'50%',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <Button variant="text" onClick={() => {
                                navigation.navigate('SingleCategory',{
                                    value:'Kidney'
                                });
                            }}
                            style={{flexDirection:'column'}} 
                            >
                     <Image source={Kidney} style={{width:'130px',height:'130px'}} />
                     <Text style={{fontSize:'24px'}}>Kidney</Text>
                </Button>
                
               
            </View>

            <View style={{width:'210px',height:'210px',borderRadius:'50%',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <Button variant="text" onClick={() => {
                                    navigation.navigate('SingleCategory',{
                                        value:'Liver'
                                    });
                                }}
                                style={{flexDirection:'column'}} 
                                >
                     <Image source={Liver} style={{width:'130px',height:'130px'}} />
                     <Text style={{fontSize:'24px'}}>Liver</Text>
                </Button>
                
            </View>
        </View>
        
    </View>
  )
}

export default Categories