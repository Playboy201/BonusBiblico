import { ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Proverbio, BlocoExplicacao } from '../types';

interface ProverbioDetailProps {
    proverbio: Proverbio;
    onBack: () => void;
}

export function ProverbioDetail({ proverbio, onBack }: ProverbioDetailProps) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 pb-12">
            {/* Navigation Bar */}
            <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="p-2 -ml-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>

                    <div className="flex gap-2">
                        <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                            <Bookmark className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 pt-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 rounded-full">
                        Capítulo {proverbio.numero}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {proverbio.titulo}
                    </h1>
                    {proverbio.intro && (
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {proverbio.intro}
                        </p>
                    )}
                </div>

                {/* Content Blocks */}
                <div className="space-y-8">
                    {proverbio.blocos.map((bloco: BlocoExplicacao, index: number) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-bold">
                                    Versículos {bloco.versiculos}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {bloco.titulo}
                                </h3>
                            </div>

                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                    {bloco.explicacao}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Síntese do Capítulo */}
                {proverbio.sintese && proverbio.sintese.length > 0 && (
                    <div className="mt-12 mb-8">
                        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 md:p-8 border border-purple-100 dark:border-purple-800/30">
                            <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-6 flex items-center gap-2">
                                <span className="text-2xl">💡</span> Síntese do Capítulo
                            </h3>
                            <ul className="space-y-4">
                                {proverbio.sintese.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
