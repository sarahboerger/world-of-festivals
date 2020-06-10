/*Slideshows til festivalernes egne sider*/
//Aktiverer slideshow funktionen
    function slideSwitch() {
        var $active = $('#slideshow IMG.active');

        if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

        // Viser billederne i på den måde de er kodet
        var $next =  $active.next().length ? $active.next()
            : $('#slideshow IMG:first');

        $active.addClass('last-active');

//gør det næste billede synligt, laver slide animationen og angiver hastigheden af billedeskift
        $next.css({opacity: 0.0})
            .addClass('active')
            .animate({opacity: 1.0}, 2000, function() {
                $active.removeClass('active last-active');
            });
    }

//Intervallet mellem de forskellige billeder
    $(function() {
        setInterval( "slideSwitch()", 2000 );
    });
