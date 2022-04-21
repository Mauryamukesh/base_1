function myfunction()
{
    document.getElementById('navbar').classList.toggle("show");
}
window.onclick = function(event)
{
    if(!event.target.matches('#menu-bar'))
    {
        var dropdown = document.getElementsByClassName('header');
        var i;
        for(i = 0; i < dropdown.length; i++)
        {
            var openDropdown = dropdown[i];
            if(openDropdown.classList.contains('show'))
            {
                openDropdown.classList.remove('show');
            }
        }
    }
}
