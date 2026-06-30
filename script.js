/**
 * ARQUIVO DE INTERATIVIDADE - PROJETO AGRINHO
 * Tema: Agrosustentabilidade
 */

// Garante que o código execute apenas após o carregamento da página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site do Projeto Agrinho carregado com sucesso!");
});

/**
 * Função da Calculadora de Impacto Ecológico
 * Calcula a estimativa de recursos salvos com base nos hectares informados
 */
function calcularImpacto() {
    // Captura o input do usuário
    const hectaresInput = document.getElementById('hectares');
    const resultadoBox = document.getElementById('resultado');
    
    // Converte o valor digitado para número
    const hectares = parseFloat(hectaresInput.value);

    // VALIDAÇÃO: Verifica se o campo está vazio, se é zero ou negativo
    if (isNaN(hectares) || hectares <= 0) {
        alert("⚠️ Por favor, digite um número válido e maior que zero para os hectares.");
        hectaresInput.focus();
        return;
    }

    // CÁLCULOS: Valores médios simulados de economia por hectare/ano
    const aguaEconomizada = hectares * 15000; // 15.000 litros de água por hectare
    const co2Reduzido = hectares * 450;       // 450 kg de CO₂ reduzidos por hectare

    // ATUALIZAÇÃO DO HTML: Insere os valores formatados no padrão brasileiro (com pontos)
    document.getElementById('res-agua').innerText = aguaEconomizada.toLocaleString('pt-BR');
    document.getElementById('res-co2').innerText = co2Reduzido.toLocaleString('pt-BR');

    // ANIMAÇÃO/INTERAÇÃO: Torna a caixa de resultados visível e adiciona um efeito suave
    resultadoBox.style.display = 'block';
    resultadoBox.style.opacity = '0';
    
    // Pequeno delay para gerar o efeito de transição visual
    setTimeout(() => {
        resultadoBox.style.transition = 'opacity 0.5s ease-in-out';
        resultadoBox.style.opacity = '1';
    }, 50);
}

/**
 * Função de Envio do Formulário de Contato
 * Valida o envio e simula o recebimento dos dados de forma limpa
 */
function enviarFormulario(event) {
    // Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault(); 

    // Captura os dados preenchidos para fins de teste no console do navegador
    const nome = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    
    console.log(`Mensagem recebida de: ${nome} (${email})`);

    // Alerta de feedback para o usuário
    alert(`🌿 Obrigado pelo envio, ${nome}! Sua mensagem foi simulada com sucesso para a avaliação do Projeto Agrinho.`);
    
    // Limpa todos os campos do formulário após o envio bem-sucedido
    event.target.reset(); 
}
