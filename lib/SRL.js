'use strict'

const Builder = require('./Builder')
const Interpreter = require('./Language/Interpreter')

/**
 * SRL facade for SRL Builder and SRL Language.
 *
 * @param  {string} query
 * @return {Builder}
 */
function SRL(query, options) {
    return query && typeof query === 'string' ?
        new Interpreter(query, options).builder :
        new Builder(options)
}

module.exports = SRL
