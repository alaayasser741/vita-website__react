import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Calculations from "./Pages/Calculations/Calculations";
import FirstAid from "./Pages/FirstAid/FirstAid";
import Subjects from "./Pages/MidcalSubjects/Subjects";
import News from "./Pages/News/News";
import Articles from "./Pages/Articles/Articles";
import ViewCalc from "./Pages/ViewCal/ViewCalc";

function App() {
  return (
    <div className="App">
          
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/calculations" element={<Calculations />} />
            <Route path="/viewCalc" element={<ViewCalc />} />
            <Route path="/firstAid" element={<FirstAid />} />
            <Route path="/news" element={<News />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
