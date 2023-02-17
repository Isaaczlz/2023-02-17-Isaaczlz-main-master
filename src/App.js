import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Ships from "./components/Ships/Ships";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/ships" element={<Ships />} />
        <Route exact path="/character/create" element={<CreateCharacter />} />
        <Route exact path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}
export default App;
