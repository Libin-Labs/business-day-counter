import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('counts weekdays', () => {
  assert.equal(api.countBusinessDays('2024-06-03', '2024-06-07'), 5);
});
test('excludes weekend endpoints', () => {
  assert.equal(api.countBusinessDays('2024-06-08', '2024-06-09'), 0);
});
test('includes weekday endpoints', () => {
  assert.equal(api.countBusinessDays('2024-06-07', '2024-06-10'), 2);
});
test('handles one weekday', () => {
  assert.equal(api.countBusinessDays('2024-06-03', '2024-06-03'), 1);
});
test('handles one weekend day', () => {
  assert.equal(api.countBusinessDays('2024-06-08', '2024-06-08'), 0);
});
test('rejects descending range', () => {
  assert.throws(() => api.countBusinessDays('2024-06-09', '2024-06-03'), RangeError);
});
