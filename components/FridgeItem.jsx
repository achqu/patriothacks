import React from 'react';
import { View, Text, CheckBox, Button } from 'react-native';

export default function FridgeItem({ task, deleteTask, toggleCompleted }) {
  return (
    <View className="flex flex-col items-center px-4 mb-3">
        <View className="flex flex-row gap-2 items-start">
        <View className="flex rounded-lg border border-light items-center flex-row flex-2 p-2 "style={{ width: "70%"}}>
    
            <Button color="#FF9C01" title="x" onPress={() => deleteTask(task.id) } />
            <Text className="text-secondary ">
                {''} {task.text} 
            </Text>
            
            
            
        </View>
        <View className="flex rounded-lg  items-center flex-row flex-2 p-4 "style={{ width: "30%"}}>
    
            <Text className="text-secondary ">
                {task.text2}d ago
            </Text>
            
            
            
        </View>

        </View>

        
    </View>


  );
}