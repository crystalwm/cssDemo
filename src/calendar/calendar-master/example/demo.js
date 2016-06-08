/**
 * Created by crystal on 16/5/13.
 */


function setfocusRange() {

    var $lis = $("#calendar2 li");
    var sIndex = -1, eIndex = -1;
    var i;

    for (i = 0; i < $lis.length; i++) {
        if ($($lis[i]).hasClass("focus")) {
            if (sIndex == -1) {
                sIndex = i;
                continue;
            } else {
                if (eIndex == -1) {
                    eIndex = i;
                    break;
                }
            }
        }

    }
    if (sIndex != -1 && eIndex != -1) {
        for (i = sIndex + 1; i < eIndex; i++) {
            $($lis[i]).addClass("focus");
        }

    }

}