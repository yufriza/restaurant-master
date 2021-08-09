/* eslint-disable no-use-before-define */
/*= =================== LOADING ==================== */
function onReady(callback) {
  const intervalID = window.setInterval(checkReady, 500);

  function checkReady() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(() => {
  show('page', true);
  show('loading', false);
});
