import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div className="App">
        =========== 1 ===========
      <Users/>
        =========== 2 ===========

        <Posts/>
        =========== 3 ===========
        <Comments/>

    </div>
  );
}

export default App;
