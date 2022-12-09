import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Text } from 'react-native';
import { View } from 'react-native';


import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

import axios from 'axios';

import Toast from 'react-native-toast-message';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const AddReview = () => {
    const [subject,setSubject]=useState('');
    const [body,setBody]=useState('');
    const [quality,setQuality]=useState('');

    const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  console.log("Quality",quality)
  const postReview = () => {
    axios({
        method: 'POST',
        url: 'http://localhost:3010/review/addReview',
        data: {
          subject: subject,
          body: body,
          quality: quality
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
        text1: 'Successfully Added Your Review'
      });
      setSubject('');
      setBody('');
  }
 

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>
        <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:'24px',fontWeight:'bold',marginBottom:'30px',textAlign:'center'}}>Add Review</Text>
            <TextField value={subject} id="outlined-basic" label="Subject" variant="outlined" onChange={(e) => setSubject(e.target.value)} />
            <TextField multiline value={body}
            rows={4} style={{marginTop:'30px'}} id="outlined-basic" label="Body" variant="outlined" onChange={(e) => setBody(e.target.value)} />
           
            <View style={{marginTop:'30px',marginLeft:'20px'}}>
                <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
                >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    setQuality(labels[value]);
                    }}
                    onChangeActive={(event, newHover) => {
                    setHover(newHover);
                    setQuality(labels[value]);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
                </Box>
            </View>

            <Button style={{marginTop:'30px'}} variant="contained" onClick={() => postReview()} >Add Review</Button>
            
            <Toast ref={(ref)=>{Toast.setRef(ref)}} style={{width:'500'}}  />

        </View>
        
    </div>
  )
}

export default AddReview