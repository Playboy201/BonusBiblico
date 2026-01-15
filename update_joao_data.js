const fs = require('fs');
const path = 'c:\\Users\\PLAYBOY\\Documents\\PLR estruturas\\BonusBiblico\\BonusBiblico\\src\\data\\joao.json';

try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const data = JSON.parse(fileContent);

    const newChapters = [
        {
            "numero": 4,
            "titulo": "Evangelho de João — Capítulo 4",
            "intro": "Explicação completa dos versículos 1–54",
            "blocos": [
                {
                    "versiculos": "1–6",
                    "titulo": "Jesus e a Decisão de Passar por Samaria",
                    "explicacao": "Jesus decide passar por Samaria, uma região evitada pelos judeus. Essa escolha não é geográfica, mas espiritual: revela que a salvação não se limita a barreiras culturais, religiosas ou étnicas. Jesus se mostra cansado fisicamente, destacando sua humanidade."
                },
                {
                    "versiculos": "7–26",
                    "titulo": "A Mulher Samaritana e a Água Viva",
                    "explicacao": "No diálogo com a mulher, Jesus rompe preconceitos e revela conhecer profundamente sua vida. Ele oferece a 'água viva', simbolizando a vida eterna que satisfaz plenamente a alma. A revelação messiânica é direta: Jesus afirma claramente que Ele é o Cristo."
                },
                {
                    "versiculos": "27–30",
                    "titulo": "Transformação e Testemunho",
                    "explicacao": "A mulher, antes marginalizada, torna-se testemunha. Seu encontro com Jesus gera mudança imediata e missão. Ela deixa o cântaro, simbolizando que sua antiga busca foi substituída por algo maior."
                },
                {
                    "versiculos": "31–38",
                    "titulo": "O Alimento Espiritual",
                    "explicacao": "Jesus ensina que sua verdadeira comida é fazer a vontade do Pai. Ele revela que a obra de Deus exige visão espiritual: a colheita já está pronta, e os discípulos são chamados a participar dela."
                },
                {
                    "versiculos": "39–54",
                    "titulo": "Fé dos Samaritanos e Cura do Filho do Oficial",
                    "explicacao": "Os samaritanos creem não apenas pelo testemunho da mulher, mas pela palavra de Jesus. A cura à distância do filho do oficial demonstra que a fé verdadeira confia na palavra de Cristo antes mesmo de ver o resultado."
                }
            ],
            "sintese": [
                "Jesus rompe barreiras culturais e religiosas",
                "Somente Cristo satisfaz a sede espiritual",
                "O encontro com Jesus gera testemunho",
                "A verdadeira adoração é em espírito e verdade",
                "A fé confia na palavra de Jesus"
            ]
        },
        {
            "numero": 5,
            "titulo": "Evangelho de João — Capítulo 5",
            "intro": "Explicação completa dos versículos 1–47",
            "blocos": [
                {
                    "versiculos": "1–9",
                    "titulo": "A Cura no Tanque de Betesda",
                    "explicacao": "Jesus cura um homem enfermo há 38 anos, mostrando compaixão e autoridade. Ele não depende de rituais ou superstição; sua palavra é suficiente para restaurar completamente."
                },
                {
                    "versiculos": "10–18",
                    "titulo": "Conflito sobre o Sábado",
                    "explicacao": "A cura ocorre no sábado, gerando conflito com os líderes judeus. Jesus revela que o sábado não limita a ação de Deus e declara sua igualdade com o Pai, intensificando a oposição religiosa."
                },
                {
                    "versiculos": "19–30",
                    "titulo": "A Autoridade do Filho",
                    "explicacao": "Jesus afirma que tudo o que o Pai faz, o Filho também faz. Ele possui autoridade para dar vida e julgar, evidenciando sua divindade e papel central na salvação."
                },
                {
                    "versiculos": "31–40",
                    "titulo": "Testemunhos sobre Jesus",
                    "explicacao": "Jesus apresenta múltiplas testemunhas: João Batista, suas obras, o Pai e as Escrituras. Ainda assim, muitos recusam vir a Ele para receber vida."
                },
                {
                    "versiculos": "41–47",
                    "titulo": "A Condenação da Incredulidade",
                    "explicacao": "Jesus denuncia a busca por glória humana e revela que Moisés, em quem confiavam, testemunha contra eles, pois escreveu a respeito do Messias."
                }
            ],
            "sintese": [
                "Jesus tem autoridade sobre a enfermidade",
                "A religião sem fé pode cegar",
                "O Filho age em perfeita unidade com o Pai",
                "As Escrituras apontam para Cristo",
                "Rejeitar Jesus é rejeitar a vida"
            ]
        },
        {
            "numero": 6,
            "titulo": "Evangelho de João — Capítulo 6",
            "intro": "Explicação completa dos versículos 1–71",
            "blocos": [
                {
                    "versiculos": "1–15",
                    "titulo": "A Multiplicação dos Pães",
                    "explicacao": "Jesus alimenta uma grande multidão, revelando seu poder criador. O milagre aponta para algo maior: Ele é a provisão de Deus para a fome física e espiritual."
                },
                {
                    "versiculos": "16–21",
                    "titulo": "Jesus Anda sobre o Mar",
                    "explicacao": "Jesus demonstra autoridade sobre a natureza. Sua presença remove o medo e conduz os discípulos em meio ao caos, revelando que Ele é soberano mesmo nas tempestades."
                },
                {
                    "versiculos": "22–40",
                    "titulo": "O Pão da Vida",
                    "explicacao": "Jesus declara ser o pão que desceu do céu. Ele confronta uma fé baseada apenas em milagres e chama o povo a crer nEle como a fonte da vida eterna."
                },
                {
                    "versiculos": "41–59",
                    "titulo": "Um Ensino Difícil",
                    "explicacao": "A linguagem simbólica sobre comer sua carne e beber seu sangue escandaliza muitos. Jesus ensina que somente quem participa espiritualmente de sua vida tem comunhão com Deus."
                },
                {
                    "versiculos": "60–71",
                    "titulo": "Abandono e Confissão de Fé",
                    "explicacao": "Muitos abandonam Jesus por não aceitarem seus ensinos. Pedro confessa: 'Tu tens as palavras de vida eterna'. A verdadeira fé permanece mesmo quando não entende tudo."
                }
            ],
            "sintese": [
                "Jesus é a provisão completa de Deus",
                "Cristo domina a natureza e o caos",
                "A fé verdadeira vai além dos milagres",
                "Nem todos aceitam o ensino de Jesus",
                "Somente Cristo tem palavras de vida eterna"
            ]
        },
        {
            "numero": 7,
            "titulo": "Evangelho de João — Capítulo 7",
            "intro": "Explicação completa dos versículos 1–53",
            "blocos": [
                {
                    "versiculos": "1–13",
                    "titulo": "A Incredulidade dos Irmãos de Jesus",
                    "explicacao": "Jesus permanece na Galileia evitando a Judeia, onde os líderes procuram matá-lo. Seus próprios irmãos não creem nele e o desafiam a se manifestar publicamente na Festa dos Tabernáculos. Jesus responde que seu tempo ainda não chegou, mas o tempo deles está sempre pronto porque o mundo não os odeia. Ele sobe à festa secretamente, enquanto há divisão entre o povo sobre sua identidade."
                },
                {
                    "versiculos": "14–24",
                    "titulo": "Jesus Ensina no Templo",
                    "explicacao": "No meio da festa, Jesus ensina abertamente no templo. Os judeus se admiram de seu conhecimento sem educação formal. Jesus explica que sua doutrina não é sua, mas daquele que o enviou. Ele confronta a hipocrisia religiosa deles: acusam-no de violar o sábado curando, mas eles mesmos circuncidam no sábado. Jesus os convoca a julgar com justiça, não pela aparência."
                },
                {
                    "versiculos": "25–36",
                    "titulo": "Será Este o Cristo?",
                    "explicacao": "O povo de Jerusalém questiona se Jesus é realmente o Messias, argumentando que conhecem sua origem, enquanto a origem do Cristo seria misteriosa. Jesus proclama que eles não o conhecem verdadeiramente nem ao Pai que o enviou. As autoridades tentam prendê-lo, mas sua hora ainda não havia chegado. Jesus declara que em breve partirá para onde eles não podem ir, gerando confusão sobre seu destino."
                },
                {
                    "versiculos": "37–44",
                    "titulo": "Rios de Água Viva",
                    "explicacao": "No último e grande dia da festa, Jesus convida os sedentos a virem a ele e beberem. Ele promete que rios de água viva fluirão do interior de quem crê nele — uma referência ao Espírito Santo que seria dado após sua glorificação. Isso causa nova divisão: alguns o reconhecem como profeta ou Cristo, outros rejeitam por sua origem galileia, ignorando que ele nasceu em Belém."
                },
                {
                    "versiculos": "45–53",
                    "titulo": "A Resistência das Autoridades",
                    "explicacao": "Os guardas enviados para prender Jesus retornam de mãos vazias, impressionados: 'Jamais alguém falou como este homem'. Os fariseus os repreende e desprezam a multidão como ignorante da lei. Nicodemos tenta defendê-lo, questionando se é justo condenar alguém sem ouvi-lo primeiro, mas é ridicularizado. Cada um volta para casa, evidenciando que a rejeição oficial continua apesar das evidências."
                }
            ],
            "sintese": [
                "O tempo de Deus não é controlado por pressões humanas",
                "A verdadeira doutrina vem do Pai, não de sistemas religiosos",
                "Jesus é a fonte da água viva — o Espírito Santo",
                "A origem de Jesus é tanto humilde quanto divina",
                "A rejeição oficial não anula o impacto de suas palavras"
            ]
        },
        {
            "numero": 8,
            "titulo": "Evangelho de João — Capítulo 8",
            "intro": "Explicação completa dos versículos 1–59",
            "blocos": [
                {
                    "versiculos": "1–11",
                    "titulo": "A Mulher Apanhada em Adultério",
                    "explicacao": "Os escribas e fariseus trazem uma mulher surpreendida em adultério, testando Jesus para acusá-lo. Se ele a perdoasse, violaria a Lei de Moisés; se ordenasse apedrejamento, contrariaria sua mensagem de misericórdia. Jesus responde sabiamente: 'Aquele que dentre vós está sem pecado seja o primeiro que atire pedra'. Todos se retiram, e Jesus não a condena, mas ordena: 'Vai e não peques mais'. Ele equilibra perfeitamente graça e santidade."
                },
                {
                    "versiculos": "12–20",
                    "titulo": "A Luz do Mundo",
                    "explicacao": "Jesus declara ser a luz do mundo, prometendo que quem o segue não andará em trevas. Os fariseus contestam seu testemunho como inválido. Jesus responde que seu testemunho é verdadeiro porque sabe de onde veio e para onde vai, e que o Pai testifica com ele. Eles julgam segundo a carne; Jesus não julga assim, mas se julgar, seu juízo é verdadeiro porque não está só."
                },
                {
                    "versiculos": "21–30",
                    "titulo": "Para Onde Vou, Vós Não Podeis Ir",
                    "explicacao": "Jesus anuncia sua partida e alerta que eles morrerão em seus pecados se não crerem que 'EU SOU'. Quando questionam 'Quem és tu?', ele responde que é aquilo que tem dito desde o princípio. Explica que quando levantarem o Filho do Homem (referência à crucificação), conhecerão que ele é o EU SOU e que nada faz por si mesmo, mas conforme o Pai ensinou. Muitos creem nele por essas palavras."
                },
                {
                    "versiculos": "31–47",
                    "titulo": "A Verdade Liberta",
                    "explicacao": "Jesus promete aos que creem que a verdade os libertará. Os judeus protestam, alegando serem descendência de Abraão e nunca terem sido escravos. Jesus esclarece que fala da escravidão ao pecado e que somente o Filho pode libertar verdadeiramente. Embora sejam descendentes biológicos de Abraão, suas obras provam que seu pai espiritual é o diabo, homicida e pai da mentira desde o princípio. A verdade de Jesus expõe suas intenções assassinas."
                },
                {
                    "versiculos": "48–59",
                    "titulo": "Antes que Abraão Existisse, EU SOU",
                    "explicacao": "Os judeus o acusam de ser samaritano e endemoninhado. Jesus responde que honra o Pai, e quem guarda sua palavra jamais verá a morte. Eles intensificam a acusação, pois Abraão e os profetas morreram. Jesus declara que Abraão se alegrou por ver seu dia. Quando questionam como ele, com menos de cinquenta anos, viu Abraão, Jesus pronuncia a mais alta declaração de divindade: 'Antes que Abraão existisse, EU SOU' — usando o nome divino de Êxodo 3:14. Tomam pedras para apedrejá-lo, mas Jesus se oculta e sai do templo."
                }
            ],
            "sintese": [
                "Jesus oferece misericórdia e transformação, não condenação",
                "Seguir Cristo é andar na luz e escapar das trevas",
                "A verdadeira liberdade vem da verdade de Cristo",
                "A filiação espiritual se revela nas obras, não na genética",
                "Jesus é o EU SOU eterno, preexistente a Abraão"
            ]
        },
        {
            "numero": 9,
            "titulo": "Evangelho de João — Capítulo 9",
            "intro": "Explicação completa dos versículos 1–41",
            "blocos": [
                {
                    "versiculos": "1–12",
                    "titulo": "A Cura do Cego de Nascença",
                    "explicacao": "Jesus e os discípulos encontram um homem cego de nascença. Os discípulos perguntam se o pecado dele ou de seus pais causou a cegueira. Jesus rejeita essa teologia simplista: a cegueira existe para que as obras de Deus sejam manifestadas. Ele faz lodo com saliva, unta os olhos do cego e ordena que se lave no tanque de Siloé. O homem obedece e volta vendo. Seus vizinhos ficam espantados e divididos sobre sua identidade."
                },
                {
                    "versiculos": "13–23",
                    "titulo": "O Interrogatório dos Fariseus",
                    "explicacao": "Levam o ex-cego aos fariseus, que descobrem que a cura ocorreu no sábado. Dividem-se: alguns dizem que Jesus não é de Deus por violar o sábado; outros questionam como um pecador faria tal sinal. Interrogam o homem, que responde simplesmente: 'Ele é profeta'. Não acreditando, chamam seus pais, que confirmam ser ele o filho cego de nascença, mas com medo de serem expulsos da sinagoga, recusam-se a dizer como foi curado."
                },
                {
                    "versiculos": "24–34",
                    "titulo": "A Corajosa Defesa do Ex-Cego",
                    "explicacao": "Chamam o homem novamente, exigindo que dê glória a Deus e admita que Jesus é pecador. Ele responde com ironia brilhante: 'Se ele é pecador, não sei; uma coisa sei: eu era cego e agora vejo'. Quando pressionado sobre como aconteceu, responde sarcasticamente se querem se tornar discípulos também. Os fariseus o insultam, dizendo serem discípulos de Moisés. O homem argumenta logicamente: é extraordinário que não saibam de onde Jesus vem, quando ele abriu os olhos de um cego — algo nunca visto. Deus não ouve pecadores, mas quem o teme. Expulsam-no furiosamente."
                },
                {
                    "versiculos": "35–38",
                    "titulo": "A Revelação ao Que Foi Curado",
                    "explicacao": "Jesus ouve que o homem foi expulso e o procura. Pergunta se ele crê no Filho de Deus. O homem, ainda sem saber quem é Jesus fisicamente, pergunta quem é para que creia nele. Jesus se revela: 'Tu já o viste, e é ele quem fala contigo'. O homem responde com adoração: 'Creio, Senhor' e o adora. Sua jornada da cegueira física à visão espiritual está completa."
                },
                {
                    "versiculos": "39–41",
                    "titulo": "A Cegueira Espiritual dos Fariseus",
                    "explicacao": "Jesus declara ter vindo ao mundo para juízo: para que os que não veem vejam, e os que veem se tornem cegos. Os fariseus presentes perguntam se também são cegos. Jesus responde que se fossem cegos, não teriam pecado, mas porque dizem 'Nós vemos', seu pecado permanece. A cegueira espiritual voluntária é pior que a ignorância, pois rejeita deliberadamente a luz quando ela se manifesta."
                }
            ],
            "sintese": [
                "Nem todo sofrimento resulta de pecado pessoal",
                "As obras de Deus se manifestam em situações impossíveis",
                "A religiosidade pode cegar para a verdade evidente",
                "Encontros com Jesus transformam vítimas em testemunhas",
                "A maior cegueira é espiritual: recusar ver quando a luz se revela"
            ]
        }
    ];

    // Remove duplicates if any
    const existingNumbers = new Set(newChapters.map(c => c.numero));
    data.capitulos = data.capitulos.filter(c => !existingNumbers.has(c.numero));

    data.capitulos.push(...newChapters);
    data.capitulos.sort((a, b) => a.numero - b.numero);

    fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
    console.log('Successfully updated joao.json');
} catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
}
