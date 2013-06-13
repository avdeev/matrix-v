function longAlgebraicDivision(poly, division) {
  //Format the equations correctly
  poly = poly.replace(/(--|\+\+)/g, "+");
  poly = poly.replace(/(-\+|\+-)/g, "-");
  poly = poly.replace(/^\+/g, "");
  poly = poly.replace(/\s/g, "");
  division = division.replace(/(--|\+\+)/g, "+");
  division = division.replace(/(-\+|\+-)/g, "-");
  division = division.replace(/^\+/g, "");
  division = division.replace(/\s/g, "");
  //Add spaces to the equation to break it apart
  poly = poly.replace(/([+-])/g, " $1");
  //Split the equation at the spaces
  var equ = poly.split(" ");
  //Begin the division
  var output = ""
  var lastTerm = ""
  for(var i=0;i<equ.length-1;i++) {
    var term = equ[i];
    if(i==0) {
      var dt = divideTerm(term, division.split("x")[0], "x");
      output += dt + "+";
      dt = multiplyTerm(dt, division.split("x")[1], "x");
      lastTerm = dt;
    }else{
      var dt = subtractTerm(term, lastTerm, "x");
      dt = divideTerm(dt, division.split("x")[0], "x");
      output += dt + "+";
      dt = multiplyTerm(dt, division.split("x")[1], "x");
      lastTerm = dt;
    }
  }
  //Format output
  output = output.replace(/\+([+-])/g, "$1");
  output = output.replace(/x\^0\+$/g, "");
  output = output.replace(/x\^1/g, "x");
  //Calculate remainder
  lastTerm = lastTerm.replace(/x\^0/g, "");
  output += " : Remainder [" + String(Number(equ[equ.length-1]) - Number(lastTerm)) + "]";
  return output;
}

//Used to break an { ax^n } into its compontents
function extractCompontents(Term, constantChar) {
  var Comps = new Array();
  Comps[0] = Term.split(constantChar)[0];
  Comps[1] = Term.split("^")[1];
  if(Comps[0] == "") { Comps[0]=1; }
  if(String(Comps[1]) == "undefined") { Comps[1]=1; }
  return Comps;
}
function divideTerm(Term1, Term2, constantChar) {
    var extTerm1 = extractCompontents(Term1, constantChar)
  var extTerm2 = extractCompontents(Term2, constantChar)
  return String(extTerm1[0]/extTerm2[0]) + constantChar + "^" + String(extTerm1[1]-extTerm2[1]);
}
function multiplyTerm(Term1, Term2, constantChar) {
  var extTerm1 = extractCompontents(Term1, constantChar)
  return String(extTerm1[0] * Term2) + constantChar + "^" + String(extTerm1[1]);
}
function subtractTerm(Term1, Term2, constantChar) {
    var extTerm1 = extractCompontents(Term1, constantChar)
  var extTerm2 = extractCompontents(Term2, constantChar)
  if(extTerm1[1] != extTerm2[1]) { return null; }
  return String(extTerm1[0]-extTerm2[0]) + constantChar + "^" + String(extTerm1[1]);
}