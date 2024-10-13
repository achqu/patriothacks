import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import ListItem from './ListItem';
import {Link, Redirect, router} from 'expo-router';


export default function MealList() {
  // State Hooks
  const [meals, setMeals] = useState([
  ]);
  const [text, setText] = useState('');
  // Function to Add Task
  function addTask() {
    const newTask = { id: Date.now(), text, completed: false };
    setMeals([...meals, newTask]);
    
    setText('');
  }
  // Function to Delete Task
  function deleteTask(id) {
    setMeals(meals.filter(task => task.id !== id));
  }
  // Function to Toggle Task Completion
  function toggleCompleted(id) {
    setMeals(meals.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }
  // Render MealList Component
  return (
    <View className="flex flex-col items-center px-4 pb-5">
      <View className = "flex flex-row  rounded-lg border border-secondary-100">
      <View className="flex flex-row items-center flex-4 p-1 py-2" style={{ width: "80%"}}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder=" New Meal"
        style={{width:"100%"}}
        
      />
      
      </View>
      
      <Button title="+" onPress={addTask} color="#5FB53F"/>
      
      
      </View>
      

      {meals.map(task => (
        <ListItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}

      
    </View>
  );
}