import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
import { Battles } from './pages/Battles';
import { Timeline } from './pages/Timeline';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useLoading } from './Context/LoadingContext';
import { motion } from 'framer-motion'; 
import { Conquests } from './pages/Conquests';
import { BattleMap } from './pages/BattleMap';

function App() {
  const { isLoading } = useLoading();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="min-h-screen bg-[#f8f4e8] rtl">
        {isLoading && <LoadingSpinner />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/battles" element={<Battles />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/conquests" element={<Conquests />} />
          <Route path="/battle-map" element={<BattleMap />} />
        </Routes>
      </div>
    </motion.div>
  );
}


export default App;