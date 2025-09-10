
## Análisis Multivariante

El análisis multivariante permite estudiar simultáneamente varias variables para identificar patrones, reducir dimensionalidad y agrupar observaciones similares.

### Análisis de Componentes Principales (PCA)
Reduce la dimensionalidad de los datos mientras maximiza la varianza explicada.

```python
from sklearn.decomposition import PCA
import numpy as np

# Datos de ejemplo
X = np.array([[2.5, 2.4],
              [0.5, 0.7],
              [2.2, 2.9],
              [1.9, 2.2],
              [3.1, 3.0]])

pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

print("Componentes principales:\n", X_pca)
print("Varianza explicada:", pca.explained_variance_ratio_)
```

**Conceptos clave:**

* Componentes ortogonales
* Máxima varianza explicada
* Reducción de dimensionalidad sin perder información relevante

### Análisis de Clúster

Agrupa observaciones según similitud.

* **K-Means:** Agrupamiento por distancia.
* **Jerárquico:** Genera dendrogramas para visualizar relaciones.
* **DBSCAN:** Basado en densidad, detecta outliers.

```python
from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=2, random_state=42)
clusters = kmeans.fit_predict(X)
print("Asignación de clusters:", clusters)
```

### Análisis Factorial

Identifica variables latentes y reduce el número de variables observadas.

```python
from sklearn.decomposition import FactorAnalysis

fa = FactorAnalysis(n_components=1)
X_fa = fa.fit_transform(X)
print("Variables latentes:\n", X_fa)
```

**Beneficios:**

* Interpreta estructura subyacente
* Simplifica análisis multivariante complejo

### Visualización Multivariante

* **Scatter plots:** Para dos o tres variables.
* **Pair plots:** Muestra relaciones entre todas las variables.
* **Heatmaps:** Correlaciones entre variables.

```python
import seaborn as sns
import pandas as pd

df = pd.DataFrame(X, columns=['Var1', 'Var2'])
sns.pairplot(df)
sns.heatmap(df.corr(), annot=True, cmap='coolwarm')
```

### Aplicaciones

* Reducción de dimensionalidad antes de machine learning.
* Identificación de patrones ocultos en datos complejos.
* Detección de outliers y estructuras de grupos.
* Preparación de datos para visualización avanzada.

