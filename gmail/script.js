var mails =[
    {
        "user":"Mounika",
        "subject":"Happy Hollow",
        "mailbody":"Dear Mounika, How are you doing I am doing good.",
        "date":"Jul 1"
    },
    {
        "user":"Rajeev",
        "subject":"Happy New Year",
        "mailbody":"Dear Mounika, Happy New year. we are planning for a trip in the summer would you like to join us",
        "date":"Jun 1"
    },
    {
        "user":"Rajeev",
        "subject":"Happy New Year",
        "mailbody":"Dear Mounika, Happy New year. we are planning for a trip in the summer would you like to join us",
        "date":"Jun 1"
    },
    {
        "user":"Rajeev",
        "subject":"Happy New Year",
        "mailbody":"Dear Mounika, Happy New year. we are planning for a trip in the summer would you like to join us",
        "date":"Jun 1"
    },
    {
        "user":"Rajeev",
        "subject":"Happy New Year",
        "mailbody":"Dear Mounika, Happy New year. we are planning for a trip in the summer would you like to join us",
        "date":"Jun 1"
    }
    
];
var mailContent='';
for (var i=0; i<mails.length; i++){
    mailContent +='<div class="box">'+
    '<i class="far fa-square"></i>'+
    '</div>'+
    '<div class="star">'+
    '<i class="far fa-star starposition"></i>'+
    '</div>'+
    '<div class="mailfrom">'+
    '<span>'+mails[i].user+'</span>'+
    '</div>'+
    '<div class="mailsub">'+
    '<span>'+mails[i].subject+' -</span>'+
    '</div>'+
    '<div class="mailmsg">'+
    '<span>'+mails[i].mailbody+'</span>'+
    '</div>'+
    '<div class="time">'+
    '<span>'+mails[i].date+'</span>'+
    '</div>'+
    '<hr>';
}

console.log(mailContent);

$("#mainmail").html(mailContent);