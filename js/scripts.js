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

    for (var i=1; i <= inputNumber; i++) {
    	regularCount[i-1] = i;
    }

    for (var i=1; i <= inputNumber; i++) {
    	var temp = regularCount[i-1];
      var result;

      if (temp % 15 === 0) {
      	result = "ping-pong";
      } else if (temp % 5 === 0) {
      	result = "pong";
      } else if (temp % 3 === 0) {
      	result = "ping";
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

    $("#results").show();
    $("#reverseButton").show();


    event.preventDefault();
  });
  $("button#reverseButton").click(function() {
    $("#reverseSection").show();
  });
});
