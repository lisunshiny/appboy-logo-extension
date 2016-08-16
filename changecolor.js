function waitForElementToDisplay(selector, time) {
  if(document.querySelector(selector)!=null) {
    var el = document.getElementsByClassName('gb_Sb')[0];
    el.style.backgroundImage = "url(\"https://content.appboy.com/uploads/pQjGgL2ko88OLfAn_Hr0cALogo_White_324x80_2x.png\")"
    el.style.marginTop = "12px"
    return;
  }
  else {
    setTimeout(function() {
      waitForElementToDisplay(selector, time);
    }, time);
  }
}

waitForElementToDisplay('.gb_Sb', 200);
