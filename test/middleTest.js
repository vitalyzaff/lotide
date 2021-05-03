const middle = require('../middle');
const assert = require('chai').assert;


describe('#middle', () => {

  it('returns [3, 9] from [1, 2, 3, 9, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 9, 5, 6]), [3, 9]);
  });

  it("returns ['why'] from ['hello', 'why', 'bye']", () => {
    assert.deepEqual(middle(['hello', 'why', 'bye']), ['why']);
  });

  it("returns [] from [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] from [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

});