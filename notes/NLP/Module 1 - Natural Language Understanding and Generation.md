---
status: completed
---
# Module 1: Natural Language Understanding and Generation

## What Is NLP?

**Natural Language Processing (NLP)** uses computational techniques to process information in human language. Its goals include analyzing and understanding language, and generating language for useful applications.

NLP is also known as **Computational Linguistics**, **Human Language Technology**, and **Natural Language Engineering**. It draws on linguistics, psycholinguistics, cognitive science, and statistics.

One statistical approach, introduced in T2, studies patterns in language use by counting examples in text and building models from those patterns.

The lecturer connected this idea to language models: given preceding words, a model predicts the next word, then continues to generate text. Next-word prediction is a useful language task; by itself, it does not settle what it means for a system to understand language.

*Covered: slides 8–9. Course-orientation material from slides 1–7 is intentionally omitted.*

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**
1. What does NLP aim to do with human language?
2. Name two other terms used for NLP in the slides.
3. In the lecture’s description, what does a language model predict to generate text?

**Answers**
1. Process human language computationally to build useful systems.
2. Computational Linguistics and Natural Language Engineering.
3. The next word in the sequence.

</details>

## Why NLP Matters and Where It Fits

Text is a large, growing store of human knowledge: email, news, webpages, scientific and legal writing, and customer complaints. NLP helps computers process this information through tasks such as search, question answering, translation, and summarization.

The slides include a **historical market forecast**: NLP was projected to grow from USD 15.7 billion in 2022 to USD 49.4 billion by 2027, at a stated 25.7% CAGR. These are the slide's forecast figures, not a current market estimate.

### Applications and the aspiration

The slides give examples of why organizations process text and speech:

- Answering a phone call and responding to a spoken question.
- Interpreting a webpage to determine whom it may interest.
- Translating a newspaper from Japanese into English.
- Processing books or journals to support an expert system.

The instructor connects these to sorting customer email and routing complaints, speech-to-text tools such as Dragon (with people checking the output), and phone systems where callers explain a problem instead of using keypad menus. Other possibilities include meaning-based search and querying books or medical case histories.

The slides frame the goal as useful email processing, accurate translation, information management and summarization, and conversation. In the toaster/computer cartoon, a user asks for postcards to be sent and translated while the toaster announces breakfast: the computer must handle a multi-part request.

The lecturer notes that translation and summarization are already practical. A medical case summary must preserve important past complaints or a doctor may make a poor decision. The slide's human-computer images highlight that ordinary interactions can be difficult for machines.

### Why language is difficult

The slides describe language as **complex, ambiguous, flexible, and subtle**. The lecturer expands on these points:

- **Ambiguous:** words and sentences can have multiple interpretations.
- **Flexible:** word order and expression differ across languages.
- **Subtle:** intended meaning may be indirect, so systems need to infer intent.
- **Changing:** new words and uses appear.

Good solutions need linguistic and machine-learning knowledge. The instructor describes ELIZA as a program for psychological conversations that used keyword matching; an engaging conversation did not prove deep understanding. The slide dates ELIZA to **1966**, while the transcript says “ELISA” was built in **1980**; the supplied materials conflict.

T2's discussion of ambiguity reinforces the difficulty: a sentence can allow multiple structural analyses, and considering more possibilities can lead to many competing parses. Systems need ways to prefer interpretations that fit the words and context.

### NLP in the computer-science taxonomy

A **taxonomy** is a classification organized into levels. The slide places NLP under **Artificial Intelligence**, within the broader area of **Computers**. It shows NLP branching into **Information Retrieval**, **Machine Translation**, and **Language Analysis**; language analysis then branches into **Semantics** and **Parsing**.

![[NLP CS Taxonomy.svg]]

### Selected milestones and module roadmap

The slide gives these selected milestones:

- **1966:** ELIZA
- **1988:** Latent Semantic Analysis patent
- **January 2011:** IBM Watson beats *Jeopardy!* champions
- **October 2011:** Apple Siri launches in beta
- **April 2014:** Microsoft Cortana is demoed
- **November 2014:** Amazon Alexa
- **May 2016:** Google Assistant
- **2020:** Conversational agents

This is the slide's illustrative timeline, not a complete history of NLP.

The final slide in this section previews what follows: applications of language understanding; evaluation of language-understanding systems; levels of language analysis; representations and understanding; and the organization of NLP systems.

*Covered: slides 10–18. Instructor explanations are included alongside the slide content. The ELIZA date discrepancy between the timeline and transcript remains unresolved.*

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**
1. In the slide's taxonomy, where does NLP fit, and what areas are shown under NLP?
2. Why is next-word prediction not, by itself, proof that a system understands language?
3. What does the ELIZA example illustrate about a system that can hold an engaging conversation?

**Answers**
1. NLP is shown under Artificial Intelligence, within Computers. Its shown subareas are Information Retrieval, Machine Translation, and Language Analysis; Language Analysis branches into Semantics and Parsing.
2. A system can use statistical patterns in text to predict likely next words without that prediction alone demonstrating that it understands meaning or intent.
3. Keyword matching can produce engaging conversation without establishing deep language understanding.

</details>

## The Study of Language and the Requirements for Understanding

Language study spans several disciplines:

- **Linguists** study how words form phrases and sentences and constrain meaning. A **noun phrase (NP)** groups words around a noun; a **verb phrase (VP)** groups a verb with words associated with its action.
- **Psycholinguists** study how people interpret structure and meaning, using experiments and statistical analysis of human responses.
- **Philosophers** ask how language gains meaning and refers to things in the world, using arguments, counterexamples, and formal models.
- **Computational linguists** model sentence structure, knowledge, and reasoning so computers can perform tasks, using algorithms, data structures, and AI methods.

T2's example, **“The children ate the cake,”** can be grouped as **[NP The children] [VP ate [NP the cake]]**. “The children” tells who ate; “ate the cake” tells what happened; and “the cake” is an NP inside the VP, identifying what was eaten. These groups help a parser represent who did what to whom.

HAL's conversation with Dave from *2001: A Space Odyssey* illustrates understanding beyond literal words. HAL infers Dave and Frank plan to disconnect it. The slides link this capability to **politeness** (emotional awareness), **self-awareness** (a model of one's goals and plans), and **belief ascription** (reasoning about another agent's beliefs and plans). Another example combines tone of voice, visual recognition of a sketch, and situational context.

To approach such performance, slide 22 says systems must **define, model, acquire, and manipulate** knowledge of the world and agents, text meaning, and intention. As the lecturer stresses, intention may be implied rather than directly stated.

*Covered: slides 19–22. T2 augmentation: §3.2, Phrase Structure; “The children ate the cake” is T2's example.*

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**
1. What do linguists study about noun phrases and verb phrases?
2. In “The children ate the cake,” identify the NP, VP, and NP inside the VP.
3. Beyond literal words, what kinds of knowledge does the HAL example suggest a system needs?

**Answers**
1. How words group into phrases and sentences, and how these structures constrain meaning.
2. “The children” is the NP; “ate the cake” is the VP; “the cake” is an NP within the VP.
3. A system needs to interpret implied meaning, infer an agent's goals and plans, and account for emotion and context—not just literal text.

</details>

## NLP Applications and Tools

### Applications

- **Question answering:** retrieve facts and return an answer to a natural-language question.
- **Text categorization and routing:** label messages, such as complaints, and send them to the right team. Domain vocabulary may matter.
- **Text mining:** find patterns in a document collection, such as associations, contradictions, evidence, and implausible claims.
- **Machine-assisted translation:** translate between languages; restricted domains can be easier than specialized discussions.
- **Language teaching and learning; usage checking and spelling correction:** spelling tools may use keyboard layout, not only dictionary lookup.
- Other applications on slide 24: text-to-speech, speech recognition, healthcare, natural-language database interfaces, information retrieval, information extraction, document classification and image analysis, summarization, proofreading, translation, fake-news and cyberbullying detection, social-media monitoring, plagiarism detection, look-ahead typing, question answering, and sentiment analysis.

**Information retrieval (IR)** finds relevant documents. **Information extraction (IE)** identifies specific information within text. The slide's Stanford extraction demo URL is an old server address and may no longer be available.

### Tools

| Tool | Purpose highlighted in the slides or lecture |
|---|---|
| IBM Watson, Google Cloud NLP API, Amazon Comprehend | Commercial text-analysis services. |
| Stanford CoreNLP | NLP library; the lecturer highlights coreference—resolving what pronouns such as “it” and “they” refer to. |
| spaCy, NLTK | Python NLP toolkits. The lecturer mentions stop-word and sentiment processing with NLTK and notes that toolkit performance can vary by task. |
| Gensim | Topic modeling, including Latent Dirichlet Allocation (LDA). |
| GPT | Autoregressive text generation: generated output becomes context for the next prediction. |
| AllenNLP | Prototyping with sequence encoders, including Seq2Vec and Seq2Seq. |
| Berkeley Neural Parser | Parses sentences into nested syntactic phrases. |

The accompanying notebook demonstrates POS tagging, named-entity recognition, sentiment analysis, and GPT-2 text generation.

*Covered: slides 23–25. The application explanations include the live-class transcript; the task examples below also draw on the January 2024 midsem.*

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**
1. What is the difference between information retrieval and information extraction?
2. Classify spam filtering, sentiment analysis, look-ahead typing, and named-entity labeling by NLP task.
3. What does coreference resolution determine?

**Answers**
1. Information retrieval finds relevant documents; information extraction identifies specific information in text. It does not merely extract all the text from a document.
2. Spam filtering and sentiment analysis are text categorization; look-ahead typing is language modeling; named-entity labeling is named-entity recognition (NER).
3. It links expressions such as “it” or “they” to the entity or entities they refer to in context.

</details>

## NLTK and Text Preprocessing

The **Natural Language Toolkit (NLTK)** is a platform for building text-analysis programs. Slide 26 introduces installation and learning resources; slide 27 is an NLTK demo.

Slide 28 introduces common preprocessing steps:

- **Remove punctuation:** discard punctuation marks.
- **Tokenization:** split text into sentences or words.
- **Remove stop words:** remove common words such as “in,” “on,” and “to.”
- **Stemming:** reduce a word to a stem that may not be a complete word.
- **Lemmatization:** reduce a word to its dictionary form.

**POS** means **part of speech**. POS tagging assigns a grammatical label, such as noun or verb, to each word.

*Covered: slides 26–28. The lecturer describes sentence and word tokenization, stop-word removal, stemming, and lemmatization.*

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**
1. What does tokenization do?
2. How does stemming differ from lemmatization?
3. What does POS tagging assign to words?

**Answers**
1. It splits text into smaller units such as sentences or words.
2. Stemming reduces a word to a root or stem that may not be a complete word; lemmatization reduces it to its dictionary form.
3. A part-of-speech label, such as noun or verb.

</details>

## Why NLP Is Difficult: Ambiguity and Levels of Analysis

Language combines words, rules, and exceptions. It is systematic but complex, varies across languages and cultures, changes over time, and can be ambiguous. Text and speech can also be noisy.

### Types of ambiguity

- **Structural ambiguity:** a sentence allows different groupings, producing different interpretations. “Visiting relatives can be a nuisance” can refer to the activity of visiting relatives or to relatives who are visiting.
- **Grammatical ambiguity:** the same form can have different grammatical roles. *Can* may be a noun, a modal verb, or a verb meaning to preserve food.
- **Lexical ambiguity:** a word has more than one meaning. The slide contrasts related meanings (*polysemy*, such as *understand*) with distinct meanings of the same form (*homonymy*, such as *bank* for a riverbank or financial institution).

The slide's examples **friendship/ friendful** distinguish acceptable from unacceptable word forms; they illustrate lexical knowledge, not lexical ambiguity.

### Levels of language analysis

1. **Morphological:** how morphemes, the basic units of meaning, build words. *Friendly* combines *friend* and *-ly*.
2. **Lexical:** which words exist and how they are categorized.
3. **Syntactic:** how words form grammatical sentences and phrases. “Large have green ideas nose” uses recognizable words but is not syntactically well-formed.
4. **Semantic:** word and sentence meaning apart from a particular situation. “Green ideas have large noses” is grammatically formed but semantically odd.
5. **Pragmatic:** how a situation affects interpretation. “She cuts banana with a pen” is grammatically formed but pragmatically inappropriate in the slide's example.
6. **Discourse:** how preceding sentences affect later ones. In “Chetana completed her PhD at IIT Bombay. She is a professor at BITS Pilani,” discourse helps connect “She” to Chetana.

*Covered: slides 29–34. Slide-only coverage: the lecturer stopped before these slides; no transcript explanation is available for this topic.*

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**
1. What is the difference between structural ambiguity and lexical ambiguity?
2. Which level covers sentence structure? Which level covers how a situation affects interpretation?
3. In the example about Chetana, what does discourse knowledge help us understand?

**Answers**
1. Structural ambiguity comes from different ways to group a sentence; lexical ambiguity occurs when a word has multiple meanings, such as *bank* (riverbank or financial institution). Whether a form such as *friendful* is an accepted word is lexical knowledge, not lexical ambiguity.
2. Syntax covers sentence structure; pragmatics covers how situation affects interpretation.
3. “She” refers to Chetana, linking the second sentence to the first.

</details>
