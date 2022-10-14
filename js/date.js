
function thedate() {

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    const d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    var dateObject = document.getElementById("date");
    if (dateObject) dateObject.innerHTML = months[month] + " " + day  + ", " + year;

};