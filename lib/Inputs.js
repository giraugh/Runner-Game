/*
This is the inputs library, it relies on your inputs being defined in obj/Inputs.js

to get whether an input is defined use Input.getKey(<INPUTNAME>) or Input.getKeyPressed(<INPUTNAME>) where <INPUTNAME> is the input defined in obj/Inputs.js.

*/

InputCodes = {
   "space": 32,
   "left": 37,
   "up": 38,
   "right": 39,
   "down": 40,
   "shift": 16,
   "tab": 9,
   "enter": 13,
   "backspace": 8,
   "tab": 9,
   "tilde": 192,
   "alt": 18,
   "control": 17,
   "delete": 46,
   "home": 36,
   "end": 35
}

class Input {

   static translate(input) {
      if (input+"" === input)
         input = input.toLowerCase();
      if (input == "space")
         input = InputCodes.space;
      if (input == "left")
         input = InputCodes.left;
      if (input == "up")
         input = InputCodes.up;
      if (input == "right")
         input = InputCodes.right;
      if (input == "down")
         input = InputCodes.down;
      if (input == "shift")
         input = InputCodes.shift;
      if (input == "tab")
         input = InputCodes.tab;
      if (input == "enter" || input == "return")
         input = InputCodes.enter;
      if (input == "backspace")
         input = InputCodes.backspace;
      if (input == "tab")
         input = InputCodes.tab;
      if (input == "tilde")
         input = InputCodes.tilde;
      if (input == "alt")
         input = InputCodes.alt;
      if (input == "control")
         input = InputCodes.control;
      if (input == "delete")
         input = InputCodes.delete;
      if (input == "home")
         input = InputCodes.home;
      if (input == "end")
         input = InputCodes.end;

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

   static suppress() {
      if (JSGMF.suppressed == undefined)
         JSGMF.initSuppressed();
      var args = Array.prototype.slice.call(arguments);
      for (let i = args.length;i--;) {
         console.log(args[i]);
         JSGMF.suppress(Input.translate(args[i]));
      }
   }


}
