import { View, Text } from 'react-native'
import React from 'react'
import {SafeAreaView } from 'react-native-safe-area-context'
import { Calendar } from 'react-native-calendars'

const home = () => {
  return (
    <SafeAreaView className="bg-primary justify-center text-center min-h-[85vh]"
      style={{
        padding:0
      }}
    >
      <View>
        <View className="justify-center items-center">
          <Text className="text-3xl text-secondary">
                    home
                </Text>
                </View>

        <Calendar style={{ 
          height:500,
          backgroundColor: 'transparent' 
        }}
        theme={{
          calendarBackground: 'transparent', 
          arrowColor: '#88c25b',
          todayTextColor: '#88c25b',
          'stylesheet.day.basic':{
            'base':{
              width:50,
              height:80
            }
          }
        }}
         />
      </View>
    </SafeAreaView>
  )
}

export default home