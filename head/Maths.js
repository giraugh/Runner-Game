//Maths Definitions and classes (like vectors and trig functions)

//Generic
function sign(x) {
  return x == 0 ? 0 : x < 0 ? -1 : 1;
}

function lerp(a,b,t) {
  return a+((b-a)*t);
}


/*Uses Function instead of class to allow for chaining, i.e:
Vector(1,1).add(Vector(3,2)).subtract(Vector(3,3)).toString() //is "[1,0]"
*/
function Vector(arr) {
  var v = {};
  v.v = [];
  arr = Array.prototype.slice.call(arguments);
  for (i in arr) {
    v.v[i] = arr[i];
  }

  v.add = function(v2) {
    for (var i in v2.v) {
      this.v[i] += v2.v[i];
    }
    return this;
  }

  v.subtract = function(v2) {
    for (var i in v2.v) {
      this.v[i] -= v2.v[i];
    }
    return this;
  }

  v.toString = function() {
    return "["+this.v.toString()+"]";
  }

  v.x = function(x) {
    this.v[0] = x || this.v[0];
    return this.v[0];
  }

  v.y = function(y) {
    this.v[1] = y || this.v[1];
    return this.v[1];
  }

  v.z = function(z) {
    this.v[2] = z || this.v[2];
    return this.v[2];
  }

  v.addX = function(x) {
     this.v[0] += x;
     return this.v[0];
  }

  v.addY = function(y) {
     this.v[1] += y;
     return this.v[1];
  }

  return v;
}

class Shape {
  constructor (x,y,width,height) {
    this.position = Vector(x,y);
    this.scale = Vector(width,height);
  }

  x(x) {return this.position.x(x);}
  y(y) {return this.position.y(y);}
  width(x) {return this.scale.x(x);}
  height(y) {return this.scale.y(y);}
  addX(x){this.position.addX(x);}
  addY(y){this.position.addY(y);}
  right(){return this.position.x()+this.scale.x();}
  bottom(){return this.position.y()+this.scale.y();}
  left(){return this.position.x()}
  top(){return this.position.y()}
  overlaps(shape) {
    var x1l = this.x();var x1r = x1l+this.width();
    var y1t = this.y();var y1b = y1t+this.height();
    var x2l = shape.x();var x2r = x2l+shape.width();
    var y2t = shape.y();var y2b = y2t+shape.height();
    return !(x1l >= x2r || x1r <= x2l || y1b <= y2t || y1t >= y2b);
  }
}
