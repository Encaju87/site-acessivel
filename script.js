document.addEventListener('DOMContentLoaded', function () {

    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const menuAcessibilidade = document.getElementById('acessibilidade-opcoes');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    botaoDeAcessibilidade.addEventListener('click', function () {
        if (menuAcessibilidade.style.display === 'block') {
            menuAcessibilidade.style.display = 'none';
        }
        else {
            menuAcessibilidade.style.display = 'block';
        }
    })

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

})