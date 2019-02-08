

$("h1.main").text("Bye");

$("button.first").html("<em>Click Me Once</em>");
console.log($("img").attr("src"));
$("img").attr("src", "images/tom2.png")
console.log($("img").attr("src"));

console.log($("a").attr("href"));
$("a").attr("href", "https://seznam.cz").text("seznam");

console.log($("a").attr("href"));
// console.log($("href").text("html"));
$("h1").click(function(){
  $("h1").css("color", "red");
});

for(var i = 0; i<5; i++ ){
  document.querySelectorAll("button")[i].addEventListner("click", fucntion(){
    document.querySelector("h1").style.color = "purple";
  });
}
