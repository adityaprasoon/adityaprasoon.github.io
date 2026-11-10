import React, {type ReactNode} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Content from '@theme-original/DocItem/Content';
import {NoteStatusBadge} from '@site/src/components/NoteStatus';
import AiInvolvementBadge from '@site/src/components/AiInvolvement';
import {getNoteStatus} from '@site/src/utils/noteStatus';
import {getAiInvolvement} from '@site/src/utils/aiInvolvement';
import type {Props} from '@theme/DocItem/Content';
import styles from './styles.module.css';

export default function DocItemContent(props: Props): ReactNode {
  const {frontMatter} = useDoc();
  const status =
    frontMatter && 'status' in frontMatter ? frontMatter.status : undefined;
  const aiInvolvement =
    frontMatter && 'ai_involvement' in frontMatter
      ? frontMatter.ai_involvement
      : undefined;
  const hasBadges =
    getAiInvolvement(aiInvolvement) !== undefined ||
    getNoteStatus(status) !== undefined;
  return (
    <>
      {hasBadges && (
        <div className={styles.badges}>
          <AiInvolvementBadge value={aiInvolvement} />
          <NoteStatusBadge status={status} />
        </div>
      )}
      <Content {...props} />
    </>
  );
}
