import $ from 'jquery';

const $body = $('body, html'),
  $goToTop = $('#go-to-top');

/* 返回顶部 */
function handleGoToTopClick(event) {
  const { keyCode, type } = event;

  if ((type === 'keyup' && keyCode === 13) || type === 'click') {
    $body.animate({
      scrollTop: 0
    }, 300);
  }
}

function init() {
  $goToTop.on('click', handleGoToTopClick);
  $goToTop.on('keyup', handleGoToTopClick);
}

export default init;