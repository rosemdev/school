require([
   "jquery",
   "smilePopup",
   'smileTable'
], function($) {
   $(function () {
      $('.tableSmile').smilePopup().tableSmile();
   });
});
