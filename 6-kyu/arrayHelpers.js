Array.prototype.square = function() {return this.map(el => el*el)};
Array.prototype.cube = function() {return this.map(el => el*el*el)};
Array.prototype.sum = function() {return this.reduce((sum, el) => sum + el)};
Array.prototype.average = function() {return this.length == 0 ? NaN : this.reduce((sum, el) => sum + el)/this.length};
Array.prototype.even = function() {return this.filter(el => el%2 == 0)};
Array.prototype.odd = function() {return this.filter(el => el%2 == 1)};