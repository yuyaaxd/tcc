const questoes = [
    {
      id: 1,
      Questão:
        "Qual é o seu nível de experiência com cuidados de plantas?",
      pergunta: [
        {
          texto: "Sou um iniciante e gostaria de começar com algo fácil de cuidar.",
          pegar: "suculenta",
        },
        {
          texto: "Considero-me um jardineiro experiente e estou disposto a enfrentar desafios.",
          pegar: "ornamental",
        },
        {
          texto: "Já tenho alguma experiência, mas não quero algo muito exigente.",
          pegar: "suculenta",
        },
        {
          texto: "Não tenho experiência, mas estou disposto a aprender e dedicar tempo aos cuidados.",
          pegar: "ornamental",
        },
      ],
    },
    {
      id: 2,
      Questão:
        "Você prefere uma planta que necessite de regas frequentes ou uma que possa tolerar períodos mais longos sem água? ",
      pergunta: [
        {
          texto: "Prefiro regar com frequência para manter a planta sempre viçosa.",
          pegar: "ornamental",
        },
        {
          texto: "Gostaria de algo que não morra se eu esquecer de regar ocasionalmente.",
          pegar: "suculenta",
        },
        {
          texto: "Não me importo de regar regularmente, desde que a planta seja única.",
          pegar: "ornamental",
        },
        {
          texto: "Quero algo que possa sobreviver mesmo se eu não regar com muita frequência.",
          pegar: "suculenta",
        },
      ],
    },
    {
      id: 3,
      Questão:
        "Quanta luz natural está disponível no local onde você pretende colocar a planta?",
      pergunta: [
        {
          texto: "Muita luz natural; meu espaço é bem iluminado durante a maior parte do dia.",
          pegar: "suculenta",
        },
        {
          texto: "Luz moderada; tenho algumas janelas, mas não muita luz direta do sol.",
          pegar: "ornamental",
        },
        {
          texto: "Tenho pouca luz natural disponível, mas posso usar iluminação artificial.",
          pegar: "ornamental",
        },
        {
          texto: "Às vezes tenho muita luz, às vezes menos.",
          pegar: "suculenta",
        },
      ],
    },
    {
      id: 4,
      Questão: "Qual é o tamanho do espaço disponível para a planta?",
      pergunta: [
        {
          texto: "Tenho um espaço pequeno, como uma prateleira ou mesa.",
          pegar: "suculenta",
        },
        {
          texto: "Tenho espaço médio em um canto específico.",
          pegar: "ornamental",
        },
        {
          texto: "Tenho bastante espaço e quero uma planta que seja uma peça central.",
          pegar: "ornamental",
        },
        {
          texto: "Meu espaço é variado, mas quero algo que possa se adaptar a diferentes locais.",
          pegar: "suculenta",
        },
      ],
    },
    {
      id: 5,
      Questão:
        "Você tem animais de estimação em casa?",
      pergunta: [
        {
          texto: "Sim, tenho animais de estimação, então uma planta não tóxica seria ideal.",
          pegar: "suculenta",
        },
        {
          texto: "Não tenho animais de estimação, então isso não é uma preocupação.",
          pegar: "ornamental",
        },
        {
          texto: "Sim, tenho animais de estimação, mas estou disposto a colocar a planta fora do alcance deles.",
          pegar: "ornamental",
        },
        {
          texto: "Tenho animais de estimação, mas eles não têm acesso à área onde pretendo colocar a planta.",
          pegar: "ornamental",
        },
      ],
    },
    {
      id: 6,
      Questão:
        "Você está interessado em flores ou folhagens?",
      pergunta: [
        {
          texto: "Gosto de flores vistosas e coloridas como destaque principal.",
          pegar: "suculenta",
        },
        {
          texto: "Prefiro folhagens exuberantes e variadas em formas e texturas.",
          pegar: "ornamental",
        },
        {
          texto: "Estou aberto a ambas as opções, desde que a planta seja visualmente atraente.",
          pegar: "ornamental",
        },
        {
          texto: "Não tenho uma preferência específica; estou disposto a considerar qualquer opção.",
          pegar: "suculenta",
        },
      ],
    },
    {
      id: 7,
      Questão: "Quanto tempo você está disposto a dedicar aos cuidados da planta?",
      pergunta: [
        {
          texto: "Prefiro algo que exija pouco tempo de manutenção.",
          pegar: "suculenta",
        },
        {
          texto: "Posso dedicar algum tempo regularmente, mas não horas todos os dias.",
          pegar: "suculenta",
        },
        {
          texto: "Estou disposto a investir tempo e esforço para cuidar de uma planta mais exigente.",
          pegar: "ornamental",
        },
        {
          texto: "Não tenho restrições de tempo e posso dedicar bastante atenção à planta.",
          pegar: "ornamental",
        },
      ],
    },
    {
      id: 8,
      Questão:
        "Você tem preferência por um estilo de decoração específico?",
      pergunta: [
        {
          texto: "Gosto de um estilo mais moderno e minimalista.",
          pegar: "suculenta",
        },
        {
          texto: "Prefiro um estilo clássico e tradicional.",
          pegar: "ornamental",
        },
        {
          texto: "Gosto de plantas pequenas.",
          pegar: "suculenta",
        },
        {
          texto: "Prefiro plantas grandes e exuberantes.",
          pegar: "ornamental",
        },
      ],
    },
    {
      id: 9,
      Questão:
        "Você está disposto a aprender sobre os cuidados específicos da planta que escolher?",
      pergunta: [
        {
          texto: "Sim, estou disposto a aprender e me dedicar aos cuidados específicos da planta.",
          pegar: "ornamental",
        },
        {
          texto: "Prefiro algo mais intuitivo, que não exija muito conhecimento técnico.",
          pegar: "suculenta",
        },
        {
          texto: "Tenho alguma experiência e estou disposto a aprender mais se necessário.",
          pegar: "ornamental",
        },
        {
          texto: "Não tenho muito tempo para aprender detalhes; prefiro algo mais simples.",
          pegar: "suculenta",
        },
      ],
    },
    {
      id: 10,
      Questão:
        "Qual é a temperatura média do ambiente onde a planta será colocada?",
      pergunta: [
        {
          texto: "O ambiente é geralmente quente.",
          pegar: "ornamental",
        },
        {
          texto: "O ambiente é moderadamente temperado.",
          pegar: "suculenta",
        },
        {
          texto: "O ambiente pode variar em temperatura.",
          pegar: "ornamental",
        },
        {
          texto: "O ambiente pode ser mais fresco em algumas épocas do ano.",
          pegar: "suculenta",
        },
      ],
    },
  ];
  
  module.exports = questoes;