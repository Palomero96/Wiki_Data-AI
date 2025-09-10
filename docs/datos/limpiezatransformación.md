# Metodología de Limpieza y Transformación de Datos en Python

## Tabla de Contenidos

1. [Revisión y Corrección de Tipos de Datos](#revisión-y-corrección-de-tipos-de-datos)
2. [Estandarización de Nombres y Formatos](#estandarización-de-nombres-y-formatos)
3. [Detección y Gestión de Duplicados](#detección-y-gestión-de-duplicados)
4. [Análisis y Tratamiento de Valores Nulos](#análisis-y-tratamiento-de-valores-nulos)
5. [Identificación y Manejo de Valores Atípicos](#identificación-y-manejo-de-valores-atípicos)
6. [Revisión de Inconsistencias en Variables Categóricas](#revisión-de-inconsistencias-en-variables-categóricas)
7. [Eliminación de Columnas Irrelevantes](#eliminación-de-columnas-irrelevantes)
8. [Validación del Dataset](#validación-del-dataset)
9. [Buenas Prácticas y Herramientas en Python](#buenas-prácticas-y-herramientas-en-python)
10. [Recursos Adicionales](#recursos-adicionales)


## 1. Revisión y Corrección de Tipos de Datos

Revisar los tipos de datos de cada columna y convertirlos según corresponda: enteros, floats, strings, fechas, booleanos.

```python
import pandas as pd

# Cargar dataset
df = pd.read_csv("dataset.csv")

# Revisar tipos de datos
print(df.dtypes)

# Convertir columna a entero
df['edad'] = df['edad'].astype(int)

# Convertir columna a fecha
df['fecha'] = pd.to_datetime(df['fecha'], format='%Y-%m-%d')
```

## 2. Estandarización de Nombres y Formatos
Normalizar nombres de columnas y formatos de valores (mayúsculas/minúsculas, espacios, símbolos).
```python
# Renombrar columnas
df.rename(columns=lambda x: x.strip().lower().replace(" ", "_"), inplace=True)

# Estandarizar valores de una columna categórica
df['genero'] = df['genero'].str.lower().replace({'m': 'male', 'f': 'female'})
```

## 3. Detección y Gestión de Duplicados
Detectar duplicados y decidir si se eliminan según la relevancia para el análisis.
```python
# Filas duplicadas
duplicados = df.duplicated()
print(duplicados.sum())

# Eliminar duplicados
df.drop_duplicates(inplace=True)

# Duplicados por clave primaria
df.drop_duplicates(subset='id', keep='first', inplace=True)

```

## 4. Análisis y Tratamiento de Valores Nulos
Identificar valores nulos y tratarlos mediante imputación o eliminación.
```python
# Ver porcentaje de nulos por columna
print(df.isnull().mean()*100)

# Eliminar filas con nulos
df.dropna(subset=['columna_critica'], inplace=True)

# Imputar con la media
df['edad'].fillna(df['edad'].mean(), inplace=True)

# Imputar con valor constante
df['ciudad'].fillna('desconocido', inplace=True)

```

## 5. Identificación y Manejo de Valores Atípicos
Detectar outliers y decidir si eliminarlos o transformarlos.
```python
import numpy as np

# Detectar outliers con z-score
from scipy.stats import zscore
df['z_edad'] = zscore(df['edad'])
outliers = df[df['z_edad'].abs() > 3]

# Eliminar outliers
df = df[df['z_edad'].abs() <= 3]

# Transformación logarítmica para suavizar distribuciones
df['ingreso_log'] = np.log1p(df['ingreso'])

```

## 6. Revisión de Inconsistencias en Variables Categóricas
Corregir errores de sintaxis, espacios, o categorías no válidas.
```python
# Valores únicos antes de limpieza
print(df['profesion'].unique())

# Reemplazar errores
df['profesion'] = df['profesion'].str.strip().str.lower()
df['profesion'].replace({'engenier': 'engineer', 'medico': 'doctor'}, inplace=True)

```

## 7. Eliminación de Columnas Irrelevantes
Remover columnas que no aportan información útil o que tienen demasiados valores faltantes.
```python
# Columnas con más del 50% de valores nulos
cols_eliminar = df.columns[df.isnull().mean() > 0.5]
df.drop(columns=cols_eliminar, inplace=True)

# Columnas irrelevantes
df.drop(columns=['comentarios'], inplace=True)

```

## 8. Validación del Dataset
Verificar que las transformaciones cumplen con los objetivos y la calidad del dataset.
```python
# Revisar tipos y nulos
print(df.dtypes)
print(df.isnull().sum())

# Descripción estadística
print(df.describe(include='all'))

```

## 3. Detección y Gestión de Duplicados
Detectar duplicados y decidir si se eliminan según la relevancia para el análisis.
```python

```