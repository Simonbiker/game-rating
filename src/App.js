import './App.css';

// Context
import { GameRatingProvider } from './context/GameRatingContext'

// Components
import Header from './components/Header';
import GameRatingForm from './components/GameRatingForm';
import GameRatingList from './components/GameRatingList';

function App() {
  return (
    <GameRatingProvider>
      <Header />
      <GameRatingForm />
      <GameRatingList />
    </GameRatingProvider>


  );
}

export default App;
