var Ticket = function(movieName,date,time,age){
    this.movieName=movieName;
    this.date=date;
    this.time=time;
    this.age=age;
}

Ticket.prototype.fullInformation=function(){
    return this.movieName+" "+this.date+" "+this.age}


    $(document).ready(function(){
        $(".prov").submit(function(event){
            var inputtedFirstName = $("input#new-first-name").val();
            var inputtedLastName = $("input#new-last-name").val();
            var newContact = new Contact(inputtedFirstName, inputtedLastName);
        
            $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
            console.log(newContact.firstName);
          $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.fullName());
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            });
        
           
             
            event.preventDefault();
          });
          
          $("input#new-first-name").val("");
          $("input#new-last-name").val("");
        
        });
        })
    })