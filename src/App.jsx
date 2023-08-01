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
        <Route path="/browser" element={
        <Layout>
          <Home />
        </Layout>} />
        <Route path="/charts" element={
        <Layout>
          <Home />
        </Layout>} />
        <Route path="/artists" element={
        <Layout>
          <Home />
        </Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
