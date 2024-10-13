import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import {Link, Redirect, router, useLocalSearchParams} from 'expo-router';
import { SafeAreaView} from 'react-native-safe-area-context';
import React from 'react'
import MealList from '../../components/MealList'


const meals = () => {
  return (
    <SafeAreaView className = "bg-primary h-full">
    <View className= "p-5 justify-center items-center">
    <Text className="font-pmedium text-3xl text-secondary-200">
                    meals
                    </Text>
      
    </View>

    <View className="justify-center items-center">
        <MealList />
        </View>
    </SafeAreaView>
  )
}

export default meals