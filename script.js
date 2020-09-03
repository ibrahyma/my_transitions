var obj = document.getElementById("obj");
var buttons = document.getElementsByClassName("button");
var array_buttons = [];

for (var i = 0; i < buttons.length; i++)
{
    array_buttons[i] = buttons.item(i);
}

array_buttons.forEach(function (button)
{    
    button.addEventListener("mouseover", function()
    {
        this.style.opacity = "80%";
    });

    button.addEventListener("mousedown", function()
    {
        this.style.opacity = "50%";
    });

    button.addEventListener("mouseup", function()
    {
        this.style.opacity = "80%";
    });

    button.addEventListener("mouseout", function()
    {
        this.style.opacity = "100%";
    });

    button.addEventListener("click", function()
    {
        var used = this.classList.contains("used");
        this.className = used ? "button unused" : "button used";
        var rgx_rotation = /rotate\((45deg|0(deg)?)\)?/;
        var rgx_scale = /scale\((1.5|1)\)?/;
        var rgx_translate = /translateY?\((100%|0(px)?)\)?/;
        used = this.classList.contains("used");

        obj.style.transition = "1s";
        
        if (this.id == "opacity")
            obj.style.opacity = used ? "25%" : "100%";

        if (this.id == "radius")
            obj.style.borderRadius = used ? "100%" : "0";
        
        if (this.id == "rotation")
        {
            if (rgx_rotation.test(obj.style.transform))
                obj.style.transform = obj.style.transform.replace(rgx_rotation, used ? "rotate(45deg)" : "rotate(0)");
            else
                obj.style.transform += "rotate(45deg)";
        }

        if (this.id == "scale")
        {
            if (rgx_scale.test(obj.style.transform))
                obj.style.transform = obj.style.transform.replace(rgx_scale, used ? "scale(1.5)" : "scale(1)");
            else
                obj.style.transform += "scale(1.5)";
        }

        if (this.id == "translation")
        {
            if (rgx_translate.test(obj.style.transform))
                obj.style.transform = obj.style.transform.replace(rgx_translate, used ? "translateY(100%)" : "translate(0)");
            else
                obj.style.transform += "translateY(100%)";
        }
    });
});