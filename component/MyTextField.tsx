import {FC} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';

const fontSize = 16;
const paddingSize = 16;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: paddingSize,
    paddingRight: paddingSize,
  },
  text: {
    fontSize: fontSize,
    marginBottom: 8,
  },
  textInputContainer: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputText: {
    fontSize: fontSize,
    textAlign: 'right',
    width: 32,
  },
  textInput: {
    fontSize: fontSize,
    paddingLeft: paddingSize,
    paddingRight: paddingSize,
  },
});

const MyTextField: FC<{
  title: string;
  value: string;
  setValue: (text: string) => void;
  marginTop?: number;
}> = ({title, value, setValue, marginTop}) => {
  const {width} = Dimensions.get('window');
  return (
    <View
      style={{
        ...styles.container,
        marginTop: marginTop !== null ? marginTop : 0,
      }}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.textInputContainer}>
        <Text style={styles.textInputText}>$</Text>
        <TextInput
          value={value}
          onChangeText={setValue}
          style={{
            ...styles.textInput,
            width:
              width -
              styles.textInputText.width -
              styles.container.paddingLeft -
              styles.container.paddingRight,
          }}
        />
      </View>
    </View>
  );
};

export default MyTextField;
