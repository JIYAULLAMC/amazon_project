import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import FirstName from './components/FirstName';
import LastName from './components/LastName';

function App() {
  return (
    <div className="App">
      {/* <HoverCounter /> */}
      {/* <ClickCounter /> */}
      <FirstName  name="firstName" />
      <LastName />
    </div>
  );
}

export default App;
