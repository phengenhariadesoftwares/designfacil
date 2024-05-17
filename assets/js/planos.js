document.querySelector('.btn-mensal').addEventListener('click', function() {
    document.querySelector('.btn-mensal').classList.add('ativo');
    document.querySelector('.btn-anual').classList.remove('ativo');
    document.querySelector('.container-anual').setAttribute('style', 'display: none;');
    document.querySelector('.container-mes').removeAttribute('style');
});

document.querySelector('.btn-anual').addEventListener('click', function() {
    document.querySelector('.btn-mensal').classList.remove('ativo');
    document.querySelector('.btn-anual').classList.add('ativo');
    document.querySelector('.container-mes').setAttribute('style', 'display: none;');
    document.querySelector('.container-anual').removeAttribute('style');
});