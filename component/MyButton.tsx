import {FC} from 'react';
import {Button, View} from 'react-native';

const MyButton: FC<{
  onPress: () => void;
}> = ({onPress}) => {
  return (
    <View style={{padding: 16}}>
      <Button title="Calculate" onPress={onPress} />
    </View>
  );
};

export default MyButton;
