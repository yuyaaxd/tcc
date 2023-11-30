const ultima_questao = 5;
var indiceSelecionados = [];
var indiceQuestao = undefined;
var perguntaSelecionada = [null, null, null, null, null];

const comecarTeste = () => {
  indiceSelecionados = [];
  let count = 0;
  while (count < 5) {
    let numero = null;
    do {
      numero = Math.floor(Math.random() * 10);
    } while (indiceSelecionados.includes(numero));
    indiceSelecionados.push(numero);
    count++;
  }

  indiceQuestao = 0;
  let QuestãoObj = questoes[indiceSelecionados[indiceQuestao]];

  telaQuestao(QuestãoObj);

  document.getElementById("contagem").innerHTML = indiceQuestao + 1;

  document.getElementById("proxima").style.pointerEvents = "none";
  document.getElementById("proxima").style.color = "gray";

  document.getElementById("anterior").style.pointerEvents = "none";
  document.getElementById("anterior").style.color = "gray";

  document.getElementsByClassName("bemvindo")[0].style.display = "none";
  document.getElementsByClassName("container")[0].style.display = "flex";

  document.getElementById("resultado-teste").style.display = "none";

  document.getElementById("recomecar").style.display = "none";

  document.getElementsByClassName("suas-escolhas")[0].style.display = "none";
};

const resetarEstilo = () => {
  document.getElementById("div-pergunta-a").style.border = "none";
  document.getElementById("div-pergunta-b").style.border = "none";
  document.getElementById("div-pergunta-c").style.border = "none";
  document.getElementById("div-pergunta-d").style.border = "none";
};

const telaQuestaoSelecionada = (pergunta) => {
  if (pergunta === 0) {
    document.getElementById("div-pergunta-a").style.border = "2px solid blue";
  } else if (pergunta === 1) {
    document.getElementById("div-pergunta-b").style.border = "2px solid blue";
  } else if (pergunta === 2) {
    document.getElementById("div-pergunta-c").style.border = "2px solid blue";
  } else {
    document.getElementById("div-pergunta-d").style.border = "2px solid blue";
  }
};

const telaQuestao = (QuestãoObj) => {
  document.getElementById("Questão").innerHTML = QuestãoObj.Questão;
  document.getElementById("pergunta-a").innerHTML = QuestãoObj.pergunta[0].texto;
  document.getElementById("pergunta-b").innerHTML = QuestãoObj.pergunta[1].texto;
  document.getElementById("pergunta-c").innerHTML = QuestãoObj.pergunta[2].texto;
  document.getElementById("pergunta-d").innerHTML = QuestãoObj.pergunta[3].texto;

  if (indiceQuestao > 0) {
    document.getElementById("anterior").style.pointerEvents = "auto";
    document.getElementById("anterior").style.color = "black";
  } else {
    document.getElementById("anterior").style.pointerEvents = "none";
    document.getElementById("anterior").style.color = "gray";
  }

  if (perguntaSelecionada[indiceQuestao] !== null) {
    document.getElementById("proxima").style.pointerEvents = "auto";
    document.getElementById("proxima").style.color = "black";
  } else {
    document.getElementById("proxima").style.pointerEvents = "none";
    document.getElementById("proxima").style.color = "gray";
  }


  if (indiceQuestao === ultima_questao - 1) {
    document.getElementById("proxima").innerHTML = "Finalizar";
  } else {
    document.getElementById("proxima").innerHTML = "Próxima >";
  }
};

const questaoProxima = () => {
  if (indiceQuestao < indiceSelecionados.length - 1) {
    indiceQuestao++;
    let QuestãoObj = questoes[indiceSelecionados[indiceQuestao]];

    resetarEstilo();
    telaQuestao(QuestãoObj);

    if (perguntaSelecionada[indiceQuestao] !== null) {

      let pergunta = perguntaSelecionada[indiceQuestao];
      telaQuestaoSelecionada(pergunta);
    }

    document.getElementById("contagem").innerHTML = indiceQuestao + 1;
  } else {
    mostrarQuestoes();
  }
};

const questaoAnterior = () => {
  console.log(indiceQuestao);
  if (indiceQuestao > 0) {
    indiceQuestao--;

    let QuestãoObj = questoes[indiceSelecionados[indiceQuestao]];

    resetarEstilo();
    telaQuestao(QuestãoObj);

    document.getElementById("contagem").innerHTML = indiceQuestao + 1;

    let pergunta = perguntaSelecionada[indiceQuestao];
    telaQuestaoSelecionada(pergunta);
  }
};

const questaoSelecionada = (ans) => {
  resetarEstilo();

  telaQuestaoSelecionada(ans);

  document.getElementById("proxima").style.pointerEvents = "auto";
  document.getElementById("proxima").style.color = "black";

  perguntaSelecionada[indiceQuestao] = ans;
};

const mostrarElement = (QuestãoObj, chosenpergunta, index) => {
  let element = "";

  switch (chosenpergunta) {
    case 0:
      element = `<div id="contagem-perguntas">Questão <span id="contagem"></span>${index}/5</div>
        <div id="Questão">${QuestãoObj.Questão}</div>
        <div class="ans" id="div-pergunta-a" style="border: 2px solid blue">
          <span class="container-escolha">I</span><span id="pergunta-a">${QuestãoObj.pergunta[0].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-b">
          <span class="container-escolha">II</span><span id="pergunta-b">${QuestãoObj.pergunta[1].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-c">
          <span class="container-escolha">III</span><span id="pergunta-c">${QuestãoObj.pergunta[2].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-d" style="margin-bottom: 40px">
          <span class="container-escolha">IV</span><span id="pergunta-d">${QuestãoObj.pergunta[3].texto}</span>
        </div>
        `;
      break;
    case 1:
      element = `<div id="contagem-perguntas">Questão <span id="contagem"></span>${index}/5</div>
        <div id="Questão">${QuestãoObj.Questão}</div>
        <div class="ans" id="div-pergunta-a">
          <span class="container-escolha">I</span><span id="pergunta-a">${QuestãoObj.pergunta[0].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-b" style="pointer-events: none; border: 2px solid blue">
          <span class="container-escolha">II</span><span id="pergunta-b">${QuestãoObj.pergunta[1].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-c" >
          <span class="container-escolha">III</span><span id="pergunta-c">${QuestãoObj.pergunta[2].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-d" style="margin-bottom: 40px">
          <span class="container-escolha">IV</span><span id="pergunta-d">${QuestãoObj.pergunta[3].texto}</span>
        </div>
        `;
      break;
    case 2:
      element = `<div id="contagem-perguntas">Questão <span id="contagem"></span>${index}/5</div>
        <div id="Questão">${QuestãoObj.Questão}</div>
        <div class="ans" id="div-pergunta-a">
          <span class="container-escolha">I</span><span id="pergunta-a">${QuestãoObj.pergunta[0].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-b">
          <span class="container-escolha">II</span><span id="pergunta-b">${QuestãoObj.pergunta[1].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-c" style="border: 2px solid blue">
          <span class="container-escolha">III</span><span id="pergunta-c">${QuestãoObj.pergunta[2].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-d" style="none; margin-bottom: 40px">
          <span class="container-escolha">IV</span><span id="pergunta-d">${QuestãoObj.pergunta[3].texto}</span>
        </div>
        `;
      break;
    case 3:
      element = `<div id="contagem-perguntas">Questão <span id="contagem"></span>${index}/5</div>
        <div id="Questão">${QuestãoObj.Questão}</div>
        <div class="ans" id="div-pergunta-a">
          <span class="container-escolha">I</span><span id="pergunta-a">${QuestãoObj.pergunta[0].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-b">
          <span class="container-escolha">II</span><span id="pergunta-b">${QuestãoObj.pergunta[1].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-c">
          <span class="container-escolha">III</span><span id="pergunta-c">${QuestãoObj.pergunta[2].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-d" style="margin-bottom: 40px; border: 2px solid blue">
          <span class="container-escolha">IV</span><span id="pergunta-d">${QuestãoObj.pergunta[3].texto}</span>
        </div>
        `;
      break;
    default:
      element = `<div id="contagem-perguntas">Questão <span id="contagem"></span>${index}/5</div>
        <div id="Questão">${QuestãoObj.Questão}</div>
        <div class="ans" id="div-pergunta-a">
          <span class="container-escolha">I</span><span id="pergunta-a">${QuestãoObj.pergunta[0].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-b">
          <span class="container-escolha">II</span><span id="pergunta-b">${QuestãoObj.pergunta[1].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-c">
          <span class="container-escolha">III</span><span id="pergunta-c">${QuestãoObj.pergunta[2].texto}</span>
        </div>
        <div class="ans" id="div-pergunta-d" style="margin-bottom: 40px">
          <span class="container-escolha">IV</span><span id="pergunta-d">${QuestãoObj.pergunta[3].texto}</span>
        </div>
        `;
  }

  return element;
};

const mostrarQuestoes = () => {
  let contagemSuculenta = 0;
  let contagemOrnamental = 0;

  for (let i = 0; i < indiceSelecionados.length; i++) {
    let QuestãoObj = questoes[indiceSelecionados[i]];
    let pergunta = perguntaSelecionada[i];
    let element = mostrarElement(QuestãoObj, pergunta, i + 1);
    document.getElementById("pergunta").innerHTML += element;

    let pegar = QuestãoObj.pergunta[pergunta].pegar;
    if (pegar === "suculenta") {
      contagemSuculenta++;
    } else {
      contagemOrnamental++;
    }
  }

  showplantas(contagemSuculenta, contagemOrnamental);

  document.getElementById("proxima").style.display = "none";
  document.getElementById("anterior").style.display = "none";
};

const showplantas = (suculenta, ornamental) => {
  if (suculenta > ornamental) {
    document.getElementById("imagem").src = "img/suculenta.png";

    document.getElementById("titulo-teste").innerText = "Você é TEAM Suculenta!";
    document.getElementById("descricao-teste").innerText = "As plantas suculentas são aquelas que possuem raiz, o talo ou as folhas engrossados para permitir o armazenamento de água em quantidades muito maiores que nas plantas normais. Esta adaptação lhes permite manter reservas do líquido durante períodos prolongados, e sobreviver em ambientes áridos e secos que para as outras plantas seriam inabitáveis.";

    let element = `<li><strong>Armazenamento de Água:</strong> Suculentas têm a capacidade de armazenar água em suas folhas, caules e raízes. Isso permite que elas sobrevivam em condições de seca, sendo capazes de passar longos períodos sem rega.</li>
    <li><strong>Folhas Carnudas:</strong> As folhas das suculentas são geralmente grossas e carnudas. Essa característica ajuda no armazenamento de água, proporcionando um suprimento interno para períodos de seca.</li>
    <li><strong>Crescimento Lento:</strong> Em geral, as suculentas têm um crescimento mais lento em comparação com algumas outras plantas. Isso contribui para sua longevidade e resistência.</li>
    <li><strong>Folhas Espessas e/ou Peludas:</strong> Algumas suculentas têm folhas espessas ou revestidas de pelos, o que ajuda a reduzir a perda de água por evaporação.</li>
    <li><strong>Adaptação a Ambientes Áridos:</strong> Suculentas são frequentemente encontradas em ambientes áridos e semiáridos, adaptando-se bem a condições de baixa umidade.</li>
    <li><strong>Flores Vibrantes:</strong> Apesar de não ser a característica mais proeminente, muitas suculentas produzem flores vibrantes em diferentes épocas do ano, adicionando um toque decorativo ao seu crescimento.</li>
    <li><strong>Resistência a Pragas:</strong> Em geral, suculentas têm uma resistência relativamente alta a pragas, o que as torna plantas de baixa manutenção em comparação com algumas outras variedades de plantas.</li>
    <li><strong>Variedade de Cores e Formas:</strong> Suculentas vêm em uma ampla variedade de cores e formas, desde tons de verde clássicos até roxos, vermelhos e até mesmo tons de azul. Essa diversidade torna as suculentas populares em arranjos paisagísticos e em recipientes decorativos.</li>`;
    document.getElementById("plantas").innerHTML += element;
    
  } else {

    document.getElementById("imagem").src = "img/ornamental.png";
    document.getElementById("titulo-teste").innerText = "Você é TEAM Ornamental!";
    document.getElementById("descricao-teste").innerText = "Plantas ornamentais são espécies cultivadas principalmente por sua beleza estética e características decorativas. Essas plantas são escolhidas e cuidadas por suas flores atraentes, folhagens distintivas ou formas interessantes. Com uma ampla diversidade de cores, texturas e tamanhos, as plantas ornamentais são utilizadas em paisagismo, jardins domésticos e espaços internos para criar ambientes visualmente agradáveis.";

    let element = `<li><strong>Aparência Atraente:</strong> A característica mais óbvia das plantas ornamentais é sua aparência atraente. Elas são cultivadas por suas flores, folhagens ou formas que agregam valor estético aos jardins, paisagens e ambientes internos.</li>
    <li><strong>Variedade de Cores:</strong> Plantas ornamentais frequentemente apresentam uma ampla variedade de cores, incluindo flores coloridas e folhagens vibrantes. Essa diversidade de cores é uma das principais razões pelas quais são escolhidas para propósitos decorativos.</li>
    <li><strong>Flores Decorativas:</strong> Muitas plantas ornamentais são conhecidas por suas flores decorativas. Elas podem variar em tamanho, forma e cor, proporcionando uma ampla gama de opções para diferentes preferências estéticas.</li>
    <li><strong>Folhagem Atraente:</strong> Além de flores, a folhagem das plantas ornamentais é frequentemente distintiva e atrativa. Padrões, texturas e cores das folhas contribuem para o apelo visual dessas plantas.</li>
    <li><strong>Adaptabilidade:</strong> Plantas ornamentais são frequentemente cultivadas por sua capacidade de se adaptar a diferentes condições ambientais, seja em ambientes internos ou externos. Isso aumenta sua versatilidade na decoração de espaços.</li>
    <li><strong>Ciclo de Vida Prolongado:</strong> Muitas plantas ornamentais têm um ciclo de vida prolongado, proporcionando beleza por longos períodos. Algumas são perenes, enquanto outras podem ser cuidadas para florescerem em diferentes épocas do ano.</li>
    <li><strong>Texturas Diversificadas:</strong> A diversidade de texturas nas folhas e flores é outra característica distintiva das plantas ornamentais. Algumas têm folhas lisas e brilhantes, enquanto outras podem apresentar texturas mais ásperas, peludas ou rugosas.</li>
    <li><strong>Resistência a Pragas e Doenças:</strong> Plantas ornamentais muitas vezes são selecionadas por sua resistência a pragas e doenças. Isso não apenas facilita o cultivo, mas também contribui para a manutenção de sua beleza ao longo do tempo.</li>`;
    document.getElementById("plantas").innerHTML += element;
  }

  document.getElementById("resultado-teste").style.display = "flex";
  document.getElementById("recomecar").style.display = "block";
  document.getElementsByClassName("suas-escolhas")[0].style.display = "block";
};

const questaoRecomecar = () => {
  window.location.reload();
};