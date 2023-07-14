function change()
{
    var img=document.getElementById("bulb");
    if(img.src.match("bulb.jpg"))
    {
        img.src="bulb-on.jpg";
    }
    else
    {
        img.src="bulb.jpg";
    }
}