class Oven {
   static setCookie(key,value) {
      if (document.cookie.search(key) == -1) {
         document.cookie = key+"="+value+";";
      } else {
         document.cookie.replace(RegExp(key+"\s?=\s?(.*?)\;"),key+"="+value+";");
      }
   }

   static unsetCookie(key) {
      document.cookie.replace(RegExp(key+"\s?=\s?(.*?)\;"),"");
   }

   static getCookie(key) {
      return (RegExp(key+"\s?=\s?(.*?)\;").exec(document.cookie) || [undefined])[1];
   }

}
