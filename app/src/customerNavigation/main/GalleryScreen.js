import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DARK_COLOR, theme} from '../../helpers/constants';
import FastImage from 'react-native-fast-image';
import {PubsContext} from '../../contexts/pubContext';
import ImageView from 'react-native-image-viewing';

export const GalleryScreen = ({navigation}) => {
  const {
    selectedPub: {photos},
  } = useContext(PubsContext);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(undefined);
  const photosUri = photos.map((ph) => ({uri: ph}));
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.white}}>
      <StatusBar barStyle={'dark-content'} />
      <TouchableOpacity style={style.back} onPress={() => navigation.goBack()}>
        <Icon name={'arrow-left'} size={24} color={theme.dark} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={style.scrollView}>
        {photos.map((image, i) => (
          <View key={i} style={style.shadow}>
            <TouchableOpacity
              onPress={() => {
                setIndex(i);
                setVisible(true);
              }}
              style={style.wrapper}>
              <FastImage
                source={{uri: image}}
                style={style.image}
                resizeMode={'cover'}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <ImageView
        images={photosUri}
        imageIndex={index}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
          setIndex(undefined);
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    width: (Dimensions.get('window').width - 55) / 3,
    height: (Dimensions.get('window').width - 55) / 3,
  },
  wrapper: {
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 5.0,
    elevation: 1,
  },
  scrollView: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 12,
  },
  back: {
    elevation: 1,
    zIndex: 100,
    padding: 15,
  },
});