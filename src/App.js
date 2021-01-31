import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Footer from "./components/Footer";
import "./styles.css";

export default function App(props) {
  return (
    <div className="App">
      <Header />
      <Input />
      <Footer />
    </div>
  );
}
