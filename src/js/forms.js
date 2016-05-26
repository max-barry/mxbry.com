var getQueryStringValue = function (key) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
};

var inputChange = function() {
    var _this = $(this),
        cls = 'hasValue';

    if (this.value && !_this.hasClass(cls)) {
        _this.addClass(cls);
    } else if (!this.value && _this.hasClass(cls)) {
        _this.removeClass(cls);
    }
};


var init = function() {
    $('input').on('input', inputChange);

    // Populate UTM values in form
    ['utm_source', 'utm_medium', 'utm_campaign'].map((utm) => {
        $(`form input[data-utm="${utm}"]`).val(getQueryStringValue(utm));
    });
};

export default init;
