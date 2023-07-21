<?php
/**
 * The Template for displaying Search Results pages.
 */

get_header();

if ( have_posts() ) :
?>	<div class="container mt-5">
	<header class="page-header">
		<h1 class="page-title"><?php printf( esc_html__( 'Search Results for: %s', 'healing-by-keren' ), get_search_query() ); ?></h1>
	</header>
<?php
	get_template_part( 'archive', 'loop' );
else :
?>
	<article id="post-0" class="post no-results not-found">
		<header class="entry-header">
			<h1 class="entry-title"><?php esc_html_e( 'Nothing Found', 'healing-by-keren' ); ?></h1>
		</header><!-- /.entry-header -->
		<p><?php esc_html_e( 'Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'healing-by-keren' ); ?></p>
		<?php
			get_search_form();
		?>
	</article><!-- /#post-0 -->
</div>
<?php
endif;
wp_reset_postdata();

get_footer();
