(function( $ ) {
    $.fn.fileInput = function(options) {

        var settings = $.extend({
            buttonFirst: false,                             //Should the button come before the input
            wrapperClass: 'jquery-file-input-wrapper',      //The class(es) on the wrapper element
            inputClass: 'jquery-file-input-field',          //The class(es) on the input field
            inputPlaceholder: 'select a file',              //The placeholder value on the input field
            buttonClass: 'jquery-file-input-button',        //The class(es) on the browse button
            buttonText: 'browse'                            //The text for the browse button
        }, options);

        var $wrapper = $('<div />').addClass(settings.wrapperClass);
        var $button = $('<span />').addClass(settings.buttonClass).html(settings.buttonText);
        var $input = $('<input />').attr({
            type: 'text',
            value: settings.inputPlaceholder,
            class: settings.inputClass,
            disabled: 'disabled'
        });

        if (settings.buttonFirst) {
            $(this).wrap($wrapper).after($input).after($button);
        } else {
            $(this).wrap($wrapper).after($button).after($input);
        }

        $(this).change(function () {
            $input.val($(this).val());
        });

        return this;
    };
})( jQuery );
