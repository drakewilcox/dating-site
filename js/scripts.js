$(document).ready(function(){
  $("#formOne").submit(function(event)  {
    var hunk = $("input:radio[name=hunk]:checked").val();
    var smack = $("input:radio[name=smack]:checked").val();
      
  

      if (hunk === "3" && smack === "3"){
      $(".rock").show();
      $(".ice").hide();
      $(".busey").hide();
         }
      
      else if (hunk === "2" && smack === "2"){
        $(".ice").show();
        $(".rock").hide();
        $(".busey").hide();
    }
      else {
        $(".busey").show();
        $(".ice").hide();
        $(".rock").hide();
      }
    event.preventDefault();
  });
});