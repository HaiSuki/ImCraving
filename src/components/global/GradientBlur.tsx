/*
  GradientBlur
  Created by Robbie Morgan (rmfosho/dwifte)
  2024
*/
import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

const GradientBlur = ({
  // gradient blur effect made for ios
  width,
  height,
  useAtTop,
  locations,
  colors,
  androidOpacity = 0.8,
}: {
  width: number;
  height: number;
  useAtTop?: boolean;
  locations?: number[];
  colors?: string[];
  androidOpacity?: number;
}) => {
  const colrs = colors || ['transparent', 'rgba(0,0,0,1)', '#0B0B0B'];
  let locs = locations || [0, 0.8, 1];

  return (
    <View
      style={[
        !useAtTop ? styles.blurContainer : stylesTop.blurContainer,
        {width, height},
      ]}>
      <MaskedView
        maskElement={
          <LinearGradient
            locations={locs}
            colors={colrs}
            style={StyleSheet.absoluteFill}
          />
        }
        style={StyleSheet.absoluteFill}>
        {Platform.OS === 'ios' ? (
          <BlurView
            blurType={'dark'}
            blurAmount={100}
            style={StyleSheet.absoluteFill}
          />
        ) : (
          <View
            style={[
              StyleSheet.absoluteFill,
              {backgroundColor: `rgba(0,0,0,${androidOpacity})`},
            ]}
          />
        )}
      </MaskedView>
    </View>
  );
};

const stylesTop = StyleSheet.create({
  blurContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
});

const styles = StyleSheet.create({
  blurContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
});

export default GradientBlur;
