// SOLUÇÕES
const btnModalSolucoes = document.querySelectorAll('.js-open-modal-solucoes');
const solucao = document.getElementById('js-solucao');
const btnCloseModalSolucoes = document.querySelector('.js-close-modal-solucoes');
function openModalSolucoes() {
    solucao.classList.add('active');
}
function closeModalSolucoes() {
    solucao.classList.remove('active')
}
btnModalSolucoes.forEach(open => {
    open.addEventListener('click', openModalSolucoes)
})
btnCloseModalSolucoes.addEventListener('click', closeModalSolucoes);


// ADMINISTRATIVO
const btnModalAdministrativo = document.querySelectorAll('.js-open-modal-administrativo');
const administrativo = document.getElementById('js-administrativo');
const btnCloseModalAdministrativo = document.querySelector('.js-close-modal-administrativo');
function openModalAdministrativo() {
    administrativo.classList.add('active');
}
function closeModalAdministrativo() {
    administrativo.classList.remove('active')
}
btnModalAdministrativo.forEach(open => {
    open.addEventListener('click', openModalAdministrativo)
})
btnCloseModalAdministrativo.addEventListener('click', closeModalAdministrativo);


// DOCUMENTOS
const btnModalDoc = document.querySelectorAll('.js-open-modal-doc');
const doc = document.getElementById('js-doc');
const btnCloseModalDoc = document.querySelector('.js-close-modal-doc');
function openModalDoc() {
    doc.classList.add('active');
}
function closeModalDoc() {
    doc.classList.remove('active')
}
btnModalDoc.forEach(open => {
    open.addEventListener('click', openModalDoc)
})
btnCloseModalDoc.addEventListener('click', closeModalDoc);

// GERENCIAMENTO
const btnModalGerenciamento = document.querySelectorAll('.js-open-modal-gerenciamento');
const gerenciamento = document.getElementById('js-gerenciamento');
const btnCloseModalGerenciamento = document.querySelector('.js-close-modal-gerenciamento');
function openModalGerenciamento() {
    gerenciamento.classList.add('active');
}
function closeModalGerenciamento() {
    gerenciamento.classList.remove('active')
}
btnModalGerenciamento.forEach(open => {
    open.addEventListener('click', openModalGerenciamento)
})
btnCloseModalGerenciamento.addEventListener('click', closeModalGerenciamento);

// EVENTOS
const btnModalEventos = document.querySelectorAll('.js-open-modal-eventos');
const eventos = document.getElementById('js-eventos');
const btnCloseModalEventos = document.querySelector('.js-close-modal-eventos');
function openModalEventos() {
    eventos.classList.add('active');
}
function closeModalEventos() {
    eventos.classList.remove('active')
}
btnModalEventos.forEach(open => {
    open.addEventListener('click', openModalEventos)
})
btnCloseModalEventos.addEventListener('click', closeModalEventos);


// AOS
AOS.init({
    duration: 1000,
    once: true,
});