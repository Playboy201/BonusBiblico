const fs = require('fs');
const path = 'src/data/lucas.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const newChapters = [
    {
        "numero": 22,
        "titulo": "Evangelho de Lucas — Capítulo 22",
        "intro": "Explicação detalhada dos versículos 1–71",
        "blocos": [
            {
                "versiculos": "1–6",
                "titulo": "Conspiração de Judas",
                "explicacao": "Judas Iscariotes, um dos discípulos de Jesus, se aproxima dos líderes religiosos com a intenção de trair Jesus. Ele aceita vender Cristo por dinheiro, mostrando como o coração humano pode ser corrompido pela ganância e pelo egoísmo. Este episódio revela a liberdade de escolha que cada ser humano possui, mesmo dentro do plano de Deus, e a importância de manter integridade e vigilância, pois a proximidade com o divino não garante fidelidade verdadeira."
            },
            {
                "versiculos": "7–20",
                "titulo": "A Última Ceia",
                "explicacao": "Jesus celebra a Páscoa com seus discípulos e institui a ceia do Senhor, transformando o pão e o vinho em símbolos de seu corpo e sangue entregues pela humanidade. Aqui, Ele mostra que a verdadeira comunhão com Deus exige reconhecimento do sacrifício e participação consciente na obra de salvação. Cada gesto e palavra de Jesus neste momento aponta para a necessidade de obediência, de arrependimento e de vivência prática da fé, que não pode ser apenas teórica ou formal."
            },
            {
                "versiculos": "21–30",
                "titulo": "Predição da traição e discussões entre os discípulos",
                "explicacao": "Jesus anuncia que será traído, e os discípulos demonstram ansiedade e orgulho, discutindo entre si quem seria o maior no Reino. Essa situação revela como mesmo os mais próximos de Cristo podem ser influenciados pelo ego e pelo desejo de prestígio, confundindo ambição humana com liderança espiritual. Jesus ensina que a verdadeira grandeza no Reino de Deus não está na posição, mas na humildade e no serviço."
            },
            {
                "versiculos": "31–38",
                "titulo": "Getsêmani",
                "explicacao": "Jesus se retira para orar em profundo sofrimento, antecipando o peso da cruz e da separação temporária da humanidade. Ele demonstra total submissão à vontade do Pai, ensinando que a oração é o sustento do coração diante da angústia e da responsabilidade. Mesmo sendo o Filho de Deus, Ele enfrenta o medo e a dor, mostrando que a confiança plena em Deus é o fundamento da resistência espiritual."
            },
            {
                "versiculos": "39–53",
                "titulo": "Prisão de Jesus",
                "explicacao": "Judas identifica Jesus com um beijo, mostrando que gestos externos de proximidade não garantem fidelidade verdadeira. Jesus é preso, mas mantém a calma e a autoridade, demonstrando que a entrega à vontade de Deus deve prevalecer sobre as circunstâncias externas e a traição humana."
            },
            {
                "versiculos": "54–62",
                "titulo": "Negação de Pedro",
                "explicacao": "Pedro, apesar de afirmar amor e lealdade, nega Jesus três vezes. Este episódio evidencia a fragilidade humana e a facilidade de ceder ao medo, mesmo quando se tem convicção da verdade. O arrependimento e a restauração são possíveis, mas dependem da humildade em reconhecer o erro e voltar a confiar em Deus."
            },
            {
                "versiculos": "63–71",
                "titulo": "Julgamento religioso",
                "explicacao": "Jesus é julgado pelos líderes religiosos de forma injusta, denunciando a corrupção e a manipulação do poder humano. Ele mantém sua integridade e cumpre o plano de Deus, mostrando que a fidelidade à verdade divina é mais importante que a aprovação humana."
            }
        ],
        "sintese": [
            "Ganância corrompe o coração",
            "Comunhão exige sacrifício e obediência",
            "Grandeza no Reino é serviço",
            "Oração é o sustento na angústia",
            "Fidelidade à verdade supera aprovação humana"
        ]
    },
    {
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
    },
    {
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
    }
];

data.capitulos.push(...newChapters);
fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
console.log('Successfully updated lucas.json');
