## Regresión y Correlación

La regresión y la correlación son herramientas fundamentales para estudiar la relación entre variables y hacer predicciones.

### Correlación
Mide la fuerza y dirección de la relación lineal entre dos variables.

- **Coeficiente de correlación de Pearson (r)**: Valores entre -1 y 1
  - r = 1 → correlación positiva perfecta
  - r = -1 → correlación negativa perfecta
  - r = 0 → sin correlación lineal
- **Coeficiente de Spearman**: Correlación basada en rangos, útil para relaciones no lineales.

```python
import numpy as np
from scipy.stats import pearsonr, spearmanr

x = [1, 2, 3, 4, 5]
y = [2, 4, 5, 4, 5]

# Pearson
r, p_value = pearsonr(x, y)
print(f"Correlación Pearson: {r:.2f}, p-valor: {p_value:.3f}")

# Spearman
rho, p_value_s = spearmanr(x, y)
print(f"Correlación Spearman: {rho:.2f}, p-valor: {p_value_s:.3f}")
```

### Regresión Lineal
Modela la relación entre una variable independiente 𝑋 y una dependiente 𝑌.
```python
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
Y = np.array([2, 4, 5, 4, 5])

model = LinearRegression()
model.fit(X, Y)

print(f"Pendiente: {model.coef_[0]:.2f}, Intercepto: {model.intercept_:.2f}")

# Predicción
X_new = np.array([6]).reshape(-1, 1)
pred = model.predict(X_new)
print(f"Predicción para X=6: {pred[0]:.2f}")

```

### Regresión Lineal Múltiple
Incluye varias variables independientes para predecir una variable dependiente.
```python
X = np.array([[1, 2], [2, 1], [3, 4], [4, 3], [5, 5]])
Y = np.array([2, 3, 6, 7, 10])

model = LinearRegression()
model.fit(X, Y)

print(f"Coeficientes: {model.coef_}, Intercepto: {model.intercept_}")

# Predicción
X_new = np.array([[6, 6]])
pred = model.predict(X_new)
print(f"Predicción para X=[6,6]: {pred[0]:.2f}")

```

### Evaluación del Modelo
- R² (coeficiente de determinación): Fracción de la varianza explicada por el modelo.

- MSE / RMSE: Error cuadrático medio / raíz del error cuadrático medio.

- MAE: Error absoluto medio.
```python
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score

y_pred = model.predict(X)
print(f"R²: {r2_score(Y, y_pred):.2f}")
print(f"MSE: {mean_squared_error(Y, y_pred):.2f}")
print(f"MAE: {mean_absolute_error(Y, y_pred):.2f}")

```

### Visualización
Visualizar la relación y el ajuste del modelo ayuda a la interpretación.
```python
import matplotlib.pyplot as plt

plt.scatter(X[:,0], Y, color='blue', label='Datos')
plt.plot(X[:,0], y_pred, color='red', label='Predicción')
plt.xlabel('X1')
plt.ylabel('Y')
plt.title('Regresión Lineal Múltiple')
plt.legend()
plt.show()

```