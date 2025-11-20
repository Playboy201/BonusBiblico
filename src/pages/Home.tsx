import { useState, useMemo } from 'react';
import { SearchBar } from '../components/SearchBar';
import { SalmoCard } from '../components/SalmoCard';
import { DailyWordBanner } from '../components/DailyWordBanner';
import { Salmo } from '../types';
import salmosData from '../data/salmos.json';

interface HomeProps {
  onSalmoClick: (numero: number) => void;
}

export function Home({ onSalmoClick }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSalmos = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();
    if (!search) return salmosData.salmos;

    return salmosData.salmos.filter((salmo: Salmo) => {
      const matchNumber = salmo.numero.toString().includes(search);
      const matchTitle = salmo.titulo.toLowerCase().includes(search);
      const matchReflexao = salmo.reflexao.toLowerCase().includes(search);
      const matchVersiculos = salmo.versiculos.some(
        v => v.texto.toLowerCase().includes(search) ||
             v.explicacao.toLowerCase().includes(search)
      );

      return matchNumber || matchTitle || matchReflexao || matchVersiculos;
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DailyWordBanner onSalmoClick={onSalmoClick} />

        <div className="mt-8 mb-6">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>

        {filteredSalmos.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Nenhum salmo encontrado para "{searchTerm}"
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {filteredSalmos.length} {filteredSalmos.length === 1 ? 'salmo encontrado' : 'salmos encontrados'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredSalmos.map((salmo: Salmo) => (
                <SalmoCard
                  key={salmo.numero}
                  salmo={salmo}
                  onClick={() => onSalmoClick(salmo.numero)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
