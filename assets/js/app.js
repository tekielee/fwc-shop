$(document).ready(function() {

    $(document).foundation();

    ajaxSaveSubsriber ( ajaxurl );
    
}); 

function ajaxSaveSubsriber ( ajaxurl ) {

    $('#save-subscriber').click ( function ( e ) {
        
        e.preventDefault();

        let subscriber_email = jQuery('#subscriber').val();

        console.log(subscriber_email);

        jQuery.ajax ( {

            url: ajaxurl,

            type: 'POST',

            data: {

                action: 'subscriber_email',

                subscriber_email: subscriber_email,
            },

            success: function ( response ) {

                jQuery ( '#subscriber-message' ).html( response );

            }

        } );

    } );

}
