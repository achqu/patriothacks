import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View, Button } from 'react-native';
import {Link, Redirect, router} from 'expo-router';
import { SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../constants'
import {CustomButton} from '../components';
import { useGlobalContext} from '../context/GlobalProvider';

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext();
  if(!isLoading && isLoggedIn) return <Redirect href="/home" />

  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>

        <View className= "w-full justify-center items-center min-h-[85vh] px-4">
            <Image 
              source={images.logo}
              className="w-[200px] h-[100px] "
              resizeMode="contain"
            />

            <Image 
              source={images.logo2}
              className="max-w-[380px] w-full h-[300px]"
              resizeMode="contain"
            />

            <View className="relative mt-5">
              <Text className="text-3xl text-secondary-100
              font-bold text-center">
                Welcome to{' '}
                <Text className="text-secondary-200">
                    platesaver
                </Text>
                !

              </Text>

            </View>

            {<Text className="text-sm font-pregular text-light mt-7 text-center" >
              Make meal prep easy and interactive!
            </Text>}

            <CustomButton 
              title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyles="w-full mt-7"
            />
          <Text></Text>

<Button 
            
              title="Skip"
              //color="red"
              color="#FF9C01"
              onPress={() => router.push('/home')}
              

            />


        </View>

      </ScrollView>

      {/*<StatusBar backgroundColor="#161622" style="light" />*/}
    </SafeAreaView>
  );
}


