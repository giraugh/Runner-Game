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
   "end": 35,
   "comma": 188,
   "period": 190
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
      if (input == "comma" || input == ",")
         input = InputCodes.comma;
      if (input == "period" || input == ".")
         input = InputCodes.period;

      return input;
   }

   static getMouse(x) {
      if (x==0 || x=="left")
         return document.mouse.left;
      if (x==1 || x=="right")
         return document.mouse.right;
      if (x==2 || x=="middle")
         return document.mouse.middle;
      if (x==3 || x=="x")
         return document.mouse.x;
      if (x==4 || x=="y")
         return document.mouse.y;
   }

   static getKey(key) {
      key = Input.translate(key);
      return JSGMF.getKey(key);
   }

   static getInput(input) {
      let res = false;
      let keys = inputs[input];
      for (let i = keys.length;i--;) {
         if (keys[i] == "mleft" || keys[i] == "mousel" || keys[i] == "lmb")
            res = (res == false) ? Input.getMouse(0) : res;
         if (keys[i] == "mright" || keys[i] == "mouser" || keys[i] == "rmb")
            res = (res == false) ? Input.getMouse(1) : res;
         if (JSGMF.getKey(Input.translate(keys[i])))
            res = true;
      }
      return res;
   }

   static getInputPressed(input) {
      let res = false;
      let keys = inputs[input];
      for (let i = keys.length;i--;) {
         if (keys[i] == "mleft" || keys[i] == "mousel" || keys[i] == "lmb")
            res = (res == false) ? Input.getMouse(0) == 2 : res;
         if (keys[i] == "mright" || keys[i] == "mouser" || keys[i] == "rmb")
            res = (res == false) ? Input.getMouse(1) == 2 : res;
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

   static deClick(x) {
         if (x=="left")
            x = 0;
         if (x=="right")
            x = 1;
         if (x=="middle")
            x = 2;
         if (x == 1)
            document.mouse.left = 0;
         if (x == 2)
            document.mouse.right = 0;
      }


}
