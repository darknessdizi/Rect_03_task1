import './App.css';
import { Stars } from './components/Stars.jsx';

function App() {
  return (
    <>
      <Stars count={5} />
      <Stars count={2} />
      <Stars count={7} />
      <Stars count={4} />
      <Stars count={-1} />
      <Stars count={1} />
    </>
  );
}

export default App;
