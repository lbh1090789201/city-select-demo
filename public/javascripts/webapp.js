// 设定字体大小
(function (doc, win) {
      var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function () {
              var clientWidth = docEl.clientWidth;
              if (!clientWidth) return;
              if(clientWidth>=640){
                  docEl.style.fontSize = '100px';
              }else{
                  docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
              }
          };

      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

window.onload = function() {
  // 调用城市选择插件
  provinceCityCounty({
      boolean: true, // 是否显示县区
      target_id: "grab_address", //事件目标
      element_id: "grab_address", // 放置文本节点
    　callback: function() {
      　// 该回调函数用于target_id目标事件的回调
     　 document.getElementById("grab_address").blur();
    　}
  });
};
