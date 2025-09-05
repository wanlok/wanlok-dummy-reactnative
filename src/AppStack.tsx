import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth0} from 'react-native-auth0';
import {LoginPage} from './Pages/LoginPage';
import Starter from './Pages/Starter';
import Landing from './Pages/LandingPage';
import Payment from './Pages/Payment';
import Rive from './Pages/Rive';
import Rive2 from './Pages/Rive2';
import LoanList from './Pages/LoanList';

export type RootStackParamList = {
  Login: undefined;
};

export type AuthenticatedRootStackParamList = {
  Landing: undefined;
  Starter: {data: string};
  Payment: undefined;
  Rive: undefined;
  Rive2: undefined;
  LoanList: undefined;
};

const Stack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  const Stack = createNativeStackNavigator<AuthenticatedRootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Starter" component={Starter} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Rive" component={Rive} />
      <Stack.Screen name="Rive2" component={Rive2} />
      <Stack.Screen name="LoanList" component={LoanList} />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  const {user} = useAuth0();
  return user ? AuthenticatedStack() : Stack();
};
