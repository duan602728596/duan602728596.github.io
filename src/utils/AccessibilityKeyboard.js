if (typeof document === 'object') {
  document.onkeydown = function(event) {
    if ((event.keyCode === 13 || event.code === 'Enter') && document.activeElement !== document.body) {
      document.activeElement.click();
    }
  };
}