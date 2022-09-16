if (typeof document === 'object') {
  document.addEventListener('keydown', function(event) {
    if ((event.keyCode === 13 || event.code === 'Enter') && document.activeElement !== document.body) {
      const tabIndex = document.activeElement.getAttribute('tabindex');

      if (!(tabIndex === undefined || tabIndex === null)) {
        document.activeElement.click();
      }
    }

    if ((event.keyCode === 9 || event.code === 'Tab')) {
      document.body.classList.add('accessibility');
    }
  });

  document.addEventListener('mousedown', function(event) {
    if (event.isTrusted) {
      document.body.classList.remove('accessibility');
    }
  });
}