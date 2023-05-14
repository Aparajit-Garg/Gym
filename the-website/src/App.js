import classes from './App.module.css';
import TopDisplaySection from "./components/LandingSection/TopDisplaySection/TopDisplaySection";
import Programs from "./components/Programs/Programs";


function App() {
  return (
    <div className={classes.App}>
      <TopDisplaySection />
      <Programs />
    </div>
  );
}

export default App;
