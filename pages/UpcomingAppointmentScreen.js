import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'

import Search from '../components/Search';
import UpcomingAppointmentList from '../pagination/UpcomingAppointmentList';
import Button from '@mui/material/Button';
import { useNavigation } from '@react-navigation/native';

import MyPagination from '../pagination/MyPagination';
const UpcomingAppointmentScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  const [searchApi, setSearchApi] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(()=>{
    const fetchData=()=>{
        fetch('http://localhost:3010/appointment/futureappointments')
        .then(response=>response.json())
        .then(json=>{
            console.log(json);
            setUsers(json);
            setSearchApi(json);
        })
    }
    fetchData()
},[])
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = users.slice(firstPostIndex, lastPostIndex);
    const handleFilter=(e)=>{
        if(e.target.value==''){
            setUsers(searchApi)
        }
        else{
            const filterData=searchApi.filter(item=>item.patientname.toLowerCase().includes(e.target.value.toLowerCase()));
            setUsers(filterData);
        }
        setQuery(e.target.value)
    }

    

  return (
    <View style={{ margin:'10px',marginLeft:'50px',marginRight:'50px' }}>

      

      <Search query={query} handleFilter={handleFilter} />

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:'40px',fontWeight:'bold',margin:'10px',marginLeft:'0px'}}>Upcoming Appointments</Text>

        <Button variant="text" onClick={() => navigation.navigate('PastAppointmentScreen')} style={{fontSize:'12px'}}>View Completed Appointment
                </Button>
      </View>
      
       
      
       
      <UpcomingAppointmentList users={currentPosts} updateUsers={setUsers} />

      {/* <Grid container spacing={2}>
        
        {users.map((user,index) => (
          <Grid item xs={6} key={index}>
          <DoctorCard user={user}  />
          </Grid>
        ))}
        
      </Grid> */}
      <View style={{marginTop:'20px'}}></View>

      <MyPagination
                totalPosts={users.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
      
      

      

    </View>
  )
}
const styles = StyleSheet.create({
  
    
    
});
export default UpcomingAppointmentScreen