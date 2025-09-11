# 📈 Sistemas de Recomendación

Este documento explica los principales conceptos, algoritmos y métricas de evaluación de los sistemas de recomendación, ampliamente usados en comercio electrónico, streaming y redes sociales.

---

## 1. Tipos de Sistemas de Recomendación

### 1.1 Filtrado Colaborativo (Collaborative Filtering)

* Basado en la interacción de los usuarios con los ítems.
* Dos enfoques:

  * **User-based**: usuarios similares tienden a gustarles ítems similares.
  * **Item-based**: ítems similares son recomendados a usuarios que los consumieron.
* **Ejemplo conceptual:**

```
Usuario A: {Película1, Película2}
Usuario B: {Película2, Película3}
Si A y B son similares, recomendar Película3 a A
```

### 1.2 Filtrado Basado en Contenido (Content-Based)

* Se basa en las características del ítem y el perfil del usuario.
* **Ejemplo:**

```
Usuario: le gustan películas de ciencia ficción y acción
Ítems: Película1 (acción, ciencia ficción), Película2 (romance)
Resultado: recomendar Película1
```

### 1.3 Sistemas Híbridos

* Combinan filtrado colaborativo y basado en contenido.
* Reducen problemas como el **cold-start** y el sesgo de popularidad.

---

## 2. Algoritmos Principales

### 2.1 Matrices de Usuario-Ítem

* Se construye una matriz R (usuarios × ítems) con puntuaciones o interacciones.
* **Filtrado Colaborativo** usa esta matriz para predecir valores faltantes:

$$
\hat{r}_{ui} = \text{predicción de la calificación del usuario u al ítem i}
$$

### 2.2 Descomposición de Matrices (Matrix Factorization)

* Factoriza R en matrices latentes U y V:

$$
R \approx U \cdot V^T
$$

* U: embeddings de usuarios
* V: embeddings de ítems

- Ejemplo: SVD, Alternating Least Squares (ALS)

### 2.3 Modelos Basados en Vecinos

* **K-Nearest Neighbors (KNN)** para usuario o ítem
* Calcula similitud (coseno, Pearson) entre usuarios o ítems
* Recomienda los ítems más similares a los consumidos por vecinos

### 2.4 Modelos de Deep Learning

* Autoencoders: aprender representación latente de usuarios o ítems
* Redes neuronales: predicción de rating o probabilidad de interacción
* Embeddings densos: capturan relaciones semánticas de usuarios e ítems

---

## 3. Bases de Datos Vectoriales e Índices en Recomendación

* **Definición**: Sistemas especializados para almacenar embeddings de usuarios e ítems y permitir búsqueda rápida.

* **Objetivo**: Escalar recomendaciones en grandes catálogos y mejorar la eficiencia.

* **Ejemplos**:

  * FAISS
  * Milvus
  * Pinecone

* **Índices comunes**:

  * **HNSW (Hierarchical Navigable Small World)**: grafo que permite búsqueda aproximada de vecinos más cercanos.
  * **IVF (Inverted File Index)**: clusterización del espacio vectorial para búsqueda eficiente.
  * **Annoy (Approximate Nearest Neighbors)**: árboles aleatorios para búsquedas rápidas en alta dimensión.
  * **PQ (Product Quantization)**: compresión de vectores para reducir memoria y acelerar búsquedas.

* **Flujo conceptual:**

```
Embeddings de usuarios e ítems --> Indexación vectorial --> Búsqueda aproximada de vecinos --> Recomendaciones
```

---

## 4. Métricas de Evaluación

### 4.1 Precisión y Recall

* **Precision\@k**: porcentaje de ítems relevantes en las k recomendaciones.
* **Recall\@k**: porcentaje de ítems relevantes recuperados.

### 4.2 Métricas de Ranking

* **NDCG (Normalized Discounted Cumulative Gain)**: pondera la posición de los ítems relevantes.
* **MAP (Mean Average Precision)**: promedio de precisión en posiciones relevantes.

### 4.3 Error en Predicción

* **RMSE (Root Mean Squared Error)** y **MAE (Mean Absolute Error)** sobre ratings predichos.

---

## 5. Problemas Comunes

* **Cold-start**: nuevo usuario o ítem sin datos suficientes.
* **Escalabilidad**: grandes cantidades de usuarios e ítems.
* **Sesgo de popularidad**: los ítems populares tienden a ser recomendados más.

---

## 📌 Conclusión

* Los sistemas de recomendación pueden ser **colaborativos, basados en contenido o híbridos**.
* Los **algoritmos modernos** utilizan embeddings y deep learning para mejorar la precisión y la semántica de las recomendaciones.
* Las **bases de datos vectoriales e índices** permiten escalar la búsqueda de vecinos y mejorar eficiencia.
* Las **métricas de evaluación** y los problemas como cold-start, escalabilidad y sesgo deben ser considerados en la implementación de sistemas reales.
