import logo from './logo.svg';
import './App.css';

const App = ()  => {
  return (
    <>
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt Everest</li>
          <li>Run a Marathon</li>
          {/* What an ableist list... */}
          <li>Feed the cats!</li>
        </ul>
    </>
  );
}

export default App;
