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

};

function uploadSuccess(){
    alert("Your video was uploaded");


}




// <input class="uploadInput" id="uploadFile" type="submit">
// <label for="uploadFile" class="inactive" id="uploadLabel">Upload</label>







        // var uploadButton = document.getElementById('uploadLabel');
        // uploadButton.className = 'active';
