import poster from './poster.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header"></header>
      <img src={poster} className="col-lg-10 col-md-12 col-sm-12 col-xs-12 App-logo" alt="logo" />
    </div>
  );
}

export default App;
