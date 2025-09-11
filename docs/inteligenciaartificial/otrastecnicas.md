# Otras Técnicas en Inteligencia Artificial

Este documento aborda técnicas adicionales que no encajan estrictamente en aprendizaje supervisado o no supervisado, pero son fundamentales en resolución de problemas complejos y toma de decisiones.

---

## 1. Algoritmos Genéticos

* **Definición**: Método de optimización inspirado en la evolución natural.
* **Conceptos clave**:

  * **Población**: conjunto de posibles soluciones.
  * **Cromosoma**: representación de una solución.
  * **Fitness**: función que evalúa qué tan buena es una solución.
  * **Operadores genéticos**: selección, cruce (crossover) y mutación.
* **Proceso general**:

```
1. Inicializar población aleatoria
2. Evaluar fitness de cada individuo
3. Seleccionar los mejores individuos
4. Aplicar crossover y mutación
5. Repetir hasta convergencia
```

* **Ejemplo conceptual**:

```
Problema: maximizar f(x) = x^2
- Cromosomas: números binarios representando x
- Fitness: valor de f(x)
- Evolución: selección de los mejores y mutación para explorar soluciones
```

* **Usos**: optimización, diseño de rutas, planificación, machine learning para ajuste de hiperparámetros.

---

## 2. Resolución de Problemas mediante Búsqueda

* **Definición**: Técnicas para encontrar soluciones a problemas formulados como un espacio de estados.
* **Tipos de búsqueda**:

  * **No informada**: solo conoce los estados y las acciones posibles.

    * Ejemplos: búsqueda en anchura, búsqueda en profundidad, búsqueda en profundidad limitada.
  * **Informada (heurística)**: utiliza información adicional para guiar la búsqueda.

    * Ejemplos: A\*, greedy search.
* **Elementos clave**:

  * **Estado inicial**: punto de partida.
  * **Estados meta**: soluciones deseadas.
  * **Acciones**: posibles movimientos entre estados.
  * **Función de costo**: evaluar el costo de alcanzar un estado.
* **Ejemplo conceptual**:

```
Problema: laberinto
- Estado inicial: entrada del laberinto
- Estado meta: salida
- Acciones: mover arriba, abajo, izquierda, derecha
- Búsqueda: encontrar camino más corto usando A*
```

* **Usos**: juegos, planificación automática, resolución de puzzles, optimización combinatoria.

---

## 3. Gestión de la Incertidumbre

* **Definición**: Técnicas para tomar decisiones cuando la información es incompleta, ruidosa o probabilística.
* **Métodos principales**:

  * **Redes Bayesianas**: representación gráfica de variables y sus dependencias probabilísticas.
  * **Razonamiento probabilístico**: calcular probabilidades de eventos y actualizar creencias ante nueva evidencia.
  * **Lógica difusa (Fuzzy Logic)**: trabajar con grados de verdad en lugar de verdadero/falso.
* **Ejemplo conceptual**:

```
Problema: diagnóstico médico
- Variables: síntomas, enfermedades
- Red Bayesiana: probabilidades de enfermedad dado los síntomas
- Decisión: recomendar prueba adicional o tratamiento basado en probabilidades
```

* **Usos**: diagnóstico, robótica, sistemas de decisión autónomos, control difuso.

---

## 📌 Conclusión

* Los **algoritmos genéticos** permiten optimización inspirada en la naturaleza.
* La **resolución de problemas mediante búsqueda** es esencial en planificación y juegos.
* La **gestión de la incertidumbre** permite tomar decisiones fiables aun con información incompleta.

> Estas técnicas amplían el arsenal de herramientas de la IA para abordar problemas complejos y variados, complementando aprendizaje supervisado, no supervisado y sistemas de recomendación.
