import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import movie from './movie.json'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {
          movie.map((ele) => {
            return (
            <Movies
             title={ele.Title}
             year={ele.Year}
             img={ele.Poster}
            />
            )
          })
        }
        
      </div>
    </div>
  );
}

export default App;
