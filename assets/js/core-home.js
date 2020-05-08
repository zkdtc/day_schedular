(function () {


    function updateClock() {
        var now = moment(),
            second = now.seconds() * 6,
            minute = now.minutes() * 6 + second / 60,
            hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12,
            hour_number = now.hours();

        $('#hour').css("transform", "rotate(" + hour + "deg)");
        $('#minute').css("transform", "rotate(" + minute + "deg)");
        $('#second').css("transform", "rotate(" + second + "deg)");

        for (var i = 9; i < 18; i++) {
            if ((i - hour_number) >= 1) {
                $('#' + String(i)).attr('class', 'alert alert-success');
                $('#' + String(i)).children()[2].setAttribute('class', 'btn btn-success');

                // $('#'+String(i)).children()[2].attr('class','btn btn-success');
            }
            else if ((i - hour_number) >= 0 && (i - hour_number) < 1) {
                $('#' + i).attr('class', 'alert alert-danger');
                $('#' + String(i)).children()[2].setAttribute('class', 'btn btn-danger');
            }
            else {
                $('#' + i).attr('class', 'alert alert-warning');
                $('#' + String(i)).children()[2].setAttribute('class', 'btn btn-warning');
            }

        }
    }


    function timedUpdate() {
        updateClock();
        setTimeout(timedUpdate, 1000);
    }

    // Addding Listners to buttons
    for (var i = 9; i < 18; i++) {
        var elBtn=$('#' + String(i)).children()[2]
        elBtn.previousElementSibling.value=localStorage.getItem('task'+i);

        elBtn.addEventListener('click',function(){
            var user_input=this.previousElementSibling.value;
            localStorage.setItem('task'+$(this).attr('index'),user_input);

            console.log(this.previousElementSibling.value); //.='Hello';
        })

    }
    // Load the localStorage for tasks when webpage is refreshed 

    for (var i=9; i<18; i++){

    }


    timedUpdate();



})();
