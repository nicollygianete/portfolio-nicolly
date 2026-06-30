// ========================================
// PORTFÓLIO - NICOLLY GIANETE
// contato.js — Validação e envio do formulário
// ========================================

// ----------------------------------------
// REFERÊNCIAS AOS ELEMENTOS DO FORMULÁRIO
// ----------------------------------------
const formulario = document.getElementById('form-contato');
const inputNome = document.getElementById('campo-nome');
const inputEmail = document.getElementById('campo-email');
const inputMensagem = document.getElementById('campo-mensagem');

// Mensagens de erro individuais
const erroNome = document.getElementById('erro-nome');
const erroEmail = document.getElementById('erro-email');
const erroMensagem = document.getElementById('erro-mensagem');

// Modal de sucesso
const modalOverlay = document.getElementById('modal-sucesso');
const btnFecharModal = document.getElementById('btn-fechar-modal');

// ----------------------------------------
// FUNÇÕES DE VALIDAÇÃO
// ----------------------------------------

// Valida se um campo de texto está preenchido
function validarCampoTexto(input, elementoErro, mensagem) {
  if (input.value.trim() === '') {
    input.classList.add('erro');
    elementoErro.textContent = mensagem;
    elementoErro.style.display = 'block';
    return false;
  }
  input.classList.remove('erro');
  elementoErro.style.display = 'none';
  return true;
}

// Valida se o e-mail tem formato válido (ex: usuario@dominio.com)
function validarEmail(input, elementoErro) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (input.value.trim() === '') {
    input.classList.add('erro');
    elementoErro.textContent = 'Por favor, informe seu e-mail.';
    elementoErro.style.display = 'block';
    return false;
  }

  if (!regexEmail.test(input.value.trim())) {
    input.classList.add('erro');
    elementoErro.textContent = 'Informe um e-mail válido (ex: usuario@dominio.com).';
    elementoErro.style.display = 'block';
    return false;
  }

  input.classList.remove('erro');
  elementoErro.style.display = 'none';
  return true;
}

// ----------------------------------------
// LIMPAR ERRO AO DIGITAR
// Melhora a experiência do usuário
// ----------------------------------------
if (inputNome) {
  inputNome.addEventListener('input', function () {
    if (inputNome.value.trim() !== '') {
      inputNome.classList.remove('erro');
      erroNome.style.display = 'none';
    }
  });
}

if (inputEmail) {
  inputEmail.addEventListener('input', function () {
    inputEmail.classList.remove('erro');
    erroEmail.style.display = 'none';
  });
}

if (inputMensagem) {
  inputMensagem.addEventListener('input', function () {
    if (inputMensagem.value.trim() !== '') {
      inputMensagem.classList.remove('erro');
      erroMensagem.style.display = 'none';
    }
  });
}

// ----------------------------------------
// ENVIO DO FORMULÁRIO
// Valida todos os campos antes de "enviar"
// ----------------------------------------
if (formulario) {
  formulario.addEventListener('submit', function (evento) {
    // Previne o comportamento padrão de recarregar a página
    evento.preventDefault();

    // Executa as validações
    const nomeValido = validarCampoTexto(inputNome, erroNome, 'Por favor, informe seu nome.');
    const emailValido = validarEmail(inputEmail, erroEmail);
    const mensagemValida = validarCampoTexto(inputMensagem, erroMensagem, 'Por favor, escreva sua mensagem.');

    // Só prossegue se todos os campos forem válidos
    if (nomeValido && emailValido && mensagemValida) {
      // Simula o envio: limpa o formulário
      formulario.reset();

      // Remove marcações de erro
      inputNome.classList.remove('erro');
      inputEmail.classList.remove('erro');
      inputMensagem.classList.remove('erro');

      // Exibe o modal de confirmação
      modalOverlay.classList.add('ativo');
    }
  });
}

// ----------------------------------------
// FECHAR O MODAL DE SUCESSO
// ----------------------------------------
if (btnFecharModal) {
  btnFecharModal.addEventListener('click', function () {
    modalOverlay.classList.remove('ativo');
  });
}

// Fecha o modal ao clicar fora da caixa
if (modalOverlay) {
  modalOverlay.addEventListener('click', function (evento) {
    // Verifica se o clique foi no overlay e não na caixa interna
    if (evento.target === modalOverlay) {
      modalOverlay.classList.remove('ativo');
    }
  });
}
