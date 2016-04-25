/**
 * Created by crystal on 16/4/25.
 */



function getSelectedDates(){
   var  sD=[];
   var $li=$(".ui-calendar ul li[class*='focus']");
    $li.each(function(index,value){
        sD.push($(value).attr("data-value"));
    });
    return sD;
}

