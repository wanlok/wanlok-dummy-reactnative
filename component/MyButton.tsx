import {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: 128,
    borderRadius: 0,
    backgroundColor: 'purple',
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  buttonRipple: {
    color: 'gray',
  },
  text: {
    color: 'white',
    fontSize: 16,
    padding: 16,
  },
});

const MyButton: FC<{
  title: string;
  onPress: () => void;
}> = ({title, onPress}) => {
  return (
    <Pressable
      android_ripple={styles.buttonRipple}
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default MyButton;
