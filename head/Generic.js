function vector() {
   let ret = {};
   ret.v = arguments;

   ret.add = function(o) {
      for (let i=this.v.length;i--;) this.v[i] += o.v[i];
   }

   return ret;
}
