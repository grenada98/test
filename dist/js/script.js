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
        const mainDisabled = document.querySelector(".main-disabled");
        const htmlDisabled = document.querySelector("html");
        function pageDisable(){
            mainDisabled.classList.add("active");
            htmlDisabled.classList.add("disabled");
        }
        function pageActive(){
            mainDisabled.classList.remove("active");
            htmlDisabled.classList.remove("disabled");
        }
        ////////////////////////////////////// enter-popup
        const buttonEnterProfile = document.querySelector(".link-button.small")
        const enterProfilePopup = document.querySelector(".enter-popup");
        buttonEnterProfile.addEventListener("click", function(){
            console.log("ENTER");
            enterProfilePopup.classList.add("active");
            pageDisable();
        })
        ////////////////////////////////////////// enter-popup close
        const closeEnterPopup = document.querySelector(".close-enter-popup");
        closeEnterPopup.addEventListener("click", function(){
            enterProfilePopup.classList.remove("active");
            pageActive();
        })
        /////////////////////////////////////////// registration-popup
        const buttonRegistrationProfile = document.getElementById("registration-account-link")
        const registrationProfilePopup = document.querySelector(".registration-popup");
        buttonRegistrationProfile.addEventListener("click", function(){
            registrationProfilePopup.classList.add("active");
            pageDisable();
        })
        //////////////////////////////////////////////registration popup close
        const closeRegistrationPopup = document.querySelector(".close-registration-popup");
        closeRegistrationPopup.addEventListener("click", function(){
            registrationProfilePopup.classList.remove("active");
            pageActive();
        })






        ///////////////////////////////////////////// recovery password popup
        const buttonRecoveryPassword = document.querySelector(".password-forget-question")
        const recoveryPasswordPopup = document.querySelector(".recovery-password-popup");
        buttonRecoveryPassword.addEventListener("click", function(){
            enterProfilePopup.classList.remove("active");
            recoveryPasswordPopup.classList.add("active");
            pageDisable();
        })
        ////////////////////////////////////////////// recovery password popup close
        const closeRecoveryPasswordPopup = document.querySelector(".close-recovery-password-popup");
        closeRecoveryPasswordPopup.addEventListener("click", function(){
            recoveryPasswordPopup.classList.remove("active");
            enterProfilePopup.classList.add("active");
        })



        ///////////////////////////////////////////////////////////// popular quest popup 
        const buttonPopularQuest = document.querySelector(".questions-tariff-button");
        const popularQuestPopup = document.querySelector(".popular-quest-popup");
        buttonPopularQuest.addEventListener("click", function(){
            popularQuestPopup.classList.add("active");
            pageDisable();
        })
        /////////////////////////////////////////////////////////// popular quest popup close
        const closePopularQuest = document.querySelector(".close-button");
        closePopularQuest.addEventListener("click", function(){
            popularQuestPopup.classList.remove("active");
            pageActive();
        })



        //////////////////////////////////////////////////////////// offer continue
        const buttonContinueOffer = document.querySelector(".services-order-continue-button");
        const confirmationOfferPopup = document.querySelector(".confiramtion-offer-popup");
        buttonContinueOffer.addEventListener("click", function(){
            confirmationOfferPopup.classList.add("active");
            pageDisable();
        })
        ////////////////////////////////////////////////////////// offer edit
        const buttonEditOffer = document.querySelector(".icon-editoffer");
        buttonEditOffer.addEventListener("click", function(){
            confirmationOfferPopup.classList.remove("active");
            pageActive();
        })

        ///////////////////////////////////////////// checkbox agree with rights
        const checkboxRights = document.querySelector(".checkbox-wrapper");
        console.log(checkboxRights);
        checkboxRights.addEventListener("click", function(){
            if(checkboxRights.classList.contains("active")){
                checkboxRights.classList.remove("active");
            }
            else{
                checkboxRights.classList.add("active");
            }
        })
        ///////////////////////////// hide password
        const showPasswordInput = document.querySelector(".icon-hidepassword");
        const enterPasswordAccountInput = document.querySelector(".enter-password-input");
        showPasswordInput.addEventListener("click", function(){
            if(showPasswordInput.classList.contains("active")){
                enterPasswordAccountInput.type = "password";
                showPasswordInput.classList.remove("active");
            }
            else{
                enterPasswordAccountInput.type = "text";
                showPasswordInput.classList.add("active");
            }
        })

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

        ////////////////////////////////////////////////// select-tariff edit popup
         const selectTariffPopup = document.querySelector(".list-of-tariff-wrapper-popup");
         const selectTariffContentPopup = document.querySelector(".list-of-tariff-content-popup");
         const selectTariffSubmenuPopup = document.querySelector(".list-of-tariff-popup");
         const selectTariffSubmenuItemPopup = Array.from(document.getElementsByClassName("item-list-of-tariff-popup"));
         selectTariffPopup.addEventListener("click", function(){
             if(selectTariffSubmenuPopup.classList.contains("active")){
                 selectTariffSubmenuPopup.classList.remove("active");
             }
             else{
                 selectTariffSubmenuPopup.classList.add("active");
             }
         })
         selectTariffSubmenuItemPopup.forEach(function(el){ el.addEventListener("click", function(){
             selectTariffContentPopup.innerHTML = this.innerHTML;
             selectTariffContentPopup.dataset.value = this.dataset.value;
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