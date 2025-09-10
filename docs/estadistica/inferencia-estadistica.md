## Inferencia Estadística

La inferencia estadística se centra en hacer generalizaciones o predicciones sobre una población a partir de una muestra de datos. Es fundamental para validar modelos, tomar decisiones y evaluar hipótesis.

### Tipos de Inferencia
- **Estimación**: Determinar un valor aproximado para un parámetro poblacional usando estadísticas muestrales.
  - **Punto**: Un único valor (ej. media muestral).
  - **Intervalo**: Rango de valores con un nivel de confianza (ej. intervalo de confianza 95%).

- **Pruebas de Hipótesis**: Evaluar afirmaciones sobre la población basándose en la evidencia de la muestra.
  1. **Hipótesis nula (H₀)**: Afirmación a probar (generalmente de "no efecto" o "sin diferencia").
  2. **Hipótesis alternativa (H₁)**: Lo que se busca demostrar.
  3. **Estadístico de prueba**: Calculado a partir de la muestra (ej. t, z, chi-cuadrado).
  4. **Valor p**: Probabilidad de obtener resultados al menos tan extremos como los observados, bajo H₀.
  5. **Nivel de significancia (α)**: Umbral para rechazar H₀ (común: 0.05).
  6. **Decisión**: Rechazar o no H₀ según p < α.

### Tipos de Pruebas
- **Paramétricas** (asumen distribución normal u otras condiciones):
  - t de Student: Comparar medias de una o dos muestras.
  - ANOVA: Comparar medias de más de dos grupos.
  - Z-test: Comparación de medias o proporciones con gran tamaño de muestra.
- **No paramétricas** (sin asumir distribución):
  - Chi-cuadrado: Asociaciones entre variables categóricas.
  - Mann-Whitney U: Comparación de medianas entre dos grupos independientes.
  - Wilcoxon: Comparación de medianas en muestras pareadas.

### Conceptos Clave
- **Error Tipo I (α)**: Rechazar H₀ cuando es verdadera.
- **Error Tipo II (β)**: No rechazar H₀ cuando es falsa.
- **Potencia estadística (1-β)**: Probabilidad de detectar un efecto real.

### Ejemplo Práctico
Supongamos que queremos probar si un nuevo medicamento reduce la presión arterial:
```python
# Hipótesis
# H0: No hay cambio en la presión arterial
# H1: Hay reducción significativa

import scipy.stats as stats

control = [120, 125, 130, 118, 122]
tratamiento = [115, 118, 119, 117, 116]

t_stat, p_value = stats.ttest_ind(control, tratamiento)
if p_value < 0.05:
    print("Rechazamos H0: el tratamiento tiene efecto")
else:
    print("No podemos rechazar H0")
```
### Ejemplo 2: Prueba de proporciones
Supongamos que una empresa de marketing quiere saber si una nueva campaña aumenta la proporción de clientes que hacen clic en un anuncio.  

```python
# Hipótesis
# H0: Proporción de clics igual a la anterior campaña (p0 = 0.1)
# H1: Proporción de clics mayor a 0.1

from statsmodels.stats.proportion import proportions_ztest

# Número de clics y tamaño de muestra
clicks = 25
n = 200
p0 = 0.1

stat, p_value = proportions_ztest(clicks, n, p0, alternative='larger')
if p_value < 0.05:
    print("Rechazamos H0: la campaña aumentó la proporción de clics")
else:
    print("No hay evidencia suficiente para afirmar que la campaña aumentó clics")
``` 


### Ejemplo 3: Intervalo de confianza para la media

Queremos estimar la media de horas de estudio semanal de estudiantes con un 95% de confianza.
```python
import numpy as np
import scipy.stats as stats

data = [12, 15, 14, 10, 13, 16, 11]
mean = np.mean(data)
sem = stats.sem(data)  # error estándar de la media

# Intervalo de confianza 95%
conf_int = stats.t.interval(0.95, len(data)-1, loc=mean, scale=sem)
print(f"Media estimada: {mean:.2f} horas, Intervalo de confianza 95%: {conf_int}")
```
### Ejemplo 4: ANOVA para comparar más de dos grupos

Comparar el rendimiento académico de estudiantes en tres métodos de enseñanza diferentes.
```python
from scipy import stats

grupo1 = [85, 88, 90, 87, 86]
grupo2 = [78, 82, 80, 79, 81]
grupo3 = [92, 95, 91, 94, 93]

f_stat, p_value = stats.f_oneway(grupo1, grupo2, grupo3)
if p_value < 0.05:
    print("Rechazamos H0: existe diferencia significativa entre los grupos")
else:
    print("No hay evidencia suficiente de diferencias entre los grupos")
```