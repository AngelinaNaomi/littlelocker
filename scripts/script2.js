function focusChanged(e){
    if( $("#myText") != null || $("#myText") != undefined ){
        $("#myText").remove();
    }
}

function process(){
    var strListCode = $('#listCode').val();
    if(strListCode.length > 0){
        var listCode = strListCode.split(',');
        listCode = listCode.map( x => x.trim());
        var listHash = [];
        listCode.forEach( code => listHash.push( hex_md5(code)) );

        var res = "[\n";

        listHash.forEach( hash => {
            res += "\"" + hash + "\",\n"; 
        })

        res = res.substring(0, res.length - 2)

        res += "\n]";

        $('#listHash').val(res);
    }
}

function copy(){
    if( $("#myText") != null || $("#myText") != undefined )
        $( "#output-div" ).append( "<span id=\"myText\"> Copied !</span>" );
    
    navigator.clipboard.writeText($("#listHash").val());
}

function hash(codes){
    var res = [];
    codes.forEach( code => {
      res.push( hex_md5(code) );
    }); 
    console.log(res); 
  }
  