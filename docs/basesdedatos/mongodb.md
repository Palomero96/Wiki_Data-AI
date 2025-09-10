# MongoDB
# Tabla de Contenidos

- [Características Principales](#características-principales)
- [Arquitectura pincripal](#arquitectura-principal)
- [Ventajas y Casos de Uso](#ventajas-y-casos-de-uso)
- [Comandos Básicos](#comandos-básicos)
  - [Conexión](#conexión)
  - [Administracion](#administracion)
- [Operaciones CRUD](#operaciones-crud)
  - [Create](#create)
  - [Read](#read)
  - [Update](#update)
  - [Delete](#delete)
- [Operadores de Consulta](#operadores-de-consulta)
  - [Comparación](#comparación)
  - [Lógicos](#lógicos)
  - [Elementos](#elementos)
  - [Evaluación](#evaluación)
  - [Arrays](#arrays)
- [Operadores de Actualización](#operadores-de-actualización)
- [Agregación](#agregación)
  - [Pipeline Stages](#pipeline-stages)
  - [Operadores de Agregación](#operadores-de-agregación)
  - [Métodos de Agregación Simple](#métodos-de-agregación-simple)
  - [MapReduce](#mapreduce)


## Características Principales

- **Base de datos NoSQL** orientada a documentos
- **Esquema dinámico** (BSON - Binary JSON)
- **Alta escalabilidad horizontal** (sharding)
- **Alto rendimiento** en operaciones de lectura/escritura
- **Consultas flexibles** con soporte para agregaciones complejas
- **Replicación nativa** para alta disponibilidad

### Conjunto de réplicas típico (3 nodos)
Primary Node (Escritura)
│
├── Secondary Node 1 (Lectura)
└── Secondary Node 2 (Lectura + Respaldo)

Elección automática de primary si falla el principal

### Arquitectura distribuida
Client → Mongos (Router)
         │
         ├── Shard 1 (Réplica Set)
         ├── Shard 2 (Réplica Set)
         └── Shard 3 (Réplica Set)

## Arquitectura principal
Estructura de Almacenamiento:
- Documentos: Unidad básica (equivalente a filas en SQL)
- Colecciones: Grupo de documentos (equivalente a tablas)
- Bases de datos: Contenedor de colecciones
## Ventajas y Casos de Uso
- Ideal para: Datos no estructurados o semiestructurados
- Perfecto para: Aplicaciones que requieren alta escalabilidad
- Recomendado para: Contenido gestionado por usuarios, catálogos, IoT
- No recomendado para: Transacciones complejas que requieren ACID estricto

## Comandos Básicos
### Conexión
```bash
# Conectar a MongoDB
mongosh
mongosh "mongodb://localhost:27017"

# Mostrar bases de datos
show dbs

# Usar una base de datos
use nombre_base_datos
``` 
### Administracion
```javascript
// Mostrar colecciones
show collections

// Estadísticas de colección
db.coleccion.stats()

// Contar documentos
db.coleccion.countDocuments()

// Eliminar colección
db.coleccion.drop()

// Eliminar base de datos
db.dropDatabase()

// Crear usuario con roles específicos
db.createUser({
    user: "adminApp",
    pwd: "passwordSeguro123",
    roles: [
        {
            role: "readWrite",
            db: "mi_base_datos"
        },
        {
            role: "dbAdmin",
            db: "mi_base_datos"
        }
    ]
})

// Ver todos los usuarios
db.getUsers()

// Eliminar usuario
db.dropUser("usuarioLectura")

// Actualizar contraseña
db.changeUserPassword("adminApp", "nuevaPassword456")

// Crear usuario administrador (en base de datos admin)
use admin
db.createUser({
    user: "superAdmin",
    pwd: "superPassword789",
    roles: ["root"]
})

```



## Operaciones CRUD

### Create
```javascript
// Inserta un documento en la colección
db.collection.insertOne({ name: "Juan", age: 30 })
````

```javascript
// Inserta múltiples documentos
db.collection.insertMany([{ name: "Ana" }, { name: "Carlos" }])
```

```javascript
// Inserta un documento (legacy)
db.collection.insert({ item: "papas", qty: 120 })
```

### Read

```javascript
// Devuelve todos los documentos
db.collection.find()
```

```javascript
// Filtra documentos con status "A"
db.collection.find({ status: "A" })
```

```javascript
// Devuelve el primer documento con edad mayor a 25
db.collection.findOne({ age: { $gt: 25 } })
```

```javascript
// Limita a 5 resultados y los formatea
db.collection.find().limit(5).pretty()
```

```javascript
// Salta los primeros 10 documentos
db.collection.find().skip(10)
```

```javascript
// Ordena por nombre ascendente
db.collection.find().sort({ name: 1 })
```

### Update

```javascript
// Actualiza el primer documento con item "paper"
db.collection.updateOne({ item: "paper" }, { $set: { status: "P" } })
```

```javascript
// Actualiza todos los documentos con qty menor a 50
db.collection.updateMany({ qty: { $lt: 50 } }, { $set: { status: "P" } })
```

```javascript
// Reemplaza completamente el documento
db.collection.replaceOne({ item: "paper" }, { item: "paper", instock: 60 })
```

```javascript
// Incrementa qty en 5 para todos con status "A" (legacy)
db.collection.update({ status: "A" }, { $inc: { qty: 5 } }, { multi: true })
```

```javascript
// Inserta o reemplaza por _id
db.collection.save({ _id: 100, item: "water" })
```

### Delete

```javascript
// Elimina el primer documento con status "D"
db.collection.deleteOne({ status: "D" })
```

```javascript
// Elimina todos los documentos con status "A"
db.collection.deleteMany({ status: "A" })
```

```javascript
// Elimina documentos con qty mayor a 20 (legacy)
db.collection.remove({ qty: { $gt: 20 } })
```

```javascript
// Elimina la colección completa
db.collection.drop()
```

```javascript
// Elimina la base de datos actual
db.dropDatabase()
```

---

## Operadores de Consulta

### Comparación

```javascript
// Precio igual a 100
db.collection.find({ price: { $eq: 100 } })
```

```javascript
// Precio mayor a 50
db.collection.find({ price: { $gt: 50 } })
```

```javascript
// Precio mayor o igual a 30
db.collection.find({ price: { $gte: 30 } })
```

```javascript
// Precio menor a 20
db.collection.find({ price: { $lt: 20 } })
```

```javascript
// Precio menor o igual a 10
db.collection.find({ price: { $lte: 10 } })
```

```javascript
// Status no igual a "A"
db.collection.find({ status: { $ne: "A" } })
```

```javascript
// Status en ["A", "D"]
db.collection.find({ status: { $in: ["A", "D"] } })
```

```javascript
// Status no en ["P", "C"]
db.collection.find({ status: { $nin: ["P", "C"] } })
```

### Lógicos

```javascript
// Status "A" y qty < 30
db.collection.find({ $and: [{ status: "A" }, { qty: { $lt: 30 } }] })
```

```javascript
// Status "A" o qty < 30
db.collection.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })
```

```javascript
// Precio no mayor a 1.99
db.collection.find({ price: { $not: { $gt: 1.99 } } })
```

```javascript
// Ni price = 1.99 ni sale = true
db.collection.find({ $nor: [{ price: 1.99 }, { sale: true }] })
```

### Elementos

```javascript
// Campo name existe
db.collection.find({ name: { $exists: true } })
```

```javascript
// Price es de tipo número
db.collection.find({ price: { $type: "number" } })
```

### Evaluación

```javascript
// Nombre empieza con "J"
db.collection.find({ name: { $regex: /^J/ } })
```

```javascript
// Búsqueda de texto "apple"
db.collection.find({ $text: { $search: "apple" } })
```

```javascript
// Usando expresión JavaScript
db.collection.find({ $where: "this.qty > this.ordered" })
```

### Arrays

```javascript
// Tags contiene "red" y "blank"
db.collection.find({ tags: { $all: ["red", "blank"] } })
```

```javascript
// Elementos en dim_cm entre 20 y 29
db.collection.find({ dim_cm: { $elemMatch: { $gt: 20, $lt: 29 } } })
```

```javascript
// Tags tiene 3 elementos
db.collection.find({ tags: { $size: 3 } })
```

---

## Operadores de Actualización

```javascript
// Establece size.uom a "cm"
db.collection.updateOne({ item: "paper" }, { $set: { "size.uom": "cm" } })
```

```javascript
// Elimina el campo status
db.collection.updateOne({ item: "paper" }, { $unset: { status: "" } })
```

```javascript
// Incrementa qty en 5
db.collection.updateOne({ item: "paper" }, { $inc: { qty: 5 } })
```

```javascript
// Añade 8 al array quizzes
db.collection.updateOne({ _id: 1 }, { $push: { quizzes: 8 } })
```

```javascript
// Elimina el último elemento de labs
db.collection.updateOne({ _id: 3 }, { $pop: { labs: 1 } })
```

```javascript
// Elimina todos los 5 de quizzes
db.collection.updateOne({ _id: 3 }, { $pull: { quizzes: 5 } })
```

```javascript
// Elimina todos los 4 y 5 de quizzes
db.collection.updateOne({ _id: 3 }, { $pullAll: { quizzes: [4, 5] } })
```

```javascript
// Añade "unique" a tags si no existe
db.collection.updateOne({ _id: 1 }, { $addToSet: { tags: "unique" } })
```

---

## Agregación

### Pipeline Stages

```javascript
// Filtra por status "A" y agrupa por cust_id sumando amount
db.orders.aggregate([{ $match: { status: "A" } }, { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }])
```

```javascript
// Proyecta un nuevo campo total (price * quantity)
db.sales.aggregate([{ $project: { item: 1, total: { $multiply: ["$price", "$quantity"] } } }])
```

```javascript
// Ordena por quantity descendente
db.sales.aggregate([{ $sort: { quantity: -1 } }])
```

```javascript
// Limita a 5 documentos
db.sales.aggregate([{ $limit: 5 }])
```

```javascript
// Salta los primeros 10 documentos
db.sales.aggregate([{ $skip: 10 }])
```

```javascript
// Descompone el array tags
db.collection.aggregate([{ $unwind: "$tags" }])
```

### Operadores de Agregación

```javascript
// Suma de quantity por item
db.sales.aggregate([{ $group: { _id: "$item", total: { $sum: "$quantity" } } }])
```

```javascript
// Promedio de price por item
db.sales.aggregate([{ $group: { _id: "$item", avg: { $avg: "$price" } } }])
```

```javascript
// Mínimo price por item
db.sales.aggregate([{ $group: { _id: "$item", min: { $min: "$price" } } }])
```

```javascript
// Máximo price por item
db.sales.aggregate([{ $group: { _id: "$item", max: { $max: "$price" } } }])
```

```javascript
// Primer price por item
db.sales.aggregate([{ $group: { _id: "$item", first: { $first: "$price" } } }])
```

```javascript
// Último price por item
db.sales.aggregate([{ $group: { _id: "$item", last: { $last: "$price" } } }])
```

```javascript
// Array de todos los prices por item
db.sales.aggregate([{ $group: { _id: "$item", all: { $push: "$price" } } }])
```

```javascript
// Array de prices únicos por item
db.sales.aggregate([{ $group: { _id: "$item", unique: { $addToSet: "$price" } } }])
```

### Métodos de Agregación Simple

```javascript
// Valores distintos de cust_id
db.orders.distinct("cust_id")
```

```javascript
// Cuenta todos los documentos en orders
db.orders.count()
```

```javascript
// Cuenta documentos con status "A"
db.orders.count({ status: "A" })
```

```javascript
// Cuenta estimada de documentos
db.orders.estimatedDocumentCount()
```

### MapReduce

```javascript
// Agrupa por cust_id y suma los amounts, guardando en order_totals
db.orders.mapReduce(
  function() { emit(this.cust_id, this.amount); },
  function(key, values) { return Array.sum(values); },
  { out: "order_totals" }
)
```



