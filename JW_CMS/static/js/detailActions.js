function activateSave(){
    var changed = false;

    var editables = document.getElementsByClassName('editable');

    var form = document.getElementById('detailsForm');

    var saveButton = document.getElementById('saveDetails');

    for(var i=0;i<editables.length;i++){
        if(editables[i].value != editables[i].id){
            changed = true;
        }
    }

    if(changed){
        $(saveButton).addClass("active");
        form.action = "../update/" + form.name;

    }else{
        $(saveButton).removeClass("active");
        form.action = ""
    }




}

function deactivateSave(){
    var saveButton = document.getElementById('saveDetails');
    $(saveButton).removeClass("active");

    var form = document.getElementById('detailsForm');
    form.action = ""
}


function activateTab(obj){
    if(obj.classList.contains('active')){
        return;
    }else{
        var tabs = document.getElementsByClassName('nav-link active');
        for (var i = 0; i < tabs.length; i++) {
            $(tabs[i]).removeClass("active");
        }
        $(obj).addClass("active");

        var hiddenPages = document.getElementsByClassName('row page');
        for (var i = 0; i < hiddenPages.length; i++) {
            var hiddenPage = hiddenPages[i]

            if(hiddenPage.id == obj.innerHTML.toLowerCase()){
                hiddenPage.hidden=false;
            }else{
                hiddenPage.hidden=true;
            }
        }

    }

}

function deleteVideo(videoKey){
    var confirmation = confirm('Are you sure you want to delete this video?')

    if(confirmation){
        $.ajax({url:"../delete/" + videoKey, success: function(){
            window.location = "../";
            }
        });
    }else{
        return
    };
};







