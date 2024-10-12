import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {icons} from '../../constants';

const logout = () => {

}

const Profile = () => {
  return (
    <View className="w-full justify-center items-center mt-6 mb-12 px-4">
      <TouchableOpacity 
      className="w-full items-end mb-10"
      onPress={logout}>
        <Image source={icons.logout} 
        resizeMode="contain" className="w-6 h-6" />
      </TouchableOpacity>

      <View className="w-16 h-16 border border-secondary rounded-lg
      justify-center items-center">
        <Image source={icons.logout} 
        className="w-[90%] h-[90%] rounded-lg"
        resizeMode='cover'/>
      </View>

      <View className="mt-5">
        <Text className={'text-white text-center font-psemibold ${titleStyles}'}>
          UserName
        </Text>

      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})