define([
      'jquery',
      'jqueryUI'
   ],
   function($){
       $.widget( "smile.smilePopup", $.ui.dialog, {
         _init: function() {
            this.element.css('background-color', 'green');
            this._super();
         }
      });
});
