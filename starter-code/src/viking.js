// Soldier (no entiendo bien el tema del function)
function Soldier(health, strength) {
    this.health= health;
    this.strength= strength;
    this.attack = function(){return this.strength;};
    this.receiveDamage =function(damage){this.health=this.health-damage;};
};

// Viking (falta el inherit, no entiendo por que el call no sirve)
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

function Viking(name,health, strength) {
   Soldier.call(this,health,strength);
   this.name=name;
   this.receiveDamage =function(damage){this.health=this.health-damage;
    if (health >=1){
        return (name + ' has received ' + damage + ' points of damage')
    }
    else if (health <1){//no se por que no se lo traga
        console.log (name + ' has died in act of combat')
    };
  };
  this.battleCry= function(){return 'Odin Owns You All!'}
};

// Saxon

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;
function Saxon(health, strength) {
    this.health= health;
    this.strength= strength;
    Soldier.prototype.attack = function () {//no estoy seguro de siesto es correcto
        return this.strength;
    };
    this.receiveDamage= function(damage){
        this.health= health - damage;//tendria sentido meterlo debajo del if? que diferencia haria
        if (health > 0){
            return ('A Saxon has received ' + damage + ' points of damage')
        }
        else if (health < 0) {
            return ('A Saxon has died in combat')
        }
    }
    }

    function showStatus() {
    }

function War() {
    this.saxonArmy= []
    this.vikingArmy= []
    this.addViking = function(Viking){this.vikingArmy.push (Viking)};  //No le estoy diciendo que sea el objeto viking no? como sabe que es el constructor y no otra variable  
    this.addSaxon = function(sx){this.saxonArmy.push (sx)};//aqui pasa como la anterior, le paso algo pero en realidad no es el objeto no?
    //console.log(this.vikingArmy)   
    this.vikingAttack= function () {
        Saxon.receiveDamage=Viking.strength;// no funciona..
        if (Saxon.health<0){
            console.log('le han dado bien');
             //aqui meter la logica para eliminar a los muertos del array
        }
        
    };
    this.showStatus=function(){
        if (this.saxonArmy.length===0){
            return ('Vikings have won the war of the century!')
        }
    };
};




//this.attack();
  //  this.receiveDamage();


//    function receiveDamage(the damage){this.health-this.damage}
