import './App.css';
import GoalsList from './GoalList/GoalsList.js';
import NewGoal from './NewGoal/NewGoal.js';

function App() {

  const coursegoals =[
    {
      id: "cg1",
      text: "Course 1"
    },
    {
      id: "cg2",
      text: "Course 2"
    },
    {
      id: "cg3",
      text: "Course 3"
    }
  ]

  const addNewGoalHandler = (newGoal) =>{
      coursegoals.push(newGoal);
      console.log(coursegoals)
  }

  return (
    <div className="course-goals">
      <h1> Goals List</h1>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalsList goals={coursegoals}/>
    </div>
  );
}

export default App;
