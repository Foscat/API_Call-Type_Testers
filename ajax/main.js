

$(document).on("click", "#getArticles", function() {

    var artSub = $("#inputArtSub").val().trim();

    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=YourApiKeyHere" +
    //         "&q=" + artSub;
    queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + artSub +
    "&filter=ebooks&orderBy=relevance&maxResults=30&langRestrict=en&key=YourApiKeyHere";

    $.ajax({
        url: queryURL,
        type: "GET"
    })
      .then(function(response) {
        //   var results = response.response.docs;

          console.log(response);
        //   $("#articlePool").empty();

        //   for(var i = 0; i < results.length; i++) {

        //     var articleDiv = $("<div class=border border-dark artDiv>");

        //     // Pull in and sort article call
        //     var headline = results[i].headline.print_headline || results[i].headline.main
        //     var author = results[i].byline.original;
        //     var snippit = results[i].snippet

        //     // Attach info to text elements
        //     var postHead = $("<h3>").text(headline);
        //     var postAuth = $("<h5>").text(author);
        //     var postSnip = $("<p>").text(snippit);

        //     articleDiv.append(postHead);
        //     articleDiv.append(postAuth);
        //     articleDiv.append(postSnip);

        //     $("#articlePool").append(articleDiv);
            

        //   }
      });
});