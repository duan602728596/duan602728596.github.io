import codeHighlight from '../vendor/codeHighlight';
import goToTopInit from '../vendor/goToTop';

const { __INITIAL_STATE__: initialState } = window;

if (initialState?.codeHighlightLength) {
  codeHighlight(initialState?.codeHighlightLength);
}

goToTopInit();