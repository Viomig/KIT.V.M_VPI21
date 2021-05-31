$(document).ready(function(){

$('#boxh1').on('click', function(){
 $.ajax({
   url: "C:/Site/Dophtml/contentajax.html"
   cache: false,
   success: function(html){
     $('#FandF').html(html);
  }
})

})

});
