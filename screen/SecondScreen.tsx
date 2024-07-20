import {RouteProp} from '@react-navigation/native';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../App';

const SecondScreen: FC<{
  route: RouteProp<RootStackParamList, 'SecondScreen'>;
}> = ({route}) => {
  var data = route.params != null && route.params.data == null ? route.params.data : "Hello";
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Two</Text>
      <Text>{data}</Text>
    </View>
  );
};

export default SecondScreen;
