/*
This is the inputs library, it relies on your inputs being defined in obj/Inputs.js

to get whether an input is defined use Input.getKey(<INPUTNAME>) or Input.getKeyPressed(<INPUTNAME>) where <INPUTNAME> is the input defined in obj/Inputs.js.

*/

class Input {

   static translate(input) {
      if (input+"" === input)
         input = input.toLowerCase();
      if (input == "space")
         input = 32;
      if (input == "left")
         input = 37;
      if (input == "up")
         input = 38;
      if (input == "right")
         input = 39;
      if (input == "down")
         input = 40;
      if (input == "shift")
         input = 16;
      if (input == "tab")
         input = 9;
      if (input == "enter" || input == "return")
         input = 13;
      if (input == "backspace")
         input = 8;
      if (input == "tab")
         input = 9;
      if (input == "tilde")
         input = 192;
      if (input == "alt")
         input = 18;
      if (input == "control")
         input = 17;
      if (input == "delete")
         input = 46;
      if (input == "home")
         input = 36;
      if (input == "end")
         input = 35;

      return input;
   }

   static getKey(key) {
      key = Input.translate(key);
      return JSGMF.getKey(key);
   }

   static getInput(input) {
      let res = false;
      let keys = inputs[input];
      for (let i = keys.length;i--;) {
         if (JSGMF.getKey(Input.translate(keys[i])))
            res = true;
      }
      return res;
   }

   static getInputPressed(input) {
      let res = false;
      let keys = inputs[input];
      for (let i = keys.length;i--;) {
         if (JSGMF.getKeyPressed(Input.translate(keys[i])))
            res = true;
      }
      return res;
   }

   static getOptions(input) {
      return inputs[input];
   }

   static getOptionCount(input) {
      let res = false;
      let keys = inputs[input];
      return keys.length;
   }

   static addAlternativeKey(input, key) {
      let keys = inputs[input];
      return keys.push(key);
   }


}
