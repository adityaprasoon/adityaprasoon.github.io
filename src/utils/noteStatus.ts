export const noteStatuses = {
  'work-in-progress': {label: 'Work in progress', color: 'warning'},
  completed: {label: 'Completed', color: 'success'},
  abandoned: {label: 'Abandoned', color: 'secondary'},
} as const;

export type NoteStatus = keyof typeof noteStatuses;

export function getNoteStatus(value: unknown): NoteStatus | undefined {
  if (value === undefined) {
    return undefined;
  }
  if (typeof value === 'string' && Object.hasOwn(noteStatuses, value)) {
    return value as NoteStatus;
  }
  throw new Error(
    `Invalid note status ${JSON.stringify(value)}. Expected work-in-progress, completed, or abandoned.`,
  );
}
