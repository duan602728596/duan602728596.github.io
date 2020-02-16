import $ from 'jquery';

const $body = $('body, html'),
  $goToTop = $('#go-to-top');

/* 返回顶部 */
function handleGoToTopClick(event) {
  $body.animate({
    scrollTop: 0
  }, 300);
}

function init() {
  $goToTop.on('click', handleGoToTopClick);
}

export default init;