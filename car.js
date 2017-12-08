//Onclick Function ..
function Onclickk() {
    //Implements of interface.
    var car = /** @class */ (function () {
        function car() {
        }
        car.prototype.start = function () {
            return "Start: Automatic and Manual.";
        };
        car.prototype.drive = function () {
            return "Drive: Two wheeldrive and four wheel drive.";
        };
        car.prototype.getposition = function () {
            return "Address:<br>\n            Ali CAR, Hyderabad kukatpally, Ph:3445466<br>\n            Mast Car rentals, Scundrabad, Ph:566767867<br>\n            Gaadi Car rentals, Scundrabad, Ph:56897867<br>";
        };
        return car;
    }());
    var modedrive = new car();
    console.log(modedrive.start());
    console.log(modedrive.drive());
    console.log(modedrive.getposition());
    // To display result in HTML view.
    var els = document.getElementById('Start');
    var eld = document.getElementById('Drive');
    var elg = document.getElementById('Getlocation');
    els.innerHTML = modedrive.start();
    eld.innerHTML = modedrive.drive();
    elg.innerHTML = modedrive.getposition();
}
