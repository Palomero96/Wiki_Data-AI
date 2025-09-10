# Redis
**Tabla de contenido**

- [Características Principales](#características-principales)
- [Arquitectura Principal](#arquitectura-principal)
- [Ventajas y Casos de Uso](#ventajas-y-casos-de-uso)
- [Comandos Básicos](#comandos-básicos)
- [Operaciones CRUD](#operaciones-crud)
- [Tipos de Datos](#tipos-de-datos)
- [Operaciones Avanzadas](#operaciones-avanzadas)
- [Gestión y Monitorización](#gestión-y-monitorización)
- [Optimización y Buenas Prácticas](#optimización-y-buenas-prácticas)


# Características Principales
- **Base de datos en memoria** con persistencia opcional
- **Extremadamente rápido** para operaciones de lectura/escritura
- **Soporte para estructuras de datos avanzadas** (strings, hashes, lists, sets, sorted sets, streams, etc.)
- **Alta disponibilidad y replicación** nativa
- **Escalabilidad horizontal** con Redis Cluster
- **Soporte para scripting** con Lua

# Arquitectura Principal
- Arquitectura **cliente-servidor**
- Redis puede funcionar en **modo standalone** o **clúster**
- Soporta **replicación maestro-esclavo** y **failover automático**
- Persistencia mediante **RDB snapshots** o **AOF logs**

# Ventajas y Casos de Uso
- Ideal para **caché** y aceleración de aplicaciones
- Perfecto para **colas, leaderboards, contadores en tiempo real**
- Recomendado para **mensajería en tiempo real** (pub/sub)
- No recomendado para **transacciones complejas ACID estrictas** o grandes volúmenes de datos que no caben en memoria

# Comandos Básicos

## Conexión
```bash
# Conectar a Redis
redis-cli

# Conectar a Redis remoto
redis-cli -h <host> -p <puerto> -a <password>
```

## Administración
```bash
# Ver el estado del servidor
INFO

# Configuración en tiempo de ejecución
CONFIG GET *
CONFIG SET maxmemory 256mb

# Seleccionar base de datos (0-15 por defecto)
SELECT 1

# Limpiar la base de datos actual
FLUSHDB

# Limpiar todas las bases de datos
FLUSHALL

# Monitorizar comandos en tiempo real
MONITOR
```

# Operaciones CRUD
## Create
```bash
# Crear un string
SET key "valor"

# Crear un hash
HSET usuario:1 nombre "Juan" edad 30

# Crear una lista
LPUSH tareas "tarea1"

# Crear un set
SADD amigos "Ana" "Carlos"

# Crear un sorted set
ZADD puntuaciones 100 "Jugador1"

```

## Read
```bash
# Leer un string
GET key

# Leer un hash
HGETALL usuario:1

# Leer una lista completa
LRANGE tareas 0 -1

# Leer un set
SMEMBERS amigos

# Leer un sorted set
ZRANGE puntuaciones 0 -1 WITHSCORES

```
## Update
```bash
# Actualizar un string
SET key "nuevo_valor"

# Actualizar un hash
HSET usuario:1 edad 31

# Añadir a lista
RPUSH tareas "tarea2"

# Añadir a set
SADD amigos "Pedro"

# Incrementar valor numérico
INCR contador

```

## Delete
```bash
# Borrar una clave
DEL key

# Borrar un campo en un hash
HDEL usuario:1 edad

# Borrar elementos de lista
LPOP tareas
RPOP tareas

# Borrar elementos de set
SREM amigos "Ana"

```


# Tipos de Datos en Redis

## Strings
- Comandos: `SET`, `GET`, `INCR`, `DECR`, `APPEND`, `STRLEN`

## Hashes
- Comandos: `HSET`, `HGET`, `HGETALL`, `HDEL`, `HINCRBY`

## Lists
- Comandos: `LPUSH`, `RPUSH`, `LPOP`, `RPOP`, `LRANGE`, `LINSERT`

## Sets
- Comandos: `SADD`, `SREM`, `SMEMBERS`, `SUNION`, `SINTER`

## Sorted Sets
- Comandos: `ZADD`, `ZREM`, `ZRANGE`, `ZREVRANGE`, `ZSCORE`, `ZINCRBY`

## Bitmaps
- Comandos: `SETBIT`, `GETBIT`, `BITCOUNT`, `BITOP`

## HyperLogLogs
- Comandos: `PFADD`, `PFCOUNT`, `PFMERGE`

## Streams
- Comandos: `XADD`, `XREAD`, `XGROUP`, `XACK`, `XPENDING`


# Operaciones Avanzadas en Redis

## Transacciones
```bash
# Iniciar transacción
MULTI

# Ejecutar comandos dentro de la transacción
SET clave1 "valor1"
INCR contador

# Ejecutar transacción
EXEC
````

## Pipelines

* Permite enviar múltiples comandos en un solo round-trip para mejorar rendimiento

```bash
# Ejemplo usando redis-cli
redis-cli --pipe < comandos.txt
```

## Pub/Sub

```bash
# Suscribirse a un canal
SUBSCRIBE canal1

# Publicar en un canal
PUBLISH canal1 "mensaje"
```



# Gestión y Monitorización en Redis

## Configuración
```bash
# Obtener y modificar configuraciones
CONFIG GET *
CONFIG SET maxmemory 256mb
CONFIG SET appendonly yes
CONFIG SET save "900 1 300 10 60 10000"
````

## Clúster y Replicación

* Comandos importantes: `CLUSTER INFO`, `CLUSTER NODES`, `REPLICAOF`, `SLAVEOF`

## Persistencia y RDB/AOF

```bash
# Snapshots RDB
SAVE       # Guardado síncrono
BGSAVE     # Guardado asíncrono

# Append Only File (AOF)
APPENDONLY yes     # Activar AOF
BGREWRITEAOF       # Reescribir archivo AOF para compactar
```

## Monitorización y métricas

* Comandos: `INFO`, `MONITOR`, `CLIENT LIST`, `LATENCY`

# Optimización y Buenas Prácticas

* Usar expiración con `EXPIRE` / `TTL`
* Evitar grandes volúmenes de datos en memoria
* Aprovechar pipelines y transacciones
* Elegir estructuras de datos correctas según caso de uso
* Configurar persistencia y replicación según necesidad


