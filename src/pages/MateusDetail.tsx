import { Mateus } from '../types';
import { BookOpen, ArrowLeft } from 'lucide-react';

interface MateusDetailProps {
    mateus: Mateus;
    onBack: () => void;
}

export function MateusDetail({ mateus, onBack }: MateusDetailProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <button
                        onClick={onBack}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para Mateus
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-sm opacity-90">Capítulo {mateus.numero}</div>
                                <h1 className="text-2xl font-bold">{mateus.titulo}</h1>
                            </div>
                        </div>
                        <p className="text-blue-100">{mateus.intro}</p>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {mateus.blocos.map((bloco, index) => (
                            <div
                                key={index}
                                className="mb-8 last:mb-0 pb-8 last:pb-0 border-b last:border-b-0 border-gray-200 dark:border-gray-800"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                        <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
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
                        {mateus.sintese && mateus.sintese.length > 0 && (
                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                    Síntese do Capítulo
                                </h3>
                                <ul className="space-y-2">
                                    {mateus.sintese.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                                        >
                                            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-xs font-bold mt-0.5">
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
