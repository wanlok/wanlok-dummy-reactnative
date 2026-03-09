import {Dispatch, ReactNode, useEffect, useState} from 'react';
import {
  InputAccessoryView,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

const AText = ({
  setActive,
}: {
  setActive: Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <TextInput
      inputAccessoryViewID={'dummy'}
      keyboardType="number-pad"
      maxLength={1}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      style={{
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        aspectRatio: 1,
        textAlign: 'center',
        fontSize: 20,
        width: 48,
      }}
    />
  );
};

const ControlledInputAccessoryView = ({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) => {
  return active ? (
    <InputAccessoryView>{children}</InputAccessoryView>
  ) : (
    children
  );
};

export const KeyboardTest = () => {
  const [active, setActive] = useState(false);
  //   const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  //   useEffect(() => {
  //     const showSub = Keyboard.addListener('keyboardDidShow', () =>
  //       setKeyboardVisible(true),
  //     );
  //     const hideSub = Keyboard.addListener('keyboardWillHide', () =>
  //       setKeyboardVisible(false),
  //     );
  //     return () => {
  //       showSub.remove();
  //       hideSub.remove();
  //     };
  //   }, []);

  return (
    <>
      <ScrollView>
        <View style={{height: 1600}}>
          <Text style={{fontSize: 20}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>

        <ControlledInputAccessoryView active={active}>
          <View
            style={{
              borderTopColor: 'black',
              borderTopWidth: 1,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              padding: 24,

              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <AText setActive={setActive} />
            <AText setActive={setActive} />
            <AText setActive={setActive} />
            <AText setActive={setActive} />
            <AText setActive={setActive} />
            <AText setActive={setActive} />
          </View>
        </ControlledInputAccessoryView>
        <View style={{height: 400}} />
      </ScrollView>
    </>
  );
};
