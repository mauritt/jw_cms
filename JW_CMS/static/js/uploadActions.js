function getUploadURL(){
    var response;
    var request = './video/upload';
    var URL = $.get(request, function(text){
        console.log(text)
        var uploadForm = document.getElementById('uploadForm');
        uploadForm.action = text;

        var uploadButton = document.getElementById('uploadLabel');
        uploadButton.className = 'active';
    });

};

function uploadSuccess(){
    alert("Your video was uploaded");
    var uploadButton = document.getElementById('uploadLabel');
    uploadButton.className = 'inactive';

}
