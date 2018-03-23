//business logic
function trackRecommender(confidence, end, pace, flow, size){
  var result1 = "ruby";
  var result2 = "c#";
  var result3 = "java";
  var result4 = "php";
/*
//logic1
if (confidence == 3 || 4){
  if (end == "front"){
    return result1;
  } else {
    return result4;
  }
else {
  if (pace == 2) && (size == 2){
    return result3;
  } else {
    return result2;
  }
}
}

//logic2
if (pace == 1 || 2){
  if (flow == "consistent"){
    if (size == 1 || 2){
      return result2;
    } else {
      if (size == 3 || 2){
        return result4;
      } else {
        return result3;
      }
    }
  }
} else {
  if (size == 3){
    return result1;
  } else {
    return result2;
  }
}
}
*/
//logic3
if ((size == 1 || 2) && (flow == "consistent")){
  return result2;
}
//
}

//user logic (jQUERY)
$(document).ready(function(){
  $(".questionnaire").submit(function(event){
    event.preventDefault();

  var replyConfidence = $("#confidence").val();
  var replyEnd = $("input:radio[name=end]:checked").val();
  var replyPace = $("#pace").val();
  var replyFlow = $("input:radio[name=flow]:checked").val();
  var replySize = $("#size").val();

  console.log("USER ENTERED: "+replyConfidence+" USER ENTERED: "+replyEnd+" USER ENTERED: "+replyPace+"USER ENTERED:"+replyFlow+"USER ENTERED:"+replySize);

    var replyResult = trackRecommender(replyConfidence, replyEnd, replyPace, replyFlow, replySize);

      $("#"+replyResult).show(); //show the track paragraph

  });
});
