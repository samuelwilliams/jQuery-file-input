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

        var wrapper = '<div class="'+ settings.wrapperClass +'" />';
        var button = '<span class="'+ settings.buttonClass +'">'+settings.buttonText+'</span>';
        var input = '<input type="text" class="'+ settings.inputClass +'" value="'+ settings.inputPlaceholder +'" />';

        if (settings.buttonFirst) {
            $(this).wrap(wrapper).after(input).after(button);
        } else {
            $(this).wrap(wrapper).after(button).after(input);
        }

        return this;
    };
})( jQuery );