requirejs.config({
   // baseUrl: "lib",
   paths:{
      'jquery': 'lib/jQuery/jquery.min',
      'jqueryUI': 'lib/jQuery/jquery-ui.min',
      'smilePopup': 'lib/widjets/smilePopup',
      'smileTable': 'lib/widjets/table.jQuery'
   },
   map: {
      '*': {
         'smilePopup': 'lib/widjets/smilePopupNew'
      }
   }
});
