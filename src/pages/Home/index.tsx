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
import {useEffect, useRef, useState} from 'react';
import {getCravingData} from '../../lib/api_helper';
import {RootStackParamList} from '../../types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Loader} from 'lucide-react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomePage({navigation}: Props) {
  const [isGettingData, setIsGettingData] = useState(false);
  const [craving, setCraving] = useState('');
  const rotationAnim = useRef(new Animated.Value(0)).current;
  const useBlur = useTopBlurElement();
  const {width, height} = useWindowDimensions();

  useEffect(() => {
    if (isGettingData) {
      Animated.loop(
        Animated.timing(rotationAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ).start();
    } else {
      
      rotationAnim.setValue(0);
    }
  }, [isGettingData, rotationAnim]);

  const rotate = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const GetData = async () => {
    if (isGettingData) return;
    setIsGettingData(true);

    const data = await getCravingData(craving);

    console.log('data', data);

    navigation.navigate('Result', {
      data: data,
    });

    setIsGettingData(false);
  };

  return (
    <>
      <CustomHeader title="" showBackButton={false} />
      {useBlur.element()}

      {isGettingData && (
        <View
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [{translateX: -50}, {translateY: -50}],
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Animated.View style={{transform: [{rotate}]}}>
            <Loader height={100} width={100} color={'white'} />
          </Animated.View>
        </View>
      )}

      <Animated.ScrollView
        onScroll={useBlur.handleScroll}
        scrollEventThrottle={16}
        style={{flex: 1, backgroundColor: '#111111'}}>
        <View className="h-16" />

        <View className="pt-4 p-2 mb-4 text-center items-center w-full">
          <Text className="text-white text-5xl" style={fonts.interBold}>
            Hey {fakeDetails.first}!
          </Text>
          <Text className="text-white text-3xl pt-2" style={fonts.interRegular}>
            What's your craving?
          </Text>
        </View>
      </Animated.ScrollView>

      <View
        className="w-full text-center items-center absolute"
        style={{
          position: 'absolute',
          top: height - 140,
          left: 0,
          right: 0,
          zIndex: 1,
        }}>
        <View
          className="border w-[80%] text-center items-center justify-center border-green-600 p-3"
          style={{
            borderRadius: 50,
          }}>
          <TextInput
            onChangeText={text => setCraving(text)}
            onSubmitEditing={GetData}
            className="text-white text-2xl"
            placeholder="What's your craving?"></TextInput>
        </View>
      </View>
    </>
  );
}
