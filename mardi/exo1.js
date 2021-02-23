class Hyppopotamus
{
    constructor(name, weight, tuskFang)
    {
        this.name = name;
        this.weight = weight;
        this.tuskFang = tuskFang;
    }

    swim()
    {
        if(this.weight >= 0.3)
        {
            this.weight = this.weight - 0.3;
        }
        else
        {
            //die?
        }        
    }

    eat()
    {
        this.weight = this.weight + 1;
    }

    fight(challenger)
    {
        if(this.tuskFang >= challenger.tuskFang)
        {
            console.log(this.name, "win !");
        }
        else
        {
            console.log(challenger.name, "win !");
        }
    }

}

Hyppopotamus.prototype.toString = function HyppopotamusToString()
{
    console.log (this.name, "weights ", this.weight, "Kg.");
}
//console.log("Hello nurse!");
let biggs = new Hyppopotamus("Biggs", 1800, 57);
let wedge = new Hyppopotamus("Wedge", 1500, 62);
biggs.fight(wedge);

for(let i = 1; i <= 21; i++)
{
    for(let j = 0; j < 15; j++)
    {
        for( let k = 0; k < 2; k++)
        {
            biggs.eat();
        }
        for( let k = 0; k < 3; k++)
        {
            biggs.swim();
        }
        
    }
    console.log("At evening ", i, " : ");
    biggs.toString();
}