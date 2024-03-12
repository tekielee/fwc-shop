$(document).ready(function() {

    $(document).foundation();

    getUploadLogoUrl ();
    
    ajaxSaveLogoUrl ( ajaxurl );

    ajaxSaveLeftFooter ( ajaxurl );

    ajaxSaveYoutubeUrl ( ajaxurl );

    ajaxTwitterUrl ( ajaxurl );

    ajaxInstagramUrl ( ajaxurl );

    ajaxHubspotAccessToken ( ajaxurl );

    ajaxSaveHubspotListID ( ajaxurl );

});

function ajaxSaveHubspotListID ( ajaxurl ) {

    $('#hubspot-lists').change ( function ( e ) {
        
        e.preventDefault();

        let hubspot_list_id = jQuery('#hubspot-lists :selected').val();

        jQuery.ajax ( {

            url: ajaxurl,

            type: 'POST',

            data: {

                action: 'hubspot_lists',

                hubspot_list_id: hubspot_list_id,
            },

            success: function ( response ) {

                let message = '<div class="callout success" data-closable="slide-out-right">' + 
                
                    response + '<button class="close-button" aria-label="Dismiss alert" ' + 
                    
                    'type="button" data-close><span aria-hidden="true">&times;</span></button></div>';

                jQuery ( '#hubspot-lists-message' ).html( message );

            }

        } );

    } );

}

function ajaxHubspotAccessToken ( ajaxurl ) {

    $('#save-hubspot-access-token').click ( function ( e ) {
        
        e.preventDefault();

        let hubspot_access_token = jQuery('#hubspot-access-token').val();

        jQuery.ajax ( {

            url: ajaxurl,

            type: 'POST',

            data: {

                action: 'hubspot_access_token',

                hubspot_access_token: hubspot_access_token,
            },

            success: function ( response ) {

                let message = '<div class="callout success" data-closable="slide-out-right">' + 
                
                    response + '<button class="close-button" aria-label="Dismiss alert" ' + 
                    
                    'type="button" data-close><span aria-hidden="true">&times;</span></button></div>';

                jQuery ( '#hubspot-access-token-message' ).html( message );

            }

        } );

    } );

}

function ajaxInstagramUrl ( ajaxurl ) {

    $('#save-instagram-url').click ( function ( e ) {
        
        e.preventDefault();

        let instagram_url = jQuery('#instagram-url').val();

        jQuery.ajax ( {

            url: ajaxurl,

            type: 'POST',

            data: {

                action: 'instagram_url',

                instagram_url: instagram_url,
            },

            success: function ( response ) {

                let message = '<div class="callout success" data-closable="slide-out-right">' + 
                
                    response + '<button class="close-button" aria-label="Dismiss alert" ' + 
                    
                    'type="button" data-close><span aria-hidden="true">&times;</span></button></div>';

                jQuery ( '#instagram-url-message' ).html( message );

            }

        } );

    } );

}

function ajaxTwitterUrl ( ajaxurl ) {

    $('#save-twitter-url').click ( function ( e ) {
        
        e.preventDefault();

        let twitter_url = jQuery('#twitter-url').val();

        jQuery.ajax ( {

            url: ajaxurl,

            type: 'POST',

            data: {

                action: 'twitter_url',

                twitter_url: twitter_url,
            },

            success: function ( response ) {

                let message = '<div class="callout success" data-closable="slide-out-right">' + 
                
                    response + '<button class="close-button" aria-label="Dismiss alert" ' + 
                    
                    'type="button" data-close><span aria-hidden="true">&times;</span></button></div>';

                jQuery ( '#twitter-url-message' ).html( message );

            }

        } );

    } );

}

function ajaxSaveYoutubeUrl ( ajaxurl ) {

    $('#save-youtube-url').click ( function ( e ) {
        
        e.preventDefault();

        let youtube_url = jQuery('#youtube-url').val();

        jQuery.ajax ( {

            url: ajaxurl,

            type: 'POST',

            data: {

                action: 'youtube_url',

                youtube_url: youtube_url,
            },

            success: function ( response ) {

                let message = '<div class="callout success" data-closable="slide-out-right">' + 
                
                    response + '<button class="close-button" aria-label="Dismiss alert" ' + 
                    
                    'type="button" data-close><span aria-hidden="true">&times;</span></button></div>';

                jQuery ( '#youtube-url-message' ).html( message );

            }

        } );

    } );

}

function ajaxSaveLeftFooter ( ajaxurl ) {

    $('#save-left-footer').click ( function ( e ) {
        
        e.preventDefault();

        let left_footer = jQuery('#left-footer').val();

        jQuery.ajax ( {

            url: ajaxurl,

            type: 'POST',

            data: {

                action: 'left_footer',

                left_footer: left_footer,
            },

            success: function ( response ) {

                let message = '<div class="callout success" data-closable="slide-out-right">' + 
                
                    response + '<button class="close-button" aria-label="Dismiss alert" ' + 
                    
                    'type="button" data-close><span aria-hidden="true">&times;</span></button></div>';

                jQuery ( '#left-footer-message' ).html( message );

            }

        } );

    } );

}

function ajaxSaveLogoUrl ( ajaxurl ) {

    jQuery('#save-logo-url').click ( function ( e ) {

        e.preventDefault();

        let logo_url = jQuery('#img-upload-url').val();

        jQuery.ajax ( {

            url: ajaxurl,

            type: 'POST',

            data: {

                action: 'logo_url',

                logo_url: logo_url,
            },

            success: function ( response ) {

                let message = '<div class="callout success" data-closable="slide-out-right">' + 
                
                    response + '<button class="close-button" aria-label="Dismiss alert" ' + 
                    
                    'type="button" data-close><span aria-hidden="true">&times;</span></button></div>';

                jQuery ( '#logo-url-message' ).html( message );

            }

        } );

    } );

}

function getUploadLogoUrl () {

    jQuery('#img-upload').click ( function ( e ) {

        e.preventDefault();

        let upload = wp.media ( {

        title:'Choose Image Logo', 

        multiple: false

        } ).on ( 'select' , function () {

            let select = upload.state ().get ( 'selection' );

            let attach = select.first().toJSON();

            jQuery('#img-upload-url').val( attach.url );

        }).open ();

   });

}
