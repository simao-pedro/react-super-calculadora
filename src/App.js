import React, { useState } from 'react';
import { getCalculations } from './helpers/calculations.js';
import { useEffect } from 'react';
import InputField from './components/InputField.js';
import OutputField from './components/OutputField.js';

export default function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [calculations, setCalculations] = useState(getCalculations(0, 0));

  useEffect(() => {
    setCalculations(getCalculations(numberA, numberB));
  }, [numberA, numberB]);

  const handleNumberA = ({ target }) => {
    setNumberA(target.value);
  };

  const handleNumberB = ({ target }) => {
    setNumberB(target.value);
  };

  return (
    <div className="container py-4">
      <h1 className="font-weight-bold text-center mb-4 h3">
        Super Calculadora
      </h1>

      <div className="row">
        <InputField
          labelField="Primeiro número (A):"
          idField="numeroA"
          valueField={numberA}
          onChangeField={handleNumberA}
        />

        <InputField
          labelField="Segundo número (B):"
          idField="numeroB"
          valueField={numberB}
          onChangeField={handleNumberB}
        />
      </div>

      <h2 className="font-weight-bold text-center mb-4 h5">Cálculos</h2>

      <div className="row">
        <OutputField
          labelField="Soma (a + b):"
          valueField={calculations.soma}
        />

        <OutputField
          labelField="Subtração 1 (a - b):"
          valueField={calculations.subtracao1}
        />

        <OutputField
          labelField="Subtração 2 (b - a):"
          valueField={calculations.subtracao2}
        />

        <OutputField
          labelField="Multiplicação (a x b):"
          valueField={calculations.multiplicacao}
        />

        <OutputField
          labelField="Divisão 1 (a / b):"
          valueField={calculations.divisao1}
        />

        <OutputField
          labelField="Divisão 2 (b / a):"
          valueField={calculations.divisao2}
        />

        <OutputField
          labelField="Quadrado de a (a²):"
          valueField={calculations.quadradoA}
        />

        <OutputField
          labelField="Quadrado de b (b²):"
          valueField={calculations.quadradoB}
        />

        <OutputField
          labelField="Divisores inteiros de a:"
          valueField={calculations.divisoresInteirosA}
        />

        <OutputField
          labelField="Divisores inteiros de b:"
          valueField={calculations.divisoresInteirosB}
        />

        <OutputField
          labelField="Fatorial de a (a!):"
          valueField={calculations.fatorialA}
        />

        <OutputField
          labelField="Fatorial de b (b!):"
          valueField={calculations.fatorialB}
        />
      </div>
    </div>
  );
}
