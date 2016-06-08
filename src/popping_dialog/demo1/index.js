/**
 * Created by crystal on 16/5/29.
 */
$(document).ready(function(){

    $(".ui-dialog-mask").show();
    $(".ui-dialog-confirm").show();
    $(".ui-dialog-confirm-yes").on("click",function(){
        $(".ui-dialog-mask").hide();
        $(".ui-dialog-confirm").hide();
    });
    $(".ui-dialog-confirm-no").on("click",function(){
        $(".ui-dialog-mask").hide();
        $(".ui-dialog-confirm").hide();
    });

});