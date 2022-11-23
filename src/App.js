import './App.css';
import { Button, Carousel } from 'flowbite-react';

function App() {
  return (
    <div className="App">
      <div>
    <Button gradientDuoTone="RedToGreen">
      Purple to Blue
    </Button>
  </div>
  <h2 className='text-4xl justify-center font-bold uppercase text-red-200 grediant text-ted-500 from-inherit'>color</h2>
  <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      alt="..."
    />
    <img
      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      alt="..."
    />
  </Carousel>
</div>
    </div>

    
  );
}

export default App;
