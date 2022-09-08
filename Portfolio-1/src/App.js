import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
// 27:09 time: 3:40PM Wasted for above an hour ! now I'm Praying ASR and Smoking a cigrette and then get started with the first component.
// Back on 4:00PM

// 45:51 time: 4:54PM Took 5 mins Break and now another 1 ! be right back.
// Back on 5:22PM

// 1:30:21 time: 6:46PM Take a break for isha prayer, Maybe Lunch! and Smoke a cigreete !
// Back on 7:45PM (Isha, Lunch, Sometime with Mama, w a3at 3ala el srer 7wali 10mins) 