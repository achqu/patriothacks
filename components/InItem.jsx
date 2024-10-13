import React from 'react';
import { View, Text, CheckBox, Button } from 'react-native';
import {Link, Redirect, router} from 'expo-router';

export default function InItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View className="flex flex-col items-center px-3 mt-1">
        <View className="flex flex-row gap-2 items-start">
        <View className="flex rounded-lg items-center flex-row flex-2 p-2 "
        style={{ width: "93%"}}
        >
  
            <Button color="#FF9C01" title="-" onPress={() => deleteTask(task.id) } />
                <Text className="text-secondary-100">
                    {task.text}
                </Text>
            
            
            
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