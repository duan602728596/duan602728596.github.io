/**
 * 加载脚本
 * @param { string } src: 脚本地址
 */
function loadPublicScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');

    function handleScriptLoad() {
      resolve();
      script.removeEventListener('load', handleScriptLoad);
      script = null;
    }

    script.addEventListener('load', handleScriptLoad);
    script.dataset.loadType = 'manual';
    script.src = src;
    document.head.appendChild(script);
  });
}

export default loadPublicScript;