import { Hero, Home, Layout } from "./router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <Layout>
          <Home />
        </Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
