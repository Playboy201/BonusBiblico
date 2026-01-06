import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { SalmoDetail } from './pages/SalmoDetail';
import { Dashboard } from './pages/Dashboard';
import { ProverbiosList } from './pages/ProverbiosList';
import { ProverbioDetail } from './pages/ProverbioDetail';
import { ThemeProvider } from './contexts/ThemeContext';
import salmosData from './data/salmos.json';
import proverbiosData from './data/proverbios.json';
import { Salmo, Proverbio } from './types';

type Category = 'salmos' | 'proverbios' | null;

function App() {
  const [currentCategory, setCurrentCategory] = useState<Category>(null);
  const [selectedSalmo, setSelectedSalmo] = useState<number | null>(null);
  const [selectedProverbio, setSelectedProverbio] = useState<number | null>(null);

  const handleCategorySelect = (category: Category) => {
    setCurrentCategory(category);
  };

  const handleBackToDashboard = () => {
    setCurrentCategory(null);
    setSelectedSalmo(null);
    setSelectedProverbio(null);
  };

  // Salmos Handlers
  const handleSalmoClick = (numero: number) => {
    setSelectedSalmo(numero);
  };

  const handleBackToSalmosList = () => {
    setSelectedSalmo(null);
  };

  // Provérbios Handlers
  const handleProverbioClick = (numero: number) => {
    setSelectedProverbio(numero);
  };

  const handleBackToProverbiosList = () => {
    setSelectedProverbio(null);
  };

  // Data retrieval
  const currentSalmo = selectedSalmo
    ? salmosData.salmos.find((s: Salmo) => s.numero === selectedSalmo)
    : null;

  const currentProverbio = selectedProverbio
    ? proverbiosData.proverbios.find((p: Proverbio) => p.numero === selectedProverbio)
    : null;

  const renderContent = () => {
    // 1. Dashboard (No category selected)
    if (!currentCategory) {
      return <Dashboard onSelectCategory={handleCategorySelect} />;
    }

    // 2. Salmos Flow
    if (currentCategory === 'salmos') {
      if (currentSalmo) {
        return <SalmoDetail salmo={currentSalmo} onBack={handleBackToSalmosList} />;
      }
      return (
        <div className="relative">
          <button
            onClick={handleBackToDashboard}
            className="absolute top-4 left-4 z-10 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-200 dark:border-gray-800"
          >
            ← Voltar
          </button>
          <Home onSalmoClick={handleSalmoClick} />
        </div>
      );
    }

    // 3. Provérbios Flow
    if (currentCategory === 'proverbios') {
      if (currentProverbio) {
        return <ProverbioDetail proverbio={currentProverbio} onBack={handleBackToProverbiosList} />;
      }
      return (
        <ProverbiosList
          onProverbioClick={handleProverbioClick}
          onBack={handleBackToDashboard}
        />
      );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
        <Header />
        {renderContent()}
      </div>
    </ThemeProvider>
  );
}

export default App;
