import './App.css';
import img from './assets/message.svg';

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>
        Hello world! <br />
      </h1>
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
        <div className='shrink-0'>
          <img className='h-12 w-12' src={img} alt='ChitChat Logo' />
        </div>
        <div>
          <div className='text-xl font-medium text-black'>Chitchat</div>
          <p className='text-slate-500'>You have a new message!</p>
        </div>
      </div>
    </>
  );
}

export default App;
