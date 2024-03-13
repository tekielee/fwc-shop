<?php
/**
 * Foundation WooCommerce Gutenberg: Block Patterns
 *
 * @since WC Shop 1.0
 */

function wcg_register_block_patterns() {

	$block_pattern_categories = array(

		'wcg-shop' => array( 'label' => esc_html__( 'Foundation WooCommerce Shop', 'foundation-woocommerce-gutenberg' ) ),

	);

	$block_pattern_categories = apply_filters( 'wcg_register_block_patterns', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {

		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {

			register_block_pattern_category( $name, $properties );

		}
	}
}

add_action( 'init', 'wcg_register_block_patterns', 9 );
