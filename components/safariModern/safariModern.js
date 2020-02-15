/* eslint-disable */
(function() {
  var script = document.createElement('script');

  if (!('noModule' in script) && 'onbeforeload' in script) {
    var support = false;

    document.addEventListener('beforeload', function(event) {
      if (event.target === script) {
        support = true;
      } else if (!e.target.hasAttribute('nomodule') || !support) {
        return;
      }

      event.preventDefault();
    }, true);

    script.type = 'module';
    script.src = '.';
    document.head.appendChild(script);
    script.remove();
  }
}());