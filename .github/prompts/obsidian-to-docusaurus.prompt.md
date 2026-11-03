---
name: Obsidian to Docusaurus
description: "Convert an Obsidian Markdown note to this repository's Docusaurus-compatible format, including callouts and table-of-contents removal."
argument-hint: "Path to the Markdown file"
agent: agent
---

Convert the user-provided Markdown file to a Docusaurus-compatible format in place. If no path is provided, use the active Markdown file. Keep the edit limited to the requested conversion; do not rewrite or summarize note content.

This prompt is intentionally incremental. For now, convert callouts and remove tables of contents only. Do not silently change other Obsidian-specific syntax; report unsupported constructs for a later update to this prompt.

## Tables of Contents

- Remove tables of contents from the converted document; do not convert them or leave their headings and generated entries behind.
- Remove a complete fenced block whose info string is `table-of-contents`, including its opening and closing fences and all content inside. Remove it whether it is empty or populated. Do not remove ordinary code fences.
- Remove standalone table-of-contents directives such as `[[toc]]` or `[toc]` when they are clearly being used to insert a TOC.
- Remove a clearly identified TOC section, including its heading and generated entries, stopping before the next heading at the same or a higher level. Common headings include `Table of Contents` and `Contents`. Do not remove unrelated prose or links elsewhere in the document.

## Callouts

- Recognize Obsidian callouts such as `> [!question]- Test Your Understanding`, including optional `+` or `-` fold markers and an optional title.
- Docusaurus does not render Obsidian's `> [!type]` syntax as a callout. Convert it rather than leaving the marker or its blockquote formatting in the note.
- For a callout without a fold marker, use Docusaurus admonition syntax: `:::info[Title]`, the original body, and a closing `:::`. Use the nearest built-in type (`note`, `tip`, `info`, `warning`, or `danger`) when its meaning is clear; map `question` to `info`. Docusaurus admonitions do not preserve collapsed/expanded behavior.
- For a callout with `-` or `+`, preserve its fold behavior with a native `<details>` element styled as a Docusaurus info alert. Leave it closed for `-` and add the `open` attribute for `+`. For example:

  ```mdx
  <details className="alert alert--info">
  <summary>Test Your Understanding</summary>

  **Questions**

  1. Keep the original question text.

  **Answers**

  1. Keep the original answer text.

  </details>
  ```

- When converting blockquote callouts to `<details>`, remove exactly one leading `>` and its optional following space from each body line. Preserve nested blockquotes and all Markdown content, including question/answer lists.
- Keep blank lines after `</summary>`, between headings and lists or paragraphs, and before `</details>`. These boundaries are required for valid Markdown/MDX output and to avoid invalid paragraph nesting in generated HTML.
- Preserve the original document title and all non-TOC content. Do not add, remove, or rewrite explanations, questions, or answers.

## Validation

- Follow the repository's existing Docusaurus and package-manager conventions; do not install a plugin or change global configuration for callout conversion.
- Run the production build (`pnpm build`) and resolve any new errors or HTML-minifier warnings caused by the converted callouts.
- Inspect the generated page to confirm the callouts render with their titles and expected fold state, and that removed TOC content is absent. Report any unrelated pre-existing build warnings separately.
