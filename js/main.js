$(document).ready(function(){
    var teams = document.querySelectorAll('div[data-team]');
    teams.forEach(function(team){
        team.onclick = function(e){
            var innerText = team.parentElement.innerHTML;
            var selectedTeam = $('#selected-team');
            if($($(selectedTeam.children()[0]).children()[0]).children().length>0){
                $(selectedTeam.children()[2]).children()[0].innerHTML = innerText;
                console.log('one');
            }else{
                $(selectedTeam.children()[0]).children()[0].innerHTML = innerText;
            }
       }
    });
});