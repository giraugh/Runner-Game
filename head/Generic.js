function vector() {
   let ret = {};
   ret.v = arguments;

   ret.add = function(o) {
      for (let i=this.v.length;i--;) this.v[i] += o.v[i];
      return this;
   }

   ret.take = function(o) {
      for (let i=this.v.length;i--;) this.v[i] -= o.v[i];
      return this;
   }

   ret.multiply = function(o) {
      for (let i=this.v.length;i--;) this.v[i] *= o.v[i];
      return this;
   }

   ret.toString = function() {
      a = "";
      for (let i=this.v.length;i--;) a += (""+this.v[i]) + (i != 0 ? "," : "");
      return a;
   }

   return ret;
}
