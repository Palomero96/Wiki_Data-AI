# Apache Spark con Python (PySpark)

Apache Spark es un motor de **procesamiento distribuido** de datos a gran escala, rápido y eficiente, ampliamente utilizado en Big Data y Machine Learning.

---

## 1. Introducción

* Procesamiento distribuido en clusters.
* Permite trabajar con **grandes volúmenes de datos** en memoria.
* Compatible con **Python (PySpark), Scala, Java y R**.

---

## 2. Instalación y Configuración

```bash
# Instalar PySpark via pip
pip install pyspark

# Comprobar versión
python -c "import pyspark; print(pyspark.__version__)"
```

```python
from pyspark.sql import SparkSession

# Crear sesión Spark
spark = SparkSession.builder \
    .appName("EjemploSpark") \
    .getOrCreate()
```

---

## 3. RDDs (Resilient Distributed Datasets)

* Estructura de datos fundamental de Spark.
* Inmutable, distribuida y tolerante a fallos.
* Operaciones principales:

  * **Transformaciones**: map, filter, flatMap
  * **Acciones**: collect, count, reduce

```python
rdd = spark.sparkContext.parallelize([1,2,3,4,5])
rdd2 = rdd.map(lambda x: x**2)
print(rdd2.collect())
```

---

## 4. DataFrames y SQL

* API más alta que RDD, optimizada con **Catalyst optimizer**.
* Permite consultas **SQL** y operaciones **tipo pandas**.

```python
data = [("Alice", 25), ("Bob", 30)]
columns = ["Nombre", "Edad"]
df = spark.createDataFrame(data, columns)

# Mostrar datos
df.show()

# SQL
df.createOrReplaceTempView("personas")
spark.sql("SELECT * FROM personas WHERE Edad > 26").show()
```

---

## 5. Transformaciones y Acciones

* **Transformaciones**: no ejecutan nada hasta que se llama a una acción.

  * `select`, `filter`, `withColumn`, `groupBy`
* **Acciones**: devuelven resultados al driver.

  * `collect`, `count`, `show`, `take`

```python
df.filter(df['Edad'] > 26).show()
df.groupBy("Edad").count().show()
```

---

## 6. Ejemplo de Pipeline de Procesamiento

```python
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.regression import LinearRegression

# Dataset ejemplo
data = [(1,2,3),(2,5,7),(3,8,9)]
columns = ["x1","x2","y"]
df = spark.createDataFrame(data, columns)

# Crear vector de características
assembler = VectorAssembler(inputCols=["x1","x2"], outputCol="features")
df_vector = assembler.transform(df)

# Entrenar modelo de regresión lineal
lr = LinearRegression(featuresCol="features", labelCol="y")
model = lr.fit(df_vector)
predictions = model.transform(df_vector)
predictions.show()
```

---

## 7. Ventajas y Casos de Uso

* **Ventajas**

  * Procesamiento distribuido en memoria → rápido.
  * API unificada: RDD, DataFrames, SQL, MLlib, GraphX, Streaming.
  * Escalabilidad: de laptops a clusters grandes.
* **Casos de uso**

  * ETL de grandes datasets.
  * Machine Learning distribuido.
  * Procesamiento de logs, sensores y streaming.
