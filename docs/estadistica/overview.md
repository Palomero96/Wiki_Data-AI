# 📊 Estadística para Ciencia de Datos e IA

## Tabla de Contenidos

- [Fundamentos de Estadística](#fundamentos-de-estadística)
- [Tipos de Datos y Variables](#tipos-de-datos-y-variables)
- [Estadística Descriptiva](#estadística-descriptiva)
- [Probabilidad y Distribuciones](#probabilidad-y-distribuciones)
- [Inferencia Estadística](#inferencia-estadística)
- [Regresión y Correlación](#regresión-y-correlación)
- [Análisis Multivariante](#análisis-multivariante)
- [Estadística Computacional](#estadística-computacional)
- [Aplicaciones en IA y Machine Learning](#aplicaciones-en-ia-y-machine-learning)

## Fundamentos de Estadística

### ¿Qué es la Estadística?
Ciencia que permite aprender de los datos mediante:
- Diseño de estudios
- Recogida de datos
- Análisis e interpretación
- Organización y visualización
- Conclusiones y predicciones

### Tipos de Estadística
- **Descriptiva**: Describe y resume datos muestrales
- **Inferencial**: Extrae conclusiones sobre poblaciones

### Conceptos Clave
- **Población**: Conjunto completo de individuos
- **Muestra**: Subconjunto representativo
- **Muestreo**: Proceso de selección de muestra
- **Inferencia**: Extrapolación de muestra a población

## Tipos de Datos y Variables

### Variables Categóricas
- **Nominales**: Sin orden inherente (género, color)
- **Ordinales**: Con orden natural (nivel educativo, satisfacción)

### Variables Cuantitativas
- **Discretas**: Valores enteros (número de hijos, conteos)
- **Continuas**: Cualquier valor en un rango (peso, temperatura)

### Clasificación por Rol
- **Variable respuesta/dependiente**: Lo que queremos predecir
- **Variable explicativa/independiente**: Lo que usamos para predecir
- **Variables intermediarias**: No medidas pero influyentes

## Estadística Descriptiva

### Medidas de Tendencia Central
| Medida | Fórmula | Ventajas | Desventajas |
|--------|---------|----------|-------------|
| **Media** | $\bar{x} = \frac{\sum x_i}{n}$ | Usa todos los datos | Sensible a outliers |
| **Mediana** | Valor central ordenado | Robusta a outliers | No usa toda la información |
| **Moda** | Valor más frecuente | Útil para categóricas | Puede haber múltiples modas |

### Medidas de Dispersión
- **Rango**: Diferencia entre máximo y mínimo
- **Varianza**: $\sigma^2 = \frac{\sum (x_i - \bar{x})^2}{n}$
- **Desviación Estándar**: $\sigma = \sqrt{\sigma^2}$
- **Coeficiente de Variación**: $CV = \frac{\sigma}{\bar{x}}$

### Medidas Robustas
- **Media recortada**: Elimina outliers extremos
- **Media winsorizada**: Reemplaza outliers con valores límite
- **Rango intercuartílico**: IQR = Q3 - Q1

### Visualización de Datos
```python
# Gráficos comunes en Python
import matplotlib.pyplot as plt
import seaborn as sns

# Histograma
plt.hist(data, bins=30)

# Boxplot
sns.boxplot(x=data)

# Scatterplot
plt.scplot(x_var, y_var)
```

## Probabilidad y Distribuciones

### Conceptos Básicos
- **Probabilidad**: Medida de incertidumbre (0-1)
- **Espacio muestral**: Todos los resultados posibles
- **Variable aleatoria**: Función que asigna valores a resultados

### Distribuciones Discretas
- **Binomial**: $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$
- **Poisson**: $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$
- **Geométrica**: Número de intentos hasta el primer éxito

### Distribuciones Continuas
- **Normal**: $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$
- **Exponencial**: Modela tiempos entre eventos
- **Uniforme**: Todos los valores igualmente probables

### Teorema del Límite Central
Cuando n → ∞, la distribución de las medias muestrales:
- Se aproxima a una normal
- Media = media poblacional
- Desviación = σ/√n

## Inferencia Estadística

### Estimación
- **Puntual**: Valor único (media muestral)
- **Por intervalos**: Rango de valores plausibles

### Intervalos de Confianza
- **IC 95%**: $\bar{x} \pm 1.96 \frac{\sigma}{\sqrt{n}}$
- **Margen de error**: $z_{\alpha/2} \frac{\sigma}{\sqrt{n}}$

### Contrastes de Hipótesis
- **H₀**: Hipótesis nula (status quo)
- **H₁**: Hipótesis alternativa (lo que queremos probar)
- **Valor p**: Probabilidad de obtener resultados tan extremos si H₀ es verdadera
- **α**: Nivel de significación (usualmente 0.05)
- **Región de rechazo**: Valores que llevan a rechazar H₀

### Errores
| | H₀ Verdadera | H₀ Falsa |
|---|---|---|
| **Rechazar H₀** | Error Tipo I (α) | Decisión correcta (1-β) |
| **No rechazar H₀** | Decisión correcta | Error Tipo II (β) |

## Regresión y Correlación

### Correlación
- **Pearson**: $r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \sum (y_i - \bar{y})^2}}$
- Valores entre -1 y 1
- Mide fuerza y dirección de relación lineal

### Regresión Lineal
```python
# Modelo lineal
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X, y)
y_pred = model.predict(X)
``` 

### Supuestos del Modelo

* Linealidad
* Independencia de errores
* Homocedasticidad (varianza constante)
* Normalidad de residuos

### Diagnóstico del Modelo

* Residuos vs Ajustados: Patrón aleatorio
* QQ-plot: Normalidad de residuos
* Leverage y outliers: Puntos influyentes

## Análisis Multivariante

#### Análisis de Componentes Principales (PCA)

```python
from sklearn.decomposition import PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)
```

* Reduce dimensionalidad
* Maximiza varianza explicada
* Componentes ortogonales

## Análisis Cluster

* K-means: Agrupamiento por distancia
* Jerárquico: Dendrogramas
* DBSCAN: Basado en densidad

## Análisis Factorial

* Identifica variables latentes
* Reduce número de variables
* Interpreta estructura subyacente

# Estadística Computacional

## Herramientas

* R: Especializado en análisis estadístico
* Python: Versátil para ciencia de datos
* SQL: Manipulación de bases de datos

## Ventajas de R

* Amplio ecosistema de paquetes estadísticos
* Excelentes capacidades de visualización
* Comunidad activa en estadística
* Reproducibilidad con RMarkdown

# Big Data y Estadística

## Desafíos

* Almacenamiento y acceso eficiente
* Procesamiento distribuido
* Algoritmos escalables
* Quality assurance de datos

## Soluciones

* Apache Spark
* Hadoop
* Bases de datos distribuidas
* Computación en cloud

## Aplicaciones en IA y Machine Learning

### Relación Estadística-ML

* Estadística: Inferencia, significancia, incertidumbre
* ML: Predicción, escalabilidad, automatización

### Conceptos Clave en ML

* Bias-Variance Tradeoff

  * High bias: Subajuste (underfitting)
  * High variance: Sobreajuste (overfitting)
* Cross-validation

  * K-fold validation
  * Train-test splits
* Hyperparameter tuning
* Regularization

  * L1 (Lasso): Selección de características
  * L2 (Ridge): Reducción de sobreajuste

### Métricas de Evaluación

| Tipo          | Métricas                                 |
| ------------- | ---------------------------------------- |
| Clasificación | Accuracy, Precision, Recall, F1, AUC-ROC |
| Regresión     | MSE, MAE, R², RMSE                       |
| Clustering    | Silhouette score, Davies-Bouldin         |

### Bayesian Statistics in AI

* Naive Bayes: Clasificación probabilística
* Bayesian Networks: Modelos gráficos probabilísticos
* MCMC: Muestreo de distribuciones complejas

### Deep Learning Statistics

* Initialization: Xavier, He initialization
* Normalization: Batch norm, layer norm
* Uncertainty: Bayesian neural networks
* Regularization: Dropout, weight decay

## Buenas Prácticas

### Análisis Exploratorio (EDA)

* Comprensión de datos: Forma, tipos, valores missing
* Limpieza: Outliers, missing values, transformaciones
* Visualización: Distribuciones, correlaciones, patrones
* Feature engineering: Creación de variables relevantes

### Validación de Modelos

* Train/Test split: 70-30 o 80-20
* Cross-validation: K-fold (usualmente 5 o 10)
* Time-series validation: Walk-forward testing
* External validation: Datos completamente nuevos

### Ética y Sesgos

* Fairness: Mitigación de sesgos algorítmicos
* Transparency: Modelos interpretables
* Privacy: Protección de datos sensibles
* Accountability: Responsabilidad en decisiones automatizadas

## Recursos y Herramientas

### Librerías Python

```python
# Análisis estadístico
import scipy.stats as stats
import statsmodels.api as sm

# Machine learning
from sklearn import linear_model, ensemble, model_selection

# Visualización
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
```

### Librerías R

```r
# Análisis básico
library(tidyverse)
library(ggplot2)

# Modelado avanzado
library(caret)
library(randomForest)
library(xgboost)

# Series temporales
library(forecast)
library(tseries)
```


## Conclusión

La estadística proporciona los fundamentos matemáticos y metodológicos esenciales para la ciencia de datos e inteligencia artificial. Dominar estos conceptos permite:

* Diseñar mejores experimentos y recoger datos de calidad
* Entender profundamente los datos mediante EDA
* Construir modelos robustos con validación adecuada
* Interpretar resultados con rigor estadístico
* Comunicar hallazgos con claridad y precisión
* Tomar decisiones basadas en evidencia sólida
