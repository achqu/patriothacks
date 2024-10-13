import React from 'react';
import { View, Text, CheckBox, Button } from 'react-native';

export default function ListItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View className="flex flex-col items-center px-4 my-3 mt-5">
        <View className="flex flex-row gap-2 items-start">
        <View className="flex rounded-lg border border-light items-center flex-row flex-2 p-2 "style={{ width: "93%"}}>
  
            <Button color="#FF9C01" title="x" onPress={() => deleteTask(task.id) } />
            <Text className="text-secondary ">
                {''} {task.text}
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