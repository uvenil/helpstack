'use strict'

module.exports = (ausgabe = "", stringify = true, calldepth = 2, pathdepth = 2) => {
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
  if (stringify) {
    ausgabe = JSON.stringify(ausgabe);
  }
  ausgabe = `> ${ausgabe}${helpstack}`;
  console.log(ausgabe);
  return ausgabe;
};
