<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php do_action( 'storefront_before_footer' ); ?>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="col-full">

			<?php
			/**
			 * Functions hooked in to storefront_footer action
			 *
			 * @hooked storefront_footer_widgets - 10
			 * @hooked storefront_credit         - 20
			 */
			do_action( 'storefront_footer' ); ?>

		</div><!-- .col-full -->
	</footer><!-- #colophon -->

	<?php do_action( 'storefront_after_footer' ); ?>

</div><!-- #page -->

<?php wp_footer(); ?>
<?php
// Verifying whether a cookie is set or not
if(!isset($_COOKIE["animation"])){

?>

<div class="animation">
	<div class="logobackground">
		<!-- <div class="fromup"></div> -->
			<img class="logopoler" src="<?php bloginfo('template_url');?>/logopoler.png">
		<!-- <div class="fromdown"></div> -->
	</div>
</div>
<?php
}
?>
<script src="<?php bloginfo( 'template_url' );?>/assets/js/intro.js"></script>
</body>
</html>
