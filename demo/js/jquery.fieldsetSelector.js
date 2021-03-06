;(function ( $, window, document, undefined ) {

    var fieldsetSelector = "fieldsetSelector",
        defaults = {
            className: "fs-fields"
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = fieldsetSelector;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
			var self = this;
			//add class to fieldsets
			$(this.element).find('option').each(function(){
				var value = $(this).attr('value');
				$('fieldset.'+value).addClass(self.options.className);
			});
			self.showFields(self.element, self.options);
			$(this.element).change(function(){
				self.showFields(self.element, self.options);
			});
        },

        showFields: function(el, options) {
			$('.' + options.className).hide();
			$('fieldset.' + $(el).val()).show();
        }
    };

    $.fn[fieldsetSelector] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + fieldsetSelector)) {
                $.data(this, "plugin_" + fieldsetSelector, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );