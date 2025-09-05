import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Starter from './Screen/Starter';
import Landing from './Screen/Landing';
import Payment from './Screen/Payment';
import Rive from './Screen/Rive';
import Rive2 from './Screen/Rive2';
import LoanList from './Screen/LoanList';

export type RootStackParamList = {
  Landing: undefined;
  Starter: {data: string};
  Payment: undefined;
  Rive: undefined;
  Rive2: undefined;
  LoanList: undefined;
};

export const screens: {
  name: string;
  screen: any;
}[] = [
  {
    name: 'Starter',
    screen: 'Starter',
  },
  {
    name: 'Payment',
    screen: 'Payment',
  },
  {
    name: 'Rive',
    screen: 'Rive',
  },
  {
    name: 'Rive 2',
    screen: 'Rive2',
  },
  {
    name: 'Loan List',
    screen: 'LoanList',
  },
];

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Starter" component={Starter} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Rive" component={Rive} />
        <Stack.Screen name="Rive2" component={Rive2} />
        <Stack.Screen name="LoanList" component={LoanList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
