import React from "react";
import '../GoalList/goalsList.css'

const GoalsList = props =>{
    return <ul className="goals-list">
         {props.goals.map((goal)=>{
            return <li className="goal">{goal.text}</li>
         })}
    </ul>
}

export default GoalsList;