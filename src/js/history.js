
export function initHistory() {
    if (Modernizr.history) {
        mx._body
        .on('click', '[data-history-goto]', function() {
            window.history.pushState(null, null, $(this).data('history-goto'));
        })
        .on('click', '[data-history-backwards]', function() {
            window.history.back();
        });
    }
}
