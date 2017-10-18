requirejs.config({
    path:{
        // Common Libraries

        'jquery' :'libs/jquery.min',
        'jquery-ui' :'libs/jquery.ui',
        'table.jQuery' : 'js/table.jQuery.js'
    },

    shim: {
        // Dependency Chain Loading

        "jquery-ui": ["jquery"]
    }
});

// Check Dependencies
requirejs(['jquery'], function ($) {
    console.log('Require.js jQuery Version: ' + $.fn.jquery);
    return {};
});