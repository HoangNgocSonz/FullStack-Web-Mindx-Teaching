let skip = 0;
$(document).ready(function() {
  $.ajax(`${ROOT_API}/book?skip=${skip}&limit=${NUMBER_OF_USER}`, {
    type: "GET",
    success: function(data) {
      if (data && data.data) {

          //console.log(data);
        // Xu li data
        for (let i = 0; i < data.data.length; i++) {
          let books = "";
          if (data.data[i].books) {
            for (let j = 0; j < data.data[i].books.length; j++) {
              books += data.data[i].books[j].title;
            }
          }
          $("#user-list").append(`
            <div class="col-12 mt-3 mb-3">
              <div class="row" id="divl">
                <div class="col-3">
                  <img class="image-placeholder" src="https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg" ></img>
                </div>
                <div class="col-9">
                  <h3 class="text-success">${data.data[i].title}</h3>
                  <h4>${data.data[i].description}</h4>
                  <h4>${data.data[i].category}</h4>
                  <h4 class="text-danger">${data.data[i].author}</h4>
                </div>
              </div>
            </div>
          `)
        }
        $("#pagination-list").append(`
        <li class="page-item" id="prev">
            <a class="page-link" href="#">Previous</a>
        </li>
      `)
        // Xu li total
        console.log(data.total);
        for ( let i = 1; i <= Math.ceil(data.total / NUMBER_OF_USER); i++) {
            console.log(data.total);
          $("#pagination-list").append(`
            <li class="page-item" onclick="loadPage(${i})">
              <a class="page-link" href="#">${i}
              </a>
            </li>
          `)
        }
        $("#pagination-list").append(`
        <li class="page-item" id="next">
            <a class="page-link" href="#">Next</a>
        </li>
      `)
      $("#next").click(function(){
        loadPage(2);
      })
      } else {
        //
      }
    },
    error: function(err) {
      console.log(err);
    }
  })
})

function loadPage(pageNumber) {
  $.ajax(`${ROOT_API}/book?skip=${(pageNumber - 1) * 10}&limit=${NUMBER_OF_USER}`, {
    type: "GET",
    success: function(data) {
      if (data && data.data) {
        // Xu li data
        $("#user-list").html("");
        for (let i = 0; i < data.data.length; i++) {
          let books = "";
          if (data.data[i].books) {
            for (let j = 0; j < data.data[i].books.length; j++) {
              books += data.data[i].books[j].title;
            }
          }
          $("#user-list").append(`
            <div class="col-12 mt-3 mb-3">
              <div class="row">
                <div class="col-3">
                  <img class="image-placeholder" src="https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg"></img>
                </div>
                <div class="col-9">
                <h3 class="text-success">${data.data[i].title}</h3>
                  <h4>${data.data[i].description}</h4>
                  <h4>${data.data[i].category}</h4>
                  <h4 class="text-danger">${data.data[i].author}</h4>
                </div>
              </div>
            </div>
          `)
        }
        // Xu li total
        $("#pagination-list").html("");

        $("#pagination-list").append(`
        <li class="page-item" id="prev">
            <a class="page-link" href="#">Previous</a>
        </li>
      `)
      $("#prev").click(function(){
        loadPage(pageNumber-1);
      })
        for ( let i = 1; i <= Math.ceil(data.total / NUMBER_OF_USER); i++) {

          $("#pagination-list").append(`
            <li class="page-item" onclick="loadPage(${i})">
              <a class="page-link" href="#">${i}
              </a>
            </li>
          `)
        }
        $("#pagination-list").append(`
        <li class="page-item" id="next">
            <a class="page-link" href="#">Next</a>
        </li>
      `)
      $("#next").click(function(){
        if(pageNumber<Math.ceil(data.total / NUMBER_OF_USER))
        loadPage(pageNumber+1);
      })

      } else {
        //
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
}