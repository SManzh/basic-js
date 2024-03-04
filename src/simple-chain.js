const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push(`~~('()')`);
    } else {
      this.chain.push(`~~( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (position - 1 < 0 || position > this.chain.length || typeof position !== 'number') {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(+position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let rest = this.chain.join("").startsWith("~~") ? this.chain.join("").slice(2) : this.chain.join("");
    this.chain = [];
    return rest;
  }
};

module.exports = {
  chainMaker
};
