import { View, Text } from 'react-native'
import React from 'react'
import {Link, Redirect, router} from 'expo-router';
import {SafeAreaView } from 'react-native-safe-area-context'
import { Calendar } from 'react-native-calendars'

const home = () => {
  return (
    <SafeAreaView className="bg-primary justify-center text-center min-h-[85vh] h-full"

    >
      <View>
        <View className="justify-center items-center">
          <Text className="font-pmedium text-3xl text-secondary-200">
                    home
                </Text>
                </View>

        <Calendar 
        style={{ 
          height:500,
          backgroundColor: 'transparent', 
          marginHorizontal: 20,
        }}
        theme={{
          calendarBackground: 'transparent', 
          arrowColor: '#88c25b',
          todayTextColor: '#5FB53F',
          'stylesheet.day.basic':{
            'base':{
              width:20,
              height:70
            }
          },
          dayTextColor:'#FF9C01',
          textDisabledColor:'#ffe282',
          textSectionTitleColor:'#5FB53F',
          monthTextColor:'#FF9C01',
        }}
        onDayPress={() => router.push('../day')}
         />
      </View>
    </SafeAreaView>
  )
}

export default home