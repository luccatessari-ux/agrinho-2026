// =========================================================================
// 1. INICIALIZAÇÃO DO SISTEMA (Aguardando o DOM carregar completamente)
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript ativado e pronto para dar vida à página! 🚀");
    
    // Inicializar os seletores principais
    inicializarMenu();
    inicializarFormulario();
});

// =========================================================================
// 2. INTERATIVIDADE: Menu Hamburguer / Elementos de Clique
// =========================================================================
function inicializarMenu() {
    const botaoMenu = document.querySelector("#btn-menu");
    const menuNav = document.querySelector("#menu-navegacao");

    // Verifica se os elementos existem na página antes de aplicar o evento
    if (botaoMenu && menuNav) {
        botaoMenu.addEventListener("click", () => {
            // Alterna a classe 'active' para abrir/fechar o menu via CSS
            menuNav.classList.toggle("active");
            
            // Exemplo de feedback dinâmico no console
            console.log("O estado do menu foi alterado!");
        });
    }
}

// =========================================================================
// 3. VALIDAÇÃO: Formulários Inteligentes e Seguros
// =========================================================================
function inicializarFormulario() {
    const formulario = document.querySelector("#meu-formulario");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            // Impede o envio padrão e o recarregamento da página
            evento.preventDefault(); 

            // Captura dos campos
            const campoEmail = document.querySelector("#campo-email");
            const campoMensagem = document.querySelector("#campo-mensagem");
            
            // Regra de Validação Simples
            if (campoEmail.value.trim() === "" || !campoEmail.value.includes("@")) {
                exibirFeedback("Por favor, insira um e-mail válido.", "erro");
                return; // Para a execução da função
            }

            if (campoMensagem.value.trim() === "") {
                exibirFeedback("A mensagem não pode estar vazia.", "erro");
                return;
            }

            // Se tudo estiver correto
            exibirFeedback("Formulário enviado com sucesso! 🎉", "sucesso");
            formulario.reset(); // Limpa os campos
        });
    }
}

// =========================================================================
// 4. ANIMAÇÕES E FEEDBACKS VIVOS: Manipulação Dinâmica de Interface
// =========================================================================
function exibirFeedback(mensagem, tipo) {
    const containerFeedback = document.querySelector("#caixa-feedback");

    if (containerFeedback) {
        // Altera o texto de forma inteligente
        containerFeedback.textContent = mensagem;
        
        // Define a estilização baseada no tipo (sucesso ou erro)
        containerFeedback.className = `feedback-ativo tipo-${tipo}`;
        
        // Pequena animação/efeito de sumir após 4 segundos (4000ms)
        setTimeout(() => {
            containerFeedback.className = "feedback-oculto";
        }, 4000);
    } else {
        // Caso não tenha o elemento HTML, exibe um alerta padrão do navegador
        alert(mensagem);
    }
}
