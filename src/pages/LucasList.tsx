interface LucasListProps {
    onLucasClick: (numero: number) => void;
    onBack: () => void;
}

export function LucasList({ onLucasClick, onBack }: LucasListProps) {
    const capitulos = Array.from({ length: 24 }, (_, i) => i + 1);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <div className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <button
                        onClick={onBack}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2"
                    >
                        ← Voltar para Biblioteca
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Evangelho de Lucas
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Explicações detalhadas de cada capítulo do Evangelho de Lucas
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
                    {capitulos.map((numero) => (
                        <button
                            key={numero}
                            onClick={() => onLucasClick(numero)}
                            className="group relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:shadow-lg transition-all duration-200"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                    {numero}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Capítulo
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
