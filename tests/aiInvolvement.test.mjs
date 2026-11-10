import assert from 'node:assert/strict';
import test from 'node:test';
import {getAiInvolvement, aiInvolvementLevels} from '../src/utils/aiInvolvement.ts';

test('missing ai_involvement does not assign a badge', () => {
  assert.equal(getAiInvolvement(undefined), undefined);
});

test('all supported levels have labels and descriptions', () => {
  for (const level of [
    'human-written',
    'ai-polished',
    'ai-assisted',
    'ai-summarized',
    'ai-generated-reviewed',
    'ai-generated',
  ]) {
    assert.equal(getAiInvolvement(level), level);
    assert.ok(aiInvolvementLevels[level].label);
    assert.ok(aiInvolvementLevels[level].description);
  }
});

test('invalid levels fail explicitly, including inherited property names', () => {
  for (const level of [null, '', 'human', 'toString', '__proto__', 1, [], {}]) {
    assert.throws(() => getAiInvolvement(level), /Invalid ai_involvement/);
  }
});
