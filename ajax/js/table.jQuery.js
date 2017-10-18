

(function($) {
   $.widget( "smile.tableSmile", {
      defaultClass: 'smile-table-widget',
      columnName: [],
      allowedColumn: [],
      columnCount: 0,
      ajaxRequest:{
         init: '',
         response: null
      },
      options: {
         style: {
           dialog: {
              color: 'lime',
              background: 'black'
           } 
         },
         refresh: null
      },


      /**
       * Constructor
       *
       * @private
       */
      _create: function() {
         this.checkData();
      },

      /**
       * Check all data, call to ajax
       */
      checkData: function () {
         var element = this.element;
         this._trigger( "onLoadBefore" );
         this.ajaxRequest.init = element.data('ajax').length ? element.data('ajax') : '';
         this.callToAjax();
         this._trigger( "onLoadAfter" );
      },

      /**
       * Refresh table
       *
       * @private
       */
      _refresh: function () {
         var element = this.element;
         var self = this;
         if (this.columnName.length != 0) {

            $.each(this.columnName, function(key, row) {
               var tableTR = $('<tr>');

               $.each(row, function(key, value){
                  var tableTD = '';
                  if ($.inArray(key, self.allowedColumn) >= 0) {
                     tableTD = $('<td>').text(value);
                     tableTR.append(tableTD);
                  }
               });

               element.find('tbody').append(tableTR);
            });
         }

      },

      /**
       * Call to Ajax
       */
      callToAjax: function () {
         var self = this;

         if (self.ajaxRequest.init.length) {
            $.ajax({
               url: self.ajaxRequest.init,
               method: 'GET',
               cache: true,
               success: function (data) {
                  if (typeof(data) == 'object') {
                     self.ajaxRequest.response = data;
                     self.onLoadAfter();
                     self._refresh();
                  }
               },
               statusCode: {
                  403: function() {
                     alert( "page forbidden" );
                  }
               }
            });
         }
      },

      /**
       * Init element
       */
      _init: function () {
         var self = this;
         var element = this.element;
         element.addClass(this.defaultClass);
         element.append('<tbody>');
         
         $.each(element.find('th'), function (key, elementTh) {
            self.allowedColumn.push($(elementTh).data('column'));
         });
         this._refresh();
      },

      /**
       * On load after response
       */
      onLoadAfter: function () {
         var self = this;
         $.each(this.ajaxRequest.response,function (key, value) {
            self.columnName.push(value);
            self.columnCount++;
         });
      }
   });
}(jQuery));
