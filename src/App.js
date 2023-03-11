import './App.css';
import Comment from './Comment'

function App() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };
  return (
    <div className='App'>
      <h1>Hello Warrior12</h1>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
        />
    </div>
  );
}
export default App;