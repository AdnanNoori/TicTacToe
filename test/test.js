const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('Event Listeners', function() {
  it('it should update target element with respective move', function() {
    var move = document.getElementById('00')
    console.log(move);
    // assert.equal([1, 2, 3].indexOf(4), -1);
  });
});