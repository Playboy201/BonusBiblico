import { Book, ArrowLeft } from 'lucide-react';
import antigoTestamentoData from '../data/antigo-testamento.json';
import { VersiculoExplicado } from '../types';

interface AntigoTestamentoListProps {
    onBack: () => void;
}

export function AntigoTestamentoList({ onBack }: AntigoTestamentoListProps) {
    return (
        <div className="min-h-screen bg-[#fdfaf6] dark:bg-gray-950">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button
                    onClick={onBack}
                    className="mb-8 text-sm text-amber-900/60 dark:text-gray-400 hover:text-amber-900 dark:hover:text-white flex items-center gap-2 transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar para Biblioteca
                </button>

                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl mb-4">
                        <Book className="w-8 h-8 text-amber-900 dark:text-amber-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-amber-900 dark:text-white">
                        Antigo Testamento
                    </h2>
                    <p className="mt-3 text-amber-800/70 dark:text-gray-400 max-w-2xl mx-auto">
                        100 versículos fundamentais explicados para fortalecer sua fé e entendimento da Palavra.
                    </p>
                </div>

                <div className="space-y-6 pb-12">
                    {antigoTestamentoData.versiculos.map((v: VersiculoExplicado) => (
                        <div
                            key={v.id}
                            className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-amber-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-900 text-white text-xs font-bold">
                                        {v.id}
                                    </span>
                                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-400">
                                        {v.referencia}
                                    </h3>
                                </div>

                                <div className="relative mb-6">
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-200 dark:bg-amber-900/50 rounded-full" />
                                    <p className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed pl-2">
                                        "{v.texto}"
                                    </p>
                                </div>

                                <div className="bg-amber-50/50 dark:bg-amber-900/10 rounded-xl p-5 border border-amber-100/50 dark:border-amber-900/20">
                                    <h4 className="text-sm font-bold text-amber-900 dark:text-amber-400 uppercase tracking-wider mb-2">
                                        Explicação
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {v.explicacao}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {antigoTestamentoData.versiculos.length === 0 && (
                        <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border-2 border-dashed border-amber-100 dark:border-gray-800">
                            <p className="text-amber-900/40 dark:text-gray-600 font-medium px-4">
                                Os versículos estão sendo preparados. Em breve estarão disponíveis aqui.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
