<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<?php wp_head(); ?>
</head>

<?php
	$navbar_scheme   = get_theme_mod( 'navbar_scheme', 'navbar-light bg-light' ); // Get custom meta-value.
	$navbar_position = get_theme_mod( 'navbar_position', 'static' ); // Get custom meta-value.

	$search_enabled  = get_theme_mod( 'search_enabled', '1' ); // Get custom meta-value.
?>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<a href="#main" class="visually-hidden-focusable"><?php esc_html_e( 'Skip to main content', 'healing-by-keren' ); ?></a>

<div id="wrapper">

	<div id="pre-loader" preload="preload">
        <div class="loading-msg">The medicine you seek,<br>is seeking you</div>
        <div class="loading-msg2">Take a deep breath while we load your experience</div>
    </div>
    
	
        <!-- <div id="animation-container"></div>-->
    
		<?php if(is_page_template('home-page.php')){ ?>
        <div id="animation-container">
    
        </div> 
		<?php } else { ?>
			<div class="light-bg"></div>
			<div class="site-borders">
			
				<div class="top-left-border corner-border" style="transform:translate(0px, 0px);"></div>
				<div class="top-right-border corner-border" style="transform:scale(-1,1) translate(0px, 0px);"></div>

				<div class="bottom-left-border corner-border" style="transform: scale(1,-1) translate(0px, 0px);"></div>
				<div class="bottom-right-border corner-border" style="transform: scale(-1,-1) translate(0px, 0px);"></div>
			</div>
		<?php } ?>
		<nav class="site-navigation" data-850="top[swing]:-100%;" data-980="top:0%;">
    
                <a class="header-buy-tix-btn" href="#">BUY TICKETS</a>
    
                <div class="container-fluid">
                    <div class="row">
                        <div class="site-navigation-inner col-sm-12">



                            <div class="nav-div">
                                <div class="navbar navbar-expand-lg">


								<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle navigation', 'healing-by-keren' ); ?>">
									<span class="navbar-toggler-icon"></span>
								</button>

								<div id="navbar" class="collapse navbar-collapse">
									<?php
										// Loading WordPress Custom Menu (theme_location).
										wp_nav_menu(
											array(
												'menu_class'     => 'navbar-nav me-auto',
												'container'      => '',
												'fallback_cb'    => 'WP_Bootstrap_Navwalker::fallback',
												'walker'         => new WP_Bootstrap_Navwalker(),
												'theme_location' => 'main-menu',
											)
										);

										if ( '1' === $search_enabled ) :
									?>
											<form class="search-form my-2 my-lg-0" role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
												<div class="input-group">
													<input type="text" name="s" class="form-control" placeholder="<?php esc_attr_e( 'Search', 'healing-by-keren' ); ?>" title="<?php esc_attr_e( 'Search', 'healing-by-keren' ); ?>" />
													<button type="submit" name="submit" class="btn btn-outline-secondary"><?php esc_html_e( 'Search', 'healing-by-keren' ); ?></button>
												</div>
											</form>
									<?php
										endif;
									?>
								</div><!-- /.navbar-collapse -->



                                    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
            
                                    <div id="navbar" class="collapse navbar-collapse">
                                        <ul id="menu-main-menu" class="navbar-nav me-auto">
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-6" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-6 dropdown"><a title="Client Type" href="#" data-bs-toggle="dropdown" class="nav-link dropdown-toggle" aria-expanded="false">About Me<span class="caret"></span></a>
                                                <ul role="menu" class="dropdown-menu">
                                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-7" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7"><a title="Home Owners" href="#" class="dropdown-item">Home Owners</a></li>
                                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-8" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8"><a title="Building Owners" href="#" class="dropdown-item">Building Owners</a></li>
                                                    <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-9" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9"><a title="Developers" href="#" class="dropdown-item">Developers</a></li>
                                                </ul>
                                            </li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-10" class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-10"><a title="Services" href="#" class="nav-link">Theta Healing</a></li>
                                            
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-12" class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-12"><a title="Blog" href="#" class="nav-link">Sound Meditation</a></li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-11" class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-11 logo"><a title="About Us" href="#" class="nav-link"></a></li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-121" class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-12"><a title="Blog" href="#" class="nav-link">Cleansing</a></li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-13" class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-13"><a title="Career" href="#" class="nav-link">Prices</a></li>
                                            <li itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement" id="menu-item-14" class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-13"><a title="Career" href="#" class="nav-link">Contact Me</a></li>
                                        </ul>						
                                    </div> -->
                                </div>  
                            </div>

                        </div>
                    </div>
                </div>
    
                <a href="/" class="mobile-logo"></a>
    
                <div class="social-menu-header">
                    <a class="social-item instagram" href="#" target="_blank"></a>
                    <a class="social-item facebook" href="#" target="_blank"></a>
                </div>
    
        </nav>
	

<!--- SVGs ---------------------- -->
<svg width="0" height="0"  >
        <defs>
            <clipPath id="sectionShape" clipPathUnits="objectBoundingBox">
    
             <path  d="M0.496,0.004 C0.5,0,0.504,0,0.509,0.004 C0.522,0.017,0.536,0.042,0.548,0.099 C0.554,0.125,0.559,0.153,0.563,0.198 C0.564,0.212,0.566,0.215,0.568,0.216 C0.578,0.222,0.589,0.227,0.599,0.237 C0.627,0.264,0.655,0.295,0.682,0.379 C0.684,0.388,0.687,0.392,0.69,0.392 C0.724,0.4,0.757,0.404,0.79,0.415 C0.818,0.424,0.847,0.439,0.875,0.451 C0.896,0.46,0.918,0.475,0.939,0.495 C0.952,0.507,0.964,0.52,0.977,0.542 C0.988,0.562,1,0.686,1,0.805 C1,0.867,1,0.917,1,0.973 C1,0.993,1,1,0.998,1 C0.997,1,0.997,1,0.996,1 C0.666,1,0.337,1,0.007,1 C0.006,1,0.003,1,0.001,1 C0.001,0.917,0,0.837,0.003,0.754 C0.007,0.629,0.018,0.557,0.033,0.535 C0.059,0.496,0.085,0.475,0.111,0.461 C0.151,0.439,0.191,0.423,0.23,0.409 C0.255,0.4,0.28,0.393,0.305,0.394 C0.319,0.396,0.331,0.358,0.343,0.327 C0.362,0.282,0.38,0.266,0.399,0.246 C0.411,0.232,0.424,0.222,0.437,0.216 C0.438,0.215,0.439,0.215,0.44,0.205 C0.449,0.106,0.462,0.074,0.475,0.036 C0.482,0.016,0.489,0.011,0.496,0.004"/>
            </clipPath>
        </defs>
    </svg>
    
    <svg width="0" height="0"  >
        <defs>
            <clipPath id="sectionShape2" clipPathUnits="objectBoundingBox">
    
             <path  d="M0.001,0 H0.999 C1,0.009,1,0.018,1,0.029 C1,0.179,1,0.33,1,0.479 C0.998,0.599,0.993,0.67,0.985,0.717 C0.977,0.768,0.968,0.784,0.96,0.799 C0.947,0.821,0.934,0.844,0.921,0.858 C0.911,0.869,0.902,0.877,0.892,0.889 C0.871,0.917,0.85,0.92,0.829,0.94 C0.821,0.947,0.812,0.945,0.804,0.95 C0.793,0.956,0.781,0.964,0.77,0.969 C0.742,0.98,0.713,0.985,0.685,0.988 C0.678,0.989,0.67,0.992,0.663,0.993 C0.567,1,0.471,1,0.375,0.998 C0.353,0.997,0.33,0.997,0.308,0.992 C0.288,0.987,0.268,0.988,0.248,0.978 C0.223,0.967,0.198,0.952,0.173,0.939 C0.155,0.929,0.136,0.921,0.118,0.901 C0.094,0.874,0.069,0.853,0.045,0.804 C0.038,0.789,0.031,0.78,0.024,0.748 C0.011,0.687,0.002,0.576,0.001,0.372 C0.001,0.248,0,0.124,0.001,0"/>
            </clipPath>
        </defs>
    </svg>
    
    <svg width="0" height="0"  >
        <defs>
            <clipPath id="menubarShape" clipPathUnits="objectBoundingBox">
    
             <path  d="M0,0.937 C0,0.641,0,0.344,0,0.048 C0,0.009,0.001,0,0.003,0 C0.269,0.001,0.536,0.001,0.802,0.001 H1 C1,0.012,1,0.025,1,0.037 C1,0.324,1,0.611,1,0.899 C1,0.911,1,0.923,1,0.939 C0.998,0.931,0.997,0.909,0.996,0.888 C0.99,0.716,0.981,0.612,0.969,0.576 C0.967,0.571,0.965,0.569,0.964,0.569 C0.949,0.563,0.935,0.582,0.921,0.597 C0.912,0.607,0.902,0.612,0.893,0.622 C0.88,0.637,0.867,0.636,0.854,0.651 C0.854,0.652,0.853,0.653,0.853,0.652 C0.842,0.646,0.831,0.663,0.82,0.664 C0.801,0.667,0.781,0.683,0.762,0.688 C0.753,0.69,0.744,0.688,0.735,0.696 C0.719,0.71,0.702,0.696,0.686,0.708 C0.673,0.718,0.659,0.71,0.645,0.716 C0.613,0.73,0.58,0.726,0.548,0.726 C0.545,0.726,0.543,0.738,0.541,0.767 C0.537,0.827,0.533,0.873,0.528,0.914 C0.518,1,0.509,1,0.496,0.993 C0.484,0.96,0.473,0.899,0.464,0.764 C0.462,0.734,0.46,0.726,0.457,0.726 C0.429,0.727,0.402,0.734,0.374,0.724 C0.353,0.717,0.331,0.725,0.309,0.713 C0.297,0.707,0.285,0.712,0.274,0.705 C0.256,0.693,0.238,0.69,0.221,0.683 C0.205,0.676,0.19,0.669,0.174,0.662 C0.16,0.655,0.146,0.65,0.132,0.641 C0.115,0.63,0.099,0.617,0.082,0.598 C0.067,0.582,0.053,0.563,0.038,0.569 C0.023,0.574,0.011,0.674,0.004,0.874 C0.003,0.898,0.003,0.932,0,0.937"/>
            </clipPath>
        </defs>
    </svg>
	<?php if(is_page_template('home-page.php')){ ?>
	<div id="skrollr-body"><!-- begin skrollr-body -->
	<div class="main-content masked-overflow"  id="all-page-content" style="margin-top:2750px;">

	<?php } else { ?>
		<div class="main-content masked-overflow"  id="all-page-content" style="margin-top:150px;">
	<?php } ?>