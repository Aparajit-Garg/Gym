import classes from './App.module.css';
import TopDisplaySection from "./components/LandingSection/TopDisplaySection/TopDisplaySection";
import Programs from "./components/Programs/Programs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/ContactUs/Contact";
import SocialPages from './components/SocialPages/SocialPages';
import Donate from "./components/Donate/Donate";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className={classes.App}>
      <Router>
        <Routes>
            <Route path="/" element={[<TopDisplaySection />, 
                                      <Programs />, 
                                      <WhyChooseUs />, 
                                      <Plans />, 
                                      <Testimonials />, 
                                      <Contact />, 
                                      <SocialPages />]} />

            <Route path="/buy-me-a-sandwich" element={<Donate />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
