import React, {useState} from "react";
import '../NewGoal/NewGoal.css'

const NewGoal = props =>{

const [enteredText, setEnteredtext] = useState('');
// let enteredText='';

const addGoalHandler = event =>{
   event.preventDefault();

   const newGoal ={
    id: Math.random().toString(),
    text: enteredText
   }
   setEnteredtext('');
// console.log(enteredText)
   props.onAddGoal(newGoal)
}

const textChangeHandler = event =>{
   setEnteredtext(event.target.value);
}

return (
    <form className="form-style" onSubmit={addGoalHandler}>
    <input type="text" placeholder="Add new goal here" value={enteredText} onChange={textChangeHandler}/>
    <button type="submit">Submit</button>
</form>
)
}

export default NewGoal;