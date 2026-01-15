import { Trophy, ArrowLeft, Sparkles, Star } from 'lucide-react';
import colecaoOuroData from '../data/colecao-ouro.json';
import { VersiculoExplicado } from '../types';

interface ColecaoOuroListProps {
    onBack: () => void;
}

export function ColecaoOuroList({ onBack }: ColecaoOuroListProps) {
    return (
        <div className="min-h-screen bg-[#fffdf5] dark:bg-gray-950 animate-fade-in">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button
                    onClick={onBack}
                    className="mb-8 text-sm text-yellow-900/60 dark:text-gray-400 hover:text-yellow-900 dark:hover:text-white flex items-center gap-2 transition-colors font-medium group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Voltar para Biblioteca
                </button>

                <div className="mb-12 text-center animate-slide-up">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-100 to-amber-200 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-3xl mb-6 relative overflow-hidden group shadow-xl shadow-yellow-200/50 dark:shadow-none">
                        <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                        <Trophy className="w-10 h-10 text-yellow-600 dark:text-yellow-400 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-amber-800 dark:from-yellow-400 dark:to-amber-600 flex items-center justify-center gap-3">
                        <Star className="w-6 h-6 text-yellow-500 animate-spin-slow" />
                        Coleção de Ouro
                        <Star className="w-6 h-6 text-yellow-500 animate-spin-slow" />
                    </h2>
                    <p className="mt-4 text-yellow-900/70 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium">
                        200 versículos reveladores com explicações profundas para iluminar sua jornada espiritual.
                    </p>
                </div>

                <div className="space-y-8 pb-20">
                    {colecaoOuroData.versiculos.map((v: VersiculoExplicado, index: number) => (
                        <div
                            key={v.id}
                            className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-yellow-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:border-yellow-300 transition-all duration-500 animate-slide-up group"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="p-8 sm:p-10 relative">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Trophy className="w-20 h-20 text-yellow-600" />
                                </div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 text-white text-sm font-black shadow-lg shadow-yellow-200">
                                        {v.id}
                                    </div>
                                    <h3 className="text-2xl font-bold text-yellow-900 dark:text-yellow-400 group-hover:text-yellow-600 transition-colors">
                                        {v.referencia}
                                    </h3>
                                </div>

                                <div className="relative mb-8">
                                    <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full group-hover:w-2.5 transition-all duration-300" />
                                    <p className="text-xl italic text-gray-800 dark:text-gray-200 leading-relaxed pl-4 font-serif">
                                        "{v.texto}"
                                    </p>
                                </div>

                                <div className="bg-gradient-to-br from-yellow-50/50 to-amber-50/50 dark:from-yellow-900/10 dark:to-amber-900/10 rounded-2xl p-6 border border-yellow-100/50 dark:border-yellow-900/20 group-hover:from-yellow-50 transition-all duration-300">
                                    <h4 className="text-xs font-black text-yellow-800 dark:text-yellow-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-yellow-500" />
                                        Revelação Profunda
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                        {v.explicacao}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {colecaoOuroData.versiculos.length === 0 && (
                        <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-[3rem] border-2 border-dashed border-yellow-200 dark:border-gray-800 animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/20 to-transparent" />
                            <Trophy className="w-16 h-16 text-yellow-200 dark:text-gray-800 mx-auto mb-4" />
                            <p className="text-yellow-900/40 dark:text-gray-600 font-bold text-xl px-4 relative z-10">
                                A Coleção de Ouro está sendo preparada com carinho.<br />
                                <span className="text-sm font-medium">Em breve, 200 revelações exclusivas estarão aqui.</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
