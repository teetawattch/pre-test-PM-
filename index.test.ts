import { merge } from './merge';
 
describe('testing index file', () => {
  test('unit test', () => {
    expect(merge([1, 3, 5], [4, 2, 6])).toEqual([ 1, 2, 3, 4, 5, 6 ].sort());
  });
});