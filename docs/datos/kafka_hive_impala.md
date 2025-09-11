# Apache Kafka, Hive e Impala

Este documento cubre tres tecnologías clave en el ecosistema Big Data: **Kafka** (streaming), **Hive** (data warehouse) e **Impala** (consultas SQL en Hadoop).

---

## 1. Apache Kafka

* **Definición**: Plataforma distribuida para **streaming de datos** en tiempo real.
* **Componentes clave**:

  * **Producer**: envía mensajes a un topic.
  * **Consumer**: lee mensajes de un topic.
  * **Broker**: servidor que almacena y gestiona los mensajes.
  * **Topic**: categoría o flujo de mensajes.
  * **Partition**: fragmentos de un topic para paralelismo.
* **Características**:

  * Alta **tolerancia a fallos**.
  * Escalabilidad horizontal.
  * Persistencia y reproducción de mensajes.
* **Ejemplo conceptual en Python (Kafka-Python)**:

```python
from kafka import KafkaProducer, KafkaConsumer

# Producer
producer = KafkaProducer(bootstrap_servers='localhost:9092')
producer.send('topic_ejemplo', b'Hola Kafka!')

# Consumer
consumer = KafkaConsumer('topic_ejemplo', bootstrap_servers='localhost:9092')
for message in consumer:
    print(message.value)
```

* **Casos de uso**: ingestión de logs, pipelines en tiempo real, IoT, microservicios.

---

## 2. Apache Hive

* **Definición**: Data warehouse sobre Hadoop que permite **consultas SQL** sobre datos almacenados en HDFS.
* **Características**:

  * Traducir SQL a MapReduce, Tez o Spark jobs.
  * Almacenar datos en **tablas externas o internas**.
  * Soporta **particiones y bucketing** para eficiencia.
* **Ejemplo conceptual**:

```sql
-- Crear tabla
CREATE TABLE empleados (
    id INT,
    nombre STRING,
    salario FLOAT
)
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ','
STORED AS TEXTFILE;

-- Consultar
SELECT nombre, salario FROM empleados WHERE salario > 5000;
```

* **Casos de uso**: análisis de grandes volúmenes de datos históricos, BI, generación de reportes.

---

## 3. Apache Impala

* **Definición**: Motor de **consultas SQL en tiempo real** sobre Hadoop.
* **Características**:

  * Baja latencia en consultas comparado con Hive.
  * Acceso a los mismos datos almacenados en HDFS o HBase.
  * Compatible con SQL estándar.
* **Ejemplo conceptual**:

```sql
-- Consultar tabla de Hive desde Impala
SELECT nombre, salario
FROM empleados
WHERE salario > 5000;
```

* **Casos de uso**: dashboards interactivos, análisis en tiempo real sobre grandes datasets.

---

## 📌 Conclusión

* **Kafka**: ingestión y procesamiento de datos en tiempo real.
* **Hive**: análisis de grandes datasets históricos mediante SQL.
* **Impala**: consultas rápidas en Hadoop para BI y análisis interactivo.

> Combinadas, estas tecnologías permiten construir **pipelines de Big Data completos**, desde la ingestión hasta el análisis interactivo y el reporting.
