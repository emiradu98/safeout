import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {DARK_COLOR, GREEN_COLOR} from '../../helpers/constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {lightVibration} from '../../helpers/vibrations';

export const PersonalScreen = ({navigation}) => {
  const onPress = () => {
    async function requestUserPermission() {
      const authorizationStatus = await messaging().requestPermission();

      if (authorizationStatus) {
        console.log('Permission status:', authorizationStatus);
      }
    }

    requestUserPermission();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          backgroundColor: DARK_COLOR,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <SafeAreaView
          style={{padding: 20, paddingBottom: 0, flexDirection: 'row'}}>
          <Ripple
            style={{alignSelf: 'center', marginRight: 10}}
            onPress={() => {
              lightVibration();
              navigation.goBack();
            }}>
            <Icon name={'arrow-back'} color={GREEN_COLOR} size={30} />
          </Ripple>
          <Text style={{fontSize: 40, color: GREEN_COLOR, fontWeight: 'bold'}}>
            Personal Info
          </Text>
        </SafeAreaView>
      </View>
      <ScrollView>
        <Ripple
          style={{
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
            height: 50,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#d3d3d3',
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden',
            alignSelf: 'center',
          }}>
          <Text>Permissions</Text>
          <Ionicon name={'location-outline'} color={DARK_COLOR} size={20} />
        </Ripple>
        <Ripple
          style={{
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
            height: 50,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#d3d3d3',
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden',
            alignSelf: 'center',
          }}>
          <Text>Permissions</Text>
          <Ionicon name={'location-outline'} color={DARK_COLOR} size={20} />
        </Ripple>
        <Ripple
          style={{
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
            height: 50,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#d3d3d3',
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden',
            alignSelf: 'center',
          }}>
          <Text>Permissions</Text>
          <Ionicon name={'location-outline'} color={DARK_COLOR} size={20} />
        </Ripple>
        <Ripple
          style={{
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
            height: 50,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#d3d3d3',
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden',
            alignSelf: 'center',
          }}>
          <Text>Permissions</Text>
          <Ionicon name={'location-outline'} color={DARK_COLOR} size={20} />
        </Ripple>
        <Ripple
          style={{
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
            height: 50,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#d3d3d3',
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflow: 'hidden',
            alignSelf: 'center',
          }}>
          <Text>Permissions</Text>
          <Ionicon name={'location-outline'} color={DARK_COLOR} size={20} />
        </Ripple>
      </ScrollView>
    </View>
  );
};