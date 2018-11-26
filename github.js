
$(document).ready(function(){
  $('#search').on('keyup',function(e){
   let username = e.target.value;

   //makeing request to github
   $.ajax({
   url:'http://api.github.com/users/'+username,
   data:{
   	client_id:'f0d4e18d32c85ca3945a',
   	client_secret:'258b9521a39daac6e926dd05e16fdf402b3c7b1d'
   }
     }).done(function(user){
      $('#profile').html(`
      	 
        <div class="row">
        <div class="col-12">
        <div class="card">
        <div class= "card-content">
        <div class="card-header">
        Search Results
        </div>
        </div>
        <div class="card-body">
           <div class="row">
             <div class="col-md-3">
             <img style="width:250px;height:250px;" class="thumbnail" src="${user.avatar_url}">
             <a target="_blank" href="${user.html_url}" class="btn btn-primary btn-block my-3">View profile</a>
             </div>

             <div class="col-md-9">
             <span class="label bg-danger" style="border-radius:10px;padding:7px;color:white;margin:5px;">public Repo:${user.public_repo}</span>
             <span class="label bg-primary" style="border-radius:10px;padding:7px;color:white;margin:5px;">public gists:${user.public_gists}</span>
             <span class="label bg-secondary" style="border-radius:10px;padding:7px;color:white;margin:5px;">followers:${user.followers}</span>
             <span class="label bg-info" style="border-radius:10px;padding:7px;color:white;margin:5px;">following:${user.following}</span>
             <br><br>
              <ul class="list-group">
             <li class="list-group-item">Company: ${user.company}</li>
             <li class="list-group-item">Location: ${user.location}</li>
             <li class="list-group-item">Bio: ${user.bio}</li>
             <li class="list-group-item">Created on: ${user.created_at}</li>
             </ul>
             </div>
            </div>
           </div>  
         </div>
        </div>
        </div>     
   </div>
      	`);
     });

  });

});