 import { StyleSheet, View,Text, Pressable} from "react-native";
 
 const GoalItem = (props )=>{
    return (
      <View style={styles.goalItem}>
        <Pressable
        android_ripple={{color: '#9932cc'}} 
        onPress={props.onDeleteItem.bind(this ,props.id)}> 
        <Text style ={styles.goalText}>{props.text}</Text>
        </Pressable>
    </View>
    )
 }
export default GoalItem;

const styles =StyleSheet.create({
    goalItem:{
        margin: 8, 
        borderRadius:6,
        backgroundColor: '#4b0082',
        
      },
      goalText:{
        padding: 8,
        color: 'white',
        fontSize: 16,
      }
})