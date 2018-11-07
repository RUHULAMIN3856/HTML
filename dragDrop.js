/// <reference path="jquery-3.3.1.js" />

var data;

$(document).ready(function(){
    document.getElementById('target').addEventListener('dragenter',preventDefault);
    document.getElementById('target').addEventListener('dragover',preventDefault);
    document.getElementById('target').addEventListener('drop',function(ev){
        var files = ev.dataTransfer.files;
        let table = $("#fileInfo");
        for(let i = 0; i<files.length; i++){
            $('<tr><td>'+files[i].name+'</td>>'+
            '<td>'+files[i].type+'</td>'+
            '<td>'+files[i].size+'</td></tr>').appendTo(table);
        }
        preventDefault(ev);
    });
});

function preventDefault(e){
    e.preventDefault();
}