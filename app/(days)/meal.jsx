import { View, Text } from 'react-native'
import {Link, Redirect, router, useLocalSearchParams} from 'expo-router';
import React from 'react'
import { SafeAreaView} from 'react-native-safe-area-context';
import InList from '../../components/InList'

const meal = () => {
  
  const{name} = useLocalSearchParams();
  return (
    <SafeAreaView className = "bg-primary h-full">
    <View className= "p-5 justify-center items-center">
    <Text className="font-pmedium text-3xl text-secondary">
                    {name} 
                    </Text>
                    <Text className="text-secondary-100">
                    ingredients
                    </Text>
      
    </View>

    <View className="justify-center items-center">
        <InList />
        </View>
    </SafeAreaView>
  )
}

export default meal