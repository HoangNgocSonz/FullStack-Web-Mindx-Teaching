
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
              <div class="row">
                <div class="col-3">
                  <img class="image-placeholder" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg"></img>
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
        console.log(data.total);
        for ( let i = 1; i <= Math.ceil(data.total / NUMBER_OF_USER); i++) {
            console.log(data.total);
            if(i-1==0){
                $("#pagination-list").append(`
                <li class="page-item  onclick="loadPage(${i-1})">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                `)
            }

          $("#pagination-list").append(`

            <li class="page-item" onclick="loadPage(${i})">
              <a class="page-link" href="#">${i}
              </a>
            </li>
          `)
          if(i==Math.ceil(data.total / NUMBER_OF_USER)){
            $("#pagination-list").append(`
            <li class="page-item  onclick="loadPage(${i-1})">
            <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
            </li>
            `)
        }
        }
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
                  <img class="image-placeholder" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg"></img>
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
        for ( let i = 1; i <= Math.ceil(data.total / NUMBER_OF_USER); i++) {
            if(i-1==0){
                $("#pagination-list").append(`
                <li class="page-item onclick="loadPage(${i-1})">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                `)
            }
          $("#pagination-list").append(`
            <li class="page-item" onclick="loadPage(${i})">
              <a class="page-link" href="#">${i}
              </a>
            </li>
          `)
          if(i==Math.ceil(data.total / NUMBER_OF_USER)){
            $("#pagination-list").append(`
            <li class="page-item  onclick="loadPage(${i-1})">
            <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
            </li>
            `)
        }
        }
      } else {
        //
      }
    },
    error: function(err) {
      console.log(err);
    }
  });
}