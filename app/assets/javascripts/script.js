/**
 * Torbara Maxx-Fitness Responsive HTML Template, exclusively on Envato Market: http://themeforest.net/user/torbara
 * @encoding     UTF-8
 * @version      1.0
 * @copyright    Copyright (C) 2015 Torbara (http://torbara.com). All rights reserved.
 * @license      GNU General Public License version 2 or later, see http://www.gnu.org/licenses/gpl-2.0.html
 * @author       Alexandr Khmelnytsky (support@torbara.com)
 */

jQuery(function($) {
    "use strict";
    
    //Draw animated circular progress bars
    $('div[data-circle-value]').each(function( index ) {
        $(this).circleProgress({
            value: $(this).attr('data-circle-value'),
            size: 116,
            fill: {gradient: ["#03d2ef", "#0181d1"]},
            animation: { duration: 3200, easing: 'circleProgressEasing' }
        });
    });
    
    //Schedule scripts
    if(jQuery(".akmf-box").length){
        var pane = jQuery('.akmf-box').jScrollPane({animateScroll: true});
        var api = pane.data('jsp');
        var scrollTo = 9999;
        jQuery(".akmf-box .akmf-class").each(function(index){
            if(scrollTo > jQuery(this).position().left){
               scrollTo = jQuery(this).position().left;
            }
        });
        scrollTo = scrollTo-30;
        api.scrollTo(scrollTo);
        jQuery( window ).resize(function() {
            api.reinitialise();
        });
    }
    
    // Mail forms
    //Request a 1 Day Free Trial
    jQuery("#adminForm_1").submit(function() {
        
        if(IsEmail(jQuery("#aics_email").val())){
            var url = "mail.html"; // the mail script

            jQuery.ajax({
                    type: "POST",
                    url: url,
                    data: jQuery("#adminForm_1").serialize()+"&tm_form=1", // serializes the form's elements.
                    success: function(data) {
                        alert(data); // show response from the php script.
                    }
                });

            jQuery(this)[0].reset();//Clear all form fields
        }else{
            alert("Please fill all fields.");
        }
        
        return false; // avoid to execute the actual submit of the form.
    });
    
    
    //Contact us!
    jQuery("#adminForm_2").submit(function() {

        if(IsEmail(jQuery("#aics_email_ph").val())){
            var url = "mail.html"; // the mail script

            jQuery.ajax({
                    type: "POST",
                    url: url,
                    data: jQuery("#adminForm_2").serialize()+"&tm_form=2", // serializes the form's elements.
                    success: function(data) {
                        alert(data); // show response from the php script.
                    }
                });

            jQuery(this)[0].reset();//Clear all form fields
        }else{
            alert("Please fill all fields.");
        }
        
        return false; // avoid to execute the actual submit of the form.
    });    
    
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    
});