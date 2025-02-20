import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {DARK_COLOR, GREEN_COLOR} from '../../helpers/constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ToggleSwitch from 'toggle-switch-react-native';
import {lightVibration} from '../../helpers/vibrations';
import OneSignal from 'react-native-onesignal';

export const NotificationsScreen = ({navigation}) => {
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
            Notifications
          </Text>
        </SafeAreaView>
      </View>
      <ScrollView>
        <View
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
          <Text>Friend achievements</Text>
          <ToggleSwitch
            isOn={true}
            size="medium"
            onToggle={(isOn) => console.log('changed to : ', isOn)}
          />
        </View>
        <View
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
          <Text>Travel alert</Text>
          <ToggleSwitch
            isOn={true}
            size="medium"
            onToggle={(isOn) => console.log('changed to : ', isOn)}
          />
        </View>
        <View
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
          <Text>Monsters around</Text>
          <ToggleSwitch
            isOn={true}
            size="medium"
            onToggle={(isOn) => console.log('changed to : ', isOn)}
          />
        </View>
      </ScrollView>
    </View>
  );
};
