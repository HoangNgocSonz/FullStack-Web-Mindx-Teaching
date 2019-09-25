$("#myBtn").click(function(event){
    event.preventDefault();
    $("#result-list").text("");
    var x = document.getElementById("keyword").value;
    $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${x}x&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`, function(data, status){
    console.log(data);
    

        for(var i=0;i<25;i++){
            $("#result-list").append(
                `
                <div class="one">
                    <img src="${data.items[i]["snippet"]["thumbnails"]["default"]["url"]}" alt="img" class="a">
                    <a href=https://www.youtube.com/watch?v=${data.items[i]["id"]["videoId"]} ><p class="b">${data.items[i]["snippet"]["title"]}</p></a>
                    <p class="c">${data.items[i]["snippet"]["description"]}</p>
                </div>
                `
            )
        }
        var next =data.nextPageToken;
        console.log(next);
        function getMore(){
            $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=chipu&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&pageToken=${next}`, function(data, status){
                    for(var i=0;i<25;i++){
                        $("#result-list").append(
                            `
                            <div class="one">
                                <img src="${data.items[i]["snippet"]["thumbnails"]["default"]["url"]}" alt="img" class="a">
                                <a href=https://www.youtube.com/watch?v=${data.items[i]["id"]["videoId"]} ><p class="b">${data.items[i]["snippet"]["title"]}</p></a>
                                <p class="c">${data.items[i]["snippet"]["description"]}</p>
                            </div>
                            `
                        )
                        if(data.items[i]==null){
                            $("#result-list").append( `<p>End</p>` );
                        }
                    }
                })
                console.log(data);
        }
        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() > $(document).height()-1) {
                getMore();
            }
         });

    })
})


