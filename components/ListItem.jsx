import React from 'react';
import { View, Text, CheckBox, Button } from 'react-native';
import {Link, Redirect, router} from 'expo-router';

export default function ListItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View className="flex flex-col items-center px-4 my-3 mt-5">
        <View className="flex flex-row gap-2 items-start">
        <View className="flex rounded-lg border border-secondary-200 items-center flex-row flex-2 p-2 "
        style={{ width: "93%"}}
        >
  
            <Button color="#5FB53F" title="x" onPress={() => deleteTask(task.id) } />
            <Button color="#FF9C01" title={task.text} onPress={() => router.push({
              pathname: '../(days)/meal',
              params: {
              name: task.text
      }}) } />
            
            
        </View>

        </View>

        
    </View>



    /*
    <View>
      {<CheckBox
        value={task.completed}
        onValueChange={() => toggleCompleted(task.id)}
      />}
      <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </Text>
      <Button title="X" onPress={() => deleteTask(task.id)} />
    </View>*/
  );
}