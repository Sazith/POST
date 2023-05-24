document.getElementById('myButton').addEventListener('click',function(){
    const userId = document.getElementById('userId').value;
    const Id = document.getElementById('Id').value;
    const Title = document.getElementById('userTitle').value;
    const Body = document.getElementById('userBody').value;
    const post = {useId:userId,id:Id,title:Title,body:Body};
    nowPostToServer(post);
})
function nowPostToServer(postInfo){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(error => console.log(error));
}