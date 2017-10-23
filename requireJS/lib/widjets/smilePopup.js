define([
      'jquery',
      'jqueryUI'
   ],
   function($){
       $.widget( "smile.smilePopup", $.ui.dialog, {
         _create: function() {
            console.log('Init smilePopup');
            this._super();
         },

         _init: function() {
            this.element.css('background-color', 'yellow');
            this._super();
         }
      });
});
