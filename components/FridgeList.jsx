import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import FridgeItem from './FridgeItem';

export default function FridgeList() {
  // State Hooks
  const [tasks, setTasks] = useState([
  ]);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  
  // Function to Add Task
  function addTask() {
    const newTask = { id: Date.now(), text, text2, completed: false};
    setTasks([...tasks, newTask]);
    setText('');
    setText2('');
  }
  
  // Function to Delete Task
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  // Function to Toggle Task Completion
  function toggleCompleted(id) {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }
  // Render FridgeList Component
  return (
    <View className="flex flex-col items-center px-2 py-0 mb-1">
      
<View className="flex flex-row p-4 gap-2 m-2">
      <View className="flex flex-row rounded-lg border border-secondary items-center flex-4 p-1 py-0" style={{ width: "70%"}}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder=" New Item"
        style={{width:"100%"}}
      />
      </View>

      <View className="flex flex-row rounded-lg border border-secondary items-center flex-3 p-1" style={{ width: "30%"}}>
      <TextInput
        value={text2}
        onChangeText={setText2}
        placeholder="# of days"
      />

      </View>
      <Button title="+" onPress={addTask} color="#FF9C01"/>
      </View>
      

      {tasks.map(task => (
        <FridgeItem
          key={task.id}
          task={task}
          
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
        
        
      ))}
      
      


      

    </View>
  );
}