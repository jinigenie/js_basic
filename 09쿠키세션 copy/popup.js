//페이지가 시작되면 팝업창을 띄워줍니다.
//사용자가 오늘 하루 이 창을 열지 않기를 클릭하면 쿠키를 생성하고, 
//쿠키가 있다면 다음 접속 시에는 팝업창을 띄우지 않기

var status = 0;

(function(){
    
    getCookie();
    if(status != 1){
        window.open('popup.html', '팝업', 'width = 500px, height = 500px, left=300px, top=300px');
    }
})();


function getCookie() {


    var arr = document.cookie.split("; ");
    if (arr.length != 0) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].indexOf("new") != -1) {
                status = 1;
            }
        }
    }
}



