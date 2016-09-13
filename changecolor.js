var timeWaiting = 0;

function waitForElementToDisplay(selector, time) {
  if(document.querySelector(selector)!=null) {
    var el = document.getElementsByClassName('gb_Xa')[0];
    el.style.backgroundImage = "url(\"https://content.appboy.com/uploads/pQjGgL2ko88OLfAn_Hr0cALogo_White_324x80_2x.png\")";
    el.style.marginTop = "12px";
    return;
  }
  else {
    setTimeout(function() {
      timeWaiting += time;

      // If waiting for more than 10 seconds, abort
      if (timeWaiting > 10000) {
        console.log("Couldn't find logo element :(");
        return;
      }
      else {
        waitForElementToDisplay(selector, time);
      }
    }, time);
  }
}

waitForElementToDisplay('.gb_Xa', 200);
