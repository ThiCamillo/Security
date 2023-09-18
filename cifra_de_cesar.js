/**
 * 
 * @param {*} mensagem 
 * @param {*} chave
 * @param {*} modo 1: criptografar | -1: decriptografar
 * @returns 
 */
function criptografa(mensagem, chave, modo) {
    let mensagemCriptografada = '';
    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem.charCodeAt(i);
        let codigoTransformado = modo === 1 ? char + chave : char - chave;
        let charTransformado = String.fromCharCode(codigoTransformado);
        mensagemCriptografada += charTransformado;
    }
    return mensagemCriptografada;
}
const CHAVE = 3;
const mensagem = 'CODIGO DE CESAR';
const conteudoCifrado = criptografa(mensagem, CHAVE, 1);
console.log('criptografando', mensagem, conteudoCifrado);
const conteudoDecifrado = criptografa(conteudoCifrado, CHAVE, -1);
console.log('decriptofrafando', conteudoCifrado, conteudoDecifrado);

