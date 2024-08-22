import logo from './logo.svg';
import './App.css';
import Square from './components/Square';
import Circle from './components/Circle';
import Triangle from './components/Triangle';

function App() {
  return (
    <section className='bg-black flex flex-col items-center justify-start gap-32 p-8'>
      <h1 className='text-3xl text-gray-700'>React Framer Motion Tutorial</h1>
      <Square />
      <Circle />
      <Triangle />
    </section>

  );
}

export default App;
