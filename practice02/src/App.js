import './App.css';
import Cards from './Cards/Cards.js';
import cardsData from './data.js'

function App() {
  return (
    <>
    <h1>Cards Display</h1>
    <Cards cardsData={cardsData}/>
    </>
  );
}

export default App;
