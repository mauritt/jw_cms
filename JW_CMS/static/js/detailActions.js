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
