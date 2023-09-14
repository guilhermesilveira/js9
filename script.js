const letras = 'abcdefghijklmnopqrstuvwxyz';

// Função ROT13 simplificada
function codificarRot13(texto) {
    let resultado = '';
    // for (let i = 0; i < 5; i++) {
    for (let caractere of texto) {
        let indice = letras.indexOf(caractere);
        if (indice === -1) {
            resultado += caractere;
        } else {
            let rotacionado = (indice + 13) % 26;
            resultado += letras[rotacionado];
        }
    }
    return resultado;
}

// Função de mapeamento simplificado
function codificarMapeamento(texto) {
    const mapa = {
        'a': 'n',
        'b': 'z',
        'c': 'y',
        // ... adicione mais conforme desejar
        'z': 'a'
    };
    let resultado = '';
    for (let caractere of texto) {
        if (mapa[caractere]) {
            resultado += mapa[caractere];
        } else {
            resultado += caractere;
        }
    }
    return resultado;
}

// PARA SABER MAIS
// Função "md5" simples
function md5Simples(texto) {
    let soma = 0;
    for (let caractere of texto) {
        soma += letras.indexOf(caractere) + 1;  // soma 1 para que 'a' não seja 0
    }
    return soma.toString(16);  // converte a soma para hexadecimal
}

// Função principal que pede o input, mostra o resultado codificado e o "md5"
function principal(mensagem) {
    let mensagemCodificada = codificarRot13(mensagem);
    let md5DaMensagem = md5Simples(mensagem);
    alert("Mensagem codificada: " + mensagemCodificada + "\n" + "MD5 simples: " + md5DaMensagem);
}

principal("Olá tudo bem?");
