import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Splash from "./screens/Splash";
import LanguageSelector from "./screens/LanguageSelector";
import GuideSelector from "./screens/GuideSelector";
import Start from "./screens/Start";
import Menu from "./screens/Menu";
import Opener from "./screens/Opener";
import Info from "./screens/Info";
import Services from "./screens/Services";
import VideoPlayer from "./screens/VideoPlayer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/spalsh">spalsh</Link>
          <Link to="/language">language</Link>
          <Link to="/guide">guide</Link>
          <Link to="/start">start</Link>
          <Link to="/menu">menu</Link>
          <Link to="/opener">opener</Link>
          <Link to="/info">info</Link>
          <Link to="/services">services</Link>
          <Link to="/video">video</Link>
        </div>
        <hr />
        <Route exact path="/" component={Splash} />
        <Route exact path="/language" component={LanguageSelector} />
        <Route exact path="/guide" component={GuideSelector} />
        <Route exact path="/start" component={Start} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/opener" component={Opener} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/video" component={VideoPlayer} />
      </div>
    </Router>
  );
}
