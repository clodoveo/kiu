import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AnimatedRoute } from "react-router-transition";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from "react-query";

import Splash from "./screens/Splash";
import LanguageSelector from "./screens/LanguageSelector";
import GuideSelector from "./screens/GuideSelector";
import Start from "./screens/Start";
import Menu from "./screens/Menu";
import Opener from "./screens/Opener";
import Info from "./screens/Info";
import Services from "./screens/Services";
import VideoPlayer from "./screens/VideoPlayer";

// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link to="/">spalsh</Link>
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
          <AnimatedRoute
            exact
            path="/"
            component={Splash}
            atEnter={{ offset: -100 }}
            atLeave={{ offset: 0 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              transform: `translateX(${styles.offset}%)`
            })}
          />
          <AnimatedRoute
            exact
            path="/language"
            component={LanguageSelector}
            atEnter={{ offset: -100 }}
            atLeave={{ offset: 0 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              transform: `translateX(${styles.offset}%)`
            })}
          />
          <Route exact path="/guide" component={GuideSelector} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/opener" component={Opener} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/video" component={VideoPlayer} />
        </div>
      </Router>
    </QueryClientProvider>
  );
}
