
function showTime() {

    setInterval(() => {
        var date = new Date();

        var strHour = date.getHours().toString().length < 2 ? `0${date.getHours()}` : date.getHours();
        var strMinute = date.getMinutes().toString().length < 2 ? `0${date.getMinutes()}` : date.getMinutes();
        var strSecond = date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds();
        var strDay = "";


        switch (date.getDay()) {
            case 1:
                strDay = "Pazartesi";
                break;

            case 2:
                strDay = "Salı";
                break;

            case 3:
                strDay = "Çarşamba";
                break;

            case 4:
                strDay = "Perşembe";
                break;

            case 5:
                strDay = "Cuma";
                break;

            case 6:
                strDay = "Cumartesi";
                break;

            default:
                strDay = "Pazar";
                break;
        }
        var strDate = `${strHour}:${strMinute}:${strSecond} ${strDay}`;
        document.querySelector("#myClock").innerHTML = strDate;
    }, 1000);

}

let firstName = prompt("Lütfen adınızı giriniz:");

if (firstName.length > 0) {
    document.querySelector("#myName").innerHTML = firstName;
}