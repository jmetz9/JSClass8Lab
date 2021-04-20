$(document).ready(function() {
    $("button").on("click", checkSchedule);
});

function checkSchedule(){

    let day = $("input[name=day]:checked").data("name");

    if(day === "monday"){
        $("p#output").text(`Work from 9-5, Sleep the rest of the time`);
    }
    else if(day === "tuesday"){
        $("p#output").text(`Work from 9-5, Sleep the rest of the time`);
    }
    else if(day === "wednesday"){
        $("p#output").text(`Work from 9-5, Sleep the rest of the time`);
    }
    else if(day === "thursday"){
        $("p#output").text(`Work from 9-5, Sleep the rest of the time`);
    }
    else if(day === "friday"){
        $("p#output").text(`Work from 9-5, Hangout with friends from 6-10, then sleep`);
    }
    else if(day === "saturday"){
        $("p#output").text(`sleep in until noon, read and watch movies until bedtime`);
    }
    else if(day === "sunday"){
        $("p#output").text(`sleep in until noon, company over 2-8, read for an hour before going to bed`);
    }

}