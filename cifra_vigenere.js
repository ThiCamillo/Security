/**
 * 
 * @param {*} mensagem 
 * @param {*} chave
 * @param {*} modo 1: criptografar | -1: decriptografar
 * @returns 
 */
function criptografa(mensagem, chave, modo) {
    let mensagemCriptografada = '';
    let j = 0;
    for (let i = 0; i < mensagem.length; i++) {
        let chave = senha.charCodeAt(j);
        let char = mensagem.charCodeAt(i);
        let codigoTransformado = modo === 1 ? char + chave : char - chave;
        let charTransformado = String.fromCharCode(codigoTransformado);
        mensagemCriptografada += charTransformado;
    }
    return mensagemCriptografada;
}
const CHAVE = 'FERIADO123!';
const mensagem = 'CODIGO VIGENERE - exemplo de criptografia simetrica';
const conteudoCifrado = criptografa(mensagem, CHAVE, 1);
console.log('criptografando', mensagem, conteudoCifrado);
const conteudoDecifrado = criptografa(conteudoCifrado, CHAVE, -1);
console.log('decriptofrafando', conteudoCifrado, conteudoDecifrado);

