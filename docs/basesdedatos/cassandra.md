# CassandraDB

# Tabla de Contenidos

- [Características Principales](#características-principales)
- [Arquitectura Principal](#arquitectura-principal)
- [Ventajas y Casos de Uso](#ventajas-y-casos-de-uso)
- [Comandos Básicos](#comandos-básicos)
  - [Conexión](#conexión)
  - [Administración](#administración)
- [Operaciones CRUD](#operaciones-crud)
  - [Create](#create)
  - [Read](#read)
  - [Update](#update)
  - [Delete](#delete)
- [Consultas con CQL](#consultas-con-cql)
  - [Cláusulas Básicas](#cláusulas-básicas)
  - [Filtros y Condiciones](#filtros-y-condiciones)
  - [Funciones de Agregación](#funciones-de-agregación)
- [Gestión de Esquema](#gestión-de-esquema)
  - [Creación de Keyspaces](#creación-de-keyspaces)
  - [Creación y Alteración de Tablas](#creación-y-alteración-de-tablas)
  - [Índices y Materialized Views](#índices-y-materialized-views)
- [Optimización y Buenas Prácticas](#optimización-y-buenas-prácticas)

## Características Principales

Apache Cassandra es una base de datos NoSQL distribuida diseñada para manejar grandes volúmenes de datos en múltiples servidores, proporcionando alta disponibilidad sin punto único de fallo.

**Principales características:**
- Arquitectura distribuida y descentralizada
- Alta disponibilidad y tolerancia a fallos
- Escalabilidad lineal
- Modelo de datos columnar
- Lenguaje de consulta CQL (Cassandra Query Language)
- Soporte para ACID a nivel de fila
- Replicación configurable

## Arquitectura Principal

### Componentes Clave
- **Nodo**: Instancia individual de Cassandra
- **Cluster**: Conjunto de nodos que contienen los datos
- **Keyspace**: Contenedor de datos (similar a base de datos en SQL)
- **Table**: Estructura que almacena datos organizados en filas y columnas
- **Partition Key**: Clave que determina la distribución de datos en el cluster

### Modelo de Réplicas
Cluster (DC1 + DC2)
│
├── Node1 (Replica for Partition A)
├── Node2 (Replica for Partition B)
├── Node3 (Replica for Partition A)
└── Node4 (Replica for Partition B)

## Ventajas y Casos de Uso

### Ventajas
- Alto rendimiento en escritura
- Escalabilidad horizontal sin downtime
- Flexibilidad en el esquema de datos
- Configuración de consistencia ajustable

### Casos de Uso Ideales
- Sistemas de mensajería en tiempo real
- Plataformas de IoT y telemetría
- Sistemas de recomendación
- Registros de actividad y logging
- Almacenamiento de series temporales

## Comandos Básicos

### Conexión
```bash
# Conectar a Cassandra con cqlsh
cqlsh [host] [port]

# Conectar con autenticación
cqlsh -u username -p password

# Conectar a cluster específico
cqlsh --cqlversion="3.4.4" hostname port
``` 
### Administracion
```sql
-- Mostrar version
SELECT release_version FROM system.local;

-- Mostrar nodos del cluster
SELECT peer, data_center, host_id, rack FROM system.peers;

-- Mostrar keyspaces
DESCRIBE KEYSPACES;

-- Mostrar tablas
DESCRIBE TABLES;

-- Mostrar estructura de tabla
DESCRIBE TABLE keyspace.table_name;
```

## Operaciones CRUD
### Create
```sql
-- Insertar datos
INSERT INTO users (user_id, name, email, created_at)
VALUES (uuid(), 'John Doe', 'john@email.com', toTimestamp(now()));

-- Insertar con TTL (Time To Live)
INSERT INTO users (user_id, name) VALUES (uuid(), 'Jane Doe') USING TTL 3600;

-- Insertar múltiples valores
BEGIN BATCH
  INSERT INTO users (user_id, name) VALUES (uuid(), 'User1');
  INSERT INTO users (user_id, name) VALUES (uuid(), 'User2');
APPLY BATCH;
```

### Read
```sql
-- Consulta básica
SELECT * FROM users;

-- Consulta con condiciones
SELECT name, email FROM users WHERE user_id = uuid();

-- Consulta con límite
SELECT * FROM users LIMIT 10;

-- Consulta con ordenamiento
SELECT * FROM users WHERE last_name = 'Doe' ORDER BY created_at DESC;
```

### Update
```sql
-- Actualizar datos
UPDATE users SET email = 'new@email.com' WHERE user_id = uuid();

-- Actualizar con condiciones
UPDATE users SET status = 'active' 
WHERE user_id = uuid() IF status = 'inactive';

-- Actualizar contador
UPDATE page_views SET count = count + 1 WHERE page_id = uuid();
```

### Delete
```sql
-- Eliminar fila
DELETE FROM users WHERE user_id = uuid();

-- Eliminar columna específica
DELETE email FROM users WHERE user_id = uuid();

-- Eliminar con condición
DELETE FROM users WHERE user_id = uuid() IF email = 'old@email.com';
```

## Consultas con CQL
### Cláusulas Básicas
```sql
-- SELECT con WHERE
SELECT * FROM table WHERE partition_key = value;

-- SELECT con IN
SELECT * FROM users WHERE user_id IN (uuid1, uuid2, uuid3);

-- SELECT con DISTINCT
SELECT DISTINCT department FROM employees;

-- SELECT con COUNT
SELECT COUNT(*) FROM users;
```

### Filtros y Condiciones
```sql
-- Operadores de comparación
SELECT * FROM products WHERE price > 100 AND price <= 200;

-- Operadores IN
SELECT * FROM users WHERE state IN ('CA', 'NY', 'TX');

-- Operadores LIKE
SELECT * FROM users WHERE name LIKE 'J%';

-- Condiciones con ALLOW FILTERING
SELECT * FROM users WHERE age > 30 ALLOW FILTERING;
```


### Funciones de Agregación
```sql
-- Funciones básicas
SELECT COUNT(*), AVG(price), MAX(price), MIN(price) FROM products;

-- Función de agregación con GROUP BY
SELECT category, COUNT(*) FROM products GROUP BY category;

-- Función de agregación con WHERE
SELECT department, AVG(salary) FROM employees 
WHERE hire_date > '2020-01-01' GROUP BY department;
```


## Gestión de Esquema
### Creación de Keyspaces
```sql
-- Crear keyspace simple
CREATE KEYSPACE IF NOT EXISTS my_keyspace 
WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor': 3
};

-- Crear keyspace con NetworkTopologyStrategy
CREATE KEYSPACE my_keyspace 
WITH REPLICATION = {
  'class': 'NetworkTopologyStrategy',
  'datacenter1': 3,
  'datacenter2': 2
};

-- Alterar keyspace
ALTER KEYSPACE my_keyspace WITH REPLICATION = {
  'class': 'NetworkTopologyStrategy',
  'datacenter1': 2,
  'datacenter2': 2
};

-- Eliminar keyspace
DROP KEYSPACE my_keyspace;
```

### Creación y Alteración de Tablas
```sql
-- Crear tabla básica
CREATE TABLE users (
  user_id UUID PRIMARY KEY,
  name TEXT,
  email TEXT,
  created_at TIMESTAMP
);

-- Crear tabla con clave compuesta
CREATE TABLE user_posts (
  user_id UUID,
  post_id UUID,
  title TEXT,
  content TEXT,
  PRIMARY KEY (user_id, post_id)
);

-- Crear tabla con opciones
CREATE TABLE products (
  product_id UUID PRIMARY KEY,
  name TEXT,
  price DECIMAL
) WITH compaction = { 'class': 'LeveledCompactionStrategy' }
  AND compression = { 'sstable_compression': 'LZ4Compressor' };

-- Alterar tabla
ALTER TABLE users ADD phone_number TEXT;
ALTER TABLE users DROP email;
ALTER TABLE users ALTER phone_number TYPE TEXT;

-- Eliminar tabla
DROP TABLE users;
```

### Índices y Materialized Views
```sql
-- Crear índice secundario
CREATE INDEX ON users (email);
CREATE INDEX ON users (created_at);

-- Crear índice en colecciones
CREATE INDEX ON users (phones);

-- Crear Materialized View
CREATE MATERIALIZED VIEW user_by_email AS
SELECT user_id, name, email
FROM users
WHERE email IS NOT NULL
PRIMARY KEY (email, user_id);

-- Eliminar índice
DROP INDEX users_email_idx;
```

## Optimización y Buenas Prácticas
### Diseño de Tablas
- Diseñar tablas según las consultas, no las entidades
- Usar claves de partición adecuadas para distribuir datos uniformemente
- Evitar particiones muy grandes (mantener < 100MB)
- Usar tipos de datos apropiados

### Configuración de Performance
```sql
-- Ajustar compacción
ALTER TABLE users WITH compaction = {
  'class': 'SizeTieredCompactionStrategy',
  'min_threshold': 4
};

-- Ajustar compresión
ALTER TABLE users WITH compression = {
  'sstable_compression': 'SnappyCompressor'
};

-- Ajustar caching
ALTER TABLE users WITH caching = {
  'keys': 'ALL',
  'rows_per_partition': '100'
};
```

### Consultas Eficientes
- Evitar ALLOW FILTERING en producción
- Usar LIMIT para prevenir grandes resultados
- Utilizar batch statements solo para cargas relacionadas
- Monitorear performance con tracing
```sql
-- Habilitar tracing para consulta
TRACING ON;
SELECT * FROM users WHERE user_id = uuid();

-- Consulta eficiente con clave de partición
SELECT * FROM user_posts WHERE user_id = uuid() AND post_id = uuid();

-- Consulta con límite
SELECT * FROM user_posts WHERE user_id = uuid() LIMIT 10;
```
### Mantenimiento y Monitorización
```sql
-- Ver estadísticas de tablas
SELECT * FROM system_schema.tables WHERE keyspace_name = 'my_keyspace';

-- Ver tamaño de datos
SELECT keyspace_name, table_name, SSTABLE_COUNT 
FROM system_views.sstable_sizes;

-- Limpiar datos expirados
NODETOOL cleanup;

-- Compactar tablas
NODETOOL compact;
```
### Seguridad 
```sql
-- Crear usuario
CREATE USER username WITH PASSWORD 'password' SUPERUSER;

-- Modificar usuario
ALTER USER username WITH PASSWORD 'newpassword';

-- Conceder permisos
GRANT ALL PERMISSIONS ON KEYSPACE my_keyspace TO username;
GRANT SELECT ON TABLE users TO username;

-- Revocar permisos
REVOKE ALL PERMISSIONS ON KEYSPACE my_keyspace FROM username;

-- Eliminar usuario
DROP USER username;
```