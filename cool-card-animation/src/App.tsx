import { AnimatedBox } from "./components/animated-box";
import vandroukaLogo from "./assets/images/vandrouka-logo-sm.png";
import scootLogo from "./assets/images/scoot-logo-sm.svg";
import { Volleyball, Airplay, Brain, Cat, Bug } from "lucide-react";

function App() {
  return (
    <div className="wrapper">
      <AnimatedBox
        image={vandroukaLogo}
        description="How startup uses Fibery for game development"
        companyName="Vandrouka"
      >
        <Volleyball size={20} className="icono" />
        <Airplay size={20} className="icono" />
        <Brain size={20} className="icono" />
        <Cat size={20} className="icono" />
      </AnimatedBox>
      <AnimatedBox
        image={scootLogo}
        description="How product company collaborates on roadmaps and sprints"
        companyName="ScootAPI"
      >
        <Bug size={20} className="icono" />
        <Volleyball size={20} className="icono" />
        <Brain size={20} className="icono" />
      </AnimatedBox>
      {/* <AnimatedBox image={ companyLogo } description="How startup uses Fibery for game development"  companyName="Vandrouka"/> */}
    </div>
  );
}

export default App;
