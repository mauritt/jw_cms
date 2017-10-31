function getUploadURL(obj){
    var response;
    var request = './video/upload';
    var URL = $.get(request, function(text){
        var uploadForm = document.getElementById('uploadForm');
        uploadForm.action = text;

        var label = document.getElementById('uploadLabel');
        label.innerHTML = "UPLOAD";
        label.setAttribute("for", "uploadFile");
    });
}

function uploadSuccess(){
    alert("Your video was uploaded");
}
