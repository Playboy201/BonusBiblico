import { ArrowLeft, Share2, BookmarkCheck } from 'lucide-react';
import { Salmo, Versiculo } from '../types';
import { useEffect, useState } from 'react';

interface SalmoDetailProps {
  salmo: Salmo;
  onBack: () => void;
}

export function SalmoDetail({ salmo, onBack }: SalmoDetailProps) {
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const readSalmos = JSON.parse(localStorage.getItem('salmos_lidos') || '[]');
    setIsRead(readSalmos.includes(salmo.numero));

    if (!readSalmos.includes(salmo.numero)) {
      readSalmos.push(salmo.numero);
      localStorage.setItem('salmos_lidos', JSON.stringify(readSalmos));
      setIsRead(true);
    }

    document.title = `${salmo.titulo} - Bíblia Explicada`;
    return () => {
      document.title = 'Bíblia Explicada';
    };
  }, [salmo]);

  const handleShare = async (versiculo?: Versiculo) => {
    const text = versiculo
      ? `${salmo.titulo} - Versículo ${versiculo.numero}\n\n"${versiculo.texto}"\n\n${versiculo.explicacao}`
      : `${salmo.titulo}\n\n${salmo.reflexao}`;

    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(text);
      alert('Copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="sticky top-0 z-50 bg-gray-50/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Voltar para lista</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-amber-500 p-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                  <span className="text-white text-sm font-bold">Salmo {salmo.numero}</span>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  {salmo.titulo.replace(`Salmo ${salmo.numero} - `, '')}
                </h1>
              </div>
              {isRead && (
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <BookmarkCheck className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
          </div>

          <div className="p-8">
            <div className="bg-amber-50 dark:bg-gray-900 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
              <h2 className="text-sm font-bold text-amber-900 dark:text-amber-400 uppercase tracking-wide mb-2">
                Reflexão Inicial
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {salmo.reflexao}
              </p>
            </div>

            <div className="space-y-6">
              {salmo.versiculos.map((versiculo: Versiculo) => (
                <div
                  key={versiculo.numero}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                      Versículo {versiculo.numero}
                    </span>
                    <button
                      onClick={() => handleShare(versiculo)}
                      className="text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      aria-label="Compartilhar versículo"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  <blockquote className="text-lg text-gray-900 dark:text-white font-medium mb-4 leading-relaxed italic border-l-4 border-amber-400 pl-4">
                    "{versiculo.texto}"
                  </blockquote>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide mb-2">
                      Explicação
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {versiculo.explicacao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => handleShare()}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:from-amber-500 hover:to-orange-600 transition-all shadow-md hover:shadow-lg"
              >
                <Share2 className="w-5 h-5" />
                Compartilhar Salmo Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
