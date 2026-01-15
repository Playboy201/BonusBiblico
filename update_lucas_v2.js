const fs = require('fs');
const path = 'src/data/lucas.json';

try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const data = JSON.parse(fileContent);

    const ch22 = {
        "numero": 22,
        "titulo": "Evangelho de Lucas — Capítulo 22",
        "intro": "Explicação detalhada dos versículos 1–71",
        "blocos": [
            {
                "versiculos": "1–6",
                "titulo": "Conspiração para matar Jesus",
                "explicacao": "Os líderes religiosos procuram uma forma discreta de eliminar Jesus, pois temem a reação do povo. Judas, um dos doze, oferece-se para traí-lo. Este trecho mostra como interesses pessoais, medo de perder poder e ganância podem se unir para rejeitar a verdade. A traição não surge de forma repentina, mas de um coração que já vinha se afastando silenciosamente."
            },
            {
                "versiculos": "7–20",
                "titulo": "A última ceia e a nova aliança",
                "explicacao": "Jesus celebra a Páscoa com os discípulos e redefine seu significado. O pão e o vinho passam a representar sua entrega total pela humanidade. Ele institui uma nova aliança baseada não em sacrifícios repetidos, mas em sua própria vida oferecida. A ceia ensina que a comunhão com Deus exige memória, participação consciente e compromisso com o sacrifício de Cristo."
            },
            {
                "versiculos": "21–30",
                "titulo": "A traição anunciada e a falsa busca por grandeza",
                "explicacao": "Mesmo após o anúncio da traição, os discípulos discutem quem seria o maior entre eles. Jesus corrige essa mentalidade, mostrando que no Reino de Deus a grandeza se manifesta no serviço e na disposição de se colocar em favor do outro. Liderança espiritual não se baseia em status, mas em entrega."
            },
            {
                "versiculos": "31–38",
                "titulo": "Advertência a Pedro e preparo espiritual",
                "explicacao": "Jesus alerta Pedro sobre sua negação iminente, mas também afirma que sua fé seria restaurada. Isso mostra que Deus conhece a fragilidade humana e, ainda assim, trabalha na restauração. Jesus prepara os discípulos para tempos difíceis, ensinando que a caminhada com Ele não será isenta de oposição."
            },
            {
                "versiculos": "39–46",
                "titulo": "Oração no Getsêmani",
                "explicacao": "Jesus enfrenta profunda angústia diante da cruz. Em oração, submete sua vontade à do Pai. Esse momento revela que a obediência verdadeira não ignora o sofrimento, mas escolhe confiar mesmo quando o caminho é doloroso. A oração aparece como sustento essencial diante da pressão extrema."
            },
            {
                "versiculos": "47–53",
                "titulo": "A prisão de Jesus",
                "explicacao": "Judas identifica Jesus com um beijo, transformando um gesto de afeto em símbolo de traição. Jesus não reage with violência e demonstra domínio espiritual sobre a situação. Ele aceita a prisão como parte do cumprimento da vontade de Deus, revelando que o Reino não avança pela força."
            },
            {
                "versiculos": "54–62",
                "titulo": "A negação de Pedro",
                "explicacao": "Pedro, tomado pelo medo, nega conhecer Jesus três vezes. O encontro de olhares entre Jesus e Pedro marca profundamente esse momento. A cena revela a fragilidade humana e a dor do arrependimento, mostrando que falhas não anulam a possibilidade de restauração."
            },
            {
                "versiculos": "63–71",
                "titulo": "Julgamento religioso",
                "explicacao": "Jesus é zombado, agredido e condenado injustamente pelas autoridades religiosas. Mesmo assim, mantém sua identidade e afirmação como Filho de Deus. O julgamento evidencia como a religião, quando desconectada da verdade e do amor, pode se tornar instrumento de injustiça."
            }
        ],
        "sintese": [
            "O afastamento do coração precede a traição",
            "A nova aliança é baseada na entrega de Cristo",
            "Grandeza no Reino se expressa pelo serviço",
            "Oração sustenta a obediência em tempos difíceis",
            "Falhas humanas não impedem a restauração divina"
        ]
    };

    const ch23 = {
        "numero": 23,
        "titulo": "Evangelho de Lucas — Capítulo 23",
        "intro": "Explicação detalhada dos versículos 1–56",
        "blocos": [
            {
                "versiculos": "1–25",
                "titulo": "Julgamento diante de Pilatos",
                "explicacao": "Jesus é levado a Pilatos e julgado injustamente. A multidão e os líderes religiosos preferem Barrabás à justiça de Deus, pressionando a autoridade romana para condenar Jesus. Este capítulo revela como a pressão social e o medo podem distorcer a justiça humana. A decisão de Pilatos demonstra que a verdade pode ser ignorada diante de interesses pessoais ou coletivos, mas Deus mantém seu propósito inalterado."
            },
            {
                "versiculos": "26–31",
                "titulo": "Caminho para o Gólgota",
                "explicacao": "Jesus carrega a cruz até o local da execução, mostrando que a obediência e o amor divino se manifestam no sofrimento voluntário. Ele não resiste, ensinando que assumir responsabilidades e enfrentar a dor faz parte da missão de quem segue o caminho do Reino de Deus. A caminhada simboliza o preço do discipulado e a necessidade de coragem diante das dificuldades inevitáveis."
            },
            {
                "versiculos": "32–43",
                "titulo": "Crucificação",
                "explicacao": "Jesus é crucificado entre dois criminosos. Um deles reconhece sua culpa e pede perdão, recebendo promessa de salvação imediata. Isso demonstra que o arrependimento genuíno, mesmo no último momento, é ouvido e acolhido por Deus. Jesus também sofre ao ver o desprezo e a incredulidade das pessoas, revelando a profundidade do amor divino pela humanidade, mesmo diante da rejeição."
            },
            {
                "versiculos": "44–49",
                "titulo": "Trevas e morte",
                "explicacao": "Durante sua crucificação, sinais extraordinários ocorrem, como trevas sobre a terra e a morte física de Jesus. Esses sinais reforçam que a morte de Cristo cumpre um propósito divino e não é um evento comum. Ele permanece íntegro, mesmo sob sofrimento extremo, exemplificando que a fidelidade a Deus supera qualquer circunstância humana."
            },
            {
                "versiculos": "50–56",
                "titulo": "Sepultamento",
                "explicacao": "José de Arimateia e outros discípulos sepultam Jesus com cuidado e respeito, demonstrando reverência e integridade diante do sofrimento e da morte. O cuidado com o corpo de Jesus mostra a importância de honrar o propósito de Deus e preparar o caminho para a ressurreição."
            }
        ],
        "sintese": [
            "Pressão social pode distorcer a justiça",
            "Obediência se manifesta no sacrifício",
            "Arrependimento genuíno é sempre acolhido",
            "A morte de Cristo cumpre o propósito divino",
            "Honrar a Deus exige integridade até o fim"
        ]
    };

    const ch24 = {
        "numero": 24,
        "titulo": "Evangelho de Lucas — Capítulo 24",
        "intro": "Explicação detalhada dos versículos 1–53",
        "blocos": [
            {
                "versiculos": "1–12",
                "titulo": "Ressurreição anunciada",
                "explicacao": "As mulheres encontram o túmulo vazio e recebem a notícia da ressurreição de Jesus. Inicialmente, elas não compreendem totalmente o que aconteceu, mas a narrativa mostra que Deus cumpre Suas promessas mesmo quando os seres humanos falham ou se confundem. A ressurreição confirma que Jesus é o Senhor da vida e que a morte não tem poder final sobre quem está em Deus."
            },
            {
                "versiculos": "13–35",
                "titulo": "Caminho de Emaús",
                "explicacao": "Dois discípulos caminham para Emaús, conversando sobre os acontecimentos recentes, sem perceber que Jesus está com eles. Ele explica as Escrituras, mostrando que todas as profecias apontam para Ele, e finalmente se revela ao partir o pão. Esse episódio ensina que a compreensão plena da Palavra e a presença de Cristo são percebidas através da atenção cuidadosa, da reflexão e da comunhão com os irmãos."
            },
            {
                "versiculos": "36–49",
                "titulo": "Jesus aparece aos discípulos",
                "explicacao": "Jesus aparece aos discípulos em Jerusalém, mostrando suas mãos e pés feridos e explicando que sua morte e ressurreição cumpriram as Escrituras. Ele promete enviar o Espírito Santo como guia e força para a missão de anunciar o Reino. Isso demonstra que a fé deve ser informada pelo conhecimento das Escrituras e sustentada pelo poder do Espírito, capacitando os discípulos a continuar a obra de Deus with coragem e clareza."
            },
            {
                "versiculos": "50–53",
                "titulo": "Ascensão",
                "explicacao": "Jesus conduz os discípulos até Betânia, abençoa-os e ascende aos céus, mostrando que sua presença física termina, mas seu propósito continua. Os discípulos retornam a Jerusalém cheios de alegria, preparados para levar adiante a missão que receberam. A ascensão demonstra que o trabalho de Deus continua através daqueles que obedecem, ouvem a Palavra e permanecem unidos no Espírito."
            }
        ],
        "sintese": [
            "Deus cumpre Suas promessas",
            "A ressurreição confirma a vitória sobre a morte",
            "A Palavra e a comunhão revelam Cristo",
            "O Espírito Santo capacita para a missão",
            "O propósito de Deus continua através da obediência"
        ]
    };

    // Remove existing chapters 22, 23, 24 if they exist (to avoid duplicates if script is re-run)
    data.capitulos = data.capitulos.filter(c => c.numero < 22);

    data.capitulos.push(ch22, ch23, ch24);

    fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
    console.log('Successfully updated lucas.json');
} catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
}
