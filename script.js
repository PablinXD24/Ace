document.addEventListener("DOMContentLoaded", function() {
  const spaceBackground = document.querySelector(".space-background");

  // Função para criar as estrelas
  function createStars(count) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`; // Faz as estrelas oscilarem em momentos diferentes
      spaceBackground.appendChild(star);
    }
  }

  // Função para criar estrelas cadentes aleatórias
  function createShootingStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    
    spaceBackground.appendChild(star);

    // Remove a estrela após a animação
    setTimeout(() => {
      star.remove();
    }, 1000);
  }

  // Criar 150 estrelas no fundo
  createStars(150);

  // Criar estrelas cadentes aleatórias a cada intervalo de tempo
  setInterval(createShootingStar, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.floating-tab');
  const sidebarLinks = document.querySelectorAll('.bottom-sidebar a');
  const loadingScreen = document.querySelector('.loading-screen');

  // Simula o carregamento
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 1000); // Duração da animação de desvanecimento
  }, 2000); // Tempo de carregamento simulado

  sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      
      // Oculta todas as abas
      tabs.forEach(tab => tab.classList.remove('active'));

      // Obtém o ID da aba a ser exibida
      const targetId = link.getAttribute('data-target');
      const targetTab = document.getElementById(targetId);

      // Mostra a aba correspondente
      if (targetTab) {
        targetTab.classList.add('active');
        document.querySelector('.floating-abs').style.display = 'block';
      }
    });
  });

  // Fecha a aba quando clicar fora dela
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.floating-abs') && !event.target.closest('.bottom-sidebar')) {
      document.querySelector('.floating-abs').style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Lógica para alternar entre abas flutuantes
  const sidebarLinks = document.querySelectorAll('.bottom-sidebar li a');
  const floatingTabs = document.querySelectorAll('.floating-tab');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(`#${link.getAttribute('data-target')}`);
      floatingTabs.forEach(tab => tab.classList.remove('active'));
      target.classList.add('active');
    });
  });

  // Lógica para alternar entre abas internas
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.inner-tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = document.querySelector(`#${link.getAttribute('data-target')}`);
      tabLinks.forEach(btn => btn.classList.remove('active'));
      link.classList.add('active');
      tabContents.forEach(content => content.classList.remove('active'));
      target.classList.add('active');
    });
  });

  // Lógica para alternar entre sub-abas internas
  const subTabLinks = document.querySelectorAll('.sub-tab-link');
  const subTabContents = document.querySelectorAll('.sub-inner-tab-content');

  subTabLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = document.querySelector(`#${link.getAttribute('data-target')}`);
      subTabLinks.forEach(btn => btn.classList.remove('active'));
      link.classList.add('active');
      subTabContents.forEach(content => content.classList.remove('active'));
      target.classList.add('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.querySelector('.chat-messages');

    sendButton.addEventListener('click', () => {
        if (chatInput.value.trim() !== "") {
            const message = document.createElement('div');
            message.classList.add('chat-message');
            message.textContent = chatInput.value;
            chatMessages.appendChild(message);
            chatInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight; // Rola para a mensagem mais recente
        }
    });

    // Opcional: permitir envio com Enter
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
