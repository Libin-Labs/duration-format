import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('formats zero', () => {
  assert.equal(api.formatDuration(0), '0ms');
});
test('formats compound units', () => {
  assert.equal(api.formatDuration(90061001), '1d 1h 1m 1s 1ms');
});
test('omits zero components', () => {
  assert.equal(api.formatDuration(60000), '1m');
});
test('truncates fractional milliseconds', () => {
  assert.equal(api.formatDuration(1500.9), '1s 500ms');
});
test('formats negative durations', () => {
  assert.equal(api.formatDuration(-1001), '-1s 1ms');
});
test('rejects non-finite durations', () => {
  assert.throws(() => api.formatDuration(Infinity), TypeError);
});
