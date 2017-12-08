//Onclick Function ..
function Onclickk(){
//Interface.
interface Drivable{
    start();
    drive();
    getposition();
}

//Implements of interface.
class car implements Drivable{
    constructor(){
    }
    start(){

           return  `Start: Automatic and Manual.`;

    }
    drive(){

            return  `Drive: Two wheeldrive and four wheel drive.`;
        
    }
    getposition(){
            return  `Address:<br>
            Ali CAR, Hyderabad kukatpally, Ph:3445466<br>
            Mast Car rentals, Scundrabad, Ph:566767867<br>
            Gaadi Car rentals, Scundrabad, Ph:56897867<br>`;
        
    }
}

let modedrive = new car();
console.log(modedrive.start());
console.log(modedrive.drive());
console.log(modedrive.getposition());

// To display result in HTML view.
let els:HTMLElement = document.getElementById('Start');
let eld:HTMLElement = document.getElementById('Drive');
let elg:HTMLElement = document.getElementById('Getlocation');
els.innerHTML = modedrive.start();
eld.innerHTML = modedrive.drive();
elg.innerHTML = modedrive.getposition();
}
