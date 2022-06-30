import poster from './poster.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header"></header>
      <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
        <img src={poster} className=" App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
