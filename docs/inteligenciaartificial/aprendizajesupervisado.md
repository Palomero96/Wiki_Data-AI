# Aprendizaje Supervisado

El **aprendizaje supervisado** consiste en aprender una función a partir de un conjunto de datos etiquetados.
Formalmente, dado un conjunto de entrenamiento:

$$
D = \{(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)\}
$$

donde $x_i \in \mathbb{R}^d$ son los atributos y $y_i$ la etiqueta asociada, el objetivo es encontrar una función $f: \mathbb{R}^d \to Y$ que aproxime la relación entre entradas y salidas.

---

## Algoritmos Principales

### 1. Árboles de Decisión

Los **árboles de decisión** dividen el espacio de datos en regiones homogéneas mediante reglas jerárquicas.

**Medidas para seleccionar atributos:**

* **Entropía**

$$
H(S) = - \sum_{i=1}^k p_i \log_2(p_i)
$$

* **Ganancia de información**

$$
IG(S, A) = H(S) - \sum_{v \in Values(A)} \frac{|S_v|}{|S|} H(S_v)
$$

* **Índice Gini**

$$
Gini(S) = 1 - \sum_{i=1}^k p_i^2
$$

**Algoritmos más usados:**

* **ID3**: usa ganancia de información.
* **C4.5**: mejora ID3 con atributos continuos y poda.
* **CART**: usa índice Gini, puede generar árboles de regresión.

---

### 2. Reglas de Clasificación

Se representan como **IF condiciones → THEN clase**.

**Medidas de calidad de reglas:**

* **Soporte**:

$$
Support(A \to B) = \frac{|A \cap B|}{N}
$$

* **Confianza**:

$$
Confidence(A \to B) = \frac{|A \cap B|}{|A|}
$$

* **Lift**:

$$
Lift(A \to B) = \frac{Confidence(A \to B)}{P(B)}
$$

**Algoritmos más comunes:**

* **ZeroR, OneR, RIPPER** para clasificación.
* **Apriori** para asociación de ítems.

---

### 3. k-Nearest Neighbors (k-NN)

Clasifica una muestra según las etiquetas de sus **k vecinos más cercanos** en el espacio de características.

**Distancias más usadas:**

* **Euclídea**:

$$
d(x, y) = \sqrt{\sum_{i=1}^n (x_i - y_i)^2}
$$

* **Manhattan**:

$$
d(x, y) = \sum_{i=1}^n |x_i - y_i|
$$

La clase predicha es:

$$
\hat{y} = \arg\max_{c \in C} \sum_{i=1}^k \mathbf{1}(y_i = c)
$$

---

### 4. Support Vector Machines (SVM)

Buscan un **hiperplano óptimo** que maximiza el margen entre clases:

$$
\max_{\mathbf{w}, b} \ \frac{2}{\|\mathbf{w}\|}
$$

sujeto a:

$$
y_i(\mathbf{w} \cdot \mathbf{x}_i + b) \geq 1, \quad \forall i
$$

**Función de decisión:**

$$
f(x) = \text{sign}(\mathbf{w} \cdot \mathbf{x} + b)
$$

Con kernels $K(x, x')$ se pueden separar datos no lineales.

---

### 5. Regresión Lineal y Logística

**Regresión lineal**:

$$
y = \beta_0 + \beta_1 x_1 + \dots + \beta_p x_p + \epsilon
$$

Se estima minimizando el error cuadrático medio:

$$
MSE = \frac{1}{n}\sum_{i=1}^n (y_i - \hat{y}_i)^2
$$

**Regresión logística**:
Se basa en la función sigmoide:

$$
P(y=1|x) = \frac{1}{1 + e^{-(\beta_0 + \beta_1 x_1 + \dots + \beta_p x_p)}}
$$

La decisión se toma con un umbral, típicamente 0.5.

---

### 6. Redes Neuronales Artificiales

Inspiradas en el cerebro, están formadas por **neuronas artificiales**.

**Modelo de neurona:**

$$
z = \sum_{i=1}^n w_i x_i + b
$$

$$
a = \phi(z)
$$

donde $\phi$ es una **función de activación**: sigmoide, ReLU, tanh.

**Perceptrón:** algoritmo básico de clasificación binaria.

**Multilayer Perceptron (MLP):** varias capas ocultas entrenadas con **retropropagación**:

$$
w_{ij} \leftarrow w_{ij} - \eta \frac{\partial L}{\partial w_{ij}}
$$

donde $\eta$ es la tasa de aprendizaje y $L$ la función de pérdida (ej. entropía cruzada).

---

## 📌 Conclusión

El aprendizaje supervisado abarca algoritmos desde modelos simples e interpretables (regresión, árboles, reglas) hasta modelos complejos y potentes (SVM, redes neuronales).
Cada uno tiene ventajas y limitaciones:

* **Árboles y reglas**: interpretabilidad.
* **k-NN y SVM**: precisión en clasificación.
* **Regresión**: simplicidad y base estadística.
* **Redes neuronales**: flexibilidad para problemas complejos.
