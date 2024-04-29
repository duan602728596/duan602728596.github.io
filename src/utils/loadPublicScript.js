/**
 * 加载脚本
 * @param { string } src - 脚本地址
 * @param { string } id - 脚本id
 */
function loadPublicScript(src, id) {
  if (document.getElementById(id)) return;

  return new Promise((resolve, reject) => {
    let script = document.createElement('script');

    function handleScriptLoad() {
      resolve();
      script.removeEventListener('load', handleScriptLoad);
      script = null;
    }

    script.addEventListener('load', handleScriptLoad);
    script.id = id;
    script.src = src;
    script.dataset.loadType = 'manual';
    document.head.appendChild(script);
  });
}

export default loadPublicScript;