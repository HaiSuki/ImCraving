/*
  CustomHeader
  Created by Robbie Morgan (rmfosho/dwifte)
  2024
*/

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft, MoreVertical} from 'lucide-react-native';
import fonts from '../../lib/fonts';
import {SafeAreaView} from 'react-native-safe-area-context';

interface CustomHeaderProps {
  title: string;
  showBackButton?: boolean;
  showMoreOptions?: boolean;
  onMoreOptionsPress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBackButton = true,
  showMoreOptions = false,
  onMoreOptionsPress,
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          {showBackButton && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconButton}>
              <ArrowLeft color="#fff" size={24} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>
          {showMoreOptions && (
            <TouchableOpacity
              onPress={onMoreOptionsPress}
              style={styles.iconButton}>
              <MoreVertical color="#fff" size={24} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  iconButton: {
    padding: 8,
  },
  title: {
    ...fonts.interBold,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default CustomHeader;
