# Evaluación de Algoritmos de Aprendizaje No Supervisado

La **evaluación de modelos no supervisados** es más compleja que en supervisado, ya que no hay etiquetas conocidas para comparar. Se centra en medir **coherencia interna**, **estructura encontrada** y, cuando es posible, comparación con datos externos.

---

## 1. Validación de Modelos

### 1.1 Evaluación Interna

* Se basa en **propiedades de los datos y clusters** detectados.
* No requiere etiquetas externas.
* Ejemplos de métricas internas: **Silhouette, Davies-Bouldin, Calinski-Harabasz**.

### 1.2 Evaluación Externa

* Compara los resultados del clustering con **etiquetas verdaderas**, si se disponen.
* Útil para datasets de prueba o benchmarking.
* Métricas comunes: **Adjusted Rand Index (ARI), Normalized Mutual Information (NMI)**.

### 1.3 Validación por Estabilidad

* Se entrena el modelo varias veces con **submuestras** de los datos o con **distintas inicializaciones**.
* Mide si los resultados son **consistentes**.
* Indicador de robustez del algoritmo.

---

## 2. Métricas de Clustering

### 2.1 Silhouette Score

Mide **qué tan similar es un punto a su propio cluster comparado con otros clusters**.

$$
s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))}
$$

* \(a(i)\): distancia promedio a puntos del mismo cluster.
* \(b(i)\): distancia mínima promedio a puntos de otros clusters.
* Rango: -1 a 1. Cercano a 1 = buen cluster, cercano a 0 = punto entre clusters, negativo = posible error.

### 2.2 Davies-Bouldin Index

Evalúa **similitud entre clusters**, penalizando clusters cercanos entre sí.

$$
DB = \frac{1}{k} \sum_{i=1}^k \max_{j \neq i} \left( \frac{\sigma_i + \sigma_j}{d(c_i, c_j)} \right)
$$

* \( \sigma_i \): dispersión del cluster i.
* \( d(c_i, c_j) \): distancia entre centroides de clusters i y j.
* Menor valor = mejor separación entre clusters.

### 2.3 Calinski-Harabasz Index

Relación entre **dispersión entre clusters y dentro de clusters**.

$$
CH = \frac{Tr(B_k)}{Tr(W_k)} \cdot \frac{n-k}{k-1}
$$

* \(Tr(B_k)\): traza de la matriz de dispersión entre clusters.
* \(Tr(W_k)\): traza de la matriz de dispersión dentro de clusters.
* \(n\): número de puntos, \(k\): número de clusters.
* Mayor valor = mejor definición de clusters.

---

## 3. Métricas de Comparación Externa (si hay etiquetas)

### 3.1 Adjusted Rand Index (ARI)

Mide **similitud entre dos agrupamientos** ajustando por azar.

$$
ARI = \frac{RI - \mathbb{E}[RI]}{\max(RI) - \mathbb{E}[RI]}
$$

* RI: Rand Index (fracción de pares de puntos correctamente agrupados o separados).
* Rango: -1 a 1. 1 = coincidencia perfecta.

### 3.2 Normalized Mutual Information (NMI)

Mide **información compartida entre clustering y etiquetas reales**.

$$
NMI(U,V) = \frac{2 \cdot I(U;V)}{H(U) + H(V)}
$$

* \(I(U;V)\): información mutua.
* \(H(U), H(V)\): entropías de los clusterings.
* Rango: 0 a 1. 1 = coincidencia perfecta.

---

## 4. Problemas Comunes

### 4.1 Determinar el Número de Clusters

* Elegir k incorrecto puede generar **clusters artificiales**.
* Métodos: **codo (Elbow), silhouette, gap statistic**.

### 4.2 Sensibilidad a Escala y Preprocesamiento

* Algoritmos como k-means dependen de **distancias**, sensibles a escalas diferentes.
* Solución: **normalizar o estandarizar** datos.

### 4.3 Puntos Atípicos (Outliers)

* Pueden **distorsionar centroides o densidades**.
* Soluciones: detectar y eliminar outliers o usar algoritmos robustos (DBSCAN, HDBSCAN).

### 4.4 Inicialización Aleatoria

* k-means y otros algoritmos sensibles a la **semilla inicial**.
* Solución: ejecutar múltiples veces y elegir mejor resultado según métrica interna.

---

## 📌 Conclusión

La evaluación de algoritmos no supervisados requiere:

* **Métricas internas** para analizar cohesión y separación.
* **Métricas externas** si existen etiquetas.
* **Validación de estabilidad** para asegurar consistencia.
* Uso combinado de métricas y visualización (t-SNE, PCA) ayuda a interpretar resultados.

Una buena práctica es **probar varios algoritmos, variar parámetros y combinar métricas** para obtener una visión completa del desempeño.
