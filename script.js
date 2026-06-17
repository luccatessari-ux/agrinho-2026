// Aguarda todo o HTML ser carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 1. VALIDAÇÃO E EVENTO DO FORMULÁRIO DE NEWSLETTER
    // ==========================================================================
    const form = document.querySelector("form");
    
    if (form) {
        form.addEventListener("submit", (event) => {
            // Impede o envio padrão do formulário (recarregar a página)
            event.preventDefault();
            
            const inputEmail = form.querySelector("input[type='email']");
            const email = inputEmail.value.trim();
            
            if (email === "") {
                alert("Por favor, preencha o campo de e-mail.");
                return;
            }
            
            // Simulação de sucesso
            alert(`✉️ Sucesso! O e-mail "${email}" foi cadastrado para receber nossas novidades sustentáveis.`);
            
            // Limpa o campo após o envio
            inputEmail.value = "";
        });
    }

    // ==========================================================================
    // 2. ANIMAÇÃO SUAVE AO ROLAR A PÁGINA (EFEITO NOS CARDS)
    // ==========================================================================
    const cards = document.querySelectorAll(".card");
    
    // Configura os cards para começarem invisíveis e levemente deslocados para baixo
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    // Função que checa se o elemento está visível na tela
    const checarVisibilidade = () => {
        const alturaDisparador = (window.innerHeight / 5) * 4; // Dispara quando o card está a 80% da tela
        
        cards.forEach(card => {
            const cardTopo = card.getBoundingClientRect().top;
            
            if (cardTopo < alturaDisparador) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    // Executa
