# Tokens, Embeddings, Vectores y Aprendizaje Transferido en NLP

Este documento explica conceptos fundamentales para entender cómo los modelos de lenguaje procesan texto, representan información y se adaptan a nuevas tareas.

---

## 1. Tokens

* **Definición**: Unidad mínima de texto que un modelo procesa. Puede ser palabra, subpalabra o carácter.
* **Tipos**:

  * Palabras completas: "gato", "perro"
  * Subpalabras (BPE, WordPiece): "g", "##ato", "per", "##ro"
  * Caracteres: "g", "a", "t", "o"
* **Ejemplo**:

```
Texto: "Inteligencia artificial"
Tokens (WordPiece): ["Int", "##eligencia", "artificial"]
```

* **Importancia**: La tokenización define cómo se construyen los embeddings y la entrada al modelo.

---

## 2. Embeddings

* **Definición**: Representación vectorial densa de tokens o entidades que captura significado semántico.
* **Propiedades**:

  * Vectores cercanos → palabras similares
  * Permiten operaciones semánticas:

$$
v_{rey} - v_{hombre} + v_{mujer} \approx v_{reina}
$$

* **Dimensión típica**: 50-1024 según modelo.
* **Diagrama conceptual:**

```
Tokens --> Embedding Layer --> Vectores densos
```

---

## 3. Vectores y Búsqueda Vectorial

### 3.1 Vectores vs Embeddings

* **Vector**: Lista de números en un espacio n-dimensional, puede representar cualquier dato.
* **Embedding**: Vector especial que captura relaciones semánticas o contextuales.
* **Resumen visual:**

```
Todos los embeddings son vectores
Pero no todos los vectores son embeddings
```

### 3.2 Búsqueda de Vectores

* **Objetivo**: Encontrar elementos similares en un espacio vectorial.
* **Usos**: Recuperación de información, recomendación, búsqueda semántica.
* **Métricas de similitud**:

  * Cosine similarity:

$$
\text{sim}(u,v) = \frac{u \cdot v}{\|u\| \|v\|}
$$

* Distancia euclidiana:

$$
d(u,v) = \sqrt{\sum_i (u_i - v_i)^2}
$$

### 3.3 Ejemplo conceptual de búsqueda

```
Embeddings:
v_gato = [0.21, -0.11, 0.56]
v_perro = [0.19, -0.09, 0.53]
v_león = [0.40, 0.12, 0.80]

Consulta: "gato"
Similitudes:
cos(v_gato, v_perro) = 0.98
cos(v_gato, v_león) = 0.75

Resultado: "perro" (más similar semánticamente)
```

* **Diagrama conceptual de búsqueda:**

```
Consulta (embedding) --> Comparar con embeddings en la base --> Ranking por similitud --> Resultado más cercano
```

### 3.4 Bases de Datos Vectoriales e Índices

* **Definición**: Sistemas especializados para almacenar y buscar embeddings eficientemente.

* **Objetivo**: Permitir búsqueda rápida y escalable de vectores en alta dimensión.

* **Ejemplos de bases vectoriales**:

  * FAISS (Facebook AI Similarity Search)
  * Milvus
  * Pinecone

* **Índices comunes y detalles**:

  * **HNSW (Hierarchical Navigable Small World)**: Estructura de grafo que permite búsqueda aproximada de vecinos más cercanos con alta eficiencia y precisión.
  * **IVF (Inverted File Index)**: Divide el espacio vectorial en clusters y busca primero en el cluster más relevante, acelerando la recuperación.
  * **Annoy (Approximate Nearest Neighbors)**: Árboles aleatorios que permiten búsquedas rápidas con aproximaciones en espacios de alta dimensión.
  * **PQ (Product Quantization)**: Reduce la memoria necesaria para almacenar vectores grandes, permitiendo búsquedas más rápidas con compresión.

* **Diagrama conceptual:**

```
Embeddings --> Indexación (HNSW / IVF / Annoy / PQ) --> Búsqueda Aproximada --> Resultados más similares
```

---

## 4. Fine-Tuning

* **Definición**: Ajustar un modelo preentrenado a una tarea específica.
* **Proceso**:

  1. Tomar un modelo preentrenado (BERT, GPT)
  2. Agregar capa(s) específica(s) para la tarea
  3. Entrenar con datos de la tarea
* **Ejemplo conceptual:**

```
BERT preentrenado --> Clasificador de sentimiento --> Dataset de reseñas
```

* **Ventaja**: Reduce necesidad de grandes cantidades de datos y tiempo de entrenamiento.

---

## 5. Transfer Learning

* **Definición**: Reutilizar conocimiento aprendido en una tarea para otra tarea relacionada.
* **Tipos en NLP**:

  * Feature-based: usar embeddings como features
  * Fine-tuning: ajustar todo el modelo a la nueva tarea
* **Ejemplo conceptual:**

```
Modelo preentrenado en Wikipedia --> Clasificación de noticias --> Clasificación de tweets
```

* **Beneficio**: Permite aprovechar modelos grandes preentrenados sin entrenar desde cero.

---

## 6. Flujo Conceptual Completo


```
Texto crudo 
     ↓
Tokenización 
     ↓
Embeddings 
     ↓
Búsqueda / Comparación de vectores (DB Vectorial e índices)
     ↓
Modelo preentrenado 
     ↓
Fine-tuning / Transfer Learning 
     ↓
Tarea específica
```

---

## 📌 Conclusión

* **Tokens**: Base del procesamiento de texto.
* **Embeddings**: Vectores densos que capturan significado semántico.
* **Búsqueda vectorial y bases de datos**: Permiten encontrar similitudes semánticas de forma rápida y escalable; los índices optimizan la búsqueda aproximada.
* **Fine-tuning**: Adaptación específica de modelos grandes.
* **Transfer learning**: Reutilización de conocimiento preentrenado.

> La combinación de estos conceptos es la base para construir sistemas NLP modernos robustos y eficientes.
