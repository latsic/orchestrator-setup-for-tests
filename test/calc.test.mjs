import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, sub } from '../src/calc.mjs';

test('add', () => {
  assert.equal(add(2, 3), 5);
});

// covers CALC-9#1
test('sub', () => {
  assert.equal(sub(5, 3), 2);
});
