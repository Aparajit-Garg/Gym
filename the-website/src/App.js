import classes from './App.module.css';
import TopDisplaySection from "./components/LandingSection/TopDisplaySection/TopDisplaySection";
import Programs from "./components/Programs/Programs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/ContactUs/Contact";
import SocialPages from './components/SocialPages/SocialPages';

function App() {
  return (
    <div className={classes.App}>
      <TopDisplaySection />
      <Programs />
      <WhyChooseUs />
      <Plans />
      <Testimonials />
      <Contact />
      <SocialPages />
    </div>
  );
}

export default App;
