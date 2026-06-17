/**
 * Alterna dinamicamente entre as abas (tabs) dos pilares de sustentabilidade.
 * @param {Event} evt - O evento de clique que disparou a função.
 * @param {string} tabId - O ID do elemento de conteúdo que deve ser exibido.
 */
function openTab(evt, tabId) {
    // 1. Esconde todos os conteúdos das abas
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // 2. Remove a classe 'active' de todos os botões
    const tablinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // 3. Mostra a aba atual e adiciona a classe 'active' ao botão clicado
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

/**
 * Executa o cálculo simulado do impacto ambiental com base na área e prática escolhida.
 */
function calcularImpacto() {
    // Captura os valores digitados/selecionados pelo usuário
    const hectaresInput = document.getElementById('tamanho').value;
    const tecnologia = document.getElementById('tecnologia').value;
    const resultadoDiv = document.getElementById('resultado');

    // Converte o valor para número flutuante
    const hectares = parseFloat(hectaresInput);

    // Validação básica para garantir que o usuário digitou um número válido
    if (!hectares || hectares <= 0) {
        alert("Por favor, insira um número válido de hectares (maior que zero).");
        return;
    }

    let textoResultado = "";

    // Lógica do simulador baseado na opção escolhida
    if (tecnologia === "agua") {
        // Estimativa média: 15.000 litros de água economizados por hectare/ano
        const aguaEconomizada = hectares * 15000; 
        
        textoResultado = `
            <strong>Parabéns!</strong> Ao adotar a 
            <span style="color: var(--secondary); font-weight: bold;">Irrigação Inteligente</span> 
            em uma área de ${hectares} hectares, a estimativa é de economizar cerca de 
            <strong>${aguaEconomizada.toLocaleString('pt-BR')} litros de água</strong> por ano. 
            Além disso, você reduz drasticamente o consumo de energia elétrica das bombas de irrigação!
        `;
    } else if (te
