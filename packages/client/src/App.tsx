import Bot from './Bot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Summarizer from './Summarizer';
import Home from './Home';

function App() {
   return (
      <div>
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/chatbot" element={<Bot />} />
               <Route path="/summarizer" element={<Summarizer />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
