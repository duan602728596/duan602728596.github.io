import codeHighlight from '../vendor/codeHighlight';
import goToTopInit from '../vendor/goToTop';

if (window?.__INITIAL_STATE__?.codeHighlightLength) {
  codeHighlight(window?.__INITIAL_STATE__?.codeHighlightLength);
}

goToTopInit();