/* eslint-disable camelcase */
'use strict';

var assign = require('../lib/assign').assign;

var fiveCharacterLocales = {
  en_US: require('./en_US')
};

var twoCharacterLocaleAliases = {
  en: fiveCharacterLocales.en_US
};

module.exports = {
  twoCharacterLocaleAliases: twoCharacterLocaleAliases,
  fiveCharacterLocales: fiveCharacterLocales,
  translations: assign({}, twoCharacterLocaleAliases, fiveCharacterLocales)
};
/* eslint-enable camelcase */
