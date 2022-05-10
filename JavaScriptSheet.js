$(document).ready(function() {
	
	//HEADER STUFFZ
		
		//The browse tab will change back to white when hovering over other tabs 
			$("#not-highlighted-page1, #not-highlighted-page2, #not-highlighted-page3").hover(function() {
				$("#highlighted-page a").css("color", "var(--light)");}, 
				function() {
				$("#highlighted-page a").css("color", "var(--cyan)");
			});

		//The search icon will turn cyan when on hover
			$(".search-profile").hover(function() {
			$(".search-btn").css("color", "var(--cyan)");}, 
			function() {
			$(".search-btn").css("color", "var(--light)");
			});

		//The profile icon will turn cyan when on hover
			$(".profile-icon").hover(function() {
			$("#actual-profile-icon").css("color", "var(--cyan)");}, 
			function() {
			$("#actual-profile-icon").css("color", "var(--light)");
			});
	
	//top sliders hover function
		var activeSliderBanner = "#Writing";
		var activeSliderSlider = "#Writing-Slider"
		$(activeSliderBanner).css("boxShadow", "-55px 8px 0 10px rgb(30,30,30), 10px 8px 0 10px rgb(30,30,30)");
		$(activeSliderBanner).css("backgroundColor", "rgb(30,30,30)");
		$(activeSliderSlider).addClass("my-highlighted-slider");
		$(activeSliderSlider).removeClass("my-unhighlighted-slider");
		function topSliderHover(slider /*slider's ID*/, section/*list element's ID*/, image/*image url()*/, name/*name of slider in caps*/, rating/*associated top rating*/) {
			if (activeSliderBanner!=section) {
				$("#top-image").css("backgroundImage", "linear-gradient(to right, rgba(0,0,0,0) 50%, rgb(30,30,30)), "+image);
				$("#top-image-text").html("TOP "+name+" RATING <br> "+rating);
				$(section).css("backgroundColor", "rgb(30,30,30)");
				$(section).css("boxShadow", "-55px 8px 0 10px rgb(30,30,30), 10px 8px 0 10px rgb(30,30,30)");
				$(activeSliderBanner).css("backgroundColor", "");
				$(activeSliderBanner).css("boxShadow", "");
				$(slider).addClass("my-highlighted-slider");
				$(activeSliderSlider).addClass("my-unhighlighted-slider");
				$(activeSliderSlider).removeClass("my-highlighted-slider");
				activeSliderBanner = section;
				activeSliderSlider = slider;
			}
		}
		$("#Writing").mouseenter(function() {
			topSliderHover("#Writing-Slider", "#Writing", "url(AttackOnTitanBanner.jpg)", "WRITING", "9.4");
		});
		$("#Plot").mouseenter(function() {
			topSliderHover("#Plot-Slider", "#Plot", "url(BunnyGirlSenpaiBanner.jpg)", "PLOT", "9.2");
		});
		$("#Art-Style").mouseenter(function() {
			topSliderHover("#Art-Style-Slider", "#Art-Style", "url(OnePieceBanner.jpg)", "ART STYLE", "9.1");
		});
		$("#Animation").mouseenter(function() {
			topSliderHover("#Animation-Slider", "#Animation", "url(KillLaKillBanner.jpg)", "ANIMATION", "9.7");
		});
		$("#Music").mouseenter(function() {
			topSliderHover("#Music-Slider", "#Music", "url(YourLieInAprilBanner.jpeg)", "MUSIC", "9.6");
		});

	//rows

		//scroll buttons 
			$('.carousel_box').css('opacity', '0');


			$('#right_box').hover(function(){
				$('#right_box').css('opacity', '0.6');
				$('#carousel_button--next').css('opacity','1');
			},

			function(){
				$('.carousel_box').css('opacity','0');
			});

			$('#left_box').hover(function(){
				$('#left_box').css('opacity','0.6');
				$('#carousel_button--prev').css('opacity','1');
			},

			function(){
				$('.carousel_box').css('opacity','0');
			});

		//scroll Function
			var scrollDuration = 400;
			var rowMarginsSize = parseInt($('.row').css('margin-left')) + parseInt($('.row').css('margin-right')); 
			var scrollDistanceAdaptable = $(window).width() - rowMarginsSize;
			var scrollDistancePositive = '+=' + scrollDistanceAdaptable;
			var scrollDistanceNegative = '-=' + scrollDistanceAdaptable;

			$('#right_box').click(function()
			{
				$('.row').animate( { scrollLeft: scrollDistancePositive }, scrollDuration);
			});


			$('#left_box').click(function()
			{
			    $('.row').animate( { scrollLeft: scrollDistanceNegative }, scrollDuration);
			});
		
		//Row Item Hover 
			var timer;

			$(".thumbnail-wrap").hover(function(){
					var hoverItem = ($(this).children().eq(1));
					timer = setTimeout(function(){
						//Changing Image
							var sidebarHover = (hoverItem.parent().parent().siblings());
		  					var anchorThumb = (hoverItem.parent().parent());
		  					var thumb = hoverItem;
		  					var thumbFig = (hoverItem.parent());

			  				hoverItem.css('top', '0');
			  				(hoverItem.parent().parent()).css('z-index', '1');
			  				$('.row').css('overflow', 'visible');
			  				hoverItem.fadeIn(100);

			  			//Expanding Thumbnail

			  				($(hoverItem).parent().parent()).animate({
			  					height: '337.5' 
			  				}, 250);

			  				($(hoverItem).parent().parent()).animate({
			  					width: '600' 
			  				}, 150);
			  			
			  			//Expanding Inner
			  				(hoverItem.parent()).css('width', '600');
			  				(hoverItem.parent()).css('height', '337.5');

			  			//Sidebar
			  				sidebarHover.css('z-index', '1');
			  				sidebarHover.css('transition-duration', '0.2s');
			  				
			  				setTimeout(function(){
			  					sidebarHover.css({
				  					'-webkit-transform': 'translate(400px, -34.375px)',
				  					'-ms-transform': 'translate(400px, -34.375px)',
				  					'transform': 'translate(400px, -34.375px)',
			  					});
			  				}, 250);

			  					sidebarHover.animate({
					  				width: '150',
					  				height: '281.25'
					  			}, 200);

				  	}, 800, hoverItem);

	  			}, function(){
	  				//Changing Everything Back
	  					var sidebarHover = ($(this).parent().siblings());
	  					var anchorThumb = ($(this).parent());
	  					var thumb = $(this).children().eq(1);
	  					var thumbFig = $(this);

	  					sidebarHover.css('transition-duration', '0.2s');

		  				sidebarHover.animate({
		  					width: '30',
		  					height: '250'
		  				}, 200);

		  				setTimeout(function(){
		  					sidebarHover.css({
			  					'-webkit-transform': 'translate(0,0)',
			  					'-ms-transform': 'translate(0,0)',
			  					'transform': 'translate(0,0)',
		  					});
		  				}, 200, sidebarHover);

		  				setTimeout(function(){
		  					anchorThumb.animate({
		  						width: '200' 
		  					}, 150);
		  				
		  					anchorThumb.animate({
		  						height: '300' 
		  					}, 250);
		  				}, 200, anchorThumb);

		  				setTimeout(function(){
		  					thumbFig.css('width', '200');
		  					thumbFig.css('height', '300');
		  					anchorThumb.css('z-index', '0');
		  					sidebarHover.css('z-index', '0');
		  					$('.row').css('overflow', 'hidden');
		  					thumb.css('display', 'none');
		  				}, 500, thumb, thumbFig);

		  			clearTimeout(timer);
			});
			
	//THIS IS FOR TRAILER SHOWCASE

		var scrollTrailerIndex = 1;

		//When click downButton, will shift margins down
		$(".downButton").click(
			function() {
				if (scrollTrailerIndex < 4) {
					$(".trailerVids").animate({"margin-top": "-=492px"});
					$(".trailerDescriptionGrid").animate({"margin-top": "-=492px"});
					$(scrollTrailerIndex += 1)
				} else if (scrollTrailerIndex = 4) {
					$(".trailerVids").animate({"margin-top": "0px"});
					$(".trailerDescriptionGrid").animate({"margin-top": "0px"});
					$(scrollTrailerIndex = 1);
				}
			});

		//When click upButton, will shift margins up
		$(".upButton").click(
			function() {
				if (scrollTrailerIndex > 1) {
					$(".trailerVids").animate({"margin-top": "+=492px"});
					$(".trailerDescriptionGrid").animate({"margin-top": "+=492px"});
					$(scrollTrailerIndex -= 1);
				} else if (scrollTrailerIndex = 1) {
					$(".trailerVids").animate({"margin-top": "-1476px"});
					$(".trailerDescriptionGrid").animate({"margin-top": "-1476px"});
					$(scrollTrailerIndex = 4)
				}
			});

	//HeadtoHead

			//Width of Sidebars
				var widthContainerHead = $('.image-included-sliding').width();
				var widthContainerHeadLessImgs = widthContainerHead - 824;
				var widthSidebars = widthContainerHeadLessImgs * 0.35;
					$('.sidebar-head').css('width', widthSidebars);
			//Box-between
				var widthBoxBetween = widthContainerHeadLessImgs - widthSidebars * 2;
					$('.box-between-sidebars').css('width', widthBoxBetween);
					$('.left-slot').css('marginRight', widthBoxBetween);
				var distanceInOuter = ($('.bigger-image-controls-box').width() - widthContainerHead) / 2;
				var leftBoxBetween = 412 + widthSidebars + distanceInOuter;
					$('.box-between-sidebars').css('marginLeft', leftBoxBetween);

			
			//HeadtoHead Scrollability 
				var head2HeadAllSections = $('.all-sections-head');
				var head2HeadLeftArrow = $('.arrow-left-head');
				var head2HeadRightArrow = $('.arrow-right-head');
				var buttonList = $('.head2head-controls li');

				var scrollHeadIndex = 0;

				//Right Arrow Scroll
					head2HeadRightArrow.click(function() {
						scrollHeadIndex = (scrollHeadIndex < 2) ? scrollHeadIndex + 1: 0;
						head2HeadAllSections.css('transform','translate(' + (scrollHeadIndex) * -33.3333 + '%)');
						//change buttons
							$('.scroll-button').removeAttr('id');
							buttonList[scrollHeadIndex].id='selected';
						//Z-index Management 
							head2HeadAllSections.css('z-index', '1');
						//Middle Matchup change
							function fadeIfDiff(Category /*Div containing text*/, newText /*new required text*/) {
								if (Category.text().toString() != newText) {
									Category.fadeOut(function () {
										Category.text(newText).fadeIn(1000);
									});
								}

							}
							if (scrollHeadIndex==1) {
								fadeIfDiff($('#matchup-header'), ' TV MATCHUP ');
								fadeIfDiff($('.date-change'), ' Last Release ');
								fadeIfDiff($('.length-change'), ' Episodes ');
								fadeIfDiff($('.viewership-change'), ' Streams ');
								fadeIfDiff($('#animation-change'), ' Cinematography ');
								fadeIfDiff($('#style-change'), ' Style ');
							}

							else if (scrollHeadIndex==2) {
								fadeIfDiff($('#matchup-header'), ' ANIME MATCHUP ');
								fadeIfDiff($('.date-change'), ' Last Release ');
								fadeIfDiff($('.length-change'), ' Episodes ');
								fadeIfDiff($('.viewership-change'), ' Streams ');
								fadeIfDiff($('#animation-change'), ' Animation ');
								fadeIfDiff($('#style-change'), ' Art Style ');
							}

							else {
								fadeIfDiff($('#matchup-header'), ' MOVIE MATCHUP ');
								fadeIfDiff($('.date-change'), ' Release Date ');
								fadeIfDiff($('.length-change'), ' Runtime ');
								fadeIfDiff($('.viewership-change'), ' Box Office ');
								fadeIfDiff($('#animation-change'), ' Cinematography ');
								fadeIfDiff($('#style-change'), ' Style ');
							}
					});
				//Left Arrow Scroll
					head2HeadLeftArrow.click(function() {
						scrollHeadIndex = (scrollHeadIndex > 0) ? scrollHeadIndex - 1: 2;
						head2HeadAllSections.css('transform','translate(' + (scrollHeadIndex) * -33.3333 + '%)');
						//change buttons
							$('.scroll-button').removeAttr('id');
							buttonList[scrollHeadIndex].id='selected';
						//Z-index Management 
							head2HeadAllSections.css('z-index', '1');
						//Middle Matchup change
							function fadeIfDiff(Category /*Div containing text*/, newText /*new required text*/) {
								if (Category.text().toString() != newText) {
									Category.fadeOut(function () {
										Category.text(newText).fadeIn(1000);
									});
								}

							}
							if (scrollHeadIndex==1) {
								fadeIfDiff($('#matchup-header'), ' TV MATCHUP ');
								fadeIfDiff($('.date-change'), ' Last Release ');
								fadeIfDiff($('.length-change'), ' Episodes ');
								fadeIfDiff($('.viewership-change'), ' Streams ');
								fadeIfDiff($('#animation-change'), ' Cinematography ');
								fadeIfDiff($('#style-change'), ' Style ');
							}

							else if (scrollHeadIndex==2) {
								fadeIfDiff($('#matchup-header'), ' ANIME MATCHUP ');
								fadeIfDiff($('.date-change'), ' Last Release ');
								fadeIfDiff($('.length-change'), ' Episodes ');
								fadeIfDiff($('.viewership-change'), ' Streams ');
								fadeIfDiff($('#animation-change'), ' Animation ');
								fadeIfDiff($('#style-change'), ' Art Style ');
							}

							else {
								fadeIfDiff($('#matchup-header'), ' MOVIE MATCHUP ');
								fadeIfDiff($('.date-change'), ' Release Date ');
								fadeIfDiff($('.length-change'), ' Runtime ');
								fadeIfDiff($('.viewership-change'), ' Box Office ');
								fadeIfDiff($('#animation-change'), ' Cinematography ');
								fadeIfDiff($('#style-change'), ' Style ');
							}
					
					});
				//Arrows Hover
					$('.head2head-controls span').css('opacity', '0');

					$('.head2head-controls span').hover(function () {
						$('.head2head-controls span').css('opacity', '1');
					},

					function() {
						$('.head2head-controls span').css('opacity', '0');
					});


				//Button Scroll
					$('.scroll-button').each(function (index) {
							$(this).click(function () {
								scrollHeadIndex = index;
								$('.scroll-button').removeAttr('id');
								$(this).attr('id', 'selected');
								head2HeadAllSections.css('transform','translate(' + (scrollHeadIndex) * -33.3333 + '%)');
								//Z-index Management 
									head2HeadAllSections.css('z-index', '1');
								//Middle Matchup change
									function fadeIfDiff(Category /*Div containing text*/, newText /*new required text*/) {
										if (Category.text().toString() != newText) {
											Category.fadeOut(function () {
												Category.text(newText).fadeIn(1500);
											});
										}

									}
									if (scrollHeadIndex==1) {
										fadeIfDiff($('#matchup-header'), ' TV MATCHUP ');
										fadeIfDiff($('.date-change'), ' Last Release ');
										fadeIfDiff($('.length-change'), ' Episodes ');
										fadeIfDiff($('.viewership-change'), ' Streams ');
										fadeIfDiff($('#animation-change'), ' Cinematography ');
										fadeIfDiff($('#style-change'), ' Style ');
									}

									else if (scrollHeadIndex==2) {
										fadeIfDiff($('#matchup-header'), ' ANIME MATCHUP ');
										fadeIfDiff($('.date-change'), ' Last Release ');
										fadeIfDiff($('.length-change'), ' Episodes ');
										fadeIfDiff($('.viewership-change'), ' Streams ');
										fadeIfDiff($('#animation-change'), ' Animation ');
										fadeIfDiff($('#style-change'), ' Art Style ');
									}

									else {
										fadeIfDiff($('#matchup-header'), ' MOVIE MATCHUP ');
										fadeIfDiff($('.date-change'), ' Release Date ');
										fadeIfDiff($('.length-change'), ' Runtime ');
										fadeIfDiff($('.viewership-change'), ' Box Office ');
										fadeIfDiff($('#animation-change'), ' Cinematography ');
										fadeIfDiff($('#style-change'), ' Style ');
									}



										});
					});

	//podium

		// defining podium variables

			var selectedSection = "#shows-container";	
			var smallPodiumHeight = {actualHeight: 300, subtractedHeight: 153}
			var largePodiumHeight = {actualHeight: 500, subtractedHeight: 250};
			var infoSelected = false;
			var sections = ["#movies-container","#shows-container","#anime-container"];

		// defining podium functions

			function setBarHeight(barNum, height_) {
				var element = "#podium-element-"+barNum;
				var bar = "#podium-bar-"+barNum;
				
				$(bar).css("height", "0");
				$(bar).animate({ height: height_}, 400)
			}

			function setAllBarHeights(movies,shows,anime) {
				setBarHeight("one",movies.actualHeight*0.8-movies.subtractedHeight);
				setBarHeight("two",movies.actualHeight*0.9-movies.subtractedHeight);
				setBarHeight("three",movies.actualHeight*0.7-movies.subtractedHeight);
				setBarHeight("four",shows.actualHeight*0.8-shows.subtractedHeight);
				setBarHeight("five",shows.actualHeight*0.9-shows.subtractedHeight);
				setBarHeight("six",shows.actualHeight*0.7-shows.subtractedHeight);
				setBarHeight("seven",anime.actualHeight*0.8-anime.subtractedHeight);
				setBarHeight("eight",anime.actualHeight*0.9-anime.subtractedHeight);
				setBarHeight("nine",anime.actualHeight*0.7-anime.subtractedHeight);

			}

			function showPodiumSectionTitle(section) {
				for (i in sections) {
					if (section == sections[i]) {
						$(sections[i]+ " #podium-section").show();
					}
					else {
						$(sections[i]+ " #podium-section").hide();
					}
				}
			}

			function animatePodiumShift(section) {
				if (section=="#movies-container") {
					$("#movies-container").animate({width: "700", height: "500"}, 400);
					$("#shows-container").animate({left: "900", width: "420", height:"300",},400);
					$("#anime-container").animate({left: "1420", width: "420", height: "300"},400);
				}
				else if (section=="#shows-container") {
					$("#movies-container").animate({width:"420", height:"300", left:"100"}, 400);
					$("#shows-container").animate({width:"700", height:"500", left:"620"}, 400);
					$("#anime-container").animate({width:"420", height:"300", left:"1420"}, 400);
				}
				else if (section=="#anime-container") {
					$("#movies-container").animate({width:"420", height:"300", left:"100"}, 400);
					$("#shows-container").animate({width:"420", height:"300", left:"620"}, 400);
					$("#anime-container").animate({width:"700", height:"500", left:"1140"}, 400);
				}
				else {
					$("#movies-container").animate({left: "100", width: "420", height: "300"}, 400);
					$("#shows-container").animate({left: "520", width: "420", height:"300",},400);
					$("#anime-container").animate({left: "940", width: "420", height: "300"},400);
				}
			}

		// calling intial setup functions

			setAllBarHeights(smallPodiumHeight,largePodiumHeight,smallPodiumHeight);
			showPodiumSectionTitle("#shows-container");
		
		// podium event handling
		
			$(".podium-section-container").mouseenter(function(){
				var section = "#"+this.id;
					if (! infoSelected) {
						if (section!=selectedSection) {

							if (section=="#movies-container") {
								animatePodiumShift("#movies-container")
								setAllBarHeights(largePodiumHeight,smallPodiumHeight,smallPodiumHeight);							
								selectedSection = section;
								$("#podium-section").text("MOVIES");
								$("#podiumGraphWrapper").css("backgroundImage", "linear-gradient(0deg, rgb(20,20,20) , rgba(0,0,0,0)), url(InceptionBanner.jpg)");
								showPodiumSectionTitle("#movies-container");
							}
		
							else if (section=="#shows-container") {
								animatePodiumShift("#shows-container")
								setAllBarHeights(smallPodiumHeight,largePodiumHeight,smallPodiumHeight);
								selectedSection = section;
								$("#podium-section").text("TV SHOWS");
								$("#podiumGraphWrapper").css("backgroundImage", "linear-gradient(0deg, rgb(20,20,20) , rgba(0,0,0,0)), url(WitcherBanner.jpg)");
								showPodiumSectionTitle("#shows-container");
							}
		
							else if (section=="#anime-container") {
								animatePodiumShift("#anime-container")
								setAllBarHeights(smallPodiumHeight,smallPodiumHeight,largePodiumHeight);
								selectedSection = section;
								$("#podium-section").text("ANIME");
								$("#podiumGraphWrapper").css("backgroundImage", "linear-gradient(0deg, rgb(20,20,20) , rgba(0,0,0,0)), url(DevilmanCrybabyBanner.jpg)");
								showPodiumSectionTitle("#anime-container");
							}
						}
					}
			});

			$("#podiumInfoIcon").click(function(){
				if (! infoSelected) {	
					animatePodiumShift("none")
					setAllBarHeights(smallPodiumHeight,smallPodiumHeight,smallPodiumHeight);
					showPodiumSectionTitle("none");
					$("#podium-info").animate({right: "0"})
					$("#podiumInfoIcon img").attr("src", "HideWhiteChevron.png")
					infoSelected = true;
				}

				else if (infoSelected) {
					if (selectedSection == "#movies-container") {
						setAllBarHeights(largePodiumHeight,smallPodiumHeight,smallPodiumHeight);					
					}
					else if (selectedSection == "#shows-container") {
						setAllBarHeights(smallPodiumHeight,largePodiumHeight,smallPodiumHeight);					
					}
					else if (selectedSection == "#anime-container") {
						setAllBarHeights(smallPodiumHeight,smallPodiumHeight,largePodiumHeight);					
					}
					showPodiumSectionTitle(selectedSection);
					animatePodiumShift(selectedSection);
					$("#podium-info").animate({right: "-500"})
					$("#podiumInfoIcon img").attr("src", "QuestionMarkIcon.png")
					infoSelected = false;
				}
			});
	
	//MOVIE INFO PAGE
		//This is for the trailer carousel scroll function on the movie info page
			var scrollTrailerIndex = 1;

			$("#movieInfoTrailerLeftButton").click(
			function() {
				if (scrollTrailerIndex > 1) {
					$(".movieInfoTrailerCarousel").animate({"margin-left": "+=1150px"});
					$(scrollTrailerIndex -= 1);
				} else if (scrollTrailerIndex < 2) {
					$(scrollTrailerIndex = 1)
				} 
			});

			$("#movieInfoTrailerRightButton").click(
			function() {
				if (scrollTrailerIndex < 3) {
						$(".movieInfoTrailerCarousel").animate({"margin-left": "-=1150px"});
						$(scrollTrailerIndex += 1);
					} else if (scrollTrailerIndex = 3) {
						$(scrollTrailerIndex = 3)
					}
				});

		//This is for the cast carousel scroll function on the movie info page
			var scrollCastIndex = 1;

			$("#movieInfoCastLeftButton").click(
				function() {
					if (scrollCastIndex > 1) {
						$(".movieInfoCastCarousel").animate({"margin-left": "+=984px"});
						$(scrollCastIndex -= 1);
					} else if (scrollCastIndex < 2) {
						$(scrollCastIndex = 1)
					}
				});

			$("#movieInfoCastRightButton").click(
				function() {
					if (scrollCastIndex < 2) {
						$(".movieInfoCastCarousel").animate({"margin-left": "-=984px"});
						$(scrollCastIndex += 1);
					} else if (scrollCastIndex > 1) {
						$(scrollCastIndex = 2)
					}
				});
	
	
	// --------------------- THIS IS FOR FILTER DROPDOWN MENU ---------------------
		//Clicking on name of type or genre will highlight name, clicking again will unhighlight
			//This is for the movie/tv ones
				$(".fd-column a").click(
					function() {
						if ($(this).hasClass("fd-column-a")) {
							$(this).removeClass("fd-column-a");
							$(this).addClass("fd-column-click");
						} else {
							$(this).addClass("fd-column-a");
							$(this).removeClass("fd-column-click");
						}
				});

			//This is for the anime ones
				$(".fd-ani-column1 a, .fd-ani-column2 a").click(
					function() {
						if ($(this).hasClass("fd-ani-column-a")) {
							$(this).removeClass("fd-ani-column-a");
							$(this).addClass("fd-column-click");
						} else {
							$(this).addClass("fd-ani-column-a");
							$(this).removeClass("fd-column-click");
						}
				});


		//Clicking on name of type or genre will display the darkcyan tab on top. Clicking again will hide
			$(".fd-column-a, .fd-ani-column1 a, .fd-ani-column2 a").click(
				function() {
					var fdID = $(this).attr("id");
					if ($("#fd-"+fdID).hasClass("fd-header-content-li")) {
						$("#fd-"+fdID).removeClass("fd-header-content-li");
						$("#fd-"+fdID).addClass("fd-header-content-li-click");
					} else {
						$("#fd-"+fdID).addClass("fd-header-content-li");
						$("#fd-"+fdID).removeClass("fd-header-content-li-click");
					}
			});





		//Clicking on small x will make tab display:none and will unhighlight name in filter dropdown menu
			//This will remove highlight in the filter dropdown
				$(".fd-header-content span").click(
					function() {
						var exID = $(this).attr("id");
						if ($(".fd-column #"+exID).hasClass("fd-column-a")) {
							$(".fd-column #"+exID).removeClass("fd-column-a");
							$(".fd-column #"+exID).addClass("fd-column-click");
						} else {
							$(".fd-column #"+exID).addClass("fd-column-a");
							$(".fd-column #"+exID).removeClass("fd-column-click");
						}
				});

			//This will remove the tab display in the header for the movies/tv
				$(".fd-header-content span").click(
					function() {
						var exID = $(this).attr("id");
						if ($("#fd-"+exID).hasClass("fd-header-content-li")) {
							$("#fd-"+exID).removeClass("fd-header-content-li");
							$("#fd-"+exID).addClass("fd-header-content-li-click");
						} else {
							$("#fd-"+exID).addClass("fd-header-content-li");
							$("#fd-"+exID).removeClass("fd-header-content-li-click");
						}
				});

			//This is to remove anime highlight
				$(".fd-header-content span").click(
					function() {
						var exID = $(this).attr("id");
						if ($(".fd-ani-column1 #"+exID).hasClass("fd-ani-column-a")) {
							$(".fd-ani-column1 #"+exID).removeClass("fd-ani-column-a");
							$(".fd-ani-column1 #"+exID).addClass("fd-column-click");
						} else {
							$(".fd-ani-column1 #"+exID).addClass("fd-ani-column-a");
							$(".fd-ani-column1 #"+exID).removeClass("fd-column-click");
						}
				});

				$(".fd-header-content span").click(
					function() {
						var exID = $(this).attr("id");
						if ($(".fd-ani-column2 #"+exID).hasClass("fd-ani-column-a")) {
							$(".fd-ani-column2 #"+exID).removeClass("fd-ani-column-a");
							$(".fd-ani-column2 #"+exID).addClass("fd-column-click");
						} else {
							$(".fd-ani-column2 #"+exID).addClass("fd-ani-column-a");
							$(".fd-ani-column2 #"+exID).removeClass("fd-column-click");
						}
				});
	
	//rankings table


		var scoreElements = $(".initial-rating-input");
		var lastClickedValue = "-";
		var topRankingsTable = {name:"#top-rankings-table-div", rowAddCount:3, scoreElements:$("#top-rankings-table-div .initial-rating-input")};
		var myRankingsTable = {name:"#my-rankings-table-div", rowAddCount:3, scoreElements:$("#my-rankings-table-div .initial-rating-input")};
		var currentTable = myRankingsTable;
		
		
		//this is a function for updating the score to the sum of each row element
			function updateTotalScore(rownum) {
				var totalScore = 0;
				var x = 5*(rownum-1);
				var y = x+4;
				for (f=x;f<=y;f++) {	
					if (typeof(currentTable.scoreElements[f].value)=="string") {
						if (currentTable.scoreElements[f].value != "-") {
							
							totalScore += parseInt(currentTable.scoreElements[f].value);	
						}
						else {
							console.log("missing number");
						}
					}
					else {
						console.log("number missing");	
					}
				}

				$(currentTable.name+" .row"+rownum+" .unadjustedScore").text(String(totalScore));
			}

		//this updates the score at the start of running the website
			if (document.URL.includes("file:///C:/Users/ajluk/OneDrive/Documents/GitHub/SliderWebsiteFrontEnd/Slidings.html")) {

				for (d=1;d<=topRankingsTable.rowAddCount;d++) {
					updateTotalScore(d);
				}
				currentTable = topRankingsTable;
				for (d=1;d<=topRankingsTable.rowAddCount;d++) {
					updateTotalScore(d);
				}		
			}
			
		//this removes the value in the row element when you click on it and resets the other clicked item
			function elementClick(elem) {
				for (i=0;i<=scoreElements.length;i++) {
					if (scoreElements[i].value=="") {
						scoreElements[i].value = lastClickedValue;
					}
					if (scoreElements[i]==elem[0]) {
						lastClickedValue = elem[0].value;
						scoreElements[i].value = "";
					}
				}
			};
			scoreElements.click(function() {
				var elem = $(this);
				elementClick(elem);
			});

		//this updates the score on the change of value in a row element
			scoreElements.bind("propertychange change input paste", function() {	
				var elem = $(this)[0];

				if (elem.value != "") {
					if (isNaN(parseInt(elem.value))){
						elem.value = lastClickedValue;
					}
					else if (parseInt(elem.value)>10 || parseInt(elem.value)<0){
						elem.value = lastClickedValue;
					}
					else {
						elem.value = parseInt(elem.value);
					}
				}
				for (d=1;d<=currentTable.rowAddCount;d++) {
					updateTotalScore(d);				
				}

			});
			
		//this resets all cells to their previous value on enter key press
			document.addEventListener("keydown", function(event) {
				if (event.keyCode == 13) {
			    	for (i=0;i<=scoreElements.length;i++) {
						if (scoreElements[i].value=="") {
							scoreElements[i].value = lastClickedValue;
						}
					}
			  	}
			});

		//this centers the table as the window expands and shrinks
			function centerTable() {
				$("#rankings-table-div-div").css("marginLeft", ($(document).width()-1525)*0.5);
				/*$("#top-rankings-title-box").css("marginLeft", ($(document).width()-350)*0.5);*/
			}
			centerTable();
			setInterval(centerTable, 10);

		//this changes the table on the click of either tab
			$("#my-rankings-table-div").hide();

			$("#top-rankings-title-box").click( function() {
				$("#top-rankings-title-box").css("backgroundColor", "rgb(30,30,30)");
				$("#my-rankings-title-box").css("backgroundColor", "rgb(35,35,35)");
				$("#top-rankings-table-div").show();
				$("#my-rankings-table-div").hide();
				currentTable = topRankingsTable;
				
				for (i=0;i<=scoreElements.length;i++) {
					if (scoreElements[i].value=="") {
						scoreElements[i].value = lastClickedValue;
					}
				}
			});

			$("#my-rankings-title-box").click( function() {
				$("#top-rankings-title-box").css("backgroundColor", "rgb(35,35,35)");
				$("#my-rankings-title-box").css("backgroundColor", "rgb(30,30,30)");
				$("#top-rankings-table-div").hide();
				$("#my-rankings-table-div").show();
				currentTable = myRankingsTable;
				
				for (i=0;i<=scoreElements.length;i++) {
					if (scoreElements[i].value=="") {
						scoreElements[i].value = lastClickedValue;
					}
				}
				
				
			});

		//this adds a row to the table when the plus symbol is pressed
			$("#addNewTopRankingButton").click(function() {
				currentTable.rowAddCount++
				if (currentTable.rowAddCount%2==0) {
					$(currentTable.name+" #ranking-table tr:last").after("<tr class='tableRow'><td class='ranknum'><p class='rankactualnumber'>"+(currentTable.rowAddCount).toString()+"</p></td><td class='col1 row"+(currentTable.rowAddCount).toString()+" row-even'></td><td class='col2 row"+(currentTable.rowAddCount).toString()+" row-even'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col3 row"+(currentTable.rowAddCount).toString()+" row-even'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col4 row"+(currentTable.rowAddCount).toString()+" row-even'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col5 row"+(currentTable.rowAddCount).toString()+" row-even'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col6 row"+(currentTable.rowAddCount).toString()+" row-even'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col7 row"+(currentTable.rowAddCount).toString()+" row-even'><div class='unadjustedScore'>0</div><div id='score-divider'>|</div><div class='adjustedScore'>0</div></td></tr>");
				}
				else {
					$(currentTable.name+" #ranking-table tr:last").after("<tr class='tableRow'><td class='ranknum'><p class='rankactualnumber'>"+(currentTable.rowAddCount).toString()+"</p></td><td class='col1 row"+(currentTable.rowAddCount).toString()+" row-odd'></td><td class='col2 row"+(currentTable.rowAddCount).toString()+" row-odd'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col3 row"+(currentTable.rowAddCount).toString()+" row-odd'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col4 row"+(currentTable.rowAddCount).toString()+" row-odd'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col5 row"+(currentTable.rowAddCount).toString()+" row-odd'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col6 row"+(currentTable.rowAddCount).toString()+" row-odd'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col7 row"+(currentTable.rowAddCount).toString()+" row-odd'><div class='unadjustedScore'>0</div><div id='score-divider'>|</div><div class='adjustedScore'>0</div></td></tr>");
				}
				
				scoreElements = $(".initial-rating-input");
				
				topRankingsTable.scoreElements = $("#top-rankings-table-div .initial-rating-input");
				myRankingsTable.scoreElements = $("#my-rankings-table-div .initial-rating-input");
				scoreElements.click(function() {
					var elem = $(this);
					elementClick(elem);
				});
				scoreElements.bind("propertychange change input paste", function() {
								
					var elem = $(this)[0];
					if (elem.value != "") {
						elem.value = parseInt(elem.value) || "-";
					}
					for (d=1;d<=currentTable.rowAddCount;d++) {
						updateTotalScore(d);				
					}
				});
			});
			$("#addNewMyRankingButton").click(function() {
				currentTable.rowAddCount++
				if (currentTable.rowAddCount%2==0) {
					$(currentTable.name+" #ranking-table tr:last").after("<tr class='tableRow'><td class='ranknum'><p class='rankactualnumber'>"+(currentTable.rowAddCount).toString()+"</p></td><td class='col1 row"+(currentTable.rowAddCount).toString()+" row-even'></td><td class='col2 row"+(currentTable.rowAddCount).toString()+" row-even'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col3 row"+(currentTable.rowAddCount).toString()+" row-even'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col4 row"+(currentTable.rowAddCount).toString()+" row-even'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col5 row"+(currentTable.rowAddCount).toString()+" row-even'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col6 row"+(currentTable.rowAddCount).toString()+" row-even'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col7 row"+(currentTable.rowAddCount).toString()+" row-even'><div class='unadjustedScore'>0</div><div id='score-divider'>|</div><div class='adjustedScore'>0</div></td></tr>");
				}
				else {
					$(currentTable.name+" #ranking-table tr:last").after("<tr class='tableRow'><td class='ranknum'><p class='rankactualnumber'>"+(currentTable.rowAddCount).toString()+"</p></td><td class='col1 row"+(currentTable.rowAddCount).toString()+" row-odd'></td><td class='col2 row"+(currentTable.rowAddCount).toString()+" row-odd'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col3 row"+(currentTable.rowAddCount).toString()+" row-odd'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col4 row"+(currentTable.rowAddCount).toString()+" row-odd'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col5 row"+(currentTable.rowAddCount).toString()+" row-odd'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col6 row"+(currentTable.rowAddCount).toString()+" row-odd'><button class='numselector'><input type='text' name='score' value='-' min='0' max='10' class='initial-rating-input'></button><div class='numselector-content'><p class='numoption'>1</p><p class='numoption'>2</p><p class='numoption'>3</p><p class='numoption'>4</p><p class='numoption'>5</p><p class='numoption'>6</p><p class='numoption'>7</p><p class='numoption'>8</p><p class='numoption'>9</p><p class='numoption'>10</p></div></div></td><td class='col7 row"+(currentTable.rowAddCount).toString()+" row-odd'><div class='unadjustedScore'>0</div><div id='score-divider'>|</div><div class='adjustedScore'>0</div></td></tr>");
				}
				
				
				scoreElements = $(".initial-rating-input");
				
				topRankingsTable.scoreElements = $("#top-rankings-table-div .initial-rating-input");
				myRankingsTable.scoreElements = $("#my-rankings-table-div .initial-rating-input");
				scoreElements.click(function() {
					var elem = $(this);
					elementClick(elem);
				});

				scoreElements.bind("propertychange change input paste", function() {				
					var elem = $(this)[0];
					if (elem.value != "") {
						elem.value = parseInt(elem.value) || "-";
					}
					for (d=1;d<=currentTable.rowAddCount;d++) {
						updateTotalScore(d);				
					}
				});
			});

		//this changes the score with the number selector
			$(".numselector-content p").click(function() {
				
				var num = parseInt($(this).text());
				
				$(this).parent().siblings().children()[0].value = num;
				for (d=1;d<=currentTable.rowAddCount;d++) {
					updateTotalScore(d);				
				}
			});

		//this cycles the titles
			function cycleTitle(title) {
				console.log(title);
				title.animate({right: "200"},100);
			}
			cycleTitle($("#animation-cinematography-title"));
		
	//community ratings post feed


		/*$(".ratingspost-div").mouseenter(function() {
			var element = $(this);
			//calculating widths and height
			currentwidth = element.width();
			currentheight = element.height();
			newwidth = currentwidth + currentwidth*0.2;
			newheight = currentheight + currentheight*0.2;
			//animating new widths and height
			element.animate({width: newwidth,height: newheight},300);
		})
		$(".ratingspost-div").mouseleave(function() {
			var element = $(this)
			element.animate({width: currentwidth,height: currentheight},300);
		})*/


	//SETTINGS PAGE

		var tabs = [$("#account-tab"),$("#profile-tab"),$("#privacy-tab")];
		var divs = [$("#account-div"),$("#profile-div"),$("#privacy-div")];
		var gradients = ["account-gradient", "profile-gradient", "privacy-gradient"];
		var currentDiv = $("#account-div");
		var currentTab = $("#account-tab");

		$("#profile-div").hide();
		$("#privacy-div").hide();

		function settingsChange(index) {
			if (currentDiv[0] != divs[index][0]) {
				divs[index].show();
				tabs[index].addClass("selected-tab");
				currentDiv.hide();
				currentTab.removeClass("selected-tab");
				currentDiv = divs[index];
				currentTab = tabs[index];
				$("#settings-div").removeClass($("#settings-div").attr("class"));
				$("#settings-div").addClass(gradients[index]);

				for (i=0;i<tabs.length;i++) {
					if (i == index) {
						tabs[i].animate({width: "180px"},50);
					}
					else {
						tabs[i].animate({width: "150px"},50);
					}
				}
			}
		}

		$("#account-tab").click(function() {
			settingsChange(0);
		});

		$("#profile-tab").click(function() {
			settingsChange(1);
		});
		
		$("#privacy-tab").click(function() {
			settingsChange(2);
		});

	// GROUP PAGE

		//Chat box scroll

			var chatBoxMessages = $('#chat-post-box');
			chatBoxMessages.scrollTop(chatBoxMessages.prop('scrollHeight'));

	// PROFILE PAGE

		// Pop-up on click (Group and Friends)
			$('#user-friends a:eq(0), #user-friends a:eq(1)').click(function(evt){

				$('.user-list').show();
				$('.overlay-back').fadeIn();

				if($(evt.target).parent().attr('id') == 'user-groups') {
					var userListTitle = $('.user-list-title p') 
					userListTitle.text(userListTitle.text().replace('FRIENDS', 'GROUPS'));
				}

				else {
					var userListTitle = $('.user-list-title p') 
					userListTitle.text(userListTitle.text().replace('GROUPS', 'FRIENDS'));
				}

				return false;

			});

		//un pop-up on click off (Group and Friends)
			$('body').click(function(evt){
				if (($('.user-list').css('display') == 'block')) {

					if (!$(evt.target).hasClass('user-list') && !($(evt.target).closest('.user-list').length == 1)) {
						$('.user-list').hide();
						$('.overlay-back').fadeOut();
					}
				}
			});

		// Remove user/group on-click 
			$('.user-list-item button').click(function(){
				$(this).parent().remove();
				return false;
			});

	$("#create-group-masterdivdiv").hide();
		$("#create-group-button").click(function() {
			$("#create-group-masterdivdiv").show();
		});
		$("#create-group-exit").click(function() {
			$("#create-group-masterdivdiv").hide();
		});

		$('#desc-entry').val(' group description . . .');
		$('#create-group-innermasterdiv #name-entry').click(
		    function(){
		    	$(window).click();
		        $('#name-entry').val('');
		    });
		$('#create-group-innermasterdiv #desc-entry').click(
		    function(){
		    	$(window).click();
		        $('#desc-entry').val('');
		    });
		$(window).click(function() {
			if ($('#name-entry').val() == '') {
				$('#name-entry').val(' group name . . .');
			}
			if ($('#desc-entry').val() == '') {
				$('#desc-entry').val(' group description . . .');
			}
		  
		});
	//Create a group popup
		$('#name-entry').click(function(event){
		  event.stopPropagation();
		});
		$('#desc-entry').click(function(event){
		  event.stopPropagation();
		});

		$("#group-members-div").mouseenter(function() {
			$("#add-members-button").css("background-color", "rgb(90,90,90)");
			$("#add-members-button").animate({width: "40px", height: "40px", margin: "0 0 0 -20px", bottom: "12%", borderRadius: "20px"}, 100);
			$("#add-members-button i").animate({fontSize: "20px",margin: "10px 0 0 11px", deg: "180"}, 100);
			$("#add-members-button i").css("color", "rgb(19,225,236)");
		});
		$("#group-members-div").mouseleave(function() {
			$("#add-members-button").css("background-color", "rgba(0,0,0,0)");
			$("#add-members-button").animate({width: "25px", height: "25px", margin: "0 0 0 -12.5px", bottom: "8%", borderRadius: "12.5px"}, 100);
			$("#add-members-button i").animate({fontSize: "16px",margin: "4px 0 0 6px"}, 100);
			$("#add-members-button i").css("color", "rgb(243,243,243)");
		});

		$("#add-members-button").click(function() {
			$("#placeholder-member").hide();
			$("#start-div").append("<div class='group-member'><div class='member-pfp'><img src='shinomiyapfp.png'></div><div class='member-info'><p id='member-name'> Name </p> <p id='member-followers'> 69 followers </p></div></div>")
		});


});			

