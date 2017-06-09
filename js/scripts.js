$(document).ready(function() {
  $("#formOne").submit(function() {
    //$("#results").hide();
    $("#reverseSection").hide();
    //$("#reverseButton").show();
    $("ul#normalOrder").children("li").remove();
    $("ul#reverseOrder").children("li").remove();

    //convert string to a number FIRST
    var inputNumber = parseInt($("input#inputNumber").val());
    var regularCount = [];
    var modifiedCount = [];
    var ping = 0;
    var pong = 0;
    var pingPong = 0;
    var sergei1 = "Ready I hope you are for the beating, Milosh.";
    var milosh1 = "I don't think so, you can't even ping me, Sergei.";
    var sergei2 = "How you like that, huh? I just ping you right now.";
    var milosh2 = "Perhaps you ping me once, but you have yet to pong me";
    var sergei3 = "I pong you now Milosh!";
    var milosh3 = "Milosh's grandmother could do that, I'd like to see you combine them into the ultimate ping-pong.";
    var sergei4 = "How you like that Milosh? I just ping-ponged you. Now you must give me all the rubals!";
    var milosh4 = "Perhaps this young cub has matured into the mama of Russian bears. No matter, Milosh will destroy you like I did my liver long ago";
    var sergei5 = "Multiple ping-pongs! Sergei is champion, I think, no?";
    var milosh5 = "Champion of weakling capitalist scum, I'll hack you down like I hacked recent American election!";
    var sergei6 = "I get ALL the pin-pongs! You cannot deny Sergei's supreme masculinity. Time it is now for you to quit!";
    var milosh6 = "Well done, you have bested Milosh .... and unfrozen the cold Siberian winter in my heart. Well done!";

    var sergeiSays = "";
    var miloshSays = "";

    for (var i=1; i <= inputNumber; i++) {
    	regularCount[i-1] = i;
    }

    for (var i=1; i <= inputNumber; i++) {
    	var temp = regularCount[i-1];
      var result;

      if (temp % 15 === 0) {
      	result = "ping-pong";
        pingPong++;
      } else if (temp % 5 === 0) {
      	result = "pong";
        pong++;
      } else if (temp % 3 === 0) {
      	result = "ping";
        ping++;
      } else {
      	result = temp;
      }
      modifiedCount[i-1] = result;
    }

    //alert(regularCount.toString());
    //alert(modifiedCount.toString());

    for (var i=0; i < inputNumber; i++) {
      var temp = modifiedCount[i];
      $("ul#normalOrder").append("<li>" + temp + "</li>");
    }

    for (var i = modifiedCount.length -1; i >= 0; i--) {
      var temp = modifiedCount[i];
      $("ul#reverseOrder").append("<li>" + temp + "</li>");
      //$("#reverseOrder").show();
    }

    if (ping === 0) {
      sergeiSays = sergei1;
      miloshSays = milosh1;
    } else if (ping === 1 && pong === 0) {
      sergeiSays = sergei2;
      miloshSays = milosh2;
    } else if (pong === 1 && pingPong === 0) {
      sergeiSays = sergei3;
      miloshSays = milosh3;
    } else if (pingPong === 1) {
      sergeiSays = sergei4;
      miloshSays = milosh4;
    } else if (pingPong < 3) {
      sergeiSays = sergei5;
      miloshSays = milosh5;
    } else if (pingPong >= 3) {
      sergeiSays = sergei6;
      miloshSays = milosh6;
    }

    $("#sergeiSays").text(sergeiSays);
    $("#miloshSays").text(miloshSays);

    $("#results").show();
    $("#reverseButton").show();


    event.preventDefault();
  });
  $("button#reverseButton").click(function() {
    $("#reverseSection").show();
  });
});
