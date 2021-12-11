let item = document.getElementsByClassName("item"),
    numberSelected = document.getElementById("numberSelected"),
    total = document.getElementById("total");

for (var i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function() {
    this.classList.toggle("picked");
    var currentIcon = this.childNodes[4];
    currentIcon.className = (this.classList.contains("picked")) ? "fa fa-check-circle" : "fa fa-circle-o";
    updateButton();
  })
}
function updateButton(){
  var picked = document.getElementsByClassName("picked"), amount = 0;
  numberSelected.innerHTML = picked.length;
  for (var i = 0; i < picked.length; i++) {
    amount += parseInt(picked[i].childNodes[3].innerText);
  }
  total.innerHTML = amount;
}
