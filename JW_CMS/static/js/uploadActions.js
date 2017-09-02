function getUploadURL(){
    var response;
    var request = './video/upload';
    var URL = $.get(request, function(text){
        console.log(text)
        uploadForm = document.getElementById('uploadForm');

        uploadForm.action = text;
    });

};

function uploadSuccess(){
    alert("Your video was uploaded");
}
