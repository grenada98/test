$(document).ready(function(){

    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
        
    testWebP(function (support) {
        
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
        }
    });

    //to top
        let toTOP = document.querySelector('.to-top')
        function to_TOP() {
            if (window.pageYOffset > 100) {
              toTOP.style.opacity = '1'
            } else { toTOP.style.opacity = '0' }
          }
        window.onscroll = to_TOP
        // появление/затухание кнопки #back-top
        $(function (){
    
            // при клике на ссылку плавно поднимаемся вверх
            $(".to-top").click(function (){
                $("body,html").animate({
                    scrollTop:0
                }, 800);
                return false;
            });
        });
        $(document).click((e) => {
            const {target} = e;
            if(target.nodeName === 'A' && target.getAttribute('href') === '#') {
              e.preventDefault();
            }
          });
        $(".list-of-social").slick({
            arrows: true,
            slidesToShow: 10,
            responsive: [
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 565,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 459,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        })
        //////////////////////////////////////



        /////////////////////////////////// select-social
        const selectSocial = document.querySelector(".mobile-list-of-social-wrapper");
        const selectSocialContent = document.querySelector(".mobile-list-of-social-content");
        const selectSocialSubmenu = document.querySelector(".mobile-list-of-social");
        const selectSocialSubmenuItem = Array.from(document.getElementsByClassName("item-mobile-list-of-social"));
        selectSocial.addEventListener("click", function(){
            console.log("SUbmenu");
            if(selectSocialSubmenu.classList.contains("active")){
                selectSocialSubmenu.classList.remove("active");
            }
            else{
                selectSocialSubmenu.classList.add("active");
            }
        })
        selectSocialSubmenuItem.forEach(function(el){ el.addEventListener("click", function(){
            selectSocialContent.innerHTML = this.innerHTML;
        })})
        /////////////////////////////////////////////////////

         /////////////////////////////////// select-services
         const selectServices = document.querySelector(".mobile-list-of-services-wrapper");
         const selectServicesContent = document.querySelector(".mobile-list-of-services-content");
         const selectServicesSubmenu = document.querySelector(".mobile-list-of-services");
         const selectServicesSubmenuItem = Array.from(document.getElementsByClassName("item-mobile-list-of-services"));
         selectServices.addEventListener("click", function(){
             console.log("SUbmenu");
             if(selectServicesSubmenu.classList.contains("active")){
                 selectServicesSubmenu.classList.remove("active");
             }
             else{
                 selectServicesSubmenu.classList.add("active");
             }
         })
         selectServicesSubmenuItem.forEach(function(el){ el.addEventListener("click", function(){
             selectServicesContent.innerHTML = this.innerHTML;
         })})
         /////////////////////////////////////////////////////


         ////////////////////////////////////////////////// select-tariff
         const selectTariff = document.querySelector(".list-of-tariff-wrapper");
         const selectTariffContent = document.querySelector(".list-of-tariff-content");
         const selectTariffSubmenu = document.querySelector(".list-of-tariff");
         const selectTariffSubmenuItem = Array.from(document.getElementsByClassName("item-list-of-tariff"));
         let valueTariff = 0;
         selectTariff.addEventListener("click", function(){
             console.log("SUbmenu");
             if(selectTariffSubmenu.classList.contains("active")){
                 selectTariffSubmenu.classList.remove("active");
                 console.log("SUbmenu1");
             }
             else{
                 selectTariffSubmenu.classList.add("active");
                 console.log("SUbmenu2");
             }
         })
         selectTariffSubmenuItem.forEach(function(el){ el.addEventListener("click", function(){
             selectTariffContent.innerHTML = this.innerHTML;
             selectTariffContent.dataset.value = this.dataset.value;
             valueTariff = +this.dataset.value;
         })})

        ///////////////////////////form input calculate tariff
        const countOfInputSub = document.querySelector(".count-value input");
        const inputSliderForSub =  document.querySelector(".js-input-for-count-sub");
        const totalSummForSub = document.querySelector(".total-value input");
        if(countOfInputSub && inputSliderForSub && selectTariff && totalSummForSub){
            let instance;
            let min = 500;
            let max = 10000;
            console.log(countOfInputSub.value);
            //let valueTariff = selectTariff.options[selectTariff.selectedIndex].value;;
            $(".js-input-for-count-sub").ionRangeSlider({
                min: min,
                max: max,
                from: 1000,
                onStart: function(data) {
                    countOfInputSub.value = data.from;
                },
                onChange: function (data) {
                    countOfInputSub.value = data.from;
                    totalSummForSub.value = (+countOfInputSub.value * +valueTariff).toFixed(2);
                }
            });
            let countFromInput = +countOfInputSub.value;
            instance = $(".js-input-for-count-sub").data("ionRangeSlider");
            countOfInputSub.addEventListener('change', function() {
                countFromInput = countOfInputSub.value;
                if (min<=countFromInput && countFromInput<=max){
                    countOfInputSub.value = countFromInput;
                    totalSummForSub.value = (+countOfInputSub.value * +valueTariff).toFixed(2);
                    instance.update({
                        from: countFromInput
                    });
                }
                else{
                    if (countFromInput < min) {
                    countFromInput = min;
                    countOfInputSub.value = countFromInput;
                    totalSummForSub.value = (+countOfInputSub.value * +valueTariff).toFixed(2);
                } else if (countFromInput > max) {
                    countFromInput = max;
                    countOfInputSub.value = countFromInput;
                    totalSummForSub.value = (+countOfInputSub.value * +valueTariff).toFixed(2);
                }
                instance.update({
                    from: countFromInput
                });
            }
            });
            /*selectTariff.addEventListener('click', function(){
                valueTariff = selectTariff.options[selectTariff.selectedIndex].value;
                totalSummForSub.value = +valueTariff * +countFromInput;
                console.log(valueTariff + " " + countFromInput);
            })*/
        }
        /////////////////////////////////////


        ////////////////////accordeon
        const accordeonQuestion = Array.from(document.getElementsByClassName("question"));
        accordeonQuestion.forEach(function(el) {el.addEventListener('click', function (){
            this.classList.add("active");
            let hideAccordeon = this.nextElementSibling;
            console.log(hideAccordeon);
            if (hideAccordeon.classList.contains("active")) {
                hideAccordeon.classList.remove("active");
                this.classList.remove("active");
            } else {
                hideAccordeon.classList.add("active")
            }
        })})
        /////////////////////////////////////



        //////////////////////// LOAD MORE
        let countLoadComments = 3;
        let feedBackComments = document.getElementsByClassName("item-feedback");
        const buttonLoadMore = document.querySelector(".load-more-feedback");
        for(let i = 3; i<feedBackComments.length; i++){
            feedBackComments[i].classList.add("disabled");
        }
        buttonLoadMore.addEventListener('click', function(){
            countLoadComments +=3;
            if(feedBackComments.length>=countLoadComments){
                for(let i=0; i<countLoadComments; i++){
                    feedBackComments[i].classList.remove("disabled");
                }
                if(feedBackComments.length==countLoadComments){
                    buttonLoadMore.classList.add("disabled");
                }
        }})




        document.addEventListener("click", function(e){
            if(!e.target.classList.contains("mobile-list-of-social-content")){
                selectSocialSubmenu.classList.remove("active");
            }
            if(!e.target.classList.contains("mobile-list-of-services-content")){
                selectServicesSubmenu.classList.remove("active");
            }
        })
})