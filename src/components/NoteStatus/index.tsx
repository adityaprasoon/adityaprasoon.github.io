import React, {type ReactNode} from 'react';
import {getNoteStatus, noteStatuses} from '@site/src/utils/noteStatus';
import styles from './styles.module.css';

export default function NoteStatus({status}: {status?: unknown}): ReactNode {
  const value = getNoteStatus(status);
  if (!value) {
    return null;
  }
  const {label, color} = noteStatuses[value];
  return (
    <div className={styles.container}>
      <span className={`badge badge--${color}`} aria-label={`Status: ${label}`}>
        {label}
      </span>
    </div>
  );
}
