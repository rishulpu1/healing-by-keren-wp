<?php
/**
 * Template Name: Home Page 
 * Description: Page template with Sidebar on the left side.
 *
 */

get_header();

the_post();
?>

    
    <div class="container-fluid">
        <div class="row">
            <div id="content" class="main-content-inner col-sm-12" >


    
        

    <!-- <div class="main-tickets-cta-top-border" ></div>-->
    <div class="main-tickets-cta" >
        <a href="#" target="_blank">BUY TICKETS</a>
    </div>

    <!-- large image slider with calls to action ie buy tickets -->
    <div class="secondary-menu">
        <div class="top-eye"></div>
        <h2 class="clipped-section-header gradient-text">Announcements</h2>
            <div class="slide-row border-row">
                <div class="owl-carousel owl-theme announcements-slider">
                    <div class="item">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/anouncements/Add-a-heading.jpg" alt="">
                        <div class="btn-cont">
                            <a href="#" class="btn-gold">Learn More</a>
                        </div>
                        
                    </div>
                    <div class="item">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/anouncements/MF_23-Lineup-V1-Poster.jpg" alt="">
                        <div class="btn-cont">
                            <a href="#" class="btn-gold">Learn More</a>
                        </div>
                    </div>
                    <div class="item announcements-big-img">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/anouncements/HARMONISE-FINAL-2023-MEDICINE.jpg" alt="">
                        <div class="btn-cont">
                            <a href="#" class="btn-gold">Learn More</a>
                        </div>
                    </div>
                </div>	
            </div>
        <div class="bottom-flare"></div>
    </div>

    <div class="main-content-top" id="content">

        <div class="snake-corner-borders">
            <div class="left-top-snake-corner"></div>
            <div class="right-top-snake-corner"></div>
            <div class="left-bottom-snake-corner"></div>
            <div class="right-bottom-snake-corner"></div>
        </div>

        <h2 class="main-title" style="color:#f1ca86;margin-bottom: 10px;font-size: 24px;">How can we be the medicine?</h2>

        <div class="opening-statement">

            <!--<p class="body-text">
                Medicine is a registered Community Interest Company (C.I.C). All profits will go to help empower indigenous peoples to preserve and protect their land, traditions, and wisdom. 
            </p>
            <div class="separator"></div>
            <p class="body-text">
                Our vision is a world where nature is cherished, peace is revered and difference is celebrated; where humankind has reclaimed the gifts of gratitude, reciprocity, and guardianship for all life. 
            </p>
            <div class="separator"></div>
            <p class="body-text">
                Medicine is about interweaving communities and bridging cultures - wisdom keepers, indigenous communities visionaries, artists, and solutionaries of all traditions to inspire and ignite a deeper understanding of how we can tread lightly, and live harmoniously as we support each other in the creation of the world we want to see -  an equitable and thriving world.
            </p> -->

            <h5 class="body-text" style="text-align: center;">17TH &#8211; 21ST AUGUST 2023<br />
            BERKSHIRE, UK</h5>
            <div class="separator"></div>
            <h5 class="body-text" style="text-align: center;">Medicine is a registered Community Interest Company (C.I.C). All profits will go to help empower indigenous peoples to preserve and protect their land, traditions, and wisdom.</h5>
            <div class="separator"></div>
            <h5 class="body-text" style="text-align: center;">Our vision is a world where nature is cherished, peace is revered and difference is celebrated; where humankind has reclaimed the gifts of gratitude, reciprocity, and guardianship for all life.</h5>
            <div class="separator"></div>
            <h5 class="body-text" style="text-align: center;">Medicine is about interweaving communities and bridging cultures &#8211; wisdom keepers, indigenous communities visionaries, artists, and solutionaries of all traditions to inspire and ignite a deeper understanding of how we can tread lightly, and live harmoniously as we support each other in the creation of the world we want to see &#8211; an equitable and thriving world.</h5>
            <p>&nbsp;</p>

        </div>

    
    </div>

    <div class="secondary-menu video-block">
        <div class="top-eye"></div>
        <h2 class="clipped-section-header gradient-text">2O22 After Movie</h2>
        <div class="main-video border-row" id="video-section" >
        <!-- <iframe src="https://player.vimeo.com/video/678273506?controls=false&loop=true&muted=true&background=true" id="medicine-vid" frameborder="0" allow="autoplay; fullscreen;" preload autoplay allowfullscreen webkitallowfullscreen mozallowfullscreen title="Medicine Festival 2021 Short Aftermovie" width="100%" height="300"></iframe> -->
            <a class="vp-a" data-toggle="modal" data-target="#videoModal" href="#videoModal">https://youtu.be/FQJqz8kACGI</a>	
        </div>
                
        
        <div class="bottom-flare"></div>
    </div>


    <div class="newsletter-section" >
            <h2 class="section-header">Newsletter</h2>
        <!-- Begin Mailchimp Signup Form -->
        <style type="text/css">
            #mc_embed_signup{background:#000; width:600px;}
            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
            We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        </style>
        <div id="mc_embed_signup">
        <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="your email here">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
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


    <div class="secondary-menu gallery-menu">
        <div class="top-eye"></div>
        <h2 class="clipped-section-header gradient-text">Gallery</h2>
        <div class="container-fluid">
            <div class="row border-row" >
                
                <div class="col-md-4 secondary-menu-col">
                    
                        <a href="#" style="background-image:url(<?php echo get_template_directory_uri(); ?>/images/gallery1.jpg)">
                            <div class="secondary-menu-title">Photos</div>
                        </a>
                                </div>
                <div class="col-md-4 secondary-menu-col">
                        <a href="#" style="background-image:url(<?php echo get_template_directory_uri(); ?>/images/gallery2.jpg)">
                            <div class="secondary-menu-title">Videos</div>
                        </a>
                                </div>
                <div class="col-md-4 secondary-menu-col">
                    
                        <a href="#" style="background-image:url(<?php echo get_template_directory_uri(); ?>/images/gallery3.jpg)">
                                <div class="secondary-menu-title">Sounds</div>
                        </a>
                                    
                </div>
            </div>
        </div>
        <div class="bottom-flare"></div>

    </div>


    <div class="secondary-menu explore-menu" >
        <div class="top-eye"></div>
        <h2 class="clipped-section-header gradient-text">Explore</h2>
        <div class="container-fluid border-row">
            <div class="row">
                <div class="col-md-6 secondary-menu-col">
                    <a href="#" style="background-image:url(<?php echo get_template_directory_uri(); ?>/images/explore1.jpg);">
                        <div class="secondary-menu-title">Explore</div>
                    </a>
                </div>
                <div class="col-md-6 secondary-menu-col">
                    <a href="#" style="background-image:url(<?php echo get_template_directory_uri(); ?>/images/explore2.jpg);">
                        <div class="secondary-menu-title">Plan</div>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 secondary-menu-col">
                    <a href="#" style="background-image:url(<?php echo get_template_directory_uri(); ?>/images/explore3.jpg);background-position: center bottom;">
                        <div class="secondary-menu-title">Line Up</div>
                    </a>
                </div>
                <div class="col-md-6 secondary-menu-col">
                    <a href="#" style="background-image:url(<?php echo get_template_directory_uri(); ?>/images/explore4.jpg);">
                        <div class="secondary-menu-title">Connect</div>
                    </a>
                </div>
            </div>
        </div>
        <div class="bottom-flare"></div>
    </div>


    <!-- large image slider with calls to action ie buy tickets -->
    <div class="content-section" id="announcements-carousel" >
        <div id="pcp_wrapper-33" class="sp-pcp-section sp-pcp-container pcp-wrapper-33 pcp-carousel-wrapper pcp_same_height standard" data-sid="33" data-lang=""><h2 class="pcp-section-title">More Info </h2>
        <div class="moreInfo-slider owl-carousel owl-theme">
                <div class="item">
                    <div class="item-img">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/more-info/Samuel-George-130.jpg" alt="" />
                    </div>
                    <div class="_info_content">
                        <div class="_content">
                            <h2 class="_title"><a href="#">DIVERSITY & INCLUSION</a></h2>
                            <div class="btn-cont">
                                <a href="#" class="btn-gold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-img">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/more-info/moreinfo2.jpg" alt="" />
                    </div>
                    <div class="_info_content">
                        <div class="_content">
                            <h2 class="_title"><a href="#">KARMACEUTICAL’S ELIXIR BAR</a></h2>
                            <div class="btn-cont">
                                <a href="#" class="btn-gold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-img">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/more-info/Samuel-George-190.jpg" alt="" />
                    </div>
                    <div class="_info_content">
                        <div class="_content">
                            <h2 class="_title"><a href="#">VISION</a></h2>
                            <div class="btn-cont">
                                <a href="#" class="btn-gold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-img">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/more-info/moreinfo4.jpg" alt="" />
                    </div>
                    <div class="_info_content">
                        <div class="_content">
                            <h2 class="_title"><a href="#">PARTNERS & SUPPORTERS</a></h2>
                            <div class="btn-cont">
                                <a href="#" class="btn-gold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-img">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/more-info/moreinfo5.jpg" alt="" />
                    </div>
                    <div class="_info_content">
                        <div class="_content">
                            <h2 class="_title"><a href="#">SUSTAINABILITY</a></h2>
                            <div class="btn-cont">
                                <a href="#" class="btn-gold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div><!-- close .container -->
    </div><!-- close .main-content -->
</div>
</div>
</div>

<?php
get_footer();
