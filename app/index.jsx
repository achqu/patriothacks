import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import {Link, Redirect, router} from 'expo-router';
import { SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../constants'
import {CustomButton} from '../components';

export default function App() {
  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>

        <View className= "w-full justify-center items-center min-h-[85vh] px-4">
            <Image 
              source={images.logo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />

            <Image 
              source={images.logo2}
              className="max-w-[380px] w-full h-[300px]"
              resizeMode="contain"
            />

            <View className="relative mt-5">
              <Text className="text-3xl text-white
              font-bold text-center">
                Welcome to{' '}
                <Text className="text-secondary-200">
                    platesaver
                </Text>
                !

              </Text>

            </View>

            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              intro description here idk
            </Text>

            <CustomButton 
              title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyles="w-full mt-7"
            />

<CustomButton 
              title="home"
              handlePress={() => router.push('/home')}
              containerStyles="w-full mt-7"
            />


        </View>

      </ScrollView>

      {/*<StatusBar backgroundColor="#161622" style="light" />*/}
    </SafeAreaView>
  );
}


