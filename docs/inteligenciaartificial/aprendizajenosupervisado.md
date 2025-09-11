# Algoritmos de Aprendizaje No Supervisado

El **aprendizaje no supervisado** se centra en encontrar patrones, estructuras o representaciones en datos **sin etiquetas conocidas**. Sus principales aplicaciones incluyen **clustering, reducción de dimensionalidad, generación de datos y detección de anomalías**.

---

## 1. Clustering

Agrupa los datos según similitud, creando **clusters naturales**.

### 1.1 K-Means

* **Objetivo**: Particionar datos en k clusters minimizando la suma de distancias cuadradas.
* **Fórmula de centroide**:
$$
c_j = \frac{1}{|C_j|} \sum_{x_i \in C_j} x_i
$$
* **Ventajas**: Simple y eficiente.
* **Limitaciones**: Sensible a outliers y requiere definir k.

### 1.2 DBSCAN

* **Objetivo**: Formar clusters de alta densidad y detectar outliers.
* **Parámetros clave**: *eps* (radio de vecindad), *minPts* (mínimo de puntos por cluster).
* **Ventajas**: Detecta clusters de forma arbitraria; no requiere k.
* **Limitaciones**: Sensible a parámetros y densidades desiguales.

### 1.3 Expectation-Maximization (EM)

* **Objetivo**: Modelar datos como mezcla de distribuciones (normalmente Gaussianas).
* **Funcionamiento**:
  1. Inicializa parámetros de las distribuciones.
  2. Expectation: calcula probabilidades de pertenencia.
  3. Maximization: ajusta parámetros para maximizar likelihood.
* **Ventajas**: Probabilístico, flexible.
* **Limitaciones**: Puede converger a óptimos locales.

### 1.4 Fuzzy C-Means

* **Objetivo**: Cada punto pertenece a múltiples clusters con diferentes grados de pertenencia.
* **Fórmula de actualización de pertenencia**:
$$
u_{ij} = \frac{1}{\sum_{k=1}^c \left(\frac{\|x_i - c_j\|}{\|x_i - c_k\|}\right)^{\frac{2}{m-1}}}
$$
* **Ventajas**: Maneja ambigüedad en clusters.
* **Limitaciones**: Más costoso computacionalmente; requiere definir c y m.

### 1.5 Clustering Jerárquico

* **Objetivo**: Crear árbol de clusters (*dendrograma*).
* **Tipos**: Aglomerativo y divisivo.
* **Ventajas**: No requiere número de clusters inicial; útil para visualización.
* **Limitaciones**: Computacionalmente costoso.

---

## 2. Deep Learning No Supervisado

Se enfoca en **representación de datos y generación de muestras nuevas**.

### 2.1 Autoencoders

* **Objetivo**: Aprender una representación comprimida de los datos.
* **Arquitectura**: Encoder → Latent space → Decoder.
* **Función de pérdida típica**:
$$
L = \frac{1}{n} \sum_{i=1}^n \|x_i - \hat{x}_i\|^2
$$
* **Aplicaciones**: Reducción de dimensionalidad, denoising, generación.

### 2.2 Generative Adversarial Networks (GANs)

* **Objetivo**: Generar datos sintéticos que imiten la distribución real.
* **Funcionamiento**:
  - **Generador (G)**: crea muestras falsas.
  - **Discriminador (D)**: distingue reales de falsas.
* **Función de pérdida (minimax)**:
$$
\min_G \max_D V(D,G) = \mathbb{E}_{x \sim p_{data}}[\log D(x)] + \mathbb{E}_{z \sim p_z}[\log(1-D(G(z)))]
$$
* **Aplicaciones**: Imagen, video, datos sintéticos.

---

## 3. Aprendizaje por Refuerzo (RL) – Contexto

Aunque RL puede considerarse **semi-supervisado**, comparte conceptos con no supervisado en exploración de entornos.

### 3.1 Q-Learning

* **Objetivo**: Aprender política óptima mediante tabla Q(s,a).
* **Actualización de Q**:
$$
Q(s,a) \leftarrow Q(s,a) + \alpha \left[r + \gamma \max_{a'} Q(s',a') - Q(s,a)\right]
$$

### 3.2 SARSA

* **Objetivo**: Similar a Q-Learning, pero actualiza Q usando la acción realmente tomada.
* **Fórmula de actualización**:
$$
Q(s,a) \leftarrow Q(s,a) + \alpha \left[r + \gamma Q(s',a') - Q(s,a)\right]
$$

### 3.3 Deep Reinforcement Learning

* **Objetivo**: Usar redes neuronales profundas para aproximar funciones Q o políticas.
* **Ventajas**: Maneja espacios de estados grandes o continuos.
* **Aplicaciones**: Videojuegos, robots, control autónomo.

---

## 📌 Conclusión

El aprendizaje no supervisado incluye:

* **Clustering**: Descubrir grupos naturales (K-Means, DBSCAN, EM, Fuzzy C-Means, jerárquicos).
* **Deep Learning**: Aprender representaciones o generar datos (Autoencoders, GANs).
* **Reinforcement Learning**: Explorar entornos y optimizar políticas (Q-Learning, SARSA, Deep RL).

La elección del algoritmo depende de:

* Tipo de datos y dimensionalidad.
* Necesidad de interpretación vs generación de datos.
* Presencia de ruido o outliers.
* Requerimientos computacionales y escalabilidad.
