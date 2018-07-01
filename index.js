'use strict'

module.exports = (ausgabe = "", trace = true, stringify = true, calldepth = 2, pathdepth = 2) => {
  // Errorobjekt erstellen und Callstack herauslesen
  function getErrorObject() { // Error-Objekt erzeugen
    try { throw Error('') } catch (err) { return err; }
  }
  const err = getErrorObject();
  let callstack = err.stack.split("\n"); // Array des Callstacks
  // eigenen Callstack erstellen
  const callerIx = 3; // Index der aufrufenden Datei aus dem Callstack
  let helpstack = callstack.slice(callerIx, callerIx + calldepth);
  helpstack = helpstack.reduce((s, call) => {  // Callstack ab aufrufender Datei in einer Zeile darstellen
    let pfad = call.split("/");
    pfad = pfad.slice(-pathdepth).join("/");
    pfad = pfad.replace(")", "");
    s = s + " < " + pfad;
    return s;
  }, "");
  // Ausgabe
  const bright = "\x1b[1m"; // Farb-, Steuer-Codes
  const dim = "\x1b[2m";
  const reset = "\x1b[0m";
  const magenta = "\x1b[35m";

  if (stringify)  ausgabe = JSON.stringify(ausgabe);
  const helpstr = magenta + `> ${bright}${ausgabe}${dim}${helpstack}` + reset;
  if (trace) console.log(helpstr);
  return helpstr;
};

/*
Colors reference:

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
*/