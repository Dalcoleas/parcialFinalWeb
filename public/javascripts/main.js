$(document).ready(function(){

})

function agregarPersonal(){
    $.ajax({
        url: '/crear',
        type: 'POST',
        dataType : 'json',
        data:{nombre: $()}
    })
}