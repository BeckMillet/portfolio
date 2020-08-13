var toggleSidebar = function() {
    let $body = $('body');
    if ($body.hasClass('sidebar-open')) {
        $('body').removeClass('sidebar-open');
    } else {
        $('body').addClass('sidebar-open');
    }
}
