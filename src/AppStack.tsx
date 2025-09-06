import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuth0} from 'react-native-auth0';
import {LoginPage} from './Pages/LoginPage';
import {StarterPage} from './Pages/StarterPage';
import {LandingPage} from './Pages/LandingPage';
import {PaymentPage} from './Pages/PaymentPage';
import {RivePage} from './Pages/RivePage';
import {Rive2Page} from './Pages/Rive2Page';
import {LoanList} from './Pages/LoanList';

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

const LoginStack = () => {
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
      <Stack.Screen name="Landing" component={LandingPage} />
      <Stack.Screen name="Starter" component={StarterPage} />
      <Stack.Screen name="Payment" component={PaymentPage} />
      <Stack.Screen name="Rive" component={RivePage} />
      <Stack.Screen name="Rive2" component={Rive2Page} />
      <Stack.Screen name="LoanList" component={LoanList} />
    </Stack.Navigator>
  );
};

export const AppStack = () => {
  const {user} = useAuth0();
  return (
    <NavigationContainer>
      {user ? <AuthenticatedStack /> : <LoginStack />}
    </NavigationContainer>
  );
};
