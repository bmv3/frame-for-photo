import { useState } from 'react';
import "../node_modules/normalize.css/normalize.css";
import './App.css';
import Images from './components/Images';
import Form from './components/Form';

function App() {

  const img = new Image();
  img.src = 'img/photo.jpg';

  const [ration, setRation] = useState(0);
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const [verticalOffset, setVerticalOffset] = useState(0);

  const [height] = useState(img.width);

  return (
    <div className="App">
      <header className="App-header">
        <Form
          handlerSetRation={(e) => setRation(e.target.value)}
          handlerHorizontalOffset={(e) => setHorizontalOffset(e.target.value)}
          handlerVerticalOffset={(e) => setVerticalOffset(e.target.value)}
          ration={ration}
          horizontalOffset={horizontalOffset}
          verticalOffset={verticalOffset}
        />
      </header>
      <main className="App-main">
        <Images
          ration={ration}
          horizontalOffset={horizontalOffset}
          verticalOffset={verticalOffset}
          height={height}
          img={img}
        />
      </main>
      <footer className="App-footer">
        <p>&copy; <a href="https://apelsinuraltango.ru/">Apelsin Ural Tango</a></p>
      </footer>
    </div>
  );
}

export default App;
