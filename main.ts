import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';

const text = 'I missed the deadline because I spent the last six hours simulating a version of you who is more patient, and honestly, we had such a nice time I forgot you still exist.';
const length = Array.from(text).length;
if (text.includes('\r') || text.split('\n').length !== 1 || length < 1 || length > 199) {
  throw new Error('Invalid entry text');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt.tmp', text + '\n');
renameSync('/output/entry.txt.tmp', '/output/entry.txt');
if (readFileSync('/output/entry.txt', 'utf8') !== text + '\n') {
  throw new Error('Entry verification failed');
}
