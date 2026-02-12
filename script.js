/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
/* ?????????????????? SCRIPT DE CONTROLE DE SERVIÇOS - CAIO CÉSAR  ??????? */
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

// Dados dos serviços
const servicosData = {
  deep: {
    foto: './assets/deep_cleaning_photo.png',
    icone: './assets/icon_deepcleaning.png',
    descricao: 'Our deep cleaning eliminates all built-up dirt in one go. It leaves your home fresh, comfortable, and truly renewed. A safer space, free from bacteria and health risks for your family.'
  },
  movein: {
    foto: './assets/movein_photo.png',
    icone: './assets/icon_movein.png',
    descricao: 'Perfect for moving in or out! We ensure your new home is spotless before you arrive, or leave your old place pristine for the next residents. Complete cleaning from top to bottom.'
  },
  standard: {
    foto: './assets/standard_cleaning_photo.png',
    icone: './assets/icon_standardcleaning.png',
    descricao: 'Our standard cleaning service keeps your home consistently clean and organized. Regular maintenance that ensures a healthy and pleasant environment for you and your family every day.'
  },
  postconstruction: {
    foto: './assets/postconstruction_photo.png',
    icone: './assets/icon_postconstructioncleaning.png',
    descricao: 'After construction or renovation, we remove all dust, debris, and residues. Your space will be ready to use, completely clean and safe, transforming the chaos into a welcoming environment.'
  }
};

// Função para atualizar o card de serviço
function atualizarCard(tipoServico) {
  const servico = servicosData[tipoServico];
  
  if (!servico) return;

  // Elementos do card
  const cardFoto = document.getElementById('servicoFoto');
  const cardIcone = document.getElementById('servicoIcone');
  const cardDescricao = document.getElementById('servicoDescricao');
  const cardElement = document.querySelector('.card_servico');

  // Adiciona classe para animação de fade
  cardElement.classList.remove('fade-in');
  
  // Pequeno delay para resetar a animação
  setTimeout(() => {
    // Atualiza o conteúdo
    cardFoto.src = servico.foto;
    cardFoto.alt = `${tipoServico} Service`;
    cardIcone.src = servico.icone;
    cardDescricao.textContent = servico.descricao;
    
    // Adiciona animação de fade
    cardElement.classList.add('fade-in');
  }, 50);

  // Atualiza os estados ativos dos ícones
  document.querySelectorAll('.icone_wrapper').forEach(wrapper => {
    wrapper.classList.remove('active');
  });
  
  document.querySelector(`[data-servico="${tipoServico}"]`).classList.add('active');
}

// Event listeners para os ícones
document.addEventListener('DOMContentLoaded', () => {
  const iconesWrappers = document.querySelectorAll('.icone_wrapper');
  
  iconesWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', () => {
      const tipoServico = wrapper.getAttribute('data-servico');
      atualizarCard(tipoServico);
    });
  });

  // Inicializa com o primeiro serviço (deep cleaning) já selecionado
  atualizarCard('deep');
});

// Adiciona efeito de hover nos ícones
document.addEventListener('DOMContentLoaded', () => {
  const icones = document.querySelectorAll('.icone_wrapper');
  
  icones.forEach(icone => {
    icone.addEventListener('mouseenter', () => {
      if (!icone.classList.contains('active')) {
        icone.style.transform = 'translateY(-5px)';
      }
    });
    
    icone.addEventListener('mouseleave', () => {
      if (!icone.classList.contains('active')) {
        icone.style.transform = 'translateY(0)';
      }
    });
  });
});