import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FC} from 'react';
import {RootStackParamList} from '../App';
import {Button, Text, View} from 'react-native';

const LandingScreen: FC<{
  navigation: NativeStackNavigationProp<RootStackParamList, 'LandingScreen'>;
}> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to ScreenTwo"
        onPress={() =>
          navigation.navigate('SecondScreen', {
            data: 'example-data 12345678910',
          })
        }
      />
    </View>
  );
};

export default LandingScreen;
