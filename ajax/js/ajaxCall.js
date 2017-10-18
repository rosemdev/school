$(document).ready(function () {
    $.widget("smile.ajaxCall", $.smile.tableSmile, {

//            users: [],


        /**
         * Init element
         */
        _init: function () {
            this._super();
            var self = this,
                tbody = this.element.find('tbody'),
                userWrapper = $('<ul class="user">').appendTo('body');
            userWrapper.dialog({
                autoOpen: false,
                buttons: [
                    {
                        text: "Ok",
                        click: function () {
                            $(this).dialog("close");
                        }
                    }
                ],

                title: "Details"

            });


            this.element.on('click', '.delete-button', function (event) {
                event.currentTarget.closest('tr', tbody).remove();
            });

            this.element.on('click', '.view-button', function (event) {
                userWrapper.dialog('close');
                userWrapper.html('');

                var index = tbody.find('tr').index(event.currentTarget.closest('tr', tbody)),
                    user = self.ajaxRequest.response[index];

                self.printObject(userWrapper, user);
                userWrapper.dialog('open');

            });
        },

        /**
         * Refresh table
         *
         * @private
         */
        _refresh: function () {
            var element = this.element;
            var self = this;

            if (this.ajaxRequest.response) {
                $.each(this.ajaxRequest.response, function (index, row) {
                    var tableTR = $('<tr>');
//

                    $.each(self.allowedColumn, function (index, key) {
                        var tableTD = $('<td>').text(row[key]);
                        tableTR.append(tableTD || '');
                    });

                    tableTR.append('<button class="view-button">View</button>');
                    tableTR.append('<button class="delete-button">Delete</button>');

                    element.find('tbody').append(tableTR);


                });
            }
        },

        printObject: function (printContainer, object) {
            var self = this;
            $.each(object, function (key, value) {
                    printContainer.append('<li><strong>' + key + ': </strong>' + value + '</li>');

            });
        }
    });


    $(".tableSmile").ajaxCall();
});