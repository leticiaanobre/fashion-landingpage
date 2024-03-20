import Navbar from './components/navbar/navbar';
import Content from './components/content/content';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Content />
      </header>
    </div>
  );
}

export default App;
