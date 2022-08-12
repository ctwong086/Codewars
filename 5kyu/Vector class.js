//https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4

//Attempt#1
let Vector = function (components) {
    this.components = components; 

    this.equals = function(a) {
        if(this.components.length !== a.components.length) {
            return false;
        }
        for(let i = 0, len = this.components.length; i < len; i++) {
            if(this.components[i] !== a.components[i]) {
                return false;
            }
        }
        return true;
    }
    
    this.toString = function() {
        return '(' + this.components.join(',') + ')';
    }
  
    this.add = function(a) {
        if(this.components.length !== a.components.length) {
            throw ('Two vectors don\'t have the same length.');
        }
        
        let res = [];
        for(let i = 0, len = this.components.length; i < len; i++) {
            res.push(this.components[i] + a.components[i]);
        }
        return new Vector(res);
    }
  
    this.subtract = function(a) {
        if(this.components.length !== a.components.length) {
            throw ('Two vectors don\'t have the same length.');
        }
        let res = [];
        for(let i = 0, len = this.components.length; i < len; i++) {
            res.push(this.components[i] - a.components[i]);
        }
        return new Vector(res);
    }
  
    this.dot = function(a) {
        if(this.components.length !== a.components.length) {
            throw ('Two vectors don\'t have the same length.');
        }

        return a.components.reduce((acc, cur, i) => {
            return acc + (cur * this.components[i]);
        }, 0);
    }
  
    this.norm = function() {
        return Math.sqrt(this.components.reduce((acc, cur) => {
            return acc + (Math.pow(cur, 2));
        }, 0));
    }
};

//Attempt#2
let Vector = function(components) {
    this.val = components;
    this.len = components.length;
};

Vector.prototype = {
    lenEqual: function(a) {
        if(this.len !== a.len) {
            throw 'Error!';
        }        
    },
  
    add: function(a) {
        this.lenEqual(a);
        return new Vector(this.val.map((e, i) => {
            return e + a.val[i];
        }))
    },
  
    subtract: function(a) {
        this.lenEqual(a);
        return new Vector(this.val.map((e, i) => {
            return e - a.val[i];
        }))
    },
  
    dot: function(a) {
        this.lenEqual(a);
        return this.val.reduce((acc, cur, i) => {
            return acc + cur * a.val[i];
        }, 0)
    },
  
    norm: function() {
        return Math.sqrt(this.val.reduce((acc, cur) => {
            return acc + Math.pow(cur, 2);
        }, 0))
    },
  
    equals: function(a) {
        if(this.len !== a.len) {return false};
        for(let i = 0; i < this.len; i++) {
            if(this.val[i] !== a.val[i]) {
                return false;
            }
        }
        return true;
    },
  
    toString: function() {
        return '(' + this.val.join(',') + ')';
    }
}