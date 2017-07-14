// main document ready function to check if dom is loaded fully or not
 $( document ).ready(function() {
   var myFacebookToken = 'EAACEdEose0cBANZBqr83aXGlwkHUsIbtWMjgue0zvMQ8EvKadNbyMULZBngNZBIlu888IUQOH2lGbQTMHk10svMZBZAkrbnMZA899zZAVNUP6il3SbQc2HwDPRJB5nASoLdK0y9I4bCSOnwC38m4Qgwe7vytxqAw5jJW0s404h0DIOoXss58pQEYc4dWSTohkIZD'

   //function to get facebook profile information
   function getFacebookInfo(){
       $.ajax('https://graph.facebook.com/me?fields=name,email,gender,relationship_status,birthday,hometown&access_token='+myFacebookToken,{

               success : function(response){
                   console.log(response);
                   console.log(typeof(response));
                   $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                   $("#myName").text(response.name);
                   $("#myGender").text(response.gender);
                   $("#myEmail").text(response.email);
                   $("#myBirthdate").text(response.birthday);
                   $("#myHometown").text(response.hometown.name);
                   $("#myRelationshipStatus").text(response.relationship_status);
              }
           }//end argument list
       );// end ajax call
   }// end get facebook info

   //function to get recent facebook posts made by you.
   function getFacebookPost(){
       $.ajax('https://graph.facebook.com/me/posts?fields=message,name,description,likes&access_token='+myFacebookToken,{

               success : function(response){
                   console.log(response);
                   console.log(typeof(response));
                   for(var i in response.data){
                     console.log(response.data[i]);

                     $("div").append('<br>');
                     $("div").append('Post '+i+':'+'<br>');
                     $("div").append('Post Name:'+response.data[i].name+'<br>');
                     $("div").append('Post Message:'+response.data[i].message+'<br>');
                     $("div").append('Post Description:'+response.data[i].description+'<br>');
                     $("div").append('Post Likes:'+response.data[i].likes.data.length+'<br>');
                     $("div").append('<br>');

                   }
            }
          }//end argument list
       );// end ajax call
   }// end get facebook posts
   $("#facebookBtn").on('click',getFacebookInfo);
   $("#facebookPostsBtn").on('click',getFacebookPost);


 });
