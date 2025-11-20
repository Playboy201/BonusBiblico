import { useEffect, useState } from 'react';
import { Sparkles, Clock } from 'lucide-react';
import { PalavraDoDia } from '../types';
import { getPalavraDoDia, getTimeUntilNextWord } from '../utils/dailyWord';
import salmosData from '../data/salmos.json';

export function DailyWordBanner({ onSalmoClick }: { onSalmoClick: (numero: number) => void }) {
  const [palavraDoDia, setPalavraDoDia] = useState<PalavraDoDia | null>(null);
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const palavra = getPalavraDoDia(salmosData.salmos);
    setPalavraDoDia(palavra);
    setTimeRemaining(getTimeUntilNextWord());

    const interval = setInterval(() => {
      const newPalavra = getPalavraDoDia(salmosData.salmos);
      setPalavraDoDia(newPalavra);
      setTimeRemaining(getTimeUntilNextWord());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!palavraDoDia) return null;

  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 border border-amber-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-xl shadow-md flex-shrink-0">
          <Sparkles className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Palavra do Dia
            </h2>
            <span className="text-xs bg-amber-100 dark:bg-gray-700 text-amber-800 dark:text-amber-300 px-2 py-1 rounded-full font-medium">
              {palavraDoDia.salmo.titulo}
            </span>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3 border border-amber-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Versículo {palavraDoDia.versiculo.numero}
            </p>
            <p className="text-base text-gray-900 dark:text-white font-medium mb-3 leading-relaxed">
              "{palavraDoDia.versiculo.texto}"
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {palavraDoDia.versiculo.explicacao}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => onSalmoClick(palavraDoDia.salmo.numero)}
              className="text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              Ler salmo completo →
            </button>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Nova palavra em {timeRemaining}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
