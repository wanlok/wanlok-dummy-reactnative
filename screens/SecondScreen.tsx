import {RouteProp} from '@react-navigation/native';
import {FC} from 'react';
import {RootStackParamList} from '../App';
import {Text, View} from 'react-native';

const SecondScreen: FC<{
  route: RouteProp<RootStackParamList, 'SecondScreen'>;
}> = ({route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Two</Text>
      <Text>{route.params.data}</Text>
    </View>
  );
};

export default SecondScreen;
