/*! Pega os valores do html e bota em constantes */
const campoSenha = document.getElementById("senha");
const textoMinuscula = document.getElementById("minuscula")
const textoMaiuscula = document.getElementById("maiuscula")
const textoCaracteres = document.getElementById("caracteres")
const textoNumeros = document.getElementById("numeros")
const textoEspeciais = document.getElementById("especiais")
const linkBotao = document.getElementById("link");

/* Iniciar e guardar depois do input */
campoSenha.addEventListener('input', ()=>{
    const textoSenha = campoSenha.value; /** senha completa */
    const minuscula = /[a-z]/.test(textoSenha); /*? verifica se tem letra minúscula */
    const maiuscula = /[A-Z]/.test(textoSenha); /*! verifica se tem letra maiúscula */
    const caracteres = textoSenha.length > 8; /** verifica se tem mais de 8 caracteres */
    const numeros = /\d/.test(textoSenha); /*? verifica se tem números */
    const especiais = /[!@#$%¨&*]/.test (textoSenha); /*! verifica se tem caracteres especiais */

    /* Verificação */
    if(minuscula){
        textoMinuscula.textContent = "✅ Letra minúscula"
    }
    else {
    textoMinuscula.textContent = "❌ Letra minúscula" 
    }

    if(maiuscula){
        textoMaiuscula.textContent = "✅ Letra maiúscula"
    }
    else {
    textoMaiuscula.textContent = "❌ Letra maiúscula" 
    }

    if(caracteres){
        textoCaracteres.textContent = "✅ Mais que 8 caracteres"
    }
    else {
    textoCaracteres.textContent = "❌ Mais que 8 caracteres" 
    }

    if(numeros){
        textoNumeros.textContent = "✅ Números"
    }
    else {
    textoNumeros.textContent = "❌ Números" 
    }

    if(especiais){
        textoEspeciais.textContent = "✅ Caracteres especiais"
    }
    else {
    textoEspeciais.textContent = "❌ Caracteres especiais" 
    }

    /*? Verifica tudo */
    if (minuscula && maiuscula && caracteres && numeros && especiais){
        linkBotao.style.display = "block"
    }
    else {
        linkBotao.style.display = "none"
    }
})
    /* Envia, depois alerta */
    linkBotao.addEventListener('click', () =>{
        alert("Senha Válida! Você entrou!")
})