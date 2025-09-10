# Probabilidad y Distribuciones

## Conceptos Fundamentales
- **Espacio muestral (Ω)**: Conjunto de todos los resultados posibles de un experimento.
- **Evento (E)**: Subconjunto del espacio muestral.
- **Probabilidad (P)**: Medida que asigna un valor entre 0 y 1 a un evento.

## Reglas Básicas
- **Regla de la adición**: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
- **Regla de la multiplicación**: P(A ∩ B) = P(A) * P(B|A)
- **Complemento**: P(A') = 1 - P(A)

## Tipos de Probabilidad
- **Clásica**: Basada en conteo de resultados igualmente posibles.
- **Frecuentista**: Basada en la frecuencia relativa en experimentos repetidos.
- **Bayesiana**: Probabilidad condicional actualizada mediante nueva evidencia.

## Distribuciones Discretas
- **Bernoulli**: Experimento con 2 resultados (éxito/fracaso), P(X=1)=p.
- **Binomial**: Suma de n ensayos de Bernoulli, P(X=k) = C(n,k) * p^k * (1-p)^(n-k).
- **Poisson**: Modela número de eventos en un intervalo, λ promedio de ocurrencias.

## Distribuciones Continuas
- **Uniforme**: Todos los valores en [a, b] son igualmente probables.
- **Normal (Gaussiana)**: Distribución en campana; caracterizada por media μ y desviación estándar σ.
- **Exponencial**: Modela tiempo entre eventos; parámetro λ.
- **Gamma y Beta**: Distribuciones flexibles para modelar tasas y proporciones.

## Funciones Clave
- **Función de densidad de probabilidad (PDF)**: f(x) para distribuciones continuas.
- **Función de masa de probabilidad (PMF)**: P(X=x) para distribuciones discretas.
- **Función de distribución acumulada (CDF)**: F(x) = P(X ≤ x).

## Propiedades Importantes
- **Esperanza (media)**: E[X] = Σx*P(X=x) o ∫x*f(x)dx
- **Varianza**: Var(X) = E[(X - μ)^2]
- **Desviación estándar**: σ = √Var(X)
- **Covarianza y correlación**: Cov(X,Y) = E[(X-μX)(Y-μY)], ρ = Cov(X,Y)/(σX*σY)