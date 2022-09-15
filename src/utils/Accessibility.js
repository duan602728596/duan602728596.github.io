if (typeof document === 'object') {
  document.addEventListener('keydown', function(event) {
    if ((event.keyCode === 13 || event.code === 'Enter') && document.activeElement !== document.body) {
      document.activeElement.click();
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