import React, { useState } from "react";
import { View ,StyleSheet,  FlatList, Button} from "react-native"
import { StatusBar } from "expo-status-bar";
import GoalItem from './Componants/GoalItem';
import GoalInput from "./Componants/GoalInput";


const app =()=>{
  const [modeIsVisible, setModalIsVisible] = useState(false);

  const startAdNewGoalHandler =()=>{
    setModalIsVisible(true);
  }

  const endNewGoalHandler =()=>{
    setModalIsVisible(false);
  }

  const [ courseGoal, setCourseGoal] = useState ([])
  function addGoalHandler(enteredGoalText) {
    setCourseGoal((currentGoals) => [...currentGoals, { text: enteredGoalText, id: Math.random().toString()}
    ]);
    setModalIsVisible(false);
  }  

  const deleteGoalHandler =(id)=> {
    setCourseGoal((currentGoals) =>{
      return currentGoals.filter((goal) => goal.id !== id)}) // this will return all the goals that are not equal to the id that we want to delete
    }
 return(

  <>
  <StatusBar style="inverted" /> 
  <View style={styles.containerApp}>
  <Button title="Add New Goal" color='#4b0082' onPress={startAdNewGoalHandler}/>
 <GoalInput ShowModal={modeIsVisible}
  onAddGoal ={addGoalHandler}
  onCancelGoal={endNewGoalHandler}
  />
  <View style={styles.goalContainer}>
  <FlatList
   data = {courseGoal}
   renderItem={(itemData) =>{
    return <GoalItem text = {itemData.item.text}
    id = {itemData.item.id} // this is the id of the item that we want to delete
    onDeleteItem={deleteGoalHandler}
    />;
   }}
   keyExtractor={(item, index) => {
     return item.id;
   }}
  /> 
  </View>
  </View>
  </>
 )
}
const styles =StyleSheet.create({
  containerApp:{
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16,
  },

  
  goalContainer:{
    flex:5
  },
})
export default app;