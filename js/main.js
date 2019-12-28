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

    // For de selecting team

    // select two button with the name "deselect-btn"
    var deSelectTeamBtn = $('.deselect-btn');
    // add onclick listner for two button
    deSelectTeamBtn.each(function(index,btn){
        // get both button as jquery object
        var oneBtn = $(btn);
        // onclick listner function
        oneBtn.on('click',function(e){
            // get selected team as previous subling and make it empty
            oneBtn.prev()[0].innerHTML="";
        });
    });
});