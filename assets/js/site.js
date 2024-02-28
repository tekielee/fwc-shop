let current_li = 1;

$ ( document ).ready ( function () {

    // Main nav hover dropdown menu
    mainNavHover ();

    // Product detail toggle full gallery images
    productDetailToggle ();

    // Show spec content
    showSpec ();

    // Show warrenty content
    showWarranty ();

    // Show shipping content
    showShipping ();

    // Show sell content
    showSeller ();

} );

function showSpec () {

    $( '#spec' ).on ( 'click', function () {

        $( '#spec-content').show ();
        $( '#warranty-content').hide ();
        $( '#shipping-content').hide ();
        $( '#seller-content').hide ();

    });

}

function showWarranty () {

    $( '#warranty' ).on ( 'click', function () {

        $( '#spec-content').hide ();
        $( '#warranty-content').show ();
        $( '#shipping-content').hide ();
        $( '#seller-content').hide ();

    });

}

function showShipping () {

    $( '#shipping' ).on ( 'click', function () {

        $( '#spec-content').hide ();
        $( '#warranty-content').hide ();
        $( '#shipping-content').show ();
        $( '#seller-content').hide ();

    });

}

function showSeller () {

    $( '#seller' ).on ( 'click', function () {

        $( '#spec-content').hide ();
        $( '#warranty-content').hide ();
        $( '#shipping-content').hide ();
        $( '#seller-content').show ();

    });

}

function mainNavHover () {

    $( '.dropdown' ).hover ( function() {

        $(this).addClass ( 'show' );

        $(this).find ( ' .dropdown-menu ' ).addClass ( 'show' );

    }, function() {

        $(this).removeClass ( 'show' );

        $(this).find ( '.dropdown-menu' ).removeClass ( 'show' );

    });

}

function productDetailToggle () {

    $( '[class^="thumbnail_"' ).on ( 'click', function ( event ) {

        $('.full-image li:nth-child(' + current_li + ')').hide ();

        let next_li = event.currentTarget.className.replace ( 'thumbnail_', '' );

        $('.full-image li:nth-child(' + next_li + ')').show ();

        current_li = next_li;

    });

}
