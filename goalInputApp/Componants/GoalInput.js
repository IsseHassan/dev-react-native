import{View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import { useState } from 'react';

function GoalInput(props){

    const [enteredGoalText, setEnteredGoalText] = useState('');

   function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
    }


   const addGoalHandler = () =>{
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(''); // it will clear the input field after adding the goal
   }
   
return(
    <Modal visible ={props.ShowModal} animationType='slide'>
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require ('../assets/Images/goal.png')}/>
      <TextInput style={styles.inputText}
        placeholder='Enter your course goal' 
        onChangeText={goalInputHandler}  
        value={enteredGoalText}  
      />
      <View style ={styles.buttonContainer}>
        <View style ={styles.buttonStyle}>
        <Button title='Add Gaol' onPress={addGoalHandler} color='#5e0acc'/>
        </View>
        <View  style ={styles.buttonStyle}>
        <Button title='Cancel' onPress={props.onCancelGoal} color='#f31282' />
        </View>
    </View>
    </View>
    </Modal>
)
}
const styles =StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      backgroundColor: '#311b6b'
    
      },
      inputText:{
        width: '100%',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius:6,
        borderWidth: 1,
        padding: 8,
      },
      buttonContainer:{
        marginTop: 16,
        
        flexDirection: 'row',
      },

      buttonStyle:{ 
        width: '30%',
        marginHorizontal: 15,
      },
      image:{
        width:100,
        height:100,
      }


})
export default GoalInput;