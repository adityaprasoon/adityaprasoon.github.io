import React, {useId, useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {
  aiInvolvementLevels,
  getAiInvolvement,
  type AiInvolvement,
} from '@site/src/utils/aiInvolvement';
import styles from './styles.module.css';

export function AiInvolvementLabel({value}: {value: AiInvolvement}): ReactNode {
  return (
    <span className={clsx('badge', styles.badge)}>
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
      </svg>
      {aiInvolvementLevels[value].label}
    </span>
  );
}

export default function AiInvolvementBadge({
  value: rawValue,
}: {
  value?: unknown;
}): ReactNode {
  const value = getAiInvolvement(rawValue);
  const tooltipId = useId();
  const [dismissed, setDismissed] = useState(false);
  if (!value) {
    return null;
  }
  const {label, description} = aiInvolvementLevels[value];
  return (
    <span
      className={clsx(styles.wrapper, dismissed && styles.dismissed)}
      onMouseEnter={() => setDismissed(false)}
      onFocus={() => setDismissed(false)}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setDismissed(true);
        }
      }}>
      <Link
        to={`/ai-use#${value}`}
        className={styles.link}
        aria-label={`AI involvement: ${label}`}
        aria-describedby={tooltipId}>
        <AiInvolvementLabel value={value} />
      </Link>
      <span role="tooltip" id={tooltipId} className={styles.tooltip}>
        {description}
      </span>
    </span>
  );
}
