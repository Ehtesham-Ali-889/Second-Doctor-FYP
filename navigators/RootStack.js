import React,{useState,useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './../components/styles';

const { primary, tertiary } = Colors;

import Login from '../screens/Login';
import SignUp from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Verification from '../screens/LinkVerification';

import HomeScreen from '../pages/HomeScreen'
import SearchScreen from '../pages/SearchScreen';
import SingleCategory from '../pages/SingleCategory';
import Add from '../Appointments/Add'

import UpcomingAppointmentScreen from '../pages/UpcomingAppointmentScreen';

import EditAppointment from '../Appointments/EditAppointment';

import PastAppointmentScreen from '../pages/PastAppointmenttScreen';

import AddReview from '../Review/AddReview';

import ViewProfile from '../Profile Information/ViewProfile';

import MyVideoCall from '../components/MyVideoCall';

import MyChatApp from '../components/MyChatApp';

import AccountPaymentScreen from '../pages/AccountPaymentScreen';

import AddAccount from '../Account/AddAccount';

import EditAccount from '../Account/EditAccount';

import LinaerStepper from '../DoctorInfo/LinearStepper';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  // const [user, setUser] = useState('');

  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    // <UserContext.Provider value={value}>
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="HomeScreen"
      >

        <Stack.Screen name="AddDoctorInfo" component={LinaerStepper} />

        <Stack.Screen name="EditAccount" component={EditAccount} />

        <Stack.Screen name="AddAccount" component={AddAccount} />
        
        <Stack.Screen name="AccountPaymentScreen" component={AccountPaymentScreen} />
      
        <Stack.Screen name="MyChatApp" component={MyChatApp} />

        <Stack.Screen name="MyVideoCall" component={MyVideoCall} />

        <Stack.Screen name="ViewProfile" component={ViewProfile} />

        <Stack.Screen name="AddReview" component={AddReview} />

        <Stack.Screen name="PastAppointmentScreen" component={PastAppointmentScreen} />

        <Stack.Screen name="EditAppointment" component={EditAppointment} />

        <Stack.Screen name="UpcomingAppointmentScreen" component={UpcomingAppointmentScreen} />

        <Stack.Screen name="Add" component={Add} />

        <Stack.Screen name="SingleCategory" component={SingleCategory} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
    // </UserContext.Provider>
    
  );
};
export default RootStack;
