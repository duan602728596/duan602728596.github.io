// https://github.com/highlightjs/highlight.js/issues/1471
function graphql(e) {
  return {
    aliases: ['gql'],
    keywords: {
      keyword: 'query mutation subscription|10 type input schema directive interface union scalar fragment|10 enum on ...',
      literal: 'true false null'
    },
    contains: [
      e.HASH_COMMENT_MODE,
      e.QUOTE_STRING_MODE,
      e.NUMBER_MODE,
      {
        className: 'type',
        begin: '[^\\w][A-Z][a-z]',
        end: '\\W',
        excludeEnd: !0
      },
      {
        className: 'literal',
        begin: '[^\\w][A-Z][A-Z]',
        end: '\\W',
        excludeEnd: !0
      },
      {
        className: 'variable',
        begin: '\\$',
        end: '\\W',
        excludeEnd: !0
      },
      {
        className: 'keyword',
        begin: '[.]{2}',
        end: '\\.'
      },
      {
        className: 'meta',
        begin: '@',
        end: '\\W',
        excludeEnd: !0
      }
    ],
    illegal: /([;<']|BEGIN)/
  };
}

export default graphql;