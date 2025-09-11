# Procesamiento de Lenguaje Natural (NLP) y Modelos de Lenguaje

El **Procesamiento de Lenguaje Natural (NLP)** permite que las máquinas comprendan, generen y analicen texto. Los **modelos de lenguaje** aprenden patrones para tareas como traducción, resumen, clasificación o generación de texto.

---

## 1. Algoritmos Clásicos de NLP

### 1.1 Bag of Words (BoW)
* Representa texto como vectores de frecuencia de palabras.
* Ejemplo:
Texto 1: "El gato duerme"
Texto 2: "El perro corre"

Vocabulario: ["El", "gato", "duerme", "perro", "corre"]
BoW Texto1: [1, 1, 1, 0, 0]
BoW Texto2: [1, 0, 0, 1, 1]


### 1.2 TF-IDF
* Pondera palabras según importancia relativa.
$$
TF\text{-}IDF(w,d) = TF(w,d) \cdot \log \frac{N}{DF(w)}
$$

### 1.3 Word Embeddings
* Representaciones densas que capturan significado semántico.
* **Word2Vec**: CBOW y Skip-Gram.
* Ejemplo conceptual:
$$
v_{king} - v_{man} + v_{woman} \approx v_{queen}
$$

---

## 2. Short Language Models (SLMs)

### 2.1 N-gram Models
* Predice siguiente palabra basada en las \(n-1\) anteriores:
$$
P(w_1, ..., w_T) \approx \prod_{t=1}^{T} P(w_t | w_{t-(n-1)}, ..., w_{t-1})
$$

### 2.2 LSTM (Long Short-Term Memory)
* Captura dependencias largas en secuencias.
* Fórmula de actualización de celda:
$$
c_t = f_t \odot c_{t-1} + i_t \odot \tilde{c}_t
$$

*Diagrama conceptual:*
x_t ---> [Input Gate] --->
[Forget Gate] ---> c_t ---> [Output Gate] ---> h_t


---

## 3. Large Language Models (LLMs)

### 3.1 Transformer
* Procesa secuencias completas con **atención**.
* Fórmula de Attention:
$$
Attention(Q,K,V) = softmax\left(\frac{QK^T}{\sqrt{d_k}}\right) V
$$
*Diagrama conceptual:*
Input Embeddings --> [Multi-Head Attention] --> [Feed-Forward] --> Output
| ^
+-------- Positional Encoding ------------+


### 3.2 GPT (Generative Pretrained Transformer)
* Genera texto de manera autoregresiva.
* Preentrenamiento: predice siguiente palabra.
* Ejemplo teórico:
Input: "La capital de Francia es"
Predicción: "París"

### 3.3 BERT (Bidirectional Encoder Representations)
* Captura contexto bidireccional.
* Preentrenamiento: Masked Language Modeling y Next Sentence Prediction.
* Ejemplo:
Input: "El gato está [MASK] en la cama"
Predicción: "durmiendo"

---

## 4. Técnicas Complementarias

* **Sentence Embeddings**: Representación vectorial de oraciones (Sentence-BERT).
* **Fine-Tuning / Prompting**: Ajuste de modelos grandes a tareas específicas.
* **Transfer Learning**: Reutilizar conocimiento de modelos preentrenados.

*Diagrama conceptual simplificado de flujo NLP a LLM:*
Texto Crudo --> Tokenización --> Embeddings --> Modelo (SLM o LLM) --> Tarea (Clasificación, Generación, Resumen)

---

## 📌 Conclusión

* **SLMs**: N-grams, RNN, LSTM, útiles para corpus pequeños y tareas específicas.  
* **LLMs**: Transformers, GPT, BERT, capturan contexto amplio y generan lenguaje coherente.  
* **Word Embeddings**: Base para casi todos los modelos modernos.  
* **Selección**: Depende de tamaño del corpus, complejidad de la tarea y recursos computacionales.