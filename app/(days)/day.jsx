import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import {Link, Redirect, router} from 'expo-router';
import { SafeAreaView} from 'react-native-safe-area-context';
import React from 'react'
import MealList from '../../components/MealList'

const day = () => {
  return (
    <SafeAreaView className = "bg-primary h-full">
    <View className= "p-5 justify-center items-center">
    <Text className="font-pmedium text-3xl text-secondary">
                    day name
                    </Text>
      
    </View>

    <View className="justify-center items-center">
        <MealList />
        </View>
    </SafeAreaView>
  )
}

export default day