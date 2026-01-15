import { Book, Scroll, Star, Trophy, Search, Heart, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface DashboardProps {
    onSelectCategory: (category: Exclude<Category, null>) => void;
}

export function Dashboard({ onSelectCategory }: DashboardProps) {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 pb-12 pt-8 lg:pt-12">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=2835&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] dark:opacity-[0.05]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-semibold tracking-wide uppercase mb-4 animate-slide-up">
                            <Sparkles className="w-3 h-3" />
                            Nova Versão 2.0
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
                            Redescubra a Palavra de Deus com <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Profundidade e Clareza</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Uma jornada guiada versículo por versículo para fortalecer sua fé, iluminar seu entendimento e transformar sua vida diária.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative group animate-slide-up" style={{ animationDelay: '100ms' }}>
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 dark:focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all shadow-lg shadow-gray-100/50 dark:shadow-none"
                            placeholder="Busque por tema, sentimento ou livro bíblico..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-sans font-medium text-gray-400">
                                <span className="text-base">⌘</span>K
                            </kbd>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Book className="w-6 h-6 text-amber-500" />
                        Sua Biblioteca
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Marcos Card - Comece por aqui */}
                    <Card
                        title="Marcos"
                        subtitle="O Servo Sofredor"
                        description="Uma jornada dinâmica pelos milagres e ações de Jesus. Ideal para quem busca entender o coração de Cristo em ação."
                        icon={<Star className="w-6 h-6 text-orange-600 dark:text-orange-400" />}
                        color="orange"
                        tag="Comece por aqui"
                        meta="16 Capítulos • Narrativa"
                        onClick={() => onSelectCategory('marcos')}
                    />

                    {/* Salmos Card - Momentos difíceis */}
                    <Card
                        title="Salmos"
                        subtitle="150 Salmos Explicados"
                        description="Encontre consolo e direção em cada oração. Uma análise detalhada para transformar sua leitura em um encontro real com Deus."
                        icon={<Book className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
                        color="amber"
                        tag="Recomendado para momentos difíceis"
                        meta="150 Capítulos • Devocional"
                        onClick={() => onSelectCategory('salmos')}
                    />

                    {/* Provérbios Card - Leitura diária */}
                    <Card
                        title="Provérbios"
                        subtitle="Sabedoria de Salomão"
                        description="Princípios eternos para decisões diárias. Entenda a sabedoria prática de Deus aplicada à sua vida financeira, familiar e emocional."
                        icon={<Scroll className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                        color="purple"
                        tag="Leitura diária"
                        meta="31 Capítulos • Sabedoria"
                        onClick={() => onSelectCategory('proverbios')}
                    />

                    {/* Coleção de Ouro - Destaque */}
                    <div className="md:col-span-2 lg:col-span-3">
                        <button
                            onClick={() => onSelectCategory('colecao-ouro')}
                            className="w-full group relative overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 p-8 text-left border border-yellow-200 dark:border-yellow-800/50"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <Trophy className="w-64 h-64 text-yellow-600 rotate-12" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900/40 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                                        <Trophy className="w-10 h-10 text-yellow-600 dark:text-yellow-400" />
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 rounded-full bg-yellow-200 dark:bg-yellow-900/60 text-yellow-800 dark:text-yellow-200 text-xs font-bold uppercase tracking-wider">
                                            Inspiração Premium
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors">
                                        Coleção de Ouro
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl">
                                        Uma seleção preciosa de versículos impactantes. Revelações profundas para momentos específicos da sua caminhada.
                                    </p>
                                    <div className="flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        <span className="flex items-center gap-1.5">
                                            <Book className="w-4 h-4" /> 200 Versículos
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Sparkles className="w-4 h-4" /> Temático
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 self-end md:self-center">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center group-hover:bg-yellow-600 transition-colors shadow-lg shadow-yellow-500/30">
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Mateus Card */}
                    <Card
                        title="Mateus"
                        subtitle="O Evangelho do Reino"
                        description="Acompanhe a vida de Jesus e o Sermão do Monte versículo por versículo. Compreenda o cumprimento das profecias."
                        icon={<Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                        color="blue"
                        tag="Estudo profundo"
                        meta="28 Capítulos • Estudo"
                        onClick={() => onSelectCategory('mateus')}
                    />

                    {/* Lucas Card */}
                    <Card
                        title="Lucas"
                        subtitle="O Filho do Homem"
                        description="A narrativa mais detalhada da vida de Cristo. Explore as parábolas e a humanidade perfeita de Jesus com explicações ricas."
                        icon={<Star className="w-6 h-6 text-red-600 dark:text-red-400" />}
                        color="red"
                        tag="Estudo profundo"
                        meta="24 Capítulos • Histórico"
                        onClick={() => onSelectCategory('lucas')}
                    />

                    {/* João Card */}
                    <Card
                        title="João"
                        subtitle="O Verbo Divino"
                        description="Mergulhe na divindade de Cristo e no amor de Deus. Uma leitura espiritual profunda sobre a luz, a vida e a verdade."
                        icon={<Star className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
                        color="cyan"
                        tag="Reflexão Espiritual"
                        meta="21 Capítulos • Teológico"
                        onClick={() => onSelectCategory('joao')}
                    />

                    {/* Antigo Testamento */}
                    <Card
                        title="Antigo Testamento"
                        subtitle="Fundamentos da Fé"
                        description="As raízes da nossa fé explicadas. Uma seleção dos textos mais importantes da Antiga Aliança para entender o plano de Deus."
                        icon={<Book className="w-6 h-6 text-amber-900 dark:text-amber-400" />}
                        color="amber"
                        tag="Essencial"
                        meta="100 Versículos • Doutrina"
                        onClick={() => onSelectCategory('antigo-testamento')}
                    />

                    {/* Novo Testamento */}
                    <Card
                        title="Novo Testamento"
                        subtitle="A Nova Aliança"
                        description="O coração do Evangelho em 100 passagens chaves. Entenda a graça, a salvação e a vida cristã com clareza."
                        icon={<Book className="w-6 h-6 text-rose-600 dark:text-rose-400" />}
                        color="rose"
                        tag="Essencial"
                        meta="100 Versículos • Doutrina"
                        onClick={() => onSelectCategory('novo-testamento')}
                    />
                </div>
            </div>
        </div>
    );
}

interface CardProps {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    color: 'amber' | 'purple' | 'blue' | 'orange' | 'red' | 'cyan' | 'rose';
    tag?: string;
    meta: string;
    onClick: () => void;
}

function Card({ title, subtitle, description, icon, color, tag, meta, onClick }: CardProps) {
    const colorClasses = {
        amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50',
        purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50',
        blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50',
        orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50',
        red: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 group-hover:bg-red-200 dark:group-hover:bg-red-900/50',
        cyan: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900/50',
        rose: 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 group-hover:bg-rose-200 dark:group-hover:bg-rose-900/50',
    };

    const tagColors = {
        amber: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200',
        purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200',
        blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200',
        orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200',
        red: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200',
        cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-200',
        rose: 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200',
    };

    return (
        <button
            onClick={onClick}
            className="group relative flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 text-left border border-gray-100 dark:border-gray-800 overflow-hidden"
        >
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/30 text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="w-4 h-4" />
                </div>
            </div>

            <div className="relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${colorClasses[color]}`}>
                        {icon}
                    </div>
                    {tag && (
                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${tagColors[color]}`}>
                            {tag}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {title}
                </h3>
                <p className="text-sm font-medium text-amber-600 dark:text-amber-500 mb-3">
                    {subtitle}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            <div className="relative z-10 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {meta}
                    </span>
                </div>
            </div>
        </button>
    );
}
