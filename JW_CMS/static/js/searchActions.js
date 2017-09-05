function applySearch(){
    var URL;
    var searchTerm = document.forms['searchForm']['searchField'].value;
    var searchSubmit = document.getElementById('searchSubmit');
    var searchLabel = document.getElementById('searchLabel');
    var searchField = document.getElementById('searchField');
    var videoList = document.getElementById('videoList');


    if (searchSubmit.value == 'search'){
        URL = 'search/' + searchTerm + " #videoTable";
        $(videoList).load(URL, function(){
            searchSubmit.value = 'clear';
            searchLabel.innerHTML = 'clear'
        });
    }else{
        URL = '.' + ' #videoTable';
        $(videoList).load(URL, function(){
            searchSubmit.value = 'search';
            searchLabel.innerHTML = 'search'
            document.forms['searchForm']['searchField'].value = 'SEARCH';
            searchField.style.color = 'grey';
        });
    }
}



function searchFocusChange(obj){
    var searchText = document.forms['searchForm']['searchField'];
    var searchField = document.getElementById('searchField');
    if(searchText.value == 'SEARCH'){
        searchField.style.color = 'black';
        searchText.value ='';
    }else if(searchText.value == ''){
        searchField.style.color = 'grey';
        searchText.value = 'SEARCH';
    }
}
