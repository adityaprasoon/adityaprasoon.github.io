import React, {type ReactNode} from 'react';
import Heading from '@theme-original/DocCard/Heading';
import NoteStatus from '@site/src/components/NoteStatus';
import type {Props} from '@theme/DocCard/Heading';

export default function DocCardHeading(props: Props): ReactNode {
  return (
    <>
      <Heading {...props} />
      {props.item.type === 'link' && (
        <NoteStatus status={props.item.customProps?.noteStatus} />
      )}
    </>
  );
}
