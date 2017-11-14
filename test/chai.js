'use strict';

const os     = require('os'),
      assert = require('chai').assert,
      expect = require('chai').expect,
      should = require('chai').should();

// Chai assert
// Provides classic assert-dot notation, similar to that packaged with Node.js.
describe('chai assert', function() {
  it('should check the platform', function() {
    let platform = os.platform();
    assert.isOk(platform, 'platform is truthy');
    assert.notEqual(platform, null, 'platform is not equal to null');
    assert.typeOf(platform, 'string', 'platform is a string');
  });
});

// Chai expect
// Uses chainable language to construct assertions.
describe('chai expect', function() {
  it('should check the platform', function() {
    let platform = os.platform();
    expect(platform, 'platform is truthy').be.ok;
    expect(platform, 'platform is not equal to null').not.be.null;
    expect(platform, 'platform is a string').to.be.a('string');
  });
});

// Chai should
// Also uses chainable language to construct assertions.
describe('chai should', function() {
  it('should check the platform', function() {
    let platform = os.platform();
    platform.should.be.ok;
    platform.should.not.be.null;
    platform.should.be.a('string');
  });
});
