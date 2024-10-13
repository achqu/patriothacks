import { View, Text } from 'react-native'
import React from 'react'
import {SafeAreaView } from 'react-native-safe-area-context'
import { Calendar } from 'react-native-calendars'

const home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View>
        <Text>Home</Text>
        <Calendar style={{ backgroundColor: 'transparent' }}
        theme={{
          calendarBackground: 'transparent', 
        }} />
      </View>
    </SafeAreaView>
  )
}

export default home