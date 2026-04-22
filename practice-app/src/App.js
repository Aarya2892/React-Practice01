import logo from './logo.svg';
import './App.css';
import GoalsList from './GoalList/goalsList.js';

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
  return (
    <div className="course-goals">
      <h1> Goals List</h1>
       <GoalsList goals={coursegoals}/>
    </div>
  );
}

export default App;
