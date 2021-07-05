import AddPost from './AddPost';
import './App.css';
import EditPost from './EditPost';
import PostList from './PostList';
import {BrowserRouter ,Route} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:'maroon',color:'lightslategray'}}>POSTING FILE</h1>
      <BrowserRouter>
      <Route exact path='/' component={PostList} />
      <Route exact path='/addPost' component={AddPost} />
      <Route exact path='/editPost/:postid' component={EditPost} />
      </BrowserRouter>
    </div>
  );
}

export default App;
