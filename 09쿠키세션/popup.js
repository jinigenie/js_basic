//페이지가 시작되면 팝업창을 띄워줍니다.
//사용자가 오늘 하루 이 창을 열지 않기를 클릭하면 쿠키를 생성하고, 
//쿠키가 있다면 다음 접속 시에는 팝업창을 띄우지 않기

function addCookie(name, value) {
    var date = new Date();
    date.setDate(date.getDate() + 1);

    /* hour, seconds도 0으로 맞추면 다음날 12시까지 유효 */
    date.setHours(0);
    date.setSeconds(0);

    var cookie = "";
    cookie += name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";

    document.cookie = cookie;
    
}


function getCookie(name) {

    var arr = document.cookie.split("; ");
    if (arr.length != 0) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].indexOf(name) != -1) {
                return true;
            }
        }
    }
}



