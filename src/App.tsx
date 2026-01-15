import { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { SalmoDetail } from './pages/SalmoDetail';
import { Dashboard } from './pages/Dashboard';
import { ProverbiosList } from './pages/ProverbiosList';
import { ProverbioDetail } from './pages/ProverbioDetail';
import { MateusList } from './pages/MateusList';
import { MateusDetail } from './pages/MateusDetail';
import { MarcosList } from './pages/MarcosList';
import { MarcosDetail } from './pages/MarcosDetail';
import { LucasList } from './pages/LucasList';
import { LucasDetail } from './pages/LucasDetail';
import { JoaoList } from './pages/JoaoList';
import { JoaoDetail } from './pages/JoaoDetail';
import { AntigoTestamentoList } from './pages/AntigoTestamentoList';
import { NovoTestamentoList } from './pages/NovoTestamentoList';
import { ColecaoOuroList } from './pages/ColecaoOuroList';
import { ThemeProvider } from './contexts/ThemeContext';
import salmosData from './data/salmos.json';
import proverbiosData from './data/proverbios.json';
import mateusData from './data/mateus.json';
import marcosData from './data/marcos.json';
import lucasData from './data/lucas.json';
import joaoData from './data/joao.json';
import colecaoOuroData from './data/colecao-ouro.json';
import { Salmo, Proverbio, Mateus, Marcos, Lucas, Joao, Category } from './types';


function App() {
  const [currentCategory, setCurrentCategory] = useState<Category>(null);
  const [selectedSalmo, setSelectedSalmo] = useState<number | null>(null);
  const [selectedProverbio, setSelectedProverbio] = useState<number | null>(null);
  const [selectedMateus, setSelectedMateus] = useState<number | null>(null);
  const [selectedMarcos, setSelectedMarcos] = useState<number | null>(null);
  const [selectedLucas, setSelectedLucas] = useState<number | null>(null);
  const [selectedJoao, setSelectedJoao] = useState<number | null>(null);

  const handleCategorySelect = (category: Category) => {
    setCurrentCategory(category);
  };

  const handleBackToDashboard = () => {
    setCurrentCategory(null);
    setSelectedSalmo(null);
    setSelectedProverbio(null);
    setSelectedMateus(null);
    setSelectedMarcos(null);
    setSelectedLucas(null);
    setSelectedJoao(null);
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

  // Mateus Handlers
  const handleMateusClick = (numero: number) => {
    setSelectedMateus(numero);
  };

  const handleBackToMateusList = () => {
    setSelectedMateus(null);
  };

  // Marcos Handlers
  const handleMarcosClick = (numero: number) => {
    setSelectedMarcos(numero);
  };

  const handleBackToMarcosList = () => {
    setSelectedMarcos(null);
  };

  // Lucas Handlers
  const handleLucasClick = (numero: number) => {
    setSelectedLucas(numero);
  };

  const handleBackToLucasList = () => {
    setSelectedLucas(null);
  };

  // João Handlers
  const handleJoaoClick = (numero: number) => {
    setSelectedJoao(numero);
  };

  const handleBackToJoaoList = () => {
    setSelectedJoao(null);
  };

  // Data retrieval
  const currentSalmo = selectedSalmo
    ? salmosData.salmos.find((s: Salmo) => s.numero === selectedSalmo)
    : null;

  const currentProverbio = selectedProverbio
    ? proverbiosData.proverbios.find((p: Proverbio) => p.numero === selectedProverbio)
    : null;

  const currentMateus = selectedMateus
    ? mateusData.capitulos.find((m: Mateus) => m.numero === selectedMateus)
    : null;

  const currentMarcos = selectedMarcos
    ? marcosData.capitulos.find((m: Marcos) => m.numero === selectedMarcos)
    : null;

  const currentLucas = selectedLucas
    ? lucasData.capitulos.find((l: Lucas) => l.numero === selectedLucas)
    : null;

  const currentJoao = selectedJoao
    ? joaoData.capitulos.find((j: Joao) => j.numero === selectedJoao)
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
        <div>
          <div className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
              <button
                onClick={handleBackToDashboard}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2"
              >
                ← Voltar para Biblioteca
              </button>
            </div>
          </div>
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

    // 4. Mateus Flow
    if (currentCategory === 'mateus') {
      if (currentMateus) {
        return <MateusDetail mateus={currentMateus} onBack={handleBackToMateusList} />;
      }
      return (
        <MateusList
          onMateusClick={handleMateusClick}
          onBack={handleBackToDashboard}
        />
      );
    }

    // 4.5 Marcos Flow
    if (currentCategory === 'marcos') {
      if (currentMarcos) {
        return <MarcosDetail marcos={currentMarcos} onBack={handleBackToMarcosList} />;
      }
      return (
        <MarcosList
          onMarcosClick={handleMarcosClick}
          onBack={handleBackToDashboard}
        />
      );
    }

    // 4.6 Lucas Flow
    if (currentCategory === 'lucas') {
      if (currentLucas) {
        return <LucasDetail lucas={currentLucas} onBack={handleBackToLucasList} />;
      }
      return (
        <LucasList
          onLucasClick={handleLucasClick}
          onBack={handleBackToDashboard}
        />
      );
    }

    // 4.7 João Flow
    if (currentCategory === 'joao') {
      if (currentJoao) {
        return <JoaoDetail joao={currentJoao} onBack={handleBackToJoaoList} />;
      }
      return (
        <JoaoList
          onJoaoClick={handleJoaoClick}
          onBack={handleBackToDashboard}
        />
      );
    }

    // 5. Antigo Testamento Flow
    if (currentCategory === 'antigo-testamento') {
      return (
        <AntigoTestamentoList
          onBack={handleBackToDashboard}
        />
      );
    }

    // 6. Novo Testamento Flow
    if (currentCategory === 'novo-testamento') {
      return (
        <NovoTestamentoList
          onBack={handleBackToDashboard}
        />
      );
    }

    // 7. Coleção de Ouro Flow
    if (currentCategory === 'colecao-ouro') {
      return (
        <ColecaoOuroList
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
