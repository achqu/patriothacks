import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
//import { useGlobalContext } from '../../context/GlobalProvider'
import {icons, images} from '../../constants';
import { router } from 'expo-router'
import { signOut, getCurrentUser } from '../../lib/firebaseConfig'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton'

const logout = async () => {
  await signOut();
  //setUser(null)
  //setIsLoggedIn(false)

  router.replace('/sign-in')
}

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
    <View className="w-full justify-center items-center mt-6 mb-12 px-4">
      <TouchableOpacity 
      className="w-full items-end mb-10"
      onPress={logout}>
        <Image source={icons.logout} 
        resizeMode="contain" className="w-9 h-9" />
      </TouchableOpacity>

      <View className="w-20 h-20 border border-secondary rounded-lg
      justify-center items-center">
        <Image source={images.logo2} 
        className="w-[90%] h-[90%] rounded-lg"
        resizeMode='cover'/>
      </View>

      <View className="mt-5">
        <Text className={'text-black text-center font-psemibold ${titleStyles}'}>
          UserName
        </Text>
        <Text className={'text-black text-center ${titleStyles}'}>
          Member
        </Text>
      </View>

      <View className="w-full justify-center items-center px-4">
      <CustomButton 
              title="Account"
              //handlePress={() => router.push('/sign-in')}
              containerStyles="w-full mt-8"
            />

      <CustomButton 
              title="Notifications"
              //handlePress={() => router.push('/home')}
              containerStyles="w-full mt-10"
            />
      <CustomButton 
              title="Settings"
              //handlePress={() => router.push('/home')}
              containerStyles="w-full mt-10"
            />
      <CustomButton 
              title="Help"
              //handlePress={() => router.push('/home')}
              containerStyles="w-full mt-10"
            />
        
      </View>

    </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})