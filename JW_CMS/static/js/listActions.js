function changeSortOrder(obj){
    var sortColumn = $(obj).attr('id');
    var sortOrder = getSortOrder();
    applyNewSort(sortColumn, sortOrder);
};

function getSortOrder(){
    var newOrder;
    if(document.getElementById('desc')){
        newOrder = 'asc';
    }else{
        newOrder = 'desc';
    }
    return newOrder;
};

function applyNewSort(sortColumn, sortOrder){
    var url = sortColumn + "_" + sortOrder + " #videoList";
    var videoList = document.getElementById('videoList');

    $(videoList).load(url, function(){
        var column = document.getElementById(sortColumn);
        var header = column.parentNode;
        $(header).attr('id', sortOrder);

        var sortIcons = videoList.getElementsByClassName('material-icons');

        for (var i = 0; i < sortIcons.length; i++) {
            if(sortIcons[i].innerHTML == "arrow_drop_up"){
                sortIcons[i].style.opacity = "0";
            };
        };

        var icon = column.firstElementChild;

        if(sortOrder == 'desc'){
            icon.innerHTML = "arrow_drop_down"
        }else{
            icon.innerHTML = "arrow_drop_up"
        }

        icon.style.opacity='100';
    });
}
