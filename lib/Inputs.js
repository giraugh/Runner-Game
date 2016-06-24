/*
This is the inputs library, it relies on your inputs being defined in obj/inputs.js


*/

class Input {

   static getKey(x) {
      let res = false;
      let keys = inputs[x];
      for (let i = keys.length;i--;) {
         if (JSGMF.getKey(keys[i]))
            res = true;
      }
      return res;
   }

   static getKeyPressed(x) {
      let res = false;
      let keys = inputs[x];
      for (let i = keys.length;i--;) {
         if (JSGMF.getKeyPressed(keys[i]))
            res = true;
      }
      return res;
   }


}
