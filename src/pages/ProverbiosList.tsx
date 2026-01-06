import { Scroll } from 'lucide-react';
import proverbiosData from '../data/proverbios.json';
import { Proverbio } from '../types';

interface ProverbiosListProps {
    onProverbioClick: (numero: number) => void;
    onBack: () => void;
}

export function ProverbiosList({ onProverbioClick, onBack }: ProverbiosListProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button
                    onClick={onBack}
                    className="mb-6 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 transition-colors"
                >
                    ← Voltar para Biblioteca
                </button>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                        <Scroll className="w-8 h-8 text-purple-500" />
                        Provérbios
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Escolha um capítulo para ler a explicação.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {proverbiosData.proverbios.map((prov: Proverbio) => (
                        <button
                            key={prov.numero}
                            onClick={() => onProverbioClick(prov.numero)}
                            className="group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-left border border-gray-100 dark:border-gray-800"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                                    Capítulo {prov.numero}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                {prov.titulo}
                            </h3>
                            {prov.intro && (
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                    {prov.intro}
                                </p>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
