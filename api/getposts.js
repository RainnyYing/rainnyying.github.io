
        window.onload = function () {
            var url = "https://paperjun.xyz/xyz.paperjun.help/API.getposts.json"
            var request = new XMLHttpRequest();
            request.open("get", url);
            request.send(null);
			console.log('[CHECK] 2 Module check passed.');
            request.onload = function () {
			console.log('[PACK] 1 Module check passed.');
                //if (request.status == 200) {
                    var json = JSON.parse(request.responseText);
                    var ol = document.getElementById('ol');
                    json.posts.map(posts => {
                        var li = document.createElement("li");
                        li.innerHTML = '<div class="media"><img height="76px" width="76px" src="'+posts.img+'" class="mr-3" alt=""><div class="media-body"><h5 class="mt-0">'+posts.name+'</h5>Posted at '+posts.time+', by '+'&nbsp;'+posts.rank+'&nbsp;'+posts.by+' &nbsp;&nbsp;<a class="btn btn-outline-success" href="'+posts.url+'">阅读</a></div></div><hr>';
                        ol.append(li);
                    })
                //}
				}
		        
        }
