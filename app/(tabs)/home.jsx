import { View, Text } from 'react-native'
import React, { useState } from 'react';
import {Link, Redirect, router, useRouter} from 'expo-router';
import {SafeAreaView } from 'react-native-safe-area-context'
import { Calendar } from 'react-native-calendars'

const home = () => {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  /*function toDay(selected){
    console.log('selected day', selected);

    router.push({
      pathname: '../day',
      params: {
        day: selected,
      }
    });
  */
 const toDay = (day) => {
    setSelected(day.dateString);
    router.push({
      pathname: '../day',
      params: {
        day: day.dateString,
      }
    });
  

    
  };

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
        onDayPress={
          toDay
        }
        /*markedDates={{
          [selected]:{marked: true, disableTouchEvent: true, selectedDotColor:'orange'}
        }}*/
         />
      </View>
    </SafeAreaView>
  )
}

export default home