window.addEventListener("load",bindEvents);
function bindEvents(){
	document.getElementById("postBt").addEventListener("click",doPost);
}

function doPost(){
	var imgURL = document.getElementById("img").value;
	var post = document.getElementById("post").value;
	crudOperations.addPost(post,imgURL,"Devender");
	var lastAdded = crudOperations.postList[crudOperations.postList.length - 1];
	//console.log(imgURL);
	//console.log(post);
	printRecord(lastAdded);
}

function printRecord(postObject){
	var tbody = document.getElementById("posts");
	var tr= tbody.insertRow();
	var cell = tr.insertCell(0)
	cell.innerHTML="<img src='"+postObject.img+"'>"+"<br>"+postObject.postName;
	tr.insertCell(1).innerHTML=postObject.postBy;
	tr.insertCell(2).innerHTML = postObject.postDate;
    tr.insertCell(3).innerHTML ='<button type="button" class="btn btn-success" id="like"onclick="like()">like</button>&nbsp&nbsp&nbsp <span id="count">0</span>&nbsp&nbsp&nbsp<button type="button" class="btn btn-danger" id="dislike" onclick="dislike()">dislike</button>&nbsp&nbsp&nbsp <span id="count1">0</span> <textarea name="" id="" placeholder="comment here" cols="20" rows="2"></textarea>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button type="button" class="btn btn-primary">submit</button>'
}
var counter1=0;
function like()
{
    counter1++;
    document.getElementById("count").innerHTML=counter1;
}
var counter2=0;
function dislike()
{
    counter2++;
    document.getElementById("count1").innerHTML=counter2;
}