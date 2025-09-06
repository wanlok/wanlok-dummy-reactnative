import {StyleSheet, Text, View} from 'react-native';
import Rive, {Direction, LoopMode, RiveRef} from 'rive-react-native';
import {useRef} from 'react';
import {WButton} from '../../Component/WButton';

const styles = StyleSheet.create({
  container: {},
});

export const RivePage = () => {
  const riveRef = useRef<RiveRef>(null);

  const play = () => {
    riveRef.current?.play(undefined, LoopMode.OneShot);
  };

  const pause = () => {
    riveRef.current?.pause();
    riveRef.current?.pause();
  };

  const stop = () => {
    riveRef.current?.stop();
  };

  const reset = () => {
    riveRef.current?.reset();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '50%',
        }}>
        <Rive
          ref={riveRef}
          autoplay={false}
          // url="https://cdn.rive.app/animations/vehicles.riv"
          url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
          onPlay={() => {
            console.log('onPlay');
          }}
          onLoopEnd={() => {
            console.log('onLoopEnd');
          }}
          onStop={() => {
            console.log('onStop');
            stop();
          }}
          style={{backgroundColor: 'green'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              zIndex: 1,
            }}>
            <Text style={{backgroundColor: 'red'}}>Hello World</Text>
          </View>
        </Rive>
      </View>
      <WButton
        onClick={play}
        title="Play"
        style={{width: '100%', marginTop: 1}}
      />
      <WButton
        onClick={pause}
        title="Pause"
        style={{width: '100%', marginTop: 1}}
      />
      <WButton
        onClick={stop}
        title="Stop"
        style={{width: '100%', marginTop: 1}}
      />
      <WButton
        onClick={reset}
        title="Reset"
        style={{width: '100%', marginTop: 1}}
      />
    </View>
  );
};
