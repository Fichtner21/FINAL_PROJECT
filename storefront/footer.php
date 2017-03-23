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
			<button class="buttonsz">SZOROWARKA</button>
			<button class="btnmyjka">MYJKA</button>
			<button class="btnodkurzacz">ODKURZACZ</button>
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
		<div class="logopoler"><img src="<?php bloginfo('template_url');?>/logopoler.png">
			<div class="typewriter">
				<h1>Przepraszam za tak słabą prezentację</h1>
			</div></div>

	</div>

</div>

<?php
}
?>
<div class="szor"><img src="<?php bloginfo('template_url');?>/szorowarka.png"></div>
<div class="myjka"><img src="<?php bloginfo('template_url');?>/myjka1.png"></div>
<div class="odkurzacz"><img src="<?php bloginfo('template_url');?>/odkurzacz.png"></div>
<script src="<?php bloginfo( 'template_url' );?>/assets/js/intro.js"></script>
</body>
</html>
