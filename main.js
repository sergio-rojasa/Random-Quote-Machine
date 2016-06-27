var addScript = function(url) {
  var script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}
var changeColor = function() {
  var color  = Math.floor(Math.random()*16777215).toString(16);
  console.log(color);
}
var getQuote = function() {
  var url = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote';
  addScript(url);
}
var parseQuote = function(data) {
  var quoteAuthor = data.quoteAuthor;
  var quoteText   = data.quoteText;
  console.log(quoteText);
  console.log(quoteAuthor);

}
changeColor();
getQuote();
