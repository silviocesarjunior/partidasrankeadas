// Solicita o número de vitórias e derrotas ao usuário
const vitorias = parseInt(prompt("Digite o número de vitórias:"));
const derrotas = parseInt(prompt("Digite o número de derrotas:"));

// Função para calcular o nível com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;

  let nivel;

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Retorna o resultado
  return `O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`;
}

const resultado = calcularNivel(vitorias, derrotas);

console.log(resultado);
