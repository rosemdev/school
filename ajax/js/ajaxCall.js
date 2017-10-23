define([
    'jquery',
    'jqueryUI',
    'smileTable'
], function (jquery, jqueryUI, smileTable) {
    $.widget("smile.ajaxCall", $.smile.tableSmile, {
        ajaxRequest: {
            init: '',
            response: null
        },

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

                width: 600

            });


            this.element.on('click', '.delete-button', function (event) {
                event.currentTarget.closest('tr', tbody).remove();
            });

            this.element.on('click', '.view-button', function (event) {
                userWrapper.dialog('close');
                userWrapper.html('');

                var index = tbody.find('tr').index(event.currentTarget.closest('tr', tbody)),
                    id =index + 1,
                    user = self.ajaxRequest.response[index],
                    title = self.ajaxRequest.response[index].name;

                self.printObject(userWrapper, user);
                userWrapper.parent().find("span.ui-dialog-title").text('Details about: ' + title);
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
                if ($.isPlainObject(value)) {
                    var div = $('<ul class="' + key + '">');
                    self.printObject(div, value);
                    printContainer.append('<li><strong>' + key + ': </strong></li>').append(div);
                } else {
                    printContainer.append('<li><strong>' + key + ': </strong>' + value + '</li>');
                }

            });
        },

        callAjax: function () {
            var info = $('.tableSmile').before('<h1></h1>'),
                id = null,
                self = this;

            function funcBefore() {
                $(info).text("Please wait");
            }

            $.ajax({

                url: "https://jsonplaceholder.typicode.com/users/" + id,
                method: "GET",
                beforeSend: funcBefore,
                success:  function (data) {
                    if (typeof(data) === 'object') {
                        self.ajaxRequest.response = data;
                        data.printObject();
                        console.log(data.printObject());
                    }
                }

            });
        }
    });
});
