# Evaluación de Algoritmos de Aprendizaje Supervisado

La **evaluación de modelos supervisados** es fundamental para medir su capacidad de generalizar sobre nuevos datos y evitar problemas como el sobreajuste (*overfitting*). A continuación, se presentan las principales técnicas y métricas utilizadas.

---

## 1. Validación de Modelos

### 1.1 Conjunto de Entrenamiento y Prueba

* Se divide el dataset en **train set** (para entrenar) y **test set** (para evaluar).
* Ejemplo típico: 70% entrenamiento, 30% prueba.
* **Problema**: la evaluación depende mucho de cómo se haga la partición.

### 1.2 Validación Cruzada (Cross-Validation)

* Divide los datos en *k* particiones.
* Se entrena en *k-1* y se evalúa en la partición restante.
* El proceso se repite *k* veces y se promedia el resultado.
* **Ventaja**: más robusto que un simple train/test split.
* **Desventaja**: mayor coste computacional.

**Caso especial:** *Stratified k-Fold* mantiene la proporción de clases en cada partición (útil en clasificación desbalanceada).

### 1.3 Conjunto de Validación

* Además de train/test, se reserva un conjunto adicional para ajustar hiperparámetros.
* Evita que el test set influya en el entrenamiento.

---

## 2. Métricas para Clasificación

### 2.1 Matriz de Confusión

Permite ver **dónde falla el modelo**. Ejemplo en un problema binario:

|                   | Predicción Positiva       | Predicción Negativa       |
| ----------------- | ------------------------- | ------------------------- |
| **Real Positivo** | Verdaderos Positivos (TP) | Falsos Negativos (FN)     |
| **Real Negativo** | Falsos Positivos (FP)     | Verdaderos Negativos (TN) |

### 2.2 Exactitud (Accuracy)

Mide el porcentaje de predicciones correctas.

$$
Accuracy = \frac{TP + TN}{TP + TN + FP + FN}
$$

* **Ventaja**: intuitiva.
* **Problema**: engañosa en clases desbalanceadas (ej. 95% de exactitud si el 95% de ejemplos son de una sola clase).

### 2.3 Precisión (Precision)

De todas las predicciones positivas, cuántas son correctas.

$$
Precision = \frac{TP}{TP + FP}
$$

* Alta precisión = pocos falsos positivos.
* Ejemplo: útil en diagnóstico médico cuando un falso positivo es muy costoso.

### 2.4 Recall o Sensibilidad (True Positive Rate)

De todos los positivos reales, cuántos detectó el modelo.

$$
Recall = \frac{TP}{TP + FN}
$$

* Alta sensibilidad = pocos falsos negativos.
* Ejemplo: útil en detección de fraudes, donde es peor dejar escapar un fraude que marcar de más.

### 2.5 Especificidad (True Negative Rate)

De todos los negativos reales, cuántos detectó bien.

$$
Specificity = \frac{TN}{TN + FP}
$$

* Complementa al recall: uno mide bien positivos, el otro negativos.

### 2.6 Medida F1

Promedio armónico de precisión y recall.

$$
F1 = 2 \cdot \frac{Precision \cdot Recall}{Precision + Recall}
$$

* Útil cuando hay desbalance de clases.
* Penaliza cuando precisión y recall están descompensados.

### 2.7 Curva ROC y AUC

* ROC: representa \$TPR\$ frente a \$FPR\$.
* AUC (Área Bajo la Curva): mide la capacidad global del clasificador para distinguir entre clases.
* Un modelo aleatorio tiene AUC = 0.5; un modelo perfecto, AUC = 1.

---

## 3. Métricas para Regresión

### 3.1 Error Cuadrático Medio (MSE)

$$
MSE = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2
$$

* Penaliza más los errores grandes.
* Muy usado en problemas de predicción continua.

### 3.2 Raíz del Error Cuadrático Medio (RMSE)

$$
RMSE = \sqrt{MSE}
$$

* Interpretable en las mismas unidades que la variable objetivo.
* Ejemplo: si predices precios de casas en €, RMSE = 5000 significa un error promedio de 5000 €.

### 3.3 Error Absoluto Medio (MAE)

$$
MAE = \frac{1}{n} \sum_{i=1}^n |y_i - \hat{y}_i|
$$

* Menos sensible a valores atípicos que MSE.
* Representa el error medio absoluto en las unidades originales.

### 3.4 Coeficiente de Determinación (\$R^2\$)

$$
R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}
$$

* \$R^2 = 1\$: predicción perfecta.
* \$R^2 = 0\$: el modelo no mejora la media.
* Puede ser negativo si el modelo es peor que usar la media.

---

## 4. Problemas Comunes

### 4.1 Sobreajuste (Overfitting)

* El modelo aprende demasiado bien el entrenamiento pero falla en datos nuevos.
* **Síntoma**: alta exactitud en train, baja en test.
* **Soluciones**: regularización, poda de árboles, early stopping, más datos.

### 4.2 Subajuste (Underfitting)

* El modelo es demasiado simple y no captura la complejidad de los datos.
* **Síntoma**: bajo rendimiento tanto en train como en test.
* **Soluciones**: usar modelos más complejos, añadir características relevantes.

### 4.3 Desbalance de Clases

* Ocurre cuando una clase es mucho más frecuente.
* **Problema**: el modelo puede predecir siempre la clase mayoritaria y obtener alta accuracy.
* **Soluciones**: *oversampling*, *undersampling*, métricas alternativas (F1, AUC).

---

## 📌 Conclusión

La evaluación de algoritmos supervisados no se limita a una sola métrica. La elección depende del tipo de problema:

* **Clasificación balanceada**: Accuracy.
* **Clasificación desbalanceada**: Precision, Recall, F1, AUC.
* **Regresión**: MSE, RMSE, MAE, \$R^2\$.

Una buena práctica es usar **varias métricas y validación cruzada** para obtener una visión completa del rendimiento del modelo.
