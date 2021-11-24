import './App.css';
import fb from './fb.jpg';

function App() {
  return (
    <div className="App">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Gardens and flowers</h1>
          <br />
              </div>

          <img src="/fb1.jpg"  />
          <br />
          <img src={fb} alt="fb" />
          <br />
          <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;