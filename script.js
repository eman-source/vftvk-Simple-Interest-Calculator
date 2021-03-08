function compute() {
    //calculate the interest
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    interest = (principal * years * rate) / 100;
    s = new Date().getFullYear();
    futureYear = s + parseInt(years);

   //a function to display slider value near it
    var slider1 = document.getElementById("rate");
    var span = document.getElementById("span");
    span.innerHTML = slider1.value;

    slider1.onchange = function () {
        span.innerHTML = this.value;
    }
    //return final calculations upon submitting
    document.getElementById("result").innerHTML = "If you deposit " + principal + ','
        + "\nat an interest rate of " + (rate) + "%." +
        "\nYou will receive an amount of " + (interest) + (principal) + ',' +
        '\nin the year ' + (futureYear);
     errorMethod = function() {
        var princ = document.getElementById("principal").value;
        if (princ <= 0 || princ =='') {
            alert("Enter a postive number");
            
        }
    }


}



