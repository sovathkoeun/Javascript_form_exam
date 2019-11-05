$(document).ready(function() {
    $('button').on('click', function() {
        // call id user and  pass 
        var username = $('#user').val();
        var password = $('#pass').val(); 
        // call function from 
        (username != "") ? setSuccess('user'): setError('user');
        (password != "") ? setSuccess('pass'): setError('pass');
    });
});
 // varaible for funtion
function setSuccess(s){
    $('#'  + s).addClass('border-success').removeClass('border-danger');
}
function setError(e){
    $('#' + e).addClass('border-danger').removeClass('border-success');
}