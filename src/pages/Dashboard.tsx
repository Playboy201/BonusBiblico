import { Book, Scroll, Star } from 'lucide-react';

interface DashboardProps {
    onSelectCategory: (category: 'salmos' | 'proverbios') => void;
}

export function Dashboard({ onSelectCategory }: DashboardProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Biblioteca
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Salmos Card */}
                    <button
                        onClick={() => onSelectCategory('salmos')}
                        className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-left border border-gray-100 dark:border-gray-800"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Book className="w-24 h-24 text-amber-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Book className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                150 Salmos
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Reflexões e explicações versículo por versículo dos Salmos.
                            </p>
                        </div>
                    </button>

                    {/* Provérbios Card */}
                    <button
                        onClick={() => onSelectCategory('proverbios')}
                        className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-left border border-gray-100 dark:border-gray-800"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Scroll className="w-24 h-24 text-purple-500" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Scroll className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                Provérbios
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Sabedoria prática para o dia a dia, explicada por temas e blocos.
                            </p>
                        </div>
                    </button>

                    {/* Coming Soon Cards */}
                    <div className="group relative overflow-hidden bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 text-left opacity-60 cursor-not-allowed">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                                <Star className="w-6 h-6 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-2">
                                Evangelhos
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                Em breve: Mateus, Marcos, Lucas e João explicados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
