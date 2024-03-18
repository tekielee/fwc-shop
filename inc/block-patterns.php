<?php
/**
 * FWC Shop: Block Patterns
 *
 */

function fwc_register_block_patterns() {

	$block_pattern_categories = array(

		'fwc-shop' => array( 'label' => esc_html__( 'FWC Shop', 'fwc-shop' ) ),

	);

	$block_pattern_categories = apply_filters( 'fwc_register_block_patterns', $block_pattern_categories );

	foreach ( $block_pattern_categories as $name => $properties ) {

		if ( ! WP_Block_Pattern_Categories_Registry::get_instance()->is_registered( $name ) ) {

			register_block_pattern_category( $name, $properties );

		}
	}
}

add_action( 'init', 'fwc_register_block_patterns', 9 );
