import {View, Text, Animated} from 'react-native';

import CustomHeader from '../../components/global/Header';
import useTopBlurElement from '../../components/TopBlur';
import fonts from '../../lib/fonts';
import {dataFromServer} from '../../types';
import {NavigationAction} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export default function ResultsPage({
  route,
  navigation,
}: {
  route: {
    params: {
      data: dataFromServer | undefined;
    };
  };
  navigation: NavigationAction;
}) {
  const useBlur = useTopBlurElement();
  const [jsonData, setJsonData] = useState<dataFromServer>(null!);

  useEffect(() => {
    if (!route.params.data) {
      setJsonData({
        Item: 'Big Mac',
        Info: 'The Big Mac is a fast-food burger with two beef patties, special sauce, lettuce, cheese, pickles, onions, and a sesame seed bun.',
        'Why its bad':
          'High in calories, unhealthy fats, and sodium, with processed ingredients that lack essential nutrients.',
        'Healthiness Rating': '25',
        'Energy Density': 'High',
        Calories: '550',
        'Nutritional Macros': {
          Protein: '25g',
          Carbohydrates: '45g',
          Fats: '30g',
          'Saturated Fat': '10g',
          Sugar: '9g',
        },
        'Micro Nutrients': {
          Sodium: '970mg',
          Calcium: '20%',
          Iron: '25%',
        },
        Recommendations: [
          {
            Item: 'Grilled Chicken Avocado Wrap',
            Ingredients:
              '1 whole wheat tortilla, 100g grilled chicken breast, 50g avocado, 1/4 cup mixed greens, 1 tbsp Greek yogurt, 1 tsp lime juice',
            Method:
              'Grill the chicken and slice it. Spread the Greek yogurt on the tortilla, add the chicken, avocado slices, mixed greens, and lime juice. Wrap and serve.',
            'Nutritional Macros': {
              Protein: '30g',
              Carbohydrates: '25g',
              Fats: '15g',
              'Saturated Fat': '3g',
              Sugar: '3g',
            },
            Calories: '350',
            'Healthiness Rating': '85',
          },
        ],
      });
    } else {
      setJsonData(route.params.data);
    }
  }, [route.params]);

  if (!jsonData) {
    return (
      <>
        <CustomHeader title="" showBackButton={true} />
        {useBlur.element()}
      </>
    );
  } else {
    return (
      <>
        <CustomHeader title={jsonData.Item} showBackButton={true} />
        {useBlur.element()}

        <Animated.ScrollView
          onScroll={useBlur.handleScroll}
          scrollEventThrottle={16}
          style={{flex: 1, backgroundColor: '#111111'}}>
          <View className="h-32" />

          <View
            className={`text-center justify-center items-center p-3 border-2 m-4 ${
              Number(jsonData['Healthiness Rating']) >= 80
                ? 'border-green-600'
                : Number(jsonData['Healthiness Rating']) >= 60
                ? 'border-purple-500'
                : 'border-red-500'
            }`}
            style={{
              borderRadius: 40,
            }}>
            <Text
              className="text-white text-xl text-center"
              style={fonts.interMedium}>
              Healthiness Rating: {jsonData['Healthiness Rating']}/100{'\n'}
              Calories: {jsonData.Calories} 🔥{'\n'}
              Energy Density: {jsonData['Energy Density']}
            </Text>
          </View>

          <View
            className="text-center justify-center items-center p-4 border-2 m-4 border-green-500"
            style={{
              borderRadius: 40,
            }}>
            <Text
              className="text-white text-xl text-center"
              style={fonts.interMedium}>
              {jsonData.Info}
            </Text>
          </View>

          <View
            className="text-center justify-center items-center p-4 border-2 m-4 border-purple-500"
            style={{
              borderRadius: 40,
            }}>
            <Text
              className="text-white text-xl text-center"
              style={fonts.interMedium}>
              {jsonData['Why its bad']}
            </Text>
          </View>

          <View
            className="text-center justify-center items-center p-4 border-2 m-4 border-purple-500"
            style={{
              borderRadius: 40,
            }}>
            <Text
              className="text-white text-xl text-center"
              style={fonts.interMedium}>
              Nutrient Macros:
            </Text>
            <Text
              className="text-white text-md text-center"
              style={fonts.interMedium}>
              {Array.from(Object.keys(jsonData['Nutritional Macros'])).map(
                (val, ind) => {
                  return (
                    <Text key={ind}>
                      {/* @ts-ignore */}
                      {val}: {jsonData['Nutritional Macros'][val]}
                      {ind !==
                      Object.keys(jsonData['Nutritional Macros']).length - 1
                        ? '\n'
                        : ''}
                    </Text>
                  );
                },
              )}
            </Text>
          </View>

          <View
            className="text-center justify-center items-center p-4 border-2 m-4 border-purple-500"
            style={{
              borderRadius: 40,
            }}>
            <Text
              className="text-white text-xl text-center"
              style={fonts.interMedium}>
              Micro Nutrients:
            </Text>
            <Text
              className="text-white text-md text-center"
              style={fonts.interMedium}>
              {Array.from(Object.keys(jsonData['Micro Nutrients'])).map(
                (val, ind) => {
                  return (
                    <Text key={ind}>
                      {/* @ts-ignore */}
                      {val}: {jsonData['Micro Nutrients'][val]}
                      {ind !==
                      Object.keys(jsonData['Micro Nutrients']).length - 1
                        ? '\n'
                        : ''}
                    </Text>
                  );
                },
              )}
            </Text>
          </View>

          <View className="bg-white h-[1px] ml-2 mr-2" />

          <View className="text-center justify-center items-center p-2 m-4">
            <Text
              className="text-white text-xl text-center"
              style={fonts.interMedium}>
              Recommendations:
            </Text>
          </View>

          {jsonData.Recommendations.map((val, ind) => {
            return (
              <View
                className="text-center justify-center items-center p-4 border-2 m-4 border-green-500"
                style={{
                  borderRadius: 40,
                }}
                key={ind}>
                <Text
                  className="text-white text-xl text-center"
                  style={fonts.interMedium}>
                  {val.Item}
                </Text>

                <Text className="text-white text-md text-center">
                  Healthiness Rating: {val['Healthiness Rating']}/100{'\n'}
                  Calories: {val.Calories} 🔥{'\n'}
                </Text>

                <Text className="text-white text-md text-center">
                  Nutrient Macros:{'\n'}
                  {Array.from(Object.keys(val['Nutritional Macros'])).map(
                    (val2, ind) => {
                      return (
                        <Text key={ind}>
                          {/* @ts-ignore */}
                          {val2}: {val['Nutritional Macros'][val2]}
                          {ind !==
                          Object.keys(val['Nutritional Macros']).length - 1
                            ? '\n'
                            : ''}
                        </Text>
                      );
                    },
                  )}
                </Text>

                <Text
                  className="text-xl text-white pt-2"
                  style={fonts.interMedium}>
                  Ingredients:
                </Text>

                <Text
                  className="text-md text-white text-center pt-2"
                  style={fonts.interRegular}>
                  {val.Ingredients}
                </Text>

                <Text
                  className="text-xl text-white pt-2"
                  style={fonts.interMedium}>
                  Method:
                </Text>

                <Text
                  className="text-md text-white text-center pt-2"
                  style={fonts.interRegular}>
                  {val.Method}
                </Text>
              </View>
            );
          })}

          <View className="h-32" />
        </Animated.ScrollView>
      </>
    );
  }
}
