/* 判断是否为移动端 */
function isMobile() {
  if (typeof window === 'object') {
    const ua = window.navigator.userAgent;

    return /iphone|ipad|ipod|ios|android/i.test(ua);
  } else {
    return false;
  }
}

export default isMobile;