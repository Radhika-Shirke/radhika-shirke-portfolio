import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Navbar from "./utils/navbar/navbar";
import VideoShowcase from "./components/VideoShowcase";

const App = () => (
  <div className="container">
  <Navbar/>
  <VideoShowcase/>
  </div>
);
const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)