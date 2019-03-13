$("#trai").click(function(){
    var trait=$("#tra").val();
    $(".end").append(trait);
});
$("#passi").click(function(){
    var sports=$("#pass").val();
    $(".end").append(sports);
});
$("#jo").click(function(){
    var care=$("#job").val();
    $(".end").append(care);
});
$("#ag").click(function(){
    var fifth=$("#old").val();
    $(".end").append(2019 - parseInt(fifth));
    $("#got").show();
    $("#joey").show();
    
});