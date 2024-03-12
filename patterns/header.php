<?php
/**
 * Title: Header
 * Slug: foundation-woocommerce-gutenberg/header
 * Categories: foundation-woocommerce-gutenberg
 *
 * @package Foundation WooCommerce Gutenberg
 * @since 1.0.0
 */

?>

<script type="text/javascript">

    let ajaxurl = '<?php _e ( admin_url ( 'admin-ajax.php' ) ); ?>';
           
</script>

<div class="grid-x">

    <div class="large-12 cell">

        <div class="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">

            <button class="menu-icon" type="button" data-toggle="main-menu"></button>

            <div class="title-bar-title">Menu</div>

        </div>

        <div class="top-bar" id="main-menu">
    
            <div class="top-bar-left">  

                <div class="grid-x">

                    <div class="large-2 cell">
                    
                        <span class="site-logo">
                            
                            <a href="<?php _e ( get_site_url () ); ?>">

                                <img src="
                                
                                <?php 
                                    
                                    $logo_url = get_template_directory_uri () . '/images/logo.png';

                                    if ( get_option ( 'logo_url' ) ) {

                                        $logo_url = wp_unslash ( get_option ( 'logo_url' ) );

                                    }

                                    _e ( $logo_url );
                                    
                                ?>" 
                                
                                alt="Logo"
                                
                                width="50" height="50" /
                                
                                >
                            
                            </a>
                        
                        </span>

                    </div>

                    <div class="large-9 cell">
                        <ul class="dropdown menu align-center" data-dropdown-menu>

                            <?php

                                if ( ! has_nav_menu ( 'primary' ) ) {

                                    $pages = get_pages ();

                                    foreach ( $pages as $page ) {

                                ?>
                                        <li class="nav-item">

                                            <a class="nav-link" href=" <?php _e ( get_page_link( $page->ID ) ); ?>">

                                                <?php _e ( $page->post_title ); ?>

                                            </a>

                                        </li>

                                <?php
                                
                                    }

                                } else {

                                _e ( createMmenu ( getMenu () ) );

                                }

                            ?>
                
                        </ul>

                    </div>

                </div>
        
            </div>

            <div class="top-bar-right">

                <div class="grid-x fluid">

                    <div class="large-12 cell">

                        <div class="large-6 cell">

                            <form action="<?php _e ( get_site_url () . '/search', 'foundation-woocommerce-gutenberg' ); ?>" method="POST">

                                <ul class="menu">

                                    <li><input type="text" name="search" placeholder="Search"></li>

                                    <li><button type="submit" class="button">Search</button></li>

                                </ul>

                            </form>

                        </div>

                        <div class="large-6 cell">

                            <ul class="menu">

                                <li class="cart-count">
                                        
                                   <!-- wp:woocommerce/mini-cart /-->
                                
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>
            
            </div>

        </div>  

    </div>

</div>

<div class="grid-container fluid">
