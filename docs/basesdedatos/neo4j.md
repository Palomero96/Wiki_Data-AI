# Neo4j


# Tabla de Contenidos para Neo4j

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
- [Operadores de Consulta y Filtrado](#operadores-de-consulta-y-filtrado)
  - [Comparación](#comparación)
  - [Lógicos](#lógicos)
  - [Patrones de Grafos](#patrones-de-grafos)
  - [Funciones de Agregación](#funciones-de-agregación)
- [Operaciones de Relación](#operaciones-de-relación)
- [Indexación y Constraints](#indexación-y-constraints)
- [Transacciones y Bloqueos](#transacciones-y-bloqueos)
- [Procedimientos y Funciones](#procedimientos-y-funciones)
- [Optimización y Buenas Prácticas](#optimización-y-buenas-prácticas)

## Características Principales
- Base de datos de grafos orientada a relaciones.
- Lenguaje de consultas: Cypher.
- Alta disponibilidad y escalabilidad.
- Optimizaciones para consultas de grafos complejos.

## Arquitectura Principal
- Motor de almacenamiento en disco y memoria.
- Soporte para clústeres y replicación.
- Arquitectura ACID para transacciones.

## Ventajas y Casos de Uso
- Ideal para redes sociales, recomendaciones y análisis de fraude.
- Útil en sistemas que dependen de relaciones complejas entre entidades.
- No recomendado para almacenamiento masivo de datos sin relaciones.

## Comandos Básicos
### Conexión
```bash
# Conectar a Neo4j usando cypher-shell
cypher-shell -u <usuario> -p <password>
````

### Administración

```cypher
// Ver bases de datos disponibles
SHOW DATABASES;

// Crear base de datos
CREATE DATABASE nombre_db;

// Eliminar base de datos
DROP DATABASE nombre_db;

// Cambiar a una base de datos específica
:use nombre_db
```

## Operaciones CRUD

### Create

```cypher
// Crear un nodo
CREATE (n:Persona {nombre: 'Juan', edad: 30});

// Crear una relación
MATCH (a:Persona {nombre:'Juan'}), (b:Persona {nombre:'Ana'})
CREATE (a)-[:AMIGO_DE]->(b);
```

### Read

```cypher
// Consultar todos los nodos de tipo Persona
MATCH (n:Persona) RETURN n;

// Consultar nodos con condición
MATCH (n:Persona {edad:30}) RETURN n;

// Consultar nodos y relaciones
MATCH (a:Persona)-[r:AMIGO_DE]->(b:Persona) RETURN a, r, b;
```

### Update

```cypher
// Actualizar propiedades de un nodo
MATCH (n:Persona {nombre:'Juan'})
SET n.edad = 31;

// Renombrar una etiqueta
MATCH (n:Persona) REMOVE n:Persona SET n:Usuario;
```

### Delete

```cypher
// Eliminar una relación
MATCH (:Persona {nombre:'Juan'})-[r:AMIGO_DE]->(:Persona {nombre:'Ana'})
DELETE r;

// Eliminar un nodo
MATCH (n:Persona {nombre:'Juan'}) DELETE n;
```

## Operadores de Consulta y Filtrado

### Comparación

```cypher
// Igualdad y desigualdad
MATCH (n:Persona) WHERE n.edad = 30 RETURN n;
MATCH (n:Persona) WHERE n.edad <> 30 RETURN n;
```

### Lógicos

```cypher
// AND / OR / NOT
MATCH (n:Persona) WHERE n.edad > 25 AND n.nombre = 'Juan' RETURN n;
MATCH (n:Persona) WHERE n.edad < 20 OR n.nombre = 'Ana' RETURN n;
MATCH (n:Persona) WHERE NOT n.edad = 30 RETURN n;
```

### Patrones de Grafos

```cypher
// Buscar patrones de relación
MATCH (a:Persona)-[:AMIGO_DE]->(b:Persona) RETURN a, b;
```

### Funciones de Agregación

```cypher
// Conteo, promedio, suma, máximo, mínimo
MATCH (n:Persona) RETURN COUNT(n), AVG(n.edad), SUM(n.edad), MAX(n.edad), MIN(n.edad);
```

## Operaciones de Relación

```cypher
// Crear relaciones con propiedades
MATCH (a:Persona {nombre:'Juan'}), (b:Persona {nombre:'Ana'})
CREATE (a)-[:AMIGO_DE {desde:2020}]->(b);

// Eliminar relaciones
MATCH (a:Persona)-[r:AMIGO_DE]->(b:Persona) DELETE r;
```

## Indexación y Constraints

```cypher
// Crear índice
CREATE INDEX ON :Persona(nombre);

// Crear constraint de unicidad
CREATE CONSTRAINT ON (n:Persona) ASSERT n.nombre IS UNIQUE;
```

## Transacciones y Bloqueos

* Neo4j maneja transacciones ACID.
* Usar `BEGIN`, `COMMIT` y `ROLLBACK` desde drivers o `cypher-shell`.
* Bloqueos automáticos en nodos y relaciones modificados.

## Procedimientos y Funciones

```cypher
// Llamar procedimiento interno
CALL db.labels();
CALL db.relationshipTypes();

// Crear procedimientos personalizados usando APOC
CALL apoc.create.node(['Etiqueta'], {prop:'valor'});
```

## Exportación e Importación

```cypher
// Exportar datos a CSV
CALL apoc.export.csv.all('export.csv', {});

// Importar datos desde CSV
LOAD CSV WITH HEADERS FROM 'file:///import.csv' AS row
CREATE (:Persona {nombre: row.nombre, edad: toInteger(row.edad)});
```

## Optimización y Buenas Prácticas

* Crear índices y constraints para consultas frecuentes.
* Evitar consultas con patrones muy grandes sin paginación.
* Usar transacciones para operaciones múltiples.
* Aprovechar procedimientos APOC para operaciones complejas.
* Monitorear el rendimiento y ajustar memoria del heap.

