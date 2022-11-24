import './App.css';
import LogoFCC from './components/LogoFCC';
import TareaList from './components/TareaList';

function App() {
  return (
    <div className="app-tareas">
      <LogoFCC />
      <div className="main-task-list">
        <h1>Mis Tareas</h1>
        <TareaList />

      </div>
    </div>
  );
}

export default App;
