// utils.js

/**
 * Formata um número para o padrão monetário brasileiro (R$ X,XX).
 * @param {number} valor 
 * @returns {string}
 */
export function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

/**
 * Valida de forma simples se um e-mail possui os caracteres '@' e '.'.
 * @param {string} email 
 * @returns {boolean}
 */
export function validarEmail(email) {
  return email.includes('@') && email.includes('.');
}

/**
 * Retorna a data atual no formato 'DD/MM/AAAA'.
 * @returns {string}
 */
export function obterDataFormatada() {
  const hoje = new Date();
  
  const dia = String(hoje.getDate()).padStart(2, '0');
  const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Os meses no JS começam do 0
  const ano = hoje.getFullYear();

  return `${dia}/${mes}/${ano}`;
}