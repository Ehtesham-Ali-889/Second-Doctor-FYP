import React,{useState} from 'react'
import { View,Text } from 'react-native'
import TextField from '@mui/material/TextField';
import axios from 'axios';

import Button from '@mui/material/Button';

import Toast from 'react-native-toast-message';
const AddAccount = () => {
    const [accname,setAccname]=useState('');
    const [accnumber,setAccnumber]=useState('');

    const postAccount = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:3010/account/addAccount',
            data: {
                accname: accname,
                accnumber: accnumber,
            },
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
            .then(function (response) {
              console.log('response', JSON.stringify(response.data));
              
            })
            .catch(function (error) {
              console.log('error', error);
            });
        
            Toast.show({
            type: 'success',
            text1: 'Successfully Added Your Account Details'
          });
          setAccname('');
          setAccnumber('');
      }

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>
        <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:'24px',fontWeight:'bold',marginBottom:'30px',textAlign:'center'}}>AddAccount</Text>
            <View>
                <TextField value={accname} onChange={(e) => setAccname(e.target.value)} style={{marginTop:'30px'}} id="outlined-basic" label="Account Name" variant="outlined" />
                <TextField value={accnumber} onChange={(e) => setAccnumber(e.target.value)} style={{marginTop:'30px'}} id="outlined-basic" label="Account Number" variant="outlined" />
            </View>

            <Button style={{marginTop:'30px'}} variant="contained" onClick={() => postAccount()} >Add Account</Button>
            
            <Toast ref={(ref)=>{Toast.setRef(ref)}} style={{width:'500'}}  />
    
        </View>
        
    </div>
  )
}

export default AddAccount