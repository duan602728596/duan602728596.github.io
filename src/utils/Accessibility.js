let inAccessibilityStatus = false;

// 鼠标监听事件
function handleAccessibilityMousedown(event) {
  if (event.isTrusted) {
    inAccessibilityStatus = false;
    document.body.classList.remove('accessibility');
    document.removeEventListener('mousedown', handleAccessibilityMousedown);
  }
}

// 键盘监听事件
function handleAccessibilityKeydown(event) {
  // Tab键事件
  if (inAccessibilityStatus === false && (event.keyCode === 9 || event.code === 'Tab')) {
    inAccessibilityStatus = true;
    document.body.classList.add('accessibility');
    document.addEventListener('mousedown', handleAccessibilityMousedown);
  }

  // 回车键事件
  if (
    inAccessibilityStatus
    && (event.keyCode === 13 || event.code === 'Enter')
    && document.activeElement !== document.body
  ) {
    const tabIndex = document.activeElement.getAttribute('tabindex');

    if (!(tabIndex === undefined || tabIndex === null)) {
      document.activeElement.click();
    }
  }
}

if (typeof document === 'object') {
  document.addEventListener('keydown', handleAccessibilityKeydown);
}