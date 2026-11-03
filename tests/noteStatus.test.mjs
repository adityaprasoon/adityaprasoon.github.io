import assert from 'node:assert/strict';
import test from 'node:test';
import {getNoteStatus, noteStatuses} from '../src/utils/noteStatus.ts';

test('missing frontmatter or status does not assign a badge', () => {
  assert.equal(getNoteStatus(undefined), undefined);
  assert.equal(getNoteStatus({}.status), undefined);
});

test('all supported statuses have readable labels and badge colors', () => {
  for (const status of ['work-in-progress', 'completed', 'abandoned']) {
    assert.equal(getNoteStatus(status), status);
    assert.ok(noteStatuses[status].label);
    assert.ok(noteStatuses[status].color);
  }
});

test('invalid statuses fail explicitly, including inherited property names', () => {
  for (const status of [null, '', 'complete', 'toString', '__proto__', 1, [], {}]) {
    assert.throws(() => getNoteStatus(status), /Invalid note status/);
  }
});
