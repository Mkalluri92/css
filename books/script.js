var novels=[
    {
        "novelImg":"./images/novel1.jpg",
        "title":"How Novel Works",
        "author": ["Mounika"],
        "price": "10"
    },
    {
        "novelImg":"./images/novel2.jpg",
        "title":"All The Light We Cannot See with a buliding plan",
        "author": ["Rajeev"],
        "price": "5"
    },
    {
        "novelImg":"./images/novel3.jpg",
        "title":"Kite Runner",
        "author": ["Prasad"],
        "price": "12"
    },
    {
        "novelImg":"./images/novel4.jpg",
        "title":"To Kill A Mockingbird",
        "author": ["Pushpa"],
        "price": "7"
    },
    {
        "novelImg":"./images/novel5.jpg",
        "title":"City Of Ink",
        "author": ["Neehal"],
        "price": "8"
    },
    {
        "novelImg":"./images/novel6.jpg",
        "title":"Jaws",
        "author": ["Aashi"],
        "price": "16"
    },
    {
        "novelImg":"./images/novel7.jpg",
        "title":"The Da Vinci Code",
        "author": ["Akku"],
        "price": "7"
    },
    {
        "novelImg":"./images/novel8.jpg",
        "title":"I See You",
        "author": ["Buddi"],
        "price": "14"
    },
    {
        "novelImg":"./images/novel9.jpg",
        "title":"The Hobbit",
        "author": ["Sassu"],
        "price": "16"
    },
    {
        "novelImg":"./images/novel10.jpg",
        "title":"Harry Potter Secret Of The Chambers",
        "author": ["J k Rowling"],
        "price": "18"
    },
    {
        "novelImg":"./images/novel11.jpg",
        "title":"Harry Potter and the order of phoenix",
        "author": ["J k Rowling"],
        "price": "18"
    },
    {
        "novelImg":"./images/novel12.jpg",
        "title":"Harry Potter - Prisoner Of Azkaban",
        "author": ["J K Rowling","Mounika Rajeev"],
        "price": "17"
    }
];

Handlebars.registerHelper("authorsname", function(name) {
    var data="";
    for(var i=0; i<name.length; i++){
        debugger; 
        if(i != (name.length-1)){
            data= data+name[i]+ " and ";
        }
        else{
            data= data+name[i]
        }
        
    }
    return data;
})

/*position matters for registeringHelper*/

var template=$("#handleBooks").html();

var tempCompile= Handlebars.compile(template);

var content= tempCompile(novels);



$("#bookRow").html(content);