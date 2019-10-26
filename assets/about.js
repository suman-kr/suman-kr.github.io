$(document).ready(function () {
    $('.back-button').click(function(){
        parent.history.back();
        return false;
    })
});