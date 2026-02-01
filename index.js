darkmode = true;
saad_title1 = document.getElementById("title1");

checkbox = document.getElementById("checkbox").checked = darkmode;


function change_light_mode(){
    if(darkmode){
        //change to light mode
        document.body.style.backgroundColor = "#CCE3F5";
        saad_title1.style.color = "black";
        document.getElementById("dark_mode").style.color = "black";

        //changing game's titles coloures
        titles = document.getElementsByClassName("game_description");
        for(i = 0; i < titles.length; i++){
            titles[i].style.color = "black";
        }

    }else{
        //change to dark mod
        document.body.style.backgroundColor = "#211E34"
        saad_title1.style.color = "white";
        document.getElementById("dark_mode").style.color = "#CCE3F5";
        titles = document.getElementsByClassName("game_description");
        for(i = 0; i < titles.length; i++){
            titles[i].style.color = "#CCE3F5";
        }
    }

    darkmode = !darkmode;
}