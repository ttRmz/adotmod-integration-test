function Change(obj, evt, iconID)
{
    var icon = document.getElementById(iconID);
    if(evt.type=="focus"){
        obj.style.borderColor="#3fd48b";
        icon.src = "assets/images/close.png";
    }
    else if(evt.type=="blur" && obj.value != 0){
       obj.style.borderColor="#f2f2f2";
       icon.src = "assets/images/trash.png";
    }
    else if (evt.type=="blur" && obj.value == 0){
       obj.style.borderColor="#f2f2f2";
       icon.src = "assets/images/settings.png";
    }
}