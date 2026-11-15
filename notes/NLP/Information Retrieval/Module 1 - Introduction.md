---
status: work-in-progress
ai-authored: true
ai_involvement: ai-summarized
---

# Module 1 - Introduction

Information retrieval (IR) organizes and searches large collections so people can find material relevant to what they need. The course begins with traditional retrieval models and document indexing, then builds toward applications such as web search, text mining, multimedia and neural IR.

## What Information Retrieval Does

Information retrieval finds material, usually documents containing unstructured text, that satisfies a user's information need within a large collection. The need is what the person wants to know; a query is the expression the system can process to search for it. A user may describe a need in ordinary language, while the system turns it into searchable terms or operations.

IR is not limited to web search. It can search email, a laptop, a corporate knowledge base, a digital library, or a legal archive. For example, a legal search system can retrieve case documents relevant to a user's search. The user may care not only that a document matches the topic, but also whether it is current, authoritative, and useful for the intended purpose.

A ranked search system finds candidate documents in a large collection and ranks them by likely relevance. These are related but distinct tasks: finding pages that contain query words does not by itself guarantee that the most useful page appears first. Search results may be ordered differently for different users; search history and user profile can affect ranking. A system may also correct a misspelled query. In a phrase search, quotation marks can require the words to appear together as that phrase; without quotes, the words may appear separately in a document. Keyword matching alone does not establish that a document has a nearby meaning to the query. Not all IR models rank results: the standard Boolean model returns matches without ranking them.

:::tip[Think It Through]
**Prompt:** When a search returns results for a typed query, what separate problems must the system solve? What might explain a different result order for another user?

**Answer:** It must make the need searchable, find candidate documents in the large collection, judge their relevance, and rank them. The learner identified matching query terms and the size of the corpus. Search history or user profile can contribute to differences in ordering; spelling correction or phrase constraints can also change the search.
:::

:::tip[Think It Through]
**Prompt:** If a system finds documents containing the query words but ranks an outdated or untrustworthy page first, has it done a good job of IR? What should relevance account for?

**Answer:** Not necessarily. The learner noted that recency should count. Relevance can also depend on topical fit, authority, and whether the document satisfies the user's goal and intended use.
:::

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**

1. In your own words, what does an IR system find, and what makes the task challenging?
2. Name one IR application other than web search, and explain what its collection might contain.

**Answers**

1. It finds documents or other material relevant to a user's information need from a large collection; a ranked retrieval system also orders them. The scale of the collection and deciding which results are most relevant to that user make the task challenging.
2. Legal information retrieval searches a collection of legal documents, such as cases, for material relevant to a user's search.
</details>

## Types of Information Need and the IR Task

Information needs can be served by searching a fixed collection or by filtering documents that arrive over time. These patterns differ in which part stays fixed: the collection or the query.

**Retrospective (ad hoc) retrieval** searches a static collection with different queries. For example, a person can search archived legal cases for a particular issue. The collection stays fixed while queries change; the search is time-invariant.

**Prospective retrieval (filtering)** applies a fixed query or user profile to a dynamic collection. For example, a saved search can monitor newly filed legal cases and return matching documents. Each new filing can be treated as a document, and matching results can be delivered in ranked order. A daily or weekly digest is one possible delivery schedule; the defining property is that new documents are checked against the standing query.

Real applications can combine retrieval and filtering. A news service can find relevant articles and then use a recommender system to choose what to show a particular user.

The ranked IR task takes a corpus of natural-language documents and a textual query, and returns a ranked set of documents relevant to the query. Other IR models, such as the standard Boolean model, return matches without ranking them.

:::tip[Think It Through]
**Prompt:** A service monitors new court rulings and alerts you when one matches a saved search. Which part stays fixed, and which part changes? Is that ad hoc retrieval or filtering?

**Answer:** The saved query stays fixed while newly filed cases are added to the collection. This is filtering. The learner identified that the query remains fixed and new documents arrive.
:::

:::tip[Think It Through]
**Prompt:** For the court-alert system, what counts as one document, and what might the system return?

**Answer:** Each new legal filing can be one document. The system can return an ordered list of relevant new filings, delivered as they arrive or on a daily or weekly schedule. The learner proposed periodic delivery.
:::

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**

1. What stays fixed and what changes in ad hoc retrieval? How is that different in filtering?
2. What are the two inputs to an IR system, and what does it return?

**Answers**

1. In ad hoc retrieval, the corpus is fixed and the query changes. In filtering, the query or user profile is fixed while the document collection changes over time.
2. The inputs are a corpus of natural-language documents and a textual query. In the ranked IR task, the output is a ranked set of relevant documents; not every IR model ranks its results.
</details>

## Relevance and Information Retrieval vs Data Retrieval

Relevance depends on the user's information need and intended use, not just on the presence of query words. A useful document should be on the right subject; depending on the need, its timeliness and the authority of its source may also matter. For someone seeking information about the BITS WILP process, the official BITS website may be preferable to an unrelated or obsolete page.

An IR system may consider word meaning and word order, direct or indirect user feedback, and source authority. These factors can help distinguish documents containing the same terms but conveying different information or serving different purposes. Their use depends on the system; simple keyword matching does not necessarily capture them.

:::tip[Think It Through]
**Prompt:** Compare "dog bites man" with "man bites dog." They contain the same words. Why might their order matter when deciding which documents are relevant?

**Answer:** Word order changes who did what, so the two phrases describe different events despite having the same words. The learner noted that they could serve different purposes, such as local news or a funny story.
:::

Data retrieval and information retrieval address different kinds of search. Data retrieval typically uses a precisely defined condition on structured fields, such as finding a library record with a particular document ID. A returned record with the wrong ID does not satisfy that condition. Information retrieval often searches less-structured natural-language content for documents useful to a broader need, where relevance can be a matter of judgment and effectiveness is assessed by how well relevant documents are found.

| Aspect | Data retrieval | Information retrieval |
| --- | --- | --- |
| Typical material | Structured records with fields | Often unstructured natural-language documents |
| Query | A precisely specified field condition, such as in SQL | Often a topic or information need; Boolean operators are also possible |
| Match and evaluation | A record satisfies the condition or it does not; a wrong record violates the query | Usefulness can be a matter of judgment; effectiveness concerns how well relevant material is found, and some imperfect results may be tolerated |

These are typical characteristics rather than a strict separation. IR can use structured fields, Boolean IR can make exact match decisions, and an application can combine data retrieval and IR. One is not simply a subset of the other.

:::tip[Think It Through]
**Prompt:** In a digital library, how would searching for document ID `123` differ from searching for useful research on a topic?

**Answer:** Skipped. Looking up the ID has an exact criterion: a record with another ID is wrong. Searching for research requires judging which documents help with the user's information need, which may be less clear-cut.
:::

<details className="alert alert--success">
<summary>From Previous Question Papers</summary>

**Questions**

1. A government digital archive is building a search system for public policy reports. The system uses preprocessing, Boolean retrieval, and an inverted index for efficient search. Differentiate between Information Retrieval and Data Retrieval in the context of the university digital library. *(Second Semester 2025-2026 Mid-Semester Makeup, Set 2, Q1a)*

**Answers**

1. IR helps find relevant academic content for a topic-based query, even when the user does not know the exact document. Data retrieval finds records satisfying precise structured conditions, such as a document ID, author, or year.
</details>

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**

1. Two documents match your query words. What factors besides word matching could make one more relevant to you?
2. A library supports searching by exact document ID and searching for research on a topic. Which is data retrieval, which is information retrieval, and why?

**Answers**

1. Timeliness and source authority can matter, as can topical fit and whether a document satisfies the user's goal and intended use.
2. Exact ID lookup is data retrieval because it uses a precise field condition. Topic-based search is information retrieval because it seeks documents relevant to an information need.
</details>

## User Tasks and Document Representation

An IR system needs to support the user's task and represent documents in a form that can be searched. A useful representation can make repeated searches across a collection more efficient, but the choice of representation also determines what information is retained for matching.

### User Tasks

- **Retrieval:** the user purposefully searches for information, such as a legal case concerning a specific issue.
- **Browsing:** the user explores a collection, perhaps by following links between subjects without a precisely formulated query.
- **Filtering:** the system checks incoming documents against a standing interest and presents matching items, such as alerts about newly filed cases.

Retrieval and browsing are **pull** actions: the user seeks information. Filtering is treated here as a **push** action: matching incoming information is directed toward the user.

:::tip[Think It Through]
**Prompt:** You open a legal archive and follow subject links to see what's available, without entering a specific query. Which task is that, and is it pull or push?

**Answer:** This is browsing and a pull action. The learner agreed to use the distinction between browsing as pull and filtering as push.
:::

### Logical Views

⚠️ **Emphasised by lecturer** A **logical view** represents a document in a form the retrieval system can work with. One traditional approach uses a set of selected keywords, or **index terms**, chosen automatically or by a specialist. This representation is separate from the original document, which may be kept for reading. An inverted index organizes terms across documents and is not the same as the logical view of one document.

For example, consider two documents represented by these selected terms:

| Document | Logical view |
| --- | --- |
| D1 | `cardiac`, `equipment`, `report` |
| D2 | `medical`, `equipment`, `report` |

:::tip[Think It Through]
**Prompt:** If the query is `cardiac`, which document matches this representation? What information from the original document might be lost when we keep only a set of terms?

**Answer:** D1 matches. The learner noted that details beyond the selected keywords are lost. A set of terms can omit original wording, word order, context, and the number of occurrences of each term.
:::

#### Which diagram shows text plus structure?

The document-representation diagram shows an optional structure-recognition path: the input can contain text and structure, which may be separated. It does not imply that every system retains both in the final index. The alternative paths show that preprocessing stages can be skipped.

![[mtech-study/Semester 2/IR/attachments/module-1-logical-view-slide-23.png]]

### Preprocessing

⚠️ **Emphasised by lecturer** Preprocessing can create a more compact representation, but the steps are optional and can discard useful distinctions.

- **Tokenization:** split the text into units, often words. A token can occur more than once.
- **Normalization:** make chosen variations consistent, for example by converting uppercase and lowercase letters to the same form.
- **Stop-word removal:** omit words from a chosen list, often frequent words such as `the` or `of`, to reduce the terms stored.
- **Noun-group processing:** identify noun groups as another possible way to narrow the terms used for representation.
- **Stemming:** reduce word forms to a common stem. For example, `search` and `searching` might become `search`. A stem need not be a complete dictionary word: the example forms `computer`, `compute`, `computing`, and `computed` can be reduced to `comput`.

Lemmatization is another way to reduce word forms. The exact processing and resulting terms depend on the chosen methods. Stemming can help different forms match, but a stem does not necessarily preserve the full meaning of each form and may group forms with different meanings.

:::tip[Think It Through]
**Prompt:** Suppose a system's stop list includes `not`. What important distinction could it lose between the phrases `safe` and `not safe`?

**Answer:** The phrases have opposite meanings, but removing `not` makes them indistinguishable in that representation. The original text remains unchanged; a search relying only on the retained terms can miss the distinction.
:::

For a worked example, consider the document text "The report was searching for information." With `the`, `was`, and `for` chosen as stop words:

| Step | Result |
| --- | --- |
| Tokenize and lowercase | `the`, `report`, `was`, `searching`, `for`, `information` |
| Remove the chosen stop words | `report`, `searching`, `information` |
| Stem `searching` | `report`, `search`, `information` |

The final terms are compact but do not preserve the full sentence. A short demonstration also showed normalization, tokenization, removal of repeated stop words, and `jumps` reduced to `jump`.

:::tip[Think It Through]
**Prompt:** A second document says `Search for information`. Using the same lowercase, stop-word and stemming choices, which terms remain? How could that help connect it to the first document?

**Answer:** `search` and `information` remain. Both also occur in the first document's logical view, so shared terms can help identify a possible match.
:::

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**

1. What is a logical view of a document, and how can it differ from the original text?
2. If `computed` and `computing` are both stemmed to `comput`, how might that help retrieval? Does `comput` have to be a complete word?

**Answers**

1. It is a representation designed for retrieval, such as selected and preprocessed index terms. It can omit words and lose details such as order or context that appear in the original.
2. Mapping both forms to the same stem can help them match during retrieval. The stem need not be a complete word or preserve the full meaning of every form grouped under it.
</details>

## The Retrieval Process

The retrieval process prepares documents for searching and processes the user's query into a compatible form. Search uses the query and the document index to find candidates; a ranking model may then order them for presentation.

### Inverted Index

A document's logical view lists terms associated with that document. An **inverted index** reverses the relationship: it maps each term to the documents containing it. The list of document IDs for a term is its **postings list**. Constructing the index involves building a term dictionary and a postings list for each term, rather than a postings list for each document.

For example, consider these document views:

| Document | Terms |
| --- | --- |
| D1 | `cardiac`, `equipment`, `report` |
| D2 | `medical`, `equipment`, `report` |
| D3 | `cardiac`, `medical`, `data` |

Their inverted index is:

| Term | Document IDs |
| --- | --- |
| `cardiac` | D1, D3 |
| `data` | D3 |
| `equipment` | D1, D2 |
| `medical` | D2, D3 |
| `report` | D1, D2 |

Looking up `cardiac` finds D1 and D3 directly. This identifies matches but does not by itself rank them.

:::tip[Think It Through]
**Prompt:** For `cardiac AND equipment`, a document must contain both terms. Using the index, which document matches, and why?

**Answer:** D1 is the only document in both postings lists. The `cardiac` list contains D1 and D3; the `equipment` list contains D1 and D2.
:::

### Query Processing

⚠️ **Emphasised by lecturer** The query must be processed into a form compatible with the index. Otherwise, a term can appear to be missing even when a related form was indexed. For example, if a document's `searching` was stemmed to `search`, looking up raw `searching` will not find the `search` entry. Applying a compatible stemmer to the query can produce `search` and allow the lookup to match.

Query operations can also refine or expand the query. These are separate from constructing the document index, and a system may have query-specific operations in addition to processing shared with documents.

:::tip[Think It Through]
**Prompt:** Suppose the index contains `comput` for a document originally containing `computing`. If the system looks up the raw query `computing`, what problem arises, and how could it fix it?

**Answer:** The raw term does not match the `comput` index entry, so the document can be missed. Applying compatible stemming to the query produces `comput`, allowing the lookup to match.
:::

### System Components

The conceptual retrieval flow connects document preparation with query processing and search:

```mermaid
flowchart LR
	D[Documents] --> P[Text processing]
	P --> I[Inverted index]
	U[User interface] --> Q[Query processing]
	Q --> S[Search]
	I --> S
	S --> R[Ranking, if used]
	R --> U
	U -. Feedback .-> Q
```

Documents are accessed and processed to build the index. For web search, a crawler obtains pages and must handle links between them as well as a large, changing collection. The user interface accepts queries, displays results, and can collect feedback; query operations can use that feedback to refine a later query. Search uses the query and index to retrieve candidates. A ranking model may order those results, but standard Boolean retrieval does not itself rank matches. The index also needs efficient storage and searching; index construction and compression are separate topics.

<details className="alert alert--success">
<summary>From Previous Question Papers</summary>

**Questions**

1. A government digital archive is building a search system for public policy reports. The system uses preprocessing, Boolean retrieval, and an inverted index for efficient search. Construct the inverted index for this document collection: D1 `data science model`; D2 `science model prediction`; D3 `model prediction accuracy`; D4 `prediction accuracy report`. *(Second Semester 2025-2026 Mid-Semester Makeup, Set 2, Q1c)*

**Answers**

1. `accuracy`: D3, D4; `data`: D1; `model`: D1, D2, D3; `prediction`: D2, D3, D4; `report`: D4; `science`: D1, D2.
</details>

<details className="alert alert--info">
<summary>Test Your Understanding</summary>

**Questions**

1. In a ranked IR system, what roles do the index, query processing, searching and ranking play after a user submits a query?

**Answers**

1. The index maps terms to document postings. Query processing makes the query compatible with the indexed terms and may refine it; searching uses the query and index to find candidate documents; ranking orders those candidates by estimated relevance before presentation.
</details>
