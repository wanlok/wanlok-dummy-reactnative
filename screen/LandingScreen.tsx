import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import {Button, View} from 'react-native';
import {RootStackParamList} from '../App';
import MyTextField from '../component/MyTextField';
import MyButton from '../component/MyButton';

const LandingScreen: FC<{
  navigation: NativeStackNavigationProp<RootStackParamList, 'LandingScreen'>;
}> = ({navigation}) => {
  const [estimatedPropertyValue, setEstimatedPropertyValue] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  return (
    <View style={{flex: 1}}>
      <MyTextField
        title="Estimated property value"
        value={estimatedPropertyValue}
        setValue={setEstimatedPropertyValue}
        marginTop={16}
      />
      <MyTextField
        title="Borrow amount"
        value={borrowAmount}
        setValue={setBorrowAmount}
        marginTop={16}
      />
      <MyButton
        title="CALCULATE"
        onPress={() =>
          navigation.navigate('SecondScreen', {
            data: estimatedPropertyValue + ' ::: ' + borrowAmount,
          })
        }
      />
    </View>
  );
};

export default LandingScreen;
