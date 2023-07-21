			
		</div>
		<footer id="colophon" class="site-footer" role="contentinfo">
    
                    
	<div class="container-fluid footer-content">
		<div class="row">
			<div class="site-footer-inner col-sm-12 col-md-4">
				<h2 class="footer-title">BEE HERE NOW</h2>
				<a class="footer-tix-btn" href="#" target="_blank">BUY TICKETS</a>
			</div>
			<div class="site-footer-inner col-sm-12 col-md-4">
				<h2 class="footer-title">Join our mycelial network</h2>
				<div class="footer-newsletter">
					<!-- Begin Mailchimp Signup Form -->
					
					<div id="mc_embed_signup">
					<form action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
						<div id="mc_embed_signup_scroll">
							<div class="mc-field-group">
								<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="your email here">
								<input type="submit" value="Submit" name="subscribe" id="mc-embedded-subscribe" class="button">
							</div>
								<div id="mce-responses">
									<div class="response" id="mce-error-response" style="display:none"></div>
									<div class="response" id="mce-success-response" style="display:none"></div>
								</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
								<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a91190e679cab7b59f192fb78_11167c8ecc" tabindex="-1" value=""></div>
								
						</div>
					</form>
					</div>
					
					<!--End mc_embed_signup-->
				</div>
				<div class="nl-msg">Sign up for ticket deals, announcements & more</div>
			</div>
			<div class="site-footer-inner col-sm-12 col-md-4">
				<h2 class="footer-title">FOLLOW YOUR <span style="color:red;font-size: 24px;">&#9829;</span> FIRST</h2>
				<div class="social-menu-footer">
					<a class="social-item instagram" href="#" target="_blank">Instagram</a>
					<a class="social-item facebook" href="#" target="_blank">Facebook</a>
					<a class="social-item youtube" href="#" target="_blank">Youtube</a>
					<a class="social-item soundcloud" href="#" target="_blank">SoundCloud</a>
					<a class="social-item email" style="width: 100%;padding: 0;text-align: center;" href="mailto:enquiries@medicinefestival.com">enquiries@medicinefestival.com</a>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="site-footer-inner col-sm-12 col-md-3">
				<div class="snake-separator" style="left:55px;"></div>
			</div>
			<div class="site-footer-inner col-sm-12 col-md-6">
				<div class="separator"></div>
				<div class="copyright-info">COPYRIGHT 2022. ALL RIGHTS RESERVED | SITE BY <a href="https://yonderday.com" target="_blank">YONDERDAY</a></div>
			</div>
			<div class="site-footer-inner col-sm-12 col-md-3">
				<div class="snake-separator" style="right:55px;"></div>
			</div>
		</div>
	</div><!-- close .container -->
</footer><!-- close #colophon -->
		
<?php if(is_page_template('home-page.php')){ ?>	
		</div><!-- end skrollr-body -->
		<!--Video Modal -->
		<div class="video-popup">
        <div class="popup-overlay"></div>
        <div class="vid-cont">
            <div class="popup-close"><button id="closeVid">&times;</button></div>
            <div class="_vid">
                <iframe width="100%" height="415" src="https://www.youtube.com/embed/FQJqz8kACGI" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
		<?php } ?>
		<script>
			// Wait for window load
jQuery(window).load(function() {
    // Animate loader off screen
    //jQuery("#pre-loader").fadeOut("slow");
    jQuery("#pre-loader").addClass('pre-loader-close');
});

		</script>
	<?php
		wp_footer();
	?>

	 
</body>
</html>
