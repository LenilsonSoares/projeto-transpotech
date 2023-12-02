document.addEventListener('DOMContentLoaded', function() {
    // Lógica para a página inicial
    if (document.querySelector('body.index')) {
        // Lógica específica para a página inicial, se necessário
    }

    // Lógica para a página "Experimente Agora"
    if (document.querySelector('body.experimente-agora')) {
        var form = document.querySelector('.experimente-agora form');

        form.addEventListener('submit', function(event) {
            var nome = document.getElementById('nome').value.trim();
            var email = document.getElementById('email').value.trim();
            var telefone = document.getElementById('telefone').value.trim();

            if (nome === '' || email === '' || telefone === '') {
                alert('Por favor, preencha todos os campos obrigatórios.');
                event.preventDefault();
            }
        });
    }

    // Lógica para a página "Estudos de Caso"
    if (document.querySelector('body.estudos-de-caso')) {
        // Lógica específica para a página de "Estudos de Caso", se necessário
    }

    // Lógica para a página "FAQ - Perguntas Frequentes"
    if (document.querySelector('body.faq-perguntas-frequentes')) {
        // Lógica específica para a página de "FAQ - Perguntas Frequentes", se necessário
    }

    // Lógica para a página "Garantia de Segurança"
    if (document.querySelector('body.garantia-de-seguranca')) {
        // Lógica específica para a página de "Garantia de Segurança", se necessário
    }
});

// Arquivo script.js

// Função para rolar suavemente de volta ao topo da página
function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

// Adiciona um listener de evento para o link "Voltar ao Topo"
document.addEventListener('DOMContentLoaded', function() {
    const linkVoltarTopo = document.querySelector('.voltar-topo');
    if (linkVoltarTopo) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                linkVoltarTopo.classList.add('show');
            } else {
                linkVoltarTopo.classList.remove('show');
            }
        });

        linkVoltarTopo.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToTop();
        });
    }
});

function destacarPonto(id) {
    // Lógica para destacar o ponto selecionado
    // Você pode adicionar a interatividade desejada aqui
    console.log(`Ponto ${id} destacado.`);
}

document.addEventListener("DOMContentLoaded", function () {
    // Dados para o gráfico
    const dados = {
        labels: ["Rastreamento", "Manutenção", "Rotas", "Eficiência", "Custos", "Satisfação"],
        datasets: [{
            label: "Pontos",
            backgroundColor: "rgba(255, 69, 0, 0.8)",
            data: [90, 80, 80, 100, 90, 100],
        }],
    };

    // Obtém o contexto do canvas
    const contexto = document.getElementById("meuGrafico").getContext("2d");

// Criação do gráfico de barras
const meuGrafico = new Chart(contexto, {
    type: "bar",
    data: dados,
    options: {
        responsive: true,
        maintainAspectRatio: false,
    },
});
});