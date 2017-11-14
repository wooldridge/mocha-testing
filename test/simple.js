describe('my first test suite', function() {
  describe('of some math', function() {
    it('multiplying 2 by 3 should give 6', function() {
      if (2 * 3 !== 6) {
        throw new Error('multiplication test failed');
      }
    });
    it('decrementing 4 by 1 should give 3', function() {
      if (4 - 1 !== 3) {
        throw new Error('decrement test failed');
      }
    });
  });
});
