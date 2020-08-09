const codes = [
  "dc5c7986daef50c1e02ab09b442ee34f", //Hash of code "001" (<- Please, Don't right this), give access to clue_01
  "93dd4de5cddba2c733c65f233097f05a", //Hash of code "002" (<- Please, Don't right this), give access to clue_02
  "e88a49bccde359f0cabb40db83ba6080"  //Hash of code "003" (<- Please, Don't right this), give access to clue_03
];

function foo(){
  document.activeElement.blur();
}
window.onresize = foo;

var input = "";
var clueIndex = -1;

function isCorrect(listcodes, input){
  for(var i = 0; i < codes.length; i++){
      if(hex_md5(input) == listcodes[i]){
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
        clueIndex = isCorrect( codes, input );
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