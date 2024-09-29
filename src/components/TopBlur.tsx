/*
  TopBlur
  Created by Robbie Morgan (rmfosho/dwifte)
  2024
*/

import {
  View,
  Text,
  Animated,
  Platform,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import GradientBlur from './global/GradientBlur';

const HEADER_SCROLL_DISTANCE = 100;

function useTopBlurElement() {
  const {width, height} = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const scrollY = new Animated.Value(0);

  const blurHeight = 100;

  const blurOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );

  return {
    element: () => {
      return (
        insets.top > 0 &&
        Platform.OS !== 'android' && (
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: blurHeight,
              zIndex: 1,
              opacity: blurOpacity,
            }}>
            <GradientBlur
              useAtTop
              locations={[1, 0.4, 0]}
              colors={['transparent', 'rgba(0,0,0,0.8)', '#0B0B0B']}
              width={width}
              height={insets.top + insets.top}
            />
          </Animated.View>
        )
      );
    },
    handleScroll: handleScroll,
  };
}

export default useTopBlurElement;
