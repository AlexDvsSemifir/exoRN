// React imports :

import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components import :
import FormUser from './Components/FormUser';
import UserList from './Components/UserList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="FormUser" component={FormUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
