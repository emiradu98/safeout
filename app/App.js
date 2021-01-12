import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import {LayoutAnimation, StatusBar, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ViroARScene, ViroARSceneNavigator, ViroConstants, ViroText} from 'react-viro';
import LottieView from 'lottie-react-native';
import SplashScreen from 'react-native-splash-screen';
import * as Progress from 'react-native-progress';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';

export const App = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        SplashScreen.hide();

        const interval = setInterval(() => {
            setProgress(progress => progress + 0.1);
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            setIsLoading(false);
            // LayoutAnimation.configureNext(
            LayoutAnimation.create(
                500,
                LayoutAnimation.Types.easeIn,
                LayoutAnimation.Properties.opacity,
            );
            // );
        }, 2000);
    }, []);

    return (
        <NavigationContainer>
            <StatusBar barStyle={'light-content'}/>

            <Modal isVisible={isLoading} animationInTiming={1} animationOut={'fadeOut'} style={{flex: 1, margin: 0}}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#141716',
                    zIndex: 100,
                    elevation: 100,
                }}>
                    <LottieView source={require('./assets/animations/running.json')} autoPlay loop
                                style={{width: '46%', marginTop: 1, marginLeft: -3}}/>
                    <View style={{position: 'absolute', width: '100%', bottom: 100, alignItems: 'center'}}>
                        <Progress.Bar progress={progress} width={200} color={'rgba(122,216,185,100)'}/>
                    </View>
                </View>
            </Modal>

            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
            </Tab.Navigator>

        </NavigationContainer>
    );
};


function ProfileScreen() {

    return (
        <ViroARSceneNavigator initialScene={{scene: AR}}>

        </ViroARSceneNavigator>
    );
}

function AR() {
    const [text, setText] = useState('');
    const _onInitialized = (state, reason) => {
        if (state == ViroConstants.TRACKING_NORMAL) {
            setText('hello world');
        } else if (state == ViroConstants.TRACKING_NONE) {
            // Handle loss of tracking
        }
    };
    return (
        <ViroARScene onTrackingUpdated={_onInitialized}>
            <ViroText text={text} scale={[.5, .5, .5]} position={[0, 0, -1]}/>
        </ViroARScene>
    );
}

function HomeScreen() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#141716',

        }}>
            <SafeAreaView>
                <View style={{
                    width: 300,
                    position: 'absolute',
                    top: 48,
                    alignSelf: 'center',
                    backgroundColor: 'yellow',
                    borderRadius: 5,
                }}><Text>Sunt smecher</Text></View>
            </SafeAreaView>
            <MapView
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                }}
                zoomEnabled={false}
                rotateEnabled={false}
                scrollEnabled={false}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{latitude: 37.78825, longitude: -122.4324}}
                    title={'123'}
                >
                    <View style={{
                        width: 300,
                        alignSelf: 'center',
                        backgroundColor: 'yellow',
                        borderRadius: 5,
                    }}><Text>Sunt smecher</Text></View>
                </Marker>
            </MapView>

        </View>
    );
}


function SettingsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        </View>
    );
}

const Tab = createBottomTabNavigator();


