import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import More from "./pages/More";
import Layout from "./pages/layouts/Layout";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="more" element={<More />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
