import classes from './App.module.css';
import TopDisplaySection from "./components/LandingSection/TopDisplaySection/TopDisplaySection";
import Programs from "./components/Programs/Programs";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Plans from "./components/Plans/Plans";


function App() {
  return (
    <div className={classes.App}>
      <TopDisplaySection />
      <Programs />
      <WhyChooseUs />
      <Plans />
    </div>
  );
}

export default App;
