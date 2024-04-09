
function Alien(name,tech){
    this.name=name;
    this.tech=tech;

    this.work = function()
    {
        console.log("Solving bugs on 12 hours..");
    }
}

let alien1 = new Alien('Pankaj','js');
let alien2 = new Alien('Sham','java');


console.log(alien1);
alien1.work();