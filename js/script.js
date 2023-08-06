// dom manupulation 
function domManupulate(){
    let x=document.getElementById('changeDiv');
    x.innerHTML="Dom is Manupulated";
}


// click counter
function count(){

    var element=document.getElementById('showCount');
    var value=element.innerHTML;
    ++value;
    console.log(value);
    document.getElementById('showCount').innerHTML=value;
    
}
// image switcher
function imageOne(){
    var myImageOne=document.getElementById('changeImage');
    myImageOne.src="images/image_one.jpg";
}

function imageTwo(){
    var myImageOne=document.getElementById('changeImage');
    myImageOne.src="images/image_two.jpg";
}

// Ajax
function getData(){
        var URL="https://jsonplaceholder.typicode.com/posts";
        var requestOptions= {method:'GET'};
        fetch(URL,requestOptions)
        .then(response=> response.json())
        .then(result=> console.log(result))
        .catch(err=>console.log('error', err));
}
