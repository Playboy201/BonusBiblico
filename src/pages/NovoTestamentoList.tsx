import { Book, ArrowLeft, Sparkles } from 'lucide-react';
import novoTestamentoData from '../data/novo-testamento.json';
import { VersiculoExplicado } from '../types';

interface NovoTestamentoListProps {
    onBack: () => void;
}

export function NovoTestamentoList({ onBack }: NovoTestamentoListProps) {
    return (
        <div className="min-h-screen bg-[#fff5f5] dark:bg-gray-950 animate-fade-in">
            <div className="sticky top-0 z-50 bg-[#fff5f5]/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-red-100 dark:border-gray-800 mb-8">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                    <button
                        onClick={onBack}
                        className="text-sm text-red-900/60 dark:text-gray-400 hover:text-red-900 dark:hover:text-white flex items-center gap-2 transition-colors font-medium group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Voltar para Biblioteca
                    </button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                <div className="mb-12 text-center animate-slide-up">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl mb-4 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-500/10 group-hover:scale-150 transition-transform duration-700 rounded-full" />
                        <Book className="w-8 h-8 text-red-600 dark:text-red-400 relative z-10 group-hover:rotate-12 transition-transform" />
                    </div>
                    <h2 className="text-3xl font-bold text-red-900 dark:text-white flex items-center justify-center gap-2">
                        Novo Testamento
                        <Sparkles className="w-6 h-6 text-red-500 animate-pulse" />
                    </h2>
                    <p className="mt-3 text-red-800/70 dark:text-gray-400 max-w-2xl mx-auto">
                        100 versículos essenciais explicados para transformar sua vida e renovar sua mente.
                    </p>
                </div>

                <div className="space-y-6 pb-12">
                    {novoTestamentoData.versiculos.map((v: VersiculoExplicado, index: number) => (
                        <div
                            key={v.id}
                            className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-red-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:border-red-200 transition-all duration-300 animate-slide-up"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-xs font-bold shadow-lg shadow-red-200">
                                        {v.id}
                                    </span>
                                    <h3 className="text-xl font-bold text-red-900 dark:text-red-400">
                                        {v.referencia}
                                    </h3>
                                </div>

                                <div className="relative mb-6 group">
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-200 dark:bg-red-900/50 rounded-full group-hover:w-2 transition-all duration-300" />
                                    <p className="text-lg italic text-gray-700 dark:text-gray-300 leading-relaxed pl-2">
                                        "{v.texto}"
                                    </p>
                                </div>

                                <div className="bg-red-50/50 dark:bg-red-900/10 rounded-xl p-5 border border-red-100/50 dark:border-red-900/20 group-hover:bg-red-50 transition-colors duration-300">
                                    <h4 className="text-sm font-bold text-red-900 dark:text-red-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                                        Explicação
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {v.explicacao}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {novoTestamentoData.versiculos.length === 0 && (
                        <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border-2 border-dashed border-red-100 dark:border-gray-800 animate-pulse">
                            <p className="text-red-900/40 dark:text-gray-600 font-medium px-4">
                                Os versículos estão sendo preparados. Em breve estarão disponíveis aqui.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
