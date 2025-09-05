import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import Colors from '../Utils/Colors';

const WButton = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <Pressable
      android_ripple={{
        color: Colors.button.ripple,
      }}
      style={[
        {
          alignItems: 'center',
          backgroundColor: Colors.button.background,
          padding: 16,
        },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={{
          color: Colors.button.text,
          fontSize: 16,
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default WButton;
