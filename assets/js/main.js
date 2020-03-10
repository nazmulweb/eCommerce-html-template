(function ($) {
    "use strict";

    new WOW().init();  

    /*---background image---*/
	function dataBackgroundImage() {
		$('[data-bgimg]').each(function () {
			var bgImgUrl = $(this).data('bgimg');
			$(this).css({
				'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
			});
		});
    }
    
    $(window).on('load', function () {
        dataBackgroundImage();
    });
    
    /*---stickey menu---*/
    $(window).on('scroll',function() {    
           var scroll = $(window).scrollTop();
           if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
           }else{
            $(".sticky-header").addClass("sticky");
           }
    });
    
    /*---jQuery MeanMenu---*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "9901",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });

    /*---slider activation---*/
    $('.slider_area').owlCarousel({
        animateOut: 'fadeOut',
        autoplay: true,
		loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots:true,
        navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
    });

    if(window.innerWidth < 768){
        $(".slider_overlay").css({"background-color": "black", "position": "absolute", "width": "100%", "height": "100%", "top": 0, "left": 0, "z-index": 0, "opacity": ".6"})
    }
    
    /*---product column5 activation---*/
       $('.buy_one_carousel').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 3,
        margin:20,
        dots:false,
        navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            576:{
				items:2,
			},
            768:{
				items:2,
			},
            992:{
				items:3,
			},
            1200:{
				items:3,
			},
		  }
    });
    
    /*---product column5 activation---*/
       $('.gallery').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        autoplay: true,
		loop: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 3,
        margin:20,
        dots:false,
        navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            576:{
				items:2,
			},
            768:{
				items:2,
			},
            992:{
				items:3,
			},
            1200:{
				items:3,
			},
		  }
    });
    
    /*---product column5 activation---*/
    $('.product_column5').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
    autoplay: true,
    loop: false,
    nav: true,
    autoplay: false,
    autoplayTimeout: 8000,
    items: 4,
    margin:20,
    dots:false,
    navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
    responsiveClass:true,
    responsive:{
            0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:3,
        },
        992:{
            items:4,
        },
        1200:{
            items:4,
        },


        }
    });
    
    /*---product column5 activation---*/
    $('.packages').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            autoplay: true,
            loop: false,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 4,
            margin:20,
            dots:false,
            navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:3,
                },
                1200:{
                    items:3,
                },


                }
    });

     /*---blog column4 activation---*/
    $('.blog_column4').owlCarousel({
		loop: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 2,
        dots:true,
        margin:15,
        navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            768:{
				items:2,
			},
             992:{
				items:2,
			}, 
            1200:{
				items:2,
			}, 
		  }
    });
    
    // active form validation
    $("#login").validate();

    // reset form validation
    $("#reset-password").validate();

    // validate signup form
    $("#register").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone_number: "required",
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email",
            phone_number: "Please enter your phone number",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
        }
    });

    // validate change password form
    $("#change-password").validate({
        rules: {
            old_password: {
                required: true,
            },
            new_password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#new_password"
            },
        },
        messages: {
            old_password: "Please enter your old password",
            new_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
        }
    });

 // validate contact us form
    $("#register").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone_number: "required",
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email",
            phone_number: "Please enter your phone number",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
        }
    });


    
    // ======== datatable active js ==========

    $('#table_id').DataTable();


    // flavor hover
    $('#flavoer_1').hover(function(){
        $('.flavor_ice img').attr('src','./assets/img/product/learge_ice_cream/1.png'); 
    });

    $('#flavoer_2').mouseover(function(){
        $('.flavor_ice img').attr('src','./assets/img/product/learge_ice_cream/2.png'); 
    });

    $('#flavoer_3').mouseover(function(){
        $('.flavor_ice img').attr('src','./assets/img/product/learge_ice_cream/3.png'); 
    });

    $('#flavoer_4').mouseover(function(){
        $('.flavor_ice img').attr('src','./assets/img/product/learge_ice_cream/4.png'); 
    });

    $('#flavoer_5').mouseover(function(){
        $('.flavor_ice img').attr('src','./assets/img/product/learge_ice_cream/5.png'); 
    });

    $('#flavoer_6').mouseover(function(){
        $('.flavor_ice img').attr('src','./assets/img/product/learge_ice_cream/6.png'); 
    });
    /*---single product activation---*/
    $('.single-product-active').owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        margin:15,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            320:{
				items:2,
			},
            992:{
				items:3,
			},
            1200:{
				items:4,
			},


		  }
    });
 
   
    /*---product navactive activation---*/
    $('.product_navactive').owlCarousel({
        autoplay: true,
		loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
		responsive:{
				0:{
				items:1,
			},
            250:{
				items:2,
			},
            480:{
				items:3,
			},
            768:{
				items:4,
			},
		  
        }
    });

    $('.modal').on('shown.bs.modal', function (e) {
        $('.product_navactive').resize();
    })

    $('.product_navactive a').on('click',function(e){
      e.preventDefault();

      var $href = $(this).attr('href');

      $('.product_navactive a').removeClass('active');
      $(this).addClass('active');

      $('.product-details-large .tab-pane').removeClass('active show');
      $('.product-details-large '+ $href ).addClass('active show');

    })
       
    /*--- video Popup---*/
    $('.video_popup').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    
    /*--- Magnific Popup Video---*/
    $('.port_popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    /*--- Tooltip Active---*/
    $('.action_links ul li a,.add_to_cart a,.footer_social_link ul li a').tooltip({
            animated: 'fade',
            placement: 'top',
            container: 'body'
    });
    
    /*--- niceSelect---*/
     $('.select_option').niceSelect();
    
    /*---  Accordion---*/
    $(".faequently-accordion").collapse({
        accordion:true,
        open: function() {
        this.slideDown(300);
      },
      close: function() {
        this.slideUp(300);
      }		
    });	  

    /*--- counterup activation ---*/
    $('.counter_number').counterUp({
        delay: 10,
        time: 1000
    });

    /*---  ScrollUp Active ---*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });   
    
    /*---countdown activation---*/
		
	 $('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<div class="countdown_area"><div class="single_countdown"><div class="countdown_number">%D</div><div class="countdown_title">days</div></div><div class="single_countdown"><div class="countdown_number">%H</div><div class="countdown_title">hours</div></div><div class="single_countdown"><div class="countdown_number">%M</div><div class="countdown_title">mins</div></div><div class="single_countdown"><div class="countdown_number">%S</div><div class="countdown_title">secs</div></div></div>'));     
               
       });
	});	
    
    /*---slider-range here---*/
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "Tk" + ui.values[ 0 ] + " - Tk" + ui.values[ 1 ] );
       }
    });
    $( "#amount" ).val( "Tk" + $( "#slider-range" ).slider( "values", 0 ) +
       " - Tk" + $( "#slider-range" ).slider( "values", 1 ) );
    
    /*---niceSelect---*/
     $('.niceselect_option').niceSelect();
    
    /*------photo upload------*/
    var readURL = function(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('.image-preview').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
    }
    
	$(".custom-file-input").on('change', function(){
		readURL(this);
    });

    /*------end photo upload------*/
    
    /*---portfolio Isotope activation
      $('.portfolio_gallery').imagesLoaded( function() {

        var $grid = $('.portfolio_gallery').isotope({
           itemSelector: '.gird_item',
            percentPosition: true,
            masonry: {
                columnWidth: '.gird_item'
            }
        });

          
        ilter items on button click
        $('.portfolio_button').on( 'click', 'button', function() {
           var filterValue = $(this).attr('data-filter');
           $grid.isotope({ filter: filterValue });
            
           $(this).siblings('.active').removeClass('active');
           $(this).addClass('active');
        });
       
    });---*/

    /*---slide toggle activation---*/
   $('.mini_cart_wrapper > a').on('click', function(event){
        if($(window).width() < 991){
            $('.mini_cart').slideToggle('medium');
        }
    });
    
    /*---flavor slideToggle---*/
    $(".flavor_title").on("click", function() {
        $(this).toggleClass('active');
        $('.flavor_menu_toggle').slideToggle('medium');
    }); 
    
    /*---categories slideToggle---*/
    $(".categories_title").on("click", function() {
        $(this).toggleClass('active');
        $('.categories_menu_toggle').slideToggle('medium');
    }); 

    /*---widget sub categories---*/
    $(".widget_sub_categories > a").on("click", function() {
        $(this).toggleClass('active');
        $('.widget_dropdown_categories').slideToggle('medium');
    }); 
    
    /*---addClass/removeClass categories---*/
   $("#cat_toggle.has-sub > a").on("click", function() {
            $(this).removeAttr('href');
            $(this).toggleClass('open').next('.categorie_sub').toggleClass('open');
            $(this).parents().siblings().find('#cat_toggle.has-sub > a').removeClass('open');
    });
    
    
    /*---MailChimp---*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

    });
    function mailChimpResponse(resp) {

        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);

        } else if(resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }  
    }
    
    /*---Category menu---*/
    function categorySubMenuToggle(){
        $('.categories_menu_toggle li.menu_item_children > a').on('click', function(){
        if($(window).width() < 991){
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        }
        });
        $('.categories_menu_toggle li.menu_item_children > a').append('<span class="expand"></span>');
    }
    categorySubMenuToggle();

    /*---shop grid activation---*/
    $('.shop_toolbar_btn > button').on('click', function (e) {
        
		e.preventDefault();
        
        $('.shop_toolbar_btn > button').removeClass('active');
		$(this).addClass('active');
        
		var parentsDiv = $('.shop_wrapper');
		var viewMode = $(this).data('role');
        
        
		parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

		if(viewMode == 'grid_3'){
			parentsDiv.children().addClass('col-lg-4 col-md-4 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');
            
		}

		if(viewMode == 'grid_4'){
			parentsDiv.children().addClass('col-lg-3 col-md-4 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
		}
        
        if(viewMode == 'grid_list'){
			parentsDiv.children().addClass('col-12').removeClass('col-lg-3 col-lg-4 col-md-4 col-sm-6 col-cust-5');
		}
            
	});
  
    
   /*---Newsletter Popup activation---*/
   
       // setTimeout(function() {
       //      if($.cookie('shownewsletter')==1) $('.newletter-popup').hide();
       //      $('#subscribe_pemail').keypress(function(e) {
       //          if(e.which == 13) {
       //              e.preventDefault();
       //              email_subscribepopup();
       //          }
       //          var name= $(this).val();
       //            $('#subscribe_pname').val(name);
       //      });
       //      $('#subscribe_pemail').change(function() {
       //       var name= $(this).val();
       //                $('#subscribe_pname').val(name);
       //      });
       //      //transition effect
       //      if($.cookie("shownewsletter") != 1){
       //          $('.newletter-popup').bPopup();
       //      }
       //      $('#newsletter_popup_dont_show_again').on('change', function(){
       //          if($.cookie("shownewsletter") != 1){
       //              $.cookie("shownewsletter",'1')
       //          }else{
       //              $.cookie("shownewsletter",'0')
       //          }
       //      });
       //  }, 2500);
       //
    
    /*---canvas menu activation---*/
    $('.canvas_open').on('click', function(){
        $('.Offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
    });
    
    $('.canvas_close,.off_canvars_overlay').on('click', function(){
        $('.Offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });
    
    
    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    
    $offcanvasNavSubMenu.slideUp();
    
    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
        	$this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
        	$this.toggleClass('menu-open');
        }
    });
    
    
})(jQuery);	
