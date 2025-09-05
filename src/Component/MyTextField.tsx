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
  title: {
    fontSize: fontSize,
    marginBottom: 8,
  },
  textInputContainer: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorTextInputContainer: {
    borderColor: 'red',
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
  errorText: {
    color: 'red',
    fontSize: fontSize,
    marginTop: 8,
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
      <Text style={styles.title}>{title}</Text>
      <View style={styles.errorTextInputContainer}>
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
      <Text style={styles.errorText}>Error</Text>
    </View>
  );
};

export default MyTextField;
