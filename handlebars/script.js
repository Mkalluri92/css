var template = $("#handleTry").html()

//debugger;

var tempCompile= Handlebars.compile(template);

var details=[
    {
        "name":"Rajeev",
        "Telugu":"90",
        "Hindi":"85",
        "English":"83",
        "Maths":"100",
        "Science":["100","200"],
        "Social": "95"
    },
    {
        "name":"Mounika",
        "Telugu":"97",
        "Hindi":"87",
        "English":"77",
        "Maths":"97",
        "Science":["97"],
        "Social": "94"
    }
]



Handlebars.registerHelper("subjecttry", function(sub) {
    var data="";
    for(var i=0;i<sub.length;i++){
        debugger; 
        if(i != (sub.length-1)){
            data= data+sub[i]+ " and ";
        }
        else{
            data= data+sub[i]
        }
        
    }
    return data;
})
 
    /* if((sub.length)>1){
        return "yes";
    }
    else{
        return "no";
    }
})*/
    /*for(var j=0; sub.Science.length;j++){
        if(j!=(sub.Science.length-1)){
          data=data+Science[j]+" and";
        }
        else{
          data=data+Science[j];
        }
      }
      return data;
})*/

var content= tempCompile(details);


$("#det").html(content);



/*{{#each Science}}
                            {{.}} and
                            {{/each}} 
                            <br />*/