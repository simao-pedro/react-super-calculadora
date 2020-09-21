const soma = (a, b) => {
  return a + b;
};

const subtracao = (a, b) => {
  return a - b;
};

const multiplicacao = (a, b) => {
  return a * b;
};

const divisao = (a, b) => {
  return (a / b).toFixed(2);
};

const quadrado = (a) => {
  return a * a;
};

const divisoresInteiros = (a) => {
  const divisores = [];
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) divisores.push(i);
  }
  return divisores;
};

const totalDivisoresInteiros = (a) => {
  const divisores = divisoresInteiros(a);
  return divisores.length;
};

const fatorial = (a) => {
  if (a > 21) return Infinity;
  if (a === 0) return 1;
  if (a < 0) return;

  let value = 1;
  for (let i = a; i >= 1; i--) {
    value *= i;
  }

  return value;
};

function formatNumber(number) {
  return new Intl.NumberFormat('pt-BR').format(number);
}

const getCalculations = (a, b) => {
  a = Number.parseInt(a, 10);
  b = Number.parseInt(b, 10);

  return {
    soma: `${formatNumber(soma(a, b))}`,
    subtracao1: `${formatNumber(subtracao(a, b))}`,
    subtracao2: `${formatNumber(subtracao(b, a))}`,
    multiplicacao: `${formatNumber(multiplicacao(a, b))}`,
    divisao1: `${formatNumber(divisao(a, b))}`,
    divisao2: `${formatNumber(divisao(b, a))}`,
    quadradoA: `${formatNumber(quadrado(a))}`,
    quadradoB: `${formatNumber(quadrado(b))}`,
    divisoresInteirosA: `${divisoresInteiros(a).join(
      ', '
    )} (${totalDivisoresInteiros(a)})`,
    divisoresInteirosB: `${divisoresInteiros(b).join(
      ', '
    )} (${totalDivisoresInteiros(b)})`,
    fatorialA: `${formatNumber(fatorial(a))}`,
    fatorialB: `${formatNumber(fatorial(b))}`,
  };
};

export { getCalculations };
