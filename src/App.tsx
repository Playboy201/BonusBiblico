import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { SalmoDetail } from './pages/SalmoDetail';
import { ThemeProvider } from './contexts/ThemeContext';
import salmosData from './data/salmos.json';
import { Salmo } from './types';

function App() {
  const [selectedSalmo, setSelectedSalmo] = useState<number | null>(null);

  const handleSalmoClick = (numero: number) => {
    setSelectedSalmo(numero);
  };

  const handleBack = () => {
    setSelectedSalmo(null);
  };

  const currentSalmo = selectedSalmo
    ? salmosData.salmos.find((s: Salmo) => s.numero === selectedSalmo)
    : null;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
        <Header />
        {currentSalmo ? (
          <SalmoDetail salmo={currentSalmo} onBack={handleBack} />
        ) : (
          <Home onSalmoClick={handleSalmoClick} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
