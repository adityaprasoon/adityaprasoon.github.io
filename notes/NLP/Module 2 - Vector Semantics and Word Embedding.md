---
status: work-in-progress
---
# Module 2 - Vector Semantics and Word Embedding

Vector semantics models the meaning of words using points and directions in high-dimensional space so that computational systems can represent similarity, draw semantic inferences, and process language beyond exact surface matches. By moving from isolated vocabulary indices to count-based and prediction-trained vectors, language processing systems learn representations directly from text distributions and capture relations ranging from topical association to synonymy and affective tone.

## Meaning, Senses, and Lexical Relations

Representing a word merely as a string or an index in a fixed vocabulary list provides an identifier, but it conveys no information about what the word means or how it relates to other concepts. Formal logic models that equate word meaning with an uppercase concept label—such as defining the meaning of *dog* as $\text{DOG}$—similarly fail to provide an operational representation that computational systems can use for language tasks.

**Lexical semantics** is the linguistic study of word meaning. It seeks representations that can distinguish different senses of a word, determine semantic similarity, connect related ideas, and support practical tasks such as question answering, paraphrase detection, and summarization.

A fundamental tool for establishing word meaning without manual annotation is the **distributional hypothesis**.

> Words that occur in similar contexts tend to have similar meanings.

The surrounding words and grammatical environments of a word provide distributional evidence about its meaning. An unfamiliar word can be understood by comparing its context words to the environments of familiar words.

In the case of the borrowed culinary term *ongchoi*, encountering sentences such as "Ongchoi is delicious sautéed with garlic," "Ongchoi is superb over rice," and "ongchoi leaves with salty sauces" places the term alongside contexts typical of *spinach*, *chard*, and *collard greens*. Sharing context words such as *sautéed*, *garlic*, *rice*, *leaves*, and *salty* indicates that *ongchoi* is an edible leafy green vegetable.

:::tip[Think It Through]
**Prompt:** What broad kind of thing would you infer *ongchoi* is, and why does occurring beside *garlic* not justify calling it a synonym of *garlic*?

**Answer:** *Ongchoi* can be inferred to be an edible food ingredient with leaves, specifically a leafy green vegetable. Co-occurring beside *garlic* demonstrates syntagmatic relatedness (participating in the same cooking scene), whereas synonymy would require sharing comparable distributions and substituting for each other without altering truth conditions.
:::

### Lemmas and Polysemy

A **lemma** (or citation form) is the standard dictionary base form of a word, grouping together grammatical variants (for example, *run* serves as the lemma for *run*, *runs*, *ran*, and *running*). Specific inflected occurrences in text are **wordforms**.

A single lemma can have multiple distinct meanings, known as **word senses**. A word with multiple senses is **polysemous**. The lemma *mouse* exemplifies polysemy, having both a biological rodent sense and an electronic computing pointing device sense. Other common examples include *bank* (a river boundary versus a financial institution), *tank* (a military combat vehicle versus a liquid container), and *book* (a written work versus the action of reserving a ticket). Because the surface form is identical across senses, systems rely on surrounding context words to disambiguate the intended sense.

:::tip[Think It Through]
**Prompt:** A search system sees *mouse* near *cheese* and *tail* in one document, and near *cursor* and *screen* in another. Why is that context more useful than storing only one definition for the spelling *mouse*?

**Answer:** Context words distinguish which distinct sense of the polysemous lemma is active in each document, allowing the system to direct queries to the rodent concept or the hardware device rather than conflating two incompatible meanings under a single spelling.
:::

### Synonymy, Similarity, and Relatedness

Lexical semantics distinguishes several distinct structural and conceptual relationships:

- **Synonymy:** Words that share identical or nearly identical propositional meaning in some or all contexts, such as *couch / sofa*, *vomit / throw up*, and *car / automobile*. Strictly defined, two words are synonyms if substituting one for the other in a sentence preserves truth conditions. Because social register, geographic variety, and stylistic connotations introduce differences, true identity of meaning is rare, and synonymy is treated in practice as rough or approximate. For example, *water* and $\text{H}_2\text{O}$ identify the same chemical compound, but $\text{H}_2\text{O}$ is pragmatically inappropriate in a surfing guide; similarly, *my big sister* conveys elder age, whereas *my large sister* describes physical size.
- **Similarity:** Words that share core conceptual features and belong to the same general category without being synonymous, such as *cat / dog*, *car / bicycle*, and *cow / horse*. Although cats and dogs cannot be interchanged in text without changing factual meaning, they have high semantic similarity because both are domestic mammalian companion animals. Word similarity is evaluated in benchmarks such as SimLex-999 through human ratings (typically on scales such as $0\text{--}10$), capturing a spectrum from near-synonyms (*vanish / disappear*, $9.8$) to unrelated concepts (*hole / agreement*, $0.3$).

> ⚠️ **Emphasised by Prof. B. Arunkumar**
> In domain-specific language processing (such as legal or medical informatics), generic off-the-shelf similarity assumptions may fail. Practitioners must examine the domain similarity matrix directly to ensure specialized technical jargon is captured at the necessary granularity.

- **Relatedness (Word Association):** Words that are connected through co-participation in a shared scenario, event, or topical domain, even when they share virtually no categorical features. For example, *coffee* is similar to *tea* (both are hot beverages), but *coffee* is related to *cup* because one is consumed from the other. Similarly, *scalpel* is related to *surgeon*, *bat* is related to *ball*, and *police* is related to *robber*.

:::tip[Think It Through]
**Prompt:** If two words receive a high similarity score, is that enough to let a paraphrasing system freely substitute one for the other? Explain using one example.

**Answer:** No. High similarity indicates that two words share conceptual properties, but they may still refer to different entities. For instance, *cat* and *dog* have high similarity as household pets, but substituting *dog* into "I took my cat to the vet" changes the factual truth of the sentence.
:::

### Semantic Fields

A **semantic field** (or semantic frame) is an organized vocabulary covering a particular domain, characterized by structured relations among its constituent concepts:

- **Hospital:** *surgeon*, *scalpel*, *nurse*, *anaesthetic*, *patient*, *illness*, *hospital*
- **Restaurant:** *waiter*, *menu*, *plate*, *food*, *chef*, *customer*, *kitchen*
- **House:** *door*, *roof*, *kitchen*, *family*, *bed*

#### How is a semantic field different from relatedness?

Relatedness describes an associative link between individual concepts (such as an instrument and its user, or an event and its setting). A semantic field is the broader, structured collection of terms that together describe a complete domain. Words within a semantic field exhibit various forms of relatedness rather than uniform similarity.

### Antonymy and Context Sharing

**Antonyms** are words that express opposite meanings with respect to a single feature while remaining alike across other aspects of meaning. They can represent binary oppositions (*in / out*), endpoints of a continuous scale (*hot / cold*, *long / short*, *fast / slow*), or reversive directional actions (*rise / fall*, *up / down*).

Because antonyms describe the same underlying attribute and participate in identical linguistic constructions (such as "the water is hot" versus "the water is cold"), they frequently appear in matching environments. Distributional models that learn solely from surrounding word co-occurrences often assign high similarity to antonyms, capturing their shared semantic domain rather than their opposite polarity.

:::tip[Think It Through]
**Prompt:** Both "The water is hot" and "The water is cold" are natural sentences. Would a system learning only from surrounding words necessarily place *hot* and *cold* far apart? Why?

**Answer:** No. Because *hot* and *cold* modify identical nouns and share nearly identical syntactic environments and topical contexts, a purely distributional model often places them close together in vector space. Distributional context captures shared domain usage, but it does not intrinsically distinguish antonymous contrast from synonymy.
:::

### Connotation and Affective Meaning

Words carry emotional, evaluative, and affective associations beyond their literal denotations. **Sentiment** describes positive or negative evaluation (such as *great* versus *terrible*).

Affective meaning varies across three primary psychological dimensions (**VAD**):

1. **Valence:** The pleasantness of the stimulus, ranging from unpleasant to pleasant (for example, *happy* has high valence; *toxic* has low valence).
2. **Arousal:** The emotional intensity or activation provoked by the stimulus, ranging from calm to excited (for example, *frenzy* has high arousal; *mellow* or *napping* has low arousal).
3. **Dominance:** The degree of control or power exerted by or felt toward the stimulus, ranging from weak or submissive to controlling or powerful (for example, *powerful* or *leadership* has high dominance; *weak* or *empty* has low dominance).

The **NRC VAD Lexicon** is a published word list covering approximately $20{,}000$ words that assigns real-valued scores across valence, arousal, and dominance, derived from human judgments collected through best–worst scaling.

Representing each word by these three coordinates acts as an early spatial model of meaning: each word corresponds to a point in a three-dimensional affective vector space.

:::tip[Think It Through]
**Prompt:** A customer's message has high arousal. Why is that score alone insufficient to decide whether the customer is delighted or upset, and which additional dimension would help?

**Answer:** Arousal reflects emotional intensity rather than emotional polarity; both intense excitement and intense anger exhibit high arousal. Knowing the valence score is necessary to determine whether the high-intensity emotion is positive (delight) or negative (anger).
:::

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**
1. Classify each pair as synonymy, similarity, or relatedness, and state why: *couch / sofa*, *cat / dog*, *coffee / cup*.
2. Two words can have opposite meanings and still appear in very similar contexts. What does this demonstrate about using shared context as evidence of meaning?
3. Name the three affective dimensions in the VAD model, state what each measures, and give an example of a word with high dominance.

**Answers**
1. *Couch / sofa* is synonymy because the terms share propositional meaning and can be substituted without changing truth conditions. *Cat / dog* is similarity because both share categorical properties as domestic mammalian pets without meaning the same thing. *Coffee / cup* is relatedness because they are associated through an everyday event (drinking coffee from a cup) despite belonging to different object categories.
2. Shared context provides strong evidence that words belong to the same semantic domain and share topical or structural properties, but shared context alone does not prove synonymy and often yields high distributional similarity for antonym pairs.
3. The dimensions are Valence (pleasantness), Arousal (intensity of emotion or activation), and Dominance (degree of control or social power). An example of a high-dominance word from the lecture is *powerful* (or *leadership*).

</details>

## Vector Semantics and Document Retrieval

To overcome the inability of discrete symbols to express degrees of similarity, **vector semantics** defines the meaning of a word as a **vector**—a point in a multidimensional geometric space. These vectors are called **embeddings** because the semantic properties of a word are mathematically embedded as coordinates within a continuous vector space.

In this spatial model of language:
- Every dimension represents a different attribute, perspective, or pattern of linguistic usage.
- Words that occur in similar environments and share meaning are located near one another in the space (exhibiting small geometric distance or a narrow angle between their vectors).
- Downstream machine-learning models achieve stronger generalization. Under a discrete word-identity representation (where each vocabulary word is a mutually independent feature), learning that *terrible* indicates a negative review provides no information about the unseen word *dreadful*. In an embedding space, *terrible* and *dreadful* share similar vector coordinates, allowing the model's learned weights to transfer naturally to related words.

:::tip[Think It Through]
**Prompt:** Suppose a sentiment classifier is trained on word-identity features and learns that *terrible* is negative. What happens when a test sentence contains *dreadful* instead? How does an embedding representation fix that failure?

**Answer:** Under discrete word-identity features, *terrible* and *dreadful* are separate, orthogonal indicators; the classifier cannot recognize *dreadful* as negative without seeing it explicitly in training. An embedding space represents words by continuous coordinates across multiple dimensions. Because *terrible* and *dreadful* share comparable context distributions, their vectors lie close together (small angle and small distance), allowing a classifier trained on *terrible* to generalize to *dreadful*.
:::

### Sparse Count-Based Vectors Versus Dense Learned Embeddings

Vector representations in NLP fall into two primary families with contrasting mathematical and practical properties:

| Property | Sparse Count-Based Vectors | Dense Learned Embeddings |
|---|---|---|
| **Construction** | Derived directly by counting occurrences across documents or nearby context windows, then optionally re-weighted (e.g., TF-IDF, PPMI). | Learned through self-supervised prediction tasks (e.g., Word2Vec Skip-gram / CBOW) or global matrix optimization (e.g., GloVe). |
| **Dimensionality** | High: vector length equals vocabulary size $\vert V \vert$ (typically $10{,}000\text{--}50{,}000$) or document collection size $\vert D \vert$. | Low: typically $50\text{--}300$ dimensions (rarely exceeding $1{,}000$). |
| **Sparsity** | Highly sparse: the vast majority of entries are zero because any given word appears in only a tiny fraction of contexts. | Dense: virtually all dimensions contain continuous, non-zero real numbers (both positive and negative). |
| **Interpretability** | Explicit: each coordinate corresponds directly to a known vocabulary word or document. | Latent / distributed: meaning is distributed across dimensions without a single-word label per coordinate. |
| **Synonym handling** | Limited: synonyms such as *car* and *automobile* occupy distinct, orthogonal dimensions with no shared weight. | Strong: synonyms that appear in similar environments are drawn toward nearby vector coordinates. |
| **Model complexity** | High parameter count: classifiers require a separate weight for every vocabulary word, raising memory usage and risk of overfitting. | Compact parameter space: classifiers require far fewer weights ($d \ll \vert V \vert$), improving statistical generalization. |

### The Term–Document Matrix and Spatial Retrieval

The earliest vector space model of language is the **term–document matrix**, originally developed for mechanical indexing and Information Retrieval (IR). 

In a term–document matrix:
- **Rows** correspond to vocabulary words (terms).
- **Columns** correspond to individual documents in the collection.
- Each cell records the frequency of that word within the specified document.

Consider four plays by Shakespeare categorized into comedies and histories:

| Word | *As You Like It* (Comedy) | *Twelfth Night* (Comedy) | *Julius Caesar* (History) | *Henry V* (History) |
|---|:---:|:---:|:---:|:---:|
| **battle** | 1 | 0 | 7 | 13 |
| **good** | 114 | 80 | 62 | 89 |
| **fool** | 36 | 58 | 1 | 4 |
| **wit** | 20 | 15 | 2 | 3 |

This table provides two complementary vector views:
1. **Document vectors (columns):** Each document is modeled as a vector of term counts. For example, *Julius Caesar* is represented by the column vector $[7, 62, 1, 2]^T$.
2. **Word vectors (rows):** Each word is modeled by its occurrence distribution across documents. For example, *battle* is represented by the row vector $[1, 0, 7, 13]$.

Plotted in a two-dimensional subspace using the count of *fool* as the horizontal axis and the count of *battle* as the vertical axis:
- The comedies (*As You Like It* and *Twelfth Night*) exhibit high counts for *fool* ($36$ and $58$) and near-zero counts for *battle* ($1$ and $0$). Their vectors lie close to the horizontal axis.
- The history and war plays (*Julius Caesar* and *Henry V*) exhibit substantial counts for *battle* ($7$ and $13$) and minimal counts for *fool* ($1$ and $4$). Their vectors point steeply upward along the vertical axis.

Because documents sharing a central topic use similar vocabularies, their document vectors point in similar directions. In information retrieval systems, a search query is treated as a short pseudo-document vector; retrieving relevant documents corresponds to identifying document vectors that align most closely in direction with the query vector.

:::tip[Think It Through]
**Prompt:** Look at the row for *good* across the four plays ($114, 80, 62, 89$). Why is the raw count of *good* unhelpful for distinguishing whether a play is a comedy or a history play, compared to words like *battle* or *fool*?

**Answer:** The word *good* appears frequently and with roughly similar prevalence across all four documents regardless of genre. Because its distribution is relatively uniform across the collection, raw count along this dimension provides virtually no discriminative power between comedy and history plays.
:::

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**
1. In a term–document matrix, what do rows and columns represent? If two documents address the same subject, what geometric relationship do their column vectors exhibit?
2. Compare sparse count-based vectors with dense learned embeddings regarding (a) dimensionality and sparsity, and (b) their ability to capture synonymy.

**Answers**
1. Rows represent vocabulary terms and their prevalence across documents; columns represent individual documents. When two documents address the same subject, their column vectors point in similar directions in vector space (forming a small angle and being geometrically close).
2. (a) Sparse count-based vectors have high dimensionality (equal to vocabulary size $|V|$, typically $10{,}000\text{--}50{,}000$) and high sparsity (mostly zeros). Dense learned embeddings have low dimensionality (typically $50\text{--}300$) and low sparsity (most values are non-zero real numbers). (b) Count-based vectors represent synonyms as separate orthogonal dimensions, failing to link words that share synonyms as neighbours; dense embeddings project synonyms to nearby coordinate locations because they share similar context distributions.

</details>

## Word–Context Vectors and Cosine Similarity

Whole documents are often too broad a context for capturing the meaning of a single word. A tighter notion of context, the words that occur close to a target word, gives every word its own vector. Comparing two such vectors requires a similarity score. The dot product is the natural first candidate, but it is biased by word frequency; cosine similarity removes that bias by comparing direction only.

### The Word–Word Matrix

A **word–word matrix**, also called a **term–context matrix**, has the **target words** of the vocabulary as rows and the **context words** as columns. A symmetric context window of $\pm k$ words, for example $k=4$, is slid over the corpus. Each cell counts how many times the column word appears within that window around the row word. The guiding principle is that two words are similar in meaning if their context vectors are similar.

Consider four target words and five of their many context words, with counts from a large corpus:

| Target word | … | computer | data | result | pie | sugar | … |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **cherry** | … | 2 | 8 | 9 | 442 | 25 | … |
| **strawberry** | … | 0 | 0 | 1 | 60 | 19 | … |
| **digital** | … | 1670 | 1683 | 85 | 5 | 4 | … |
| **information** | … | 3325 | 3982 | 378 | 5 | 13 | … |

*Cherry* and *strawberry* occur often near *pie* and *sugar* but almost never near *computer* or *data*. *Digital* and *information* show the reverse pattern. Each row is the vector of its word. In a real system a row has one entry per vocabulary word, so its length is $\vert V \vert$ (typically $10{,}000\text{--}50{,}000$) and most entries are zero, which makes these sparse vectors.

Two dimensions can be drawn at a time. Taking only the context words *data* (horizontal) and *computer* (vertical), *digital* is the point $[1683, 1670]$ and *information* is $[3982, 3325]$. Their arrows point in nearly the same direction, but the arrow for *information* is longer because it is the more frequent word.

![Digital and information vectors](./attachments/NLP%20Digital%20and%20Information%20Vectors.svg)

#### How the window size shapes the vectors

The window size is a design choice, typically between 1 and 10 words on each side of the target.

- **Short windows** capture the words immediately beside the target, which carry more syntactic information. The words with the most similar vectors tend to be semantically similar words of the same part of speech.
- **Long windows** capture the broader topic in which the target is used. The closest words tend to be topically related without being similar.

For *Hogwarts*, the school in the Harry Potter series, a $\pm 2$ window finds other fictional schools such as *Sunnydale* and *Evernight*, whereas a $\pm 5$ window finds words from the same story such as *Dumbledore*, *Malfoy*, and *half-blood*.

:::tip[Think It Through]
**Prompt:** Suppose the context window grows from $\pm 1$ word to $\pm 20$ words. How would that change what the co-occurrence counts capture?

**Answer:** They would capture broader context. As the window widens, the counts shift from the immediate, more syntactic neighbours of a word toward the topic in which it is used.
:::

### Dot Product and Its Flaw

The **dot product** multiplies the matching entries of two vectors and adds the results, giving a single number:

$$
\mathbf{v}\cdot\mathbf{w}=\sum_{i=1}^{N}v_iw_i=v_1w_1+v_2w_2+\dots+v_Nw_N
$$

It is high when both vectors have large values in the same dimensions. Two vectors that are zero wherever the other is non-zero are **orthogonal**, with dot product $0$, which signals strong dissimilarity.

Using three of the context words:

| Word | pie | data | computer |
|---|---:|---:|---:|
| **cherry** | 442 | 8 | 2 |
| **digital** | 5 | 1683 | 1670 |
| **information** | 5 | 3982 | 3325 |

$$
\text{cherry}\cdot\text{information}=442(5)+8(3982)+2(3325)=40{,}716
$$

$$
\text{digital}\cdot\text{information}=5(5)+1683(3982)+1670(3325)=12{,}254{,}481
$$

The ranking is correct: *digital* scores about 300 times higher with *information* than *cherry* does. But the size of these numbers depends on how large the counts are.

The dot product favours long vectors. The **length** of a vector is

$$
|\mathbf{v}|=\sqrt{\sum_{i=1}^{N}v_i^{2}}
$$

and it grows with larger values in many dimensions. Frequent words such as *of*, *the*, and *you* co-occur often with many words, so their vectors are long, and a raw dot product rewards them even when their contexts are not especially similar. Length reflects how often a word occurs in the corpus, not how similar two words are.

:::tip[Think It Through]
**Prompt:** Suppose the corpus is doubled, so every count in the *digital* row doubles but the proportions across *pie*, *data*, and *computer* stay the same. What happens to $\text{digital}\cdot\text{information}$? Should the similarity between the two words really change?

**Answer:** The dot product scales with the vector. Doubling only the *digital* row doubles it to $24{,}508{,}962$, and if the *information* row doubles as well, as it would in a genuinely doubled corpus, it becomes four times as large, $49{,}017{,}924$. The similarity should not change, because the proportions of contexts are unchanged.
:::

:::tip[Think It Through]
**Prompt:** For a fairer similarity measure, should the score depend on a vector's length, its direction, or both?

**Answer:** Direction only. Doubling the counts changes the length but not the direction, and it should not change the similarity. Length, which reflects how frequent a word is, should therefore not contribute to the score.
:::

### Cosine Similarity

The dot product combines two factors, the lengths of the vectors and the angle $\theta$ between them:

$$
\mathbf{v}\cdot\mathbf{w}=|\mathbf{v}|\,|\mathbf{w}|\cos\theta
$$

Only the angle reflects shared contexts. Dividing the dot product by both lengths isolates it:

$$
\cos\theta=\frac{\mathbf{v}\cdot\mathbf{w}}{|\mathbf{v}|\,|\mathbf{w}|}
\qquad\Longrightarrow\qquad
\text{cosine}(\mathbf{v},\mathbf{w})=\frac{\sum_{i=1}^{N}v_iw_i}{\sqrt{\sum_{i=1}^{N}v_i^{2}}\;\sqrt{\sum_{i=1}^{N}w_i^{2}}}
$$

This equals the dot product after each vector is scaled to length 1. Scaling a vector changes its length but not its angle, so the cosine is unchanged by how often a word occurs. That is why cosine is preferred over the raw dot product.

| Cosine | Angle | Meaning |
|---:|---:|---|
| $+1$ | $0^\circ$ | The vectors point in the same direction. |
| $0$ | $90^\circ$ | The vectors are orthogonal. |
| $-1$ | $180^\circ$ | The vectors point in opposite directions. |

Raw frequency counts are never negative, so the cosine of two term–term count vectors lies between $0$ and $1$.

To decide which of *cherry* and *digital* is closer to *information*, using the *pie*, *data*, and *computer* columns:

$$
\cos(\text{cherry},\text{information})=\frac{442\cdot5+8\cdot3982+2\cdot3325}{\sqrt{442^2+8^2+2^2}\;\sqrt{5^2+3982^2+3325^2}}=\frac{40{,}716}{442.1\times5187.7}\approx0.018
$$

$$
\cos(\text{digital},\text{information})=\frac{5\cdot5+1683\cdot3982+1670\cdot3325}{\sqrt{5^2+1683^2+1670^2}\;\sqrt{5^2+3982^2+3325^2}}=\frac{12{,}254{,}481}{2371.0\times5187.7}\approx0.996
$$

*Digital* is far closer to *information*, at an angle of about $5^\circ$, than *cherry* is. Geometrically, in the plane of the context words *pie* and *computer*, *cherry* points along the *pie* direction while *digital* and *information* point along the *computer* direction. The angle between *digital* and *information* is small, and the angle between *cherry* and *information* is large. A larger cosine means a smaller angle, with the maximum of $1$ at $0^\circ$.

🎯 **Exam hint:** Questions require recognising when cosine similarity is the right tool to decide which words go together. A question will not say "calculate the cosine similarity", so the student must identify the need and apply the formula.

:::tip[Think It Through]
**Prompt:** Without computing any lengths, what is the cosine of $A=[1,2]$ and $B=[3,6]$, and why?

**Answer:** It is $1$. Since $B=3A$, the vectors point in the same direction, the angle is $0^\circ$, and $\cos 0^\circ=1$. As a check, $A\cdot B=15$, $|A|=\sqrt5$, $|B|=3\sqrt5$, so $\cos=\frac{15}{\sqrt5\cdot3\sqrt5}=1$.
:::

:::tip[Think It Through]
**Prompt:** Two non-negative count vectors have cosine $0$. What does that say about the contexts of the two words?

**Answer:** The vectors are orthogonal, so there is no context dimension in which both are non-zero. The two words share no context words in the counted data. This is weaker than saying the words are unrelated in every sense.
:::

<details className="alert alert--success">
<summary>From Previous Question Papers</summary>

**Questions**
1. **Question 3. [5 Marks] Vector Semantics.** The embedding matrix in a particular vector representation scheme for words is given below:

   $$
   \begin{bmatrix}
   59 & 76 & 64 & 10 & 12 & 31 & 53\\
   53 & 41 & 79 & 5 & 57 & 43 & 21\\
   21 & 7 & 36 & 27 & 65 & 31 & 45\\
   48 & 47 & 30 & 57 & 16 & 20 & 27\\
   49 & 74 & 34 & 43 & 11 & 64 & 9\\
   44 & 65 & 13 & 76 & 79 & 80 & 44\\
   42 & 9 & 82 & 41 & 28 & 65 & 85\\
   28 & 5 & 21 & 42 & 22 & 60 & 40
   \end{bmatrix}
   $$

   The one-hot vector for two words are given below:
   One-Hot_W1 = [0,1,0,0,0,0,0,0]
   One_Hot_W2 = [0,0,0,0,0,0,1,0]
   Answer the following questions:
   3.2 Calculate the Cosine Distance between these words. All major steps and calculations should be explained. (2 marks) *(2023–24 Sem 1 Mid-sem Makeup Q3.2)*
2. **Question 4. [4 Marks]** Assume that the following is a portion of a vocabulary extracted from a large text corpus: Vocabulary = ['river', 'mountain', 'ocean', 'forest', 'desert', 'valley', 'climate', …]. Using a word-embedding method such as Word2Vec, the corresponding portion of the word-embedding matrix (M) for the above vocabulary is shown below, one row per word:

   | Word | Embedding vector |
   |---|---|
   | river | [3, 5, 7] |
   | mountain | [6, 4, 2] |
   | ocean | [5, 8, 6] |
   | forest | [2, 3, 5] |
   | desert | [7, 6, 1] |
   | valley | [4, 5, 3] |
   | climate | [6, 7, 6] |

   (b) Using the embedding matrix, write the embedding vectors for 'ocean' and 'forest'. How would you compute the semantic distance between 'ocean' and 'forest'? [2 marks] *(Dec 2025 Mid-sem Regular Q4b)*
3. **Q3) [2+1+1+1=5 marks]** The number of times each word appears in different documents is given in the table below.

   | Word | D1 | D2 | D3 |
   |---|---:|---:|---:|
   | Data | 25 | 0 | 0 |
   | Science | 40 | 35 | 0 |
   | Machine | 30 | 28 | 20 |
   | Learning | 20 | 25 | 18 |
   | Statistics | 15 | 0 | 0 |

   Answer the following questions:
   c) Using the term-frequency vectors shown in the table, determine which pair of documents (D1–D2, D1–D3, or D2–D3) are likely to be the most similar. Justify your answer briefly. [1 Mark] *(2025–26 Sem 2 Mid-sem Makeup Q3c)*
4. **Question 1.** a) A university develops a plagiarism-detection system. One student writes: "The experiment produced significant results." Another writes: "The study generated important findings." A keyword-based system considers them very different because most words do not match.

   Question: Explain how vector semantics could help identify their semantic similarity. Discuss why cosine similarity alone may not be sufficient for a reliable plagiarism-detection system. *(Sep 2026 End-sem Regular Q1a)*

**Answers**
1. The one-hot vectors select rows 2 and 7 of the matrix: $W_1=[53,41,79,5,57,43,21]$ and $W_2=[42,9,82,41,28,65,85]$. Cosine distance is $1-\text{cosine similarity}$.

   $$
   W_1\cdot W_2=15454,\qquad |W_1|=\sqrt{16295}=127.6519,\qquad |W_2|=\sqrt{22484}=149.9467
   $$

   $$
   \cos=\frac{15454}{127.6519\times149.9467}=0.8074,\qquad \text{cosine distance}=1-0.8074=0.1926
   $$
2. The vectors are $\text{ocean}=[5,8,6]$ and $\text{forest}=[2,3,5]$. Compute the distance from the cosine similarity or cosine distance:

   $$
   \cos=\frac{5(2)+8(3)+6(5)}{\sqrt{125}\,\sqrt{38}}=\frac{64}{68.92}\approx0.929,\qquad \text{cosine distance}\approx0.071
   $$

   No answer key is supplied for this paper. Euclidean distance is an alternative, but cosine is the measure used in the lesson.
3. D1 and D2 are the most similar. The document vectors are the columns: $\text{D1}=(25,40,30,20,15)$, $\text{D2}=(0,35,28,25,0)$, and $\text{D3}=(0,0,20,18,0)$. For example, $\text{D1}\cdot\text{D2}=40(35)+30(28)+20(25)=2740$, so $\cos=\frac{2740}{\sqrt{3750}\,\sqrt{2634}}\approx0.872$.

   | Pair | Cosine |
   |---|---:|
   | D1–D2 | 0.872 |
   | D1–D3 | 0.583 |
   | D2–D3 | 0.731 |

   D1 and D2 share *Science*, *Machine*, and *Learning* with comparable counts.
4. No answer key is supplied; this answer is built from the lesson.
   - **How vectors help:** *experiment/study*, *produced/generated*, *significant/important*, and *results/findings* occur in similar contexts. Their vectors lie close together, so their cosines are high even though the words differ.
   - **Why cosine alone is not enough:**
     - A high cosine can arise from antonyms or merely related words, not only synonyms, because contexts are shared even when meanings differ.
     - Static embeddings give one vector per word, so different senses of a word are not separated.
     - General embeddings may not suit specialised jargon, so the domain similarity matrix should be checked first.
     - Two texts on the same topic can score highly without one copying the other.

</details>

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**
1. In a word–word (term–context) matrix, what do the rows, columns, and cells represent? What does a short window tend to capture compared with a long one?
2. Why is the raw dot product a poor similarity measure for count vectors, and how does cosine similarity fix this?
3. Compute the cosine similarity of $A=[1,2,0]$ and $B=[0,3,4]$.

**Answers**
1. Rows are target words and columns are context words. Each cell counts how often the column (context) word appears within a window around the row (target) word. A short window captures immediate neighbours, so the nearest words tend to be semantically similar words, often of the same part of speech. A long window captures broader topical context, so the nearest words tend to be topically related but not necessarily similar.
2. The dot product grows with the lengths of the vectors, so frequent words, which have long vectors, score high even when their contexts are not similar. Length reflects how often a word occurs, not how similar two words are. Cosine similarity divides by both lengths, which normalises the vectors and compares only the angle between them, regardless of length.
3. $A\cdot B=1(0)+2(3)+0(4)=6$, $|A|=\sqrt5\approx2.236$, and $|B|=5$, so $\cos=\frac{6}{5\sqrt5}=\frac{6}{11.18}\approx0.537$, an angle of about $57.5^\circ$.

</details>

## TF-IDF and Sparse versus Dense Representations

Raw word counts preserve useful information, but they also reward words that appear everywhere. **TF-IDF** combines how often a term appears in one document with how unusual it is across the collection. It gives high weight to words that occur often in this document but in relatively few other documents.

### Term Frequency and Document Frequency

**Term frequency (tf)** measures how often term $t$ appears in document $d$. The lecture's formula squashes large counts logarithmically:

$$
\operatorname{tf}_{t,d}=\log_{10}(\text{count}(t,d)+1)
$$

The $+1$ makes the value defined when the count is zero. For example, 1000 occurrences give $\log_{10}(1001)\approx3.00$, whereas 10 occurrences give $\log_{10}(11)\approx1.04$. A hundredfold increase in count produces only about a threefold increase in tf.

**Document frequency (df)** is the number of documents that contain a term at least once. It is not the term's total count across the collection. For example, *Romeo* can appear 113 times in one play, while *action* also appears 113 times but is spread across 31 plays. The total counts are equal, but *Romeo* is more distinctive because its document frequency is smaller.

**Inverse document frequency (idf)** assigns larger weights to terms found in fewer documents. If $N$ is the total number of documents:

$$
\operatorname{idf}_t=\log_{10}\left(\frac{N}{\text{df}_t}\right)
$$

With $N=37$ plays, *good* appears in every play, so $\text{idf}=\log_{10}(37/37)=0$. *Romeo* appears in one play, so $\text{idf}=\log_{10}(37/1)\approx1.57$. If the collection instead had 30 documents, a term in just one would have idf $\log_{10}(30)\approx1.48$, not 1.57.

⚠️ **Emphasised by Prof. B. Arunkumar**
Document frequency, not collection frequency, determines how broadly a term is distributed. Terms such as *the*, *it*, and *or* receive very low idf because they appear throughout the collection; a domain-specific term such as *oncology* or *retinopathy* is more discriminative.

:::tip[Think It Through]
**Prompt:** In the Shakespeare table, *good* appears in all four plays while *battle* is concentrated in the history plays. Which should retain a higher TF-IDF weight, and what should happen to *good*?

**Answer:** *Battle* should retain a much higher weight because it is concentrated in a subset of plays. *Good* appears throughout the collection, so its idf shrinks to zero and its TF-IDF weight becomes zero.
:::

:::tip[Think It Through]
**Prompt:** A term appears 20 times in one document and nowhere else in a 30-document collection. Using the lecture's formulas, is its TF-IDF weight high or low?

**Answer:** High. Its term frequency is $\log_{10}(20+1)\approx1.322$, its inverse document frequency is $\log_{10}(30/1)\approx1.477$, and its TF-IDF weight is about $1.953$.
:::

### Combining TF and IDF

The final weight is the product of the within-document frequency and collection-wide distinctiveness:

$$
w_{t,d}=\text{tf}_{t,d}\times\text{idf}_t
$$

Consider four Shakespeare plays. The table shows raw term counts and the resulting TF-IDF weights:

| Term | As You Like It (raw) | Twelfth Night (raw) | Julius Caesar (raw) | Henry V (raw) | As You Like It (TF-IDF) | Twelfth Night (TF-IDF) | Julius Caesar (TF-IDF) | Henry V (TF-IDF) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| **battle** | 1 | 0 | 7 | 13 | 0.074 | 0.000 | 0.222 | 0.282 |
| **good** | 114 | 80 | 62 | 89 | 0.000 | 0.000 | 0.000 | 0.000 |
| **fool** | 36 | 58 | 1 | 4 | 0.019 | 0.021 | 0.004 | 0.008 |
| **wit** | 20 | 15 | 2 | 3 | 0.049 | 0.044 | 0.018 | 0.022 |

In *Julius Caesar*, *battle* has tf $\log_{10}(7+1)=\log_{10}(8)\approx0.903$ and idf $\log_{10}(37/21)\approx0.246$, so its TF-IDF weight is $0.903\times0.246\approx0.222$. *Good* has zero idf, so all its weights are zero despite its high raw counts. The weighted table makes the distinguishing term *battle* prominent in the histories while suppressing *good*.

Some questions specify a different tf convention. For example, they may use raw count, relative frequency (count divided by document length), or $1+\log_{10}(\text{count})$. Follow the convention stated in each question. Use the lecture's $\log_{10}(\text{count}+1)$ when no alternative is specified.

### Sparse Count Vectors and Dense Learned Embeddings

TF-IDF improves which count information is emphasized, but it does not change the basic shape of the vector. A count or TF-IDF vector still has one dimension per vocabulary term, typically tens of thousands of dimensions, and most entries remain zero. These are **sparse vectors**.

**Dense embeddings** instead have a short vector, typically 50 to 1000 dimensions, with most entries non-zero. Their values are learned, and meaning is distributed across the vector rather than each dimension naming a specific word. This compact representation gives machine-learning models fewer parameters to tune, can generalize better than explicit counts, and can represent synonymy: *car* and *automobile* are distinct count dimensions, but dense embeddings can place them near one another because they occur in similar contexts.

### Static and Contextual Embeddings

Word2Vec (Skip-gram and CBOW) and GloVe are static embedding methods: a word receives one fixed vector. ELMo and BERT are contextual methods that compute a distinct representation for a word token in its context. Thus, static *bank* has one vector for both river and financial senses; a contextual method can represent the token differently depending on surrounding words.

:::tip[Think It Through]
**Prompt:** A fixed vector is assigned to *bank*. Why can it struggle to represent both a river bank and a financial bank, and how can a contextual embedding help?

**Answer:** The fixed static embedding cannot adapt to context, so one vector must stand for both senses. A contextual embedding uses surrounding words to produce different representations for the river and financial uses.
:::

<details className="alert alert--success">
<summary>From Previous Question Papers</summary>

**Questions**
1. **Question 4. (4 Marks)** Consider the following statements: (a) "The cat saw the dog." (b) "The dog barked at the cat." Convert all words to lowercase and, without further preprocessing (do not remove stop words, lemmatize, stem, etc.), carry out the following tasks: (1) create a vocabulary (1 mark); (2) establish term frequency and document frequency (1 mark); (3) establish the TF-IDF vector for each document (2 marks). Use TF = word frequency / sentence length and use the natural logarithm where required. *(2023–24 Sem 1 Mid-sem Regular Q4)*
2. **Q1(b).** Consider the following documents consisting of one sentence each: "Machine learning improves prediction accuracy." and "Prediction models use machine learning techniques." Convert all words to lowercase. Do not remove stop words, lemmatize, stem, etc. (1) Calculate TF and DF for all terms (2 marks). (2) Compute the TF-IDF vector for each document (2 marks). Use TF = word frequency in document / document length. *(2025–26 Sem 1 Mid-sem Regular Q1b)*
3. **Q3) [2+1+1+1=5 marks]** The number of times each word appears in different documents is given below:

   | Word | D1 | D2 | D3 |
   |---|---:|---:|---:|
   | Data | 25 | 0 | 0 |
   | Science | 40 | 35 | 0 |
   | Machine | 30 | 28 | 20 |
   | Learning | 20 | 25 | 18 |
   | Statistics | 15 | 0 | 0 |

   (a) Calculate the TF-IDF value for each term in D1. Assume a term appears in a document if its frequency is greater than zero. (2 marks). (b) Represent each word as a TF-IDF word embedding using its TF-IDF value in D1. Based on these embeddings, identify the two words that are most similar. (1 mark). (d) State one disadvantage of using TF-IDF values as word embeddings compared to modern neural word embeddings such as Word2Vec or GloVe. (1 mark). *(2025–26 Sem 2 Mid-sem Makeup Q3a,b,d)*
4. **Question 1(b).** Consider these one-sentence documents: "Machine learning improves prediction accuracy." and "Prediction models use machine learning techniques." Convert all words to lowercase; do not remove stop words, lemmatize, stem, etc. (1) Calculate TF and DF for all terms (2 marks). (2) Compute the TF-IDF vector for each document (2 marks). Use TF = word frequency in document / document length. *(2025–26 Sem 2 Mid-sem Regular Q1b)*

**Answers**
1. Vocabulary in the answer key: $[\text{the},\text{cat},\text{saw},\text{dog},\text{barked},\text{at}]$. The TF values are:

   | Term | D1 TF | D2 TF | DF |
   |---|---:|---:|---:|
   | the | 2/5 | 1/6 | 2 |
   | cat | 1/5 | 1/6 | 2 |
   | saw | 1/5 | 0 | 1 |
   | dog | 1/5 | 1/6 | 2 |
   | barked | 0 | 1/6 | 1 |
   | at | 0 | 1/6 | 1 |

   With $N=2$ and natural-log idf, $\text{idf}=\ln(N/\text{df})$. The resulting vectors in that vocabulary order are $D1=[0,0,\ln2/5,0,0,0]$ and $D2=[0,0,0,0,\ln2/6,\ln2/6]$.
2. In first-appearance vocabulary order $[\text{machine},\text{learning},\text{improves},\text{prediction},\text{accuracy},\text{models},\text{use},\text{techniques}]$, the terms *machine*, *learning*, and *prediction* have DF 2, while *improves*, *accuracy*, *models*, *use*, and *techniques* have DF 1. Using $\text{idf}=\log_{10}(2/\text{df})$, the answer key gives $D1=[0,0,0.0602,0,0.0602,0,0,0]$ and $D2=[0,0,0,0,0,0.0503,0.0503,0.0503]$. Directly rounding $(1/6)\log_{10}(2)$ to four decimals gives 0.0502; the answer key reports 0.0503 for D2.
3. D1 has 130 total terms; the document counts are DF 1 for *Data*, *Statistics* and DF 2 for *Science*, *Machine*, *Learning*. Using relative TF and $\text{idf}=\log_{10}(3/\text{df})$ gives:

   | Term | D1 TF | IDF | TF-IDF |
   |---|---:|---:|---:|
   | Data | 25/130 = 0.1923 | 0.4771 | 0.0918 |
   | Science | 40/130 = 0.3077 | 0.1761 | 0.0542 |
   | Machine | 30/130 = 0.2308 | 0 | 0 |
   | Learning | 20/130 = 0.1538 | 0 | 0 |
   | Statistics | 15/130 = 0.1154 | 0.4771 | 0.0550 |

   Using the answer key's one-dimensional values for D1, *Machine* and *Learning* both have value 0 and are identified as the most similar in that representation. These identical zero weights mean neither term distinguishes D1 from the rest of the collection; they do not establish that the words are semantically similar. TF-IDF does not capture semantic relationships between words, while Word2Vec and GloVe can place words with similar usage near each other.
4. This repeats the same two-sentence setup and asks for TF, DF, and document TF-IDF vectors with the stated relative-frequency TF formula. The answer key uses the vocabulary in first-appearance order above and gives $D1=[0,0,0.0602,0,0.0602,0,0,0]$ and $D2=[0,0,0,0,0,0.0503,0.0503,0.0503]$. The three terms unique to each document receive the positive weights; shared terms have idf zero.

</details>

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**
1. A term appears 20 times in one document and nowhere else in a collection of 30 documents. Using the lecture's formulas, compute its TF-IDF weight.
2. Contrast sparse count-based vectors with dense learned embeddings in dimensionality, sparsity, and synonym handling. How do contextual embeddings differ from static ones?

**Answers**
1. $\text{tf}=\log_{10}(20+1)\approx1.322$, $\text{idf}=\log_{10}(30/1)\approx1.477$, so $\text{tf-idf}\approx1.953$ (high).
2. Sparse count-based vectors have vocabulary-sized dimensions and are mostly zero; synonyms such as *car* and *automobile* occupy separate dimensions. Dense learned embeddings use far fewer, mostly non-zero dimensions and place words with similar context distributions near one another. A static embedding gives a word one fixed vector, whereas a contextual embedding represents the word differently according to its surrounding words.

</details>
