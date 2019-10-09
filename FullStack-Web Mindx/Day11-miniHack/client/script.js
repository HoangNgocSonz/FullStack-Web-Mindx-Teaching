$(document.readyState(function(){
    $.ajax(`${ROOT_API}/user`,{
        type:"GET",
        success:function(data){
            if(data &&data.data){
                for(i=0; i<data.data.length;i++){
                    $("#user-list").append(
                        `
                        <div class="col-12>
                            <h3>${data.data[i].name}</h3>
                            <h4>${data.data[i].email}</h4>
                            <h4>${data.data[i].phone}</h4>
                            
                        </div>
                        `
                    )
                }
            }
        },
        error:function(err){
            console.log(err);
        }
    })
}))