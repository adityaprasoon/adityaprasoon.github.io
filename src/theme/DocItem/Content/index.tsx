import React, {type ReactNode} from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Content from '@theme-original/DocItem/Content';
import NoteStatus from '@site/src/components/NoteStatus';
import type {Props} from '@theme/DocItem/Content';

export default function DocItemContent(props: Props): ReactNode {
  const {frontMatter} = useDoc();
  const status =
    frontMatter && 'status' in frontMatter ? frontMatter.status : undefined;
  return (
    <>
      <NoteStatus status={status} />
      <Content {...props} />
    </>
  );
}
