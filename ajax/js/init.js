require([
    "jquery",
    'jqueryUI',
    'smileTable',
    'ajaxCall'
], function($, smileTable, ajaxCall) {
    $(function () {
        $(".tableSmile").ajaxCall();
    });
});
