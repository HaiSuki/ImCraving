import {
  View,
  Text,
  Animated,
  TextInput,
  useWindowDimensions,
} from 'react-native';

import fakeDetails from '../../lib/fakeAccountDetails';
import CustomHeader from '../../components/global/Header';
import useTopBlurElement from '../../components/TopBlur';
import fonts from '../../lib/fonts';

export default function StatsPage() {
  const useBlur = useTopBlurElement();

  return (
    <>
      <CustomHeader title="" showBackButton={false} />
      {useBlur.element()}

      <Animated.ScrollView
        onScroll={useBlur.handleScroll}
        scrollEventThrottle={16}
        style={{flex: 1, backgroundColor: '#111111'}}>
        <View className="h-16" />

        <View className="w-full h-full grid grid-cols-1 space-y-4">
          <View
            className="p-4 text-center items-center border-2 border-green-400"
            style={{
              borderRadius: 40,
            }}>
            <Text className="text-white text-2xl" style={fonts.interBold}>
              Your Goal
            </Text>
            <Text className="text-white text-xl" style={fonts.interRegular}>
              100/{fakeDetails.caloriesToday} Calories today 🔥
            </Text>
          </View>

          <View
            className="p-4 text-center items-center border-2 border-green-500"
            style={{
              borderRadius: 40,
            }}>
            <Text className="text-white text-2xl" style={fonts.interBold}>
              Your Progress
            </Text>
            <Text className="text-white text-xl" style={fonts.interRegular}>
              You have avoided 400 calories from cravings.
            </Text>
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
}
