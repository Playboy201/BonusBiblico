const fs = require('fs');
const path = 'src/data/mateus.json';

try {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));

    const cap27 = {
        numero: 27,
        titulo: "Evangelho de Mateus — Capítulo 27",
        intro: "Explicação completa dos versículos 1–66",
        blocos: [
            {
                versiculos: "1–10",
                titulo: "Judas se arrepende e se suicida",
                explicacao: "Após trair Jesus, Judas sente remorso, mas não busca perdão. Mostra que consciência culpada sem arrependimento genuíno leva à destruição."
            },
            {
                versiculos: "11–26",
                titulo: "Jesus diante de Pilatos",
                explicacao: "O julgamento político evidencia injustiça e medo humano. Pilatos reconhece a inocência de Jesus, mas cede à pressão da multidão. A corrupção e covardia humanas são confrontadas com a verdade divina."
            },
            {
                versiculos: "27–31",
                titulo: "Humilhação e escárnio",
                explicacao: "Jesus é zombado, coroado de espinhos e vestido como rei falso. A cena revela o contraste entre poder humano superficial e autoridade espiritual verdadeira."
            },
            {
                versiculos: "32–44",
                titulo: "Crucificação",
                explicacao: "Jesus é crucificado. Sofrimento e abandono mostram a profundidade do sacrifício e a identificação com a humanidade. Mesmo entre criminosos, Ele permanece fiel."
            },
            {
                versiculos: "45–56",
                titulo: "Morte e sinais sobrenaturais",
                explicacao: "A escuridão e terremoto simbolizam o impacto universal da morte de Cristo. O véu do templo rasgado mostra acesso direto a Deus pela fé."
            },
            {
                versiculos: "57–66",
                titulo: "Sepultamento",
                explicacao: "Jesus é sepultado por José de Arimateia. Guardas e selo reforçam a certeza histórica da morte. Mostra a seriedade do plano de salvação."
            }
        ],
        sintese: [
            "Arrependimento sem fé verdadeira é inútil",
            "Justiça humana muitas vezes falha",
            "Verdadeira autoridade não é de aparência, mas de Deus",
            "Sacrifício de Cristo é completo e redentor",
            "A morte revela juízo divino e acesso à salvação"
        ]
    };

    const cap28 = {
        numero: 28,
        titulo: "Evangelho de Mateus — Capítulo 28",
        intro: "Explicação completa dos versículos 1–20",
        blocos: [
            {
                versiculos: "1–10",
                titulo: "Ressurreição",
                explicacao: "Maria Madalena e a outra Maria encontram o túmulo vazio. O anjo anuncia que Jesus ressuscitou. A vitória sobre a morte confirma divindade e cumprimento da promessa."
            },
            {
                versiculos: "11–15",
                titulo: "Incredulidade e mentira",
                explicacao: "Alguns líderes tentam negar a ressurreição, espalhando falsidade. Mostra resistência humana à verdade divina, mas não pode impedir o plano de Deus."
            },
            {
                versiculos: "16–20",
                titulo: "Grande Comissão",
                explicacao: "Jesus aparece aos discípulos e envia-os a todas as nações, instruindo-os a ensinar, batizar e obedecer a seus mandamentos. Ressalta autoridade completa e presença constante: “estarei convosco todos os dias”."
            }
        ],
        sintese: [
            "A ressurreição confirma poder e promessa divina",
            "A verdade de Deus é imutável, mesmo diante da oposição",
            "Cristo envia discípulos com autoridade e missão",
            "Obediência e ensino do evangelho são essenciais",
            "Presença e apoio de Deus acompanham a missão"
        ]
    };

    // Check if chapters already exist to avoid duplicates
    const exists27 = data.capitulos.some(c => c.numero === 27);
    const exists28 = data.capitulos.some(c => c.numero === 28);

    if (!exists27) data.capitulos.push(cap27);
    if (!exists28) data.capitulos.push(cap28);

    fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
    console.log('Successfully updated mateus.json');
} catch (error) {
    console.error('Error updating mateus.json:', error.message);
    process.exit(1);
}
