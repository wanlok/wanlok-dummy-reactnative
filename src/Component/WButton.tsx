import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import {Colors} from '../Utils/Colors';

export const WButton = ({
  title,
  loading = false,
  onPress,
  style,
}: {
  title: string;
  loading?: boolean;
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
          flexDirection: 'row',
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
      {loading && <ActivityIndicator size="small" style={{marginLeft: 8}} />}
    </Pressable>
  );
};
