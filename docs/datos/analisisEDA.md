# Exploratory Data Analysis (EDA) en Python

El **EDA** es el proceso de investigar y resumir datasets para entender su estructura, detectar patrones, anomalías y preparar los datos para modelado.

---

## 1. Objetivos del EDA

* Conocer la **distribución** de variables.
* Detectar **valores faltantes y outliers**.
* Explorar **relaciones entre variables**.
* Preparar los datos para **modelado** y limpieza adicional.

---

## 2. Inspección Inicial de Datos

```python
import pandas as pd

# Cargar dataset
df = pd.read_csv('dataset.csv')

# Primeras filas
print(df.head())

# Información general
print(df.info())

# Estadísticas descriptivas
print(df.describe())
```

* Revisar tipos de datos, nulos y rangos de valores.

---

## 3. Análisis Univariado

### 3.1 Variables Numéricas

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Histograma
sns.histplot(df['edad'], bins=20)
plt.show()

# Boxplot
sns.boxplot(x=df['edad'])
plt.show()
```

### 3.2 Variables Categóricas

```python
# Conteo de categorías
df['genero'].value_counts().plot(kind='bar')
plt.show()
```

* Permite identificar **distribuciones**, sesgos y outliers.

---

## 4. Análisis Bivariado

### 4.1 Variables Numéricas vs Numéricas

```python
# Scatter plot
sns.scatterplot(x='edad', y='salario', data=df)
plt.show()

# Correlación
print(df[['edad','salario']].corr())
```

### 4.2 Variables Categóricas vs Numéricas

```python
# Boxplot por categoría
sns.boxplot(x='genero', y='salario', data=df)
plt.show()
```

### 4.3 Variables Categóricas vs Categóricas

```python
# Tabla de contingencia
pd.crosstab(df['genero'], df['departamento'])
```

---

## 5. Análisis Multivariado

* Usar **matrices de correlación** y **pairplots** para detectar relaciones complejas.

```python
# Pairplot
sns.pairplot(df[['edad','salario','experiencia']])
plt.show()

# Heatmap de correlación
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
plt.show()
```

---

## 6. Detección de Outliers y Valores Faltantes

```python
# Valores faltantes
print(df.isnull().sum())

# Outliers (IQR)
Q1 = df['salario'].quantile(0.25)
Q3 = df['salario'].quantile(0.75)
IQR = Q3 - Q1
outliers = df[(df['salario'] < Q1 - 1.5*IQR) | (df['salario'] > Q3 + 1.5*IQR)]
print(outliers)
```

* Permite decidir **estrategias de imputación o eliminación**.

---

## 7. Visualización Avanzada

* Histogramas múltiples, violin plots, scatter plots con color por categoría.

```python
# Violin plot
sns.violinplot(x='genero', y='salario', data=df)
plt.show()

# Scatter con hue
sns.scatterplot(x='edad', y='salario', hue='genero', data=df)
plt.show()
```

---

## 📌 Conclusión

* El **EDA** permite conocer a fondo los datos antes de modelar.
* Detecta **outliers, valores faltantes y relaciones** entre variables.
* Facilita la **selección de características** y mejora la preparación de datos para modelos predictivos.

> Siempre se recomienda combinar **análisis estadístico y visualización** para obtener la mejor comprensión del dataset.
