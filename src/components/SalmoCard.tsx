import { BookOpen, ChevronRight } from 'lucide-react';
import { Salmo } from '../types';

interface SalmoCardProps {
  salmo: Salmo;
  onClick: () => void;
}

export function SalmoCard({ salmo, onClick }: SalmoCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-2.5 rounded-lg flex-shrink-0 group-hover:from-amber-200 group-hover:to-orange-200 dark:group-hover:from-amber-800/40 dark:group-hover:to-orange-800/40 transition-colors">
            <BookOpen className="w-5 h-5 text-amber-700 dark:text-amber-400" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded">
                Salmo {salmo.numero}
              </span>
            </div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1.5 line-clamp-1">
              {salmo.titulo.replace(`Salmo ${salmo.numero} - `, '')}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
              {salmo.reflexao}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
              {salmo.versiculos.length} {salmo.versiculos.length === 1 ? 'versículo' : 'versículos'}
            </p>
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors flex-shrink-0 mt-1" />
      </div>
    </button>
  );
}
