const STRING_PATTERN = /(:)\s?"[\-:.@\s\w\(\)áãéóçê{}/-]+"/g;

const NUMBER_PATTERN = /(:)\s?[\d\.]+/g;

const OBJECT_KEYS_OPEN_CURLY_BRACE = /\{/g;

const OBJECT_KEYS_CLOSE_CURLY_BRACE = /\}/g;

const ARRAY_OPEN_BRACKET = /\[/g;

const ARRAY_CLOSE_BRACKET = /\]/g;

const QUOTATION_MARKS = /\"/g;

const convertToJoi = (data) => {
  return data
    .replace(STRING_PATTERN, '$1 joi.string()')
    .replace(NUMBER_PATTERN, '$1 joi.number()')
    .replace(OBJECT_KEYS_OPEN_CURLY_BRACE, 'joi.object().keys({')
    .replace(OBJECT_KEYS_CLOSE_CURLY_BRACE, '})')
    .replace(ARRAY_OPEN_BRACKET, 'joi.array().items(')
    .replace(ARRAY_CLOSE_BRACKET, ')')
    .replace(QUOTATION_MARKS, '')
}

module.exports = {
  convertToJoi
}