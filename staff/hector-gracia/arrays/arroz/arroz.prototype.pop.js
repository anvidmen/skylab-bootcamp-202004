'use strict';

Arroz.prototype.pop= function pop(){
    var last;
    
    last=this[this.length-1];
    delete this[this.length-1];
    this.length--;
    return last;
}