import { Joao } from '../types';
import { BookOpen, ArrowLeft } from 'lucide-react';

interface JoaoDetailProps {
    joao: Joao;
    onBack: () => void;
}

export function JoaoDetail({ joao, onBack }: JoaoDetailProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <div className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <button
                        onClick={onBack}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para João
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-sm opacity-90">Capítulo {joao.numero}</div>
                                <h1 className="text-2xl font-bold">{joao.titulo}</h1>
                            </div>
                        </div>
                        <p className="text-cyan-50">{joao.intro}</p>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {joao.blocos.map((bloco, index) => (
                            <div
                                key={index}
                                className="mb-8 last:mb-0 pb-8 last:pb-0 border-b last:border-b-0 border-gray-200 dark:border-gray-800"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center">
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm">
                                            {bloco.versiculos}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {bloco.titulo}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {bloco.explicacao}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Síntese */}
                        {joao.sintese && joao.sintese.length > 0 && (
                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                    Síntese do Capítulo
                                </h3>
                                <ul className="space-y-2">
                                    {joao.sintese.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                                        >
                                            <span className="flex-shrink-0 w-6 h-6 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-xs font-bold mt-0.5">
                                                {index + 1}
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
