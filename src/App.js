import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KismetAIPage from './components/KismetAIPage';
import LandingPage from './components/LandingPage';
import TermsOfService from './components/TermsOfService';
import ChatWithGPT from './components/KismetAIPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/kismet-ai" element={<KismetAIPage />} /> */}
        <Route path="/kismet-ai" element={<ChatWithGPT />} />

        <Route path="/" element={<LandingPage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

      </Routes>
    </Router>
  );
}

export default App;
