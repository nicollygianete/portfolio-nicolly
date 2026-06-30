// ========================================
// PORTFÓLIO - NICOLLY GIANETE
// main.js — Funções compartilhadas entre todas as páginas
// ========================================

// ----------------------------------------
// MENU RESPONSIVO
// Abre e fecja o menu em telas pequenas
// ----------------------------------------
const btnMenu = document.getElementById('btn-menu');
const nav = document.querySelector('nav');

if (btnMenu && nav) {
  btnMenu.addEventListener('click', function () {
    // Alterna a classe 'aberto' no nav para mostrar/esconder
    nav.classList.toggle('aberto');
  });

  // Fecha o menu ao clicar em qualquer link
  const linksMenu = nav.querySelectorAll('a');
  linksMenu.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('aberto');
    });
  });
}

// ----------------------------------------
// ALTERNÂNCIA TEMA CLARO / ESCURO
// Salva a preferência no localStorage
// ----------------------------------------
const btnTema = document.getElementById('btn-tema');

// Aplica o tema salvo ao carregar a página
function aplicarTema() {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'claro') {
    document.body.classList.add('tema-claro');
    if (btnTema) btnTema.textContent = 'Claro';
  } else {
    document.body.classList.remove('tema-claro');
    if (btnTema) btnTema.textContent = 'Escuro';
  }
}

// Alterna ao clicar no botão
if (btnTema) {
  btnTema.addEventListener('click', function () {
    const estaClaro = document.body.classList.toggle('tema-claro');
    if (estaClaro) {
      localStorage.setItem('tema', 'claro');
      btnTema.textContent = 'Claro';
    } else {
      localStorage.setItem('tema', 'escuro');
      btnTema.textContent = 'Escuro';
    }
  });
}

// Executa ao carregar
aplicarTema();

// ----------------------------------------
// MARCAÇÃO DO LINK ATIVO NO MENU
// Compara o href do link com a URL atual
// ----------------------------------------
function marcarLinkAtivo() {
  // Pega o nome do arquivo atual (ex: "sobre.html")
  const paginaAtual = window.location.pathname.split('/').pop() || 'sobre.html';
  const links = document.querySelectorAll('nav ul li a');

  links.forEach(function (link) {
    const href = link.getAttribute('href');
    // Se o href termina com o nome da página atual, marca como ativo
    if (href && href.endsWith(paginaAtual)) {
      link.classList.add('ativo');
    }
  });
}

marcarLinkAtivo();
