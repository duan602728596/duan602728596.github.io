import codeHighlight from './vendor/codeHighlight';

if (window?.__INITIAL_STATE__?.codeHighlightLength) {
  codeHighlight(window?.__INITIAL_STATE__?.codeHighlightLength);
}