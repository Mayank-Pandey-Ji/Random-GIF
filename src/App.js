import './App.css';
import Random from './components/Random'
import Tag from './components/Tag'
function App() {
  return (
    <div className='w-full h-screen flex flex-col background relative overflow-hidden'>
      <h1 className='bg-white absolute w-full text-center font-bold text-4xl rounded-lg mt-[40px] ml-[25px] px-10 py-2 '>RANDOM GIFS</h1>
      <div className='flex flex-col'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
