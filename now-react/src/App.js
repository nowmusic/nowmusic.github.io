import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./components/About";
import MainLayout from "./layouts/MainLayout";
import HowAreYou from "./components/HowAreYou";
import ChooseYourEmotion from "./components/ChooseYourEmotion";
import ShowPlayList from "./components/ShowPlayList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-are-you" element={<HowAreYou />} />
          <Route path="/how-are-you/:mood" element={<ChooseYourEmotion />} />
          <Route
            path="/how-are-you/:mood/:emotion"
            element={<ShowPlayList />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
