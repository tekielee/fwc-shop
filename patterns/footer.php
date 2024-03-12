<?php
/**
 * Title: Header
 * Slug: foundation-woocommerce-gutenberg/footer
 * Categories: foundation-woocommerce-gutenberg
 *
 * @package Foundation WooCommerce Gutenberg
 * @since 1.0.0
 */

?>

</div>

<div class="grid-x footer">

    <div class="large-3 cell">

        <?php

            _e ( wp_unslash ( get_option ( 'left_footer' ) ), 'foundation-woocommerce' );

        ?>

    </div>

    <div class="large-7 cell">

        <div class="grid-x">

            <div class="large-12 cell">

                <div class="grid-x">

                    <div class="large-2 cell"></div>

                    <div class="large-6 cell">

                        <div class="grid-x">
                        
                            <div class="large-10 cell">

                                <input type="text" placeholder="Subscriber Email Address" id="subscriber" />

                            </div>

                            <div class="large-2 cell">

                                <button id="save-subscriber" class="submit success button">Subscribe</button>

                            </div>

                        </div>

                        <div id="subscriber-message"></div>

                    </div>

                    <div class="large-4 cell"></div>

                </div>

            </div>

        </div>

    </div>

    <div class="large-2 cell">

        <div class="grid-x social-icons-margin">

            <div class="large-4 cell">

                <a href="<?php _e ( wp_unslash ( get_option ( 'youtube_url' ) ), 'foundation-woocommerce' ); ?>" target="_blank">
                
                    <i class="fi-social-youtube social-icon"></i>

                </a>

            </div>

            <div class="large-4 cell">

                <a href="<?php _e ( wp_unslash ( get_option ( 'twitter_url' ) ), 'foundation-woocommerce' ); ?>" target="_blank">
                
                    <i class="fi-social-twitter social-icon"></i>

                </a>

            </div>

            <div class="large-4 cell">

                <a href="<?php _e ( wp_unslash ( get_option ( 'instagram_url' ) ), 'foundation-woocommerce' ); ?>" target="_blank">
                
                    <i class="fi-social-instagram social-icon"></i>

                </a>

            </div>

        </div>

    </div>

</div>
