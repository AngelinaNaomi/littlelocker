var codes = [
  123, //Code pour Indice numéro 1
  001, //Code pour Indice numéro 2
  789, //Code pour Indice numéro 3
];

function foo(){
  document.activeElement.blur();
}
window.onresize = foo;

var input = "";
var clueIndex = -1;

function isCorrect(listcodes, input){
    for(var i = 0; i < codes.length; i++){
        if(input == listcodes[i]){
            return i;
        }
    }
    return -1;
}

function changeDisplay(usemap){
  document.activeElement.blur();
  var img = document.getElementsByTagName("img").item(0);
  img.setAttribute("usemap", usemap);
}

function onImageClicked(){
  if(clueIndex != -1){
    input = "";
    clueIndex = -1;
    var img = document.getElementsByTagName("img").item(0);
    img.setAttribute("src", "resources/cadenas/cad_0.png");
    changeDisplay("#image-map")
  }
}

function onInput(touch) {
  if(clueIndex == -1){
    if(touch == "c"){
        var img = document.getElementsByTagName("img").item(0);
        img.setAttribute("src", "resources/cadenas/cad_0.png");
        input = "";
        console.log("reset");
    } else {
      input += touch;
      console.log(input);

      var img = document.getElementsByTagName("img").item(0);
      img.setAttribute("src", "resources/cadenas/cad_"+input.length+".png");

      if(input.length >= 3){
        clueIndex = isCorrect( codes, parseInt(input) );
        if(clueIndex == -1){
          img.setAttribute("src", "resources/cadenas/cad_faux.png");
          input = "";
        } else {
          changeDisplay("");
          img.setAttribute("src", "resources/indices/indice_"+(clueIndex+1)+".png");
          input = "";
        }
      }
    }
  }    
}