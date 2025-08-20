class Car {
    constructor(brand){
        this.brand = brand;
    }

    // method
    sound() {
        return "vroom......";
    }

    // Method dengan Parameter
    suara(x) {
        return x + ", My car make a sound like auuuuuu...."
    }
}

// Instance kelas Car
var pajero = new Car('Mitsubishi');
console.log(pajero.brand);
console.log(pajero.sound());
console.log(pajero.suara("Haaiii"));

// Method GET dan SET
class Car2 {
    constructor(brand){
        this._carname=brand;
    }
    get carname(){
        return this._carname;
    }

    set carname(x){
        this._carname=x;
    }
}

newcar = new Car2('Pajero');
newcar.carname = 'Alphard';
console.log(newcar.carname);
