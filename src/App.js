import './App.css';
import Main from './components/Main';
import { WeatherProvider } from './service/context';

function App() {
  return (
    <WeatherProvider>
      <Main />
    </WeatherProvider>
  );
}

export default App;
