document.addEventListener('DOMContentLoaded', function(){

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
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 9
                    }
                },
                {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 8
                    }
                },
                {
                    breakpoint: 886,
                    settings: {
                        slidesToShow: 7
                    }
                }
            ]
        })

        const mainDisabled = document.querySelector(".main-disabled");
        const htmlDisabled = document.querySelector("html");
        const toTop = document.querySelector(".to-top");
        function pageDisable(){
            mainDisabled.classList.add("active");
            htmlDisabled.classList.add("disabled");
            toTop.classList.add("disabled");
        }
        function pageActive(){
            mainDisabled.classList.remove("active");
            htmlDisabled.classList.remove("disabled");
            toTop.classList.remove("disabled");
        }
        mainDisabled.addEventListener("click", function(event){
            if(event.target==this){
                pageActive();
                mainDisabled.querySelector(".active").classList.remove("active");
            }
        })
        document.addEventListener("click", function(e){
            if(selectTariffContent){
                if(e.target!=selectTariffContent){
                    selectTariffSubmenu.classList.remove("active");
                }
            }
        })

        const dataTariff = {
            subscribers: [{name: "Подписчики Супер Эконом", value: "0.23", description: "Здесь будет описание"}, 
                    {name: "Подписчики Эконом", value: "0.50", description: "Здесь будет описание"},
                    {name: "Подписчики Стандарт", value: "1", description: "Здесь будет описание"},
                    {name: "Подписчики Премиум", value: "2", description: "Здесь будет описание"}],
            likes: [{name: `Лайки на пост "Эконом"`, value: "0.12", description: "Здесь будет описание"},
                    {name: `Лайки на пост "Стандарт"`, value: "0.50", description: "Здесь будет описание"},
                    {name: `Лайки на пост "Премиум"`, value: "1", description: "Здесь будет описание"}],
            streams: [{name: `Просмотры трансляций "Эконом"`, value: "0.12", description: "Здесь будет описание"},
                    {name: `Просмотры трансляций "Стандарт"`, value: "0.50", description: "Здесь будет описание"},
                    {name: `Просмотры трансляций "Премиум"`, value: "1", description: "Здесь будет описание"},
                    {name: `Просмотры трансляций "Про"`, value: "2", description: "Здесь будет описание"}],
            igtv: [{name: `IGTV "Эконом"`, value: "0.12", description: "Здесь будет описание"},
                    {name: `IGTV "Стандарт"`, value: "0.50", description: "Здесь будет описание"},
                    {name: `IGTV "Премиум"`, value: "1", description: "Здесь будет описание"},
                    {name: `IGTV "Про"`, value: "2", description: "Здесь будет описание"}],
            comments: [{name: `Комментарии на пост "Эконом"`, value: "0.12", description: "Здесь будет описание"},
                    {name: `Комментарии на пост "Стандарт"`, value: "0.50", description: "Здесь будет описание"},
                    {name: `Комментарии на пост "Премиум"`, value: "1", description: "Здесь будет описание"},
                    {name: `Комментарии на пост "Про"`, value: "2", description: "Здесь будет описание"}],
            visits: [{name: `Посещения "Эконом"`, value: "0.12", description: "Здесь будет описание"},
                    {name: `Посещения "Стандарт"`, value: "0.50"},
                    {name: `Посещения "Премиум"`, value: "1"},
                    {name: `Посещения "Про"`, value: "2", description: "Здесь будет описание"}],
            reels: [{name: `Reels "Эконом"`, value: "0.12"},
                    {name: `Reels "Стандарт"`, value: "0.50"},
                    {name: `Reels "Премиум"`, value: "1"},
                    {name: `Reels "Про"`, value: "2", description: "Здесь будет описание"}],   
            histories: [{name: `Истории "Эконом"`, value: "0.12", description: "Здесь будет описание"},
                    {name: `Истории "Стандарт"`, value: "0.50", description: "Здесь будет описание"},
                    {name: `Истории "Премиум"`, value: "1", description: "Здесь будет описание"},
                    {name: `Истории "Про"`, value: "2", description: "Здесь будет описание"}],        
        }
        const dataSocial = {
            instagram: [ "subscribers", "likes", "streams", "comments", "histories"],
            telegram: ["subscribers", "likes"],
            tiktok: ["subscribers", "likes"],
            youtube: ["subscribers", "likes"],
            vk: ["comments"],
            discord: ["streams"],
            surface: ["streams"],
            odnoklassniki: ["streams"],
            twitter: ["subscribers", "likes"],
            appstore: [ "subscribers", "likes", "streams", "comments", "histories"],
            }
        const itemServices = Array.from(document.getElementsByClassName("item-service-service-page"));
        ////////////////////////////////////// enter-popup
        const buttonEnterProfile = document.querySelector(".link-button.small")
        const enterProfilePopup = document.querySelector(".enter-popup");
        buttonEnterProfile.addEventListener("click", function(){
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

        ///////////////////////////////// balance submenu
        const balanceUpButton = document.querySelector(".balance");
        const balanceUpSubmenu = document.querySelector(".up-balance-submenu-wrapper");
        balanceUpButton.addEventListener("click", function(){
            if(balanceUpSubmenu.classList.contains("active")){
                balanceUpSubmenu.classList.remove("active");
            }
            else{
                balanceUpSubmenu.classList.add("active");
            }
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
        const linkSocialForOffer = document.querySelector(".input-for-link");
        const selectedValueOffer = document.querySelectorAll(".details-offer-choise");
        const variablePayOffer = document.getElementsByClassName("pay-choice-wrapper");
        variablePayOffer.forEach(function(el){el.addEventListener("click", function(){
            if(document.querySelector(".pay-choice-wrapper.active")==null){

            }
            else{
                document.querySelector(".pay-choice-wrapper.active").classList.remove("active");
            }
            this.classList.add("active");
        })})
        let nameTariff = null; //for name of tariff
        let valueTariff = null; //for value of tariff
        let linkSocialValue = null; //for link
        let totalCountOfSub = null;  //for count of sub
        let totalCountForPay = null; // for total count of pay
        function confirmOfferMain(){
            confirmationOfferPopup.classList.add("active");
            pageDisable();
            selectTariffContentPopup.innerHTML = document.querySelector(`.item-list-of-tariff-popup[data-value="${valueTariff}"]`).innerHTML;
            selectTariffContentPopup.dataset.value = valueTariff;
            for(let i=0; i<selectedValueOffer.length; i++){
                console.log(selectedValueOffer[i]);
                if(selectedValueOffer[i].getAttribute("data-name")=="tariff"){
                    selectedValueOffer[i].textContent = nameTariff;
                }
                if(selectedValueOffer[i].getAttribute("data-name")=="count"){
                    selectedValueOffer[i].textContent = totalCountOfSub;
                }
                if(selectedValueOffer[i].getAttribute("data-name")=="price"){
                    selectedValueOffer[i].textContent = totalCountForPay;
                }
                if(selectedValueOffer[i].getAttribute("data-name")=="link"){
                    selectedValueOffer[i].textContent = linkSocialValue;
                }
            }
            buttonEndPayConfirmation.textContent = `Оплатить ${totalCountForPay}₽`;
        }
        function getActiveOfferButton(){
            if(nameTariff!=null && valueTariff!=null && linkSocialValue!=null && linkSocialValue!="" && totalCountOfSub!=null && totalCountForPay!=null){
                buttonContinueOffer.addEventListener("click", confirmOfferMain);
                buttonContinueOffer.classList.remove("disabled");
            }
            else{
                buttonContinueOffer.removeEventListener("click", confirmOfferMain);
                buttonContinueOffer.classList.add("disabled");
            }
        }
        ////////////////////////////////////////////////////////// offer edit -> open popup edit offer
        const buttonEditOffer = document.querySelector(".icon-editoffer");
        const editOfferPopup = document.querySelector(".edit-offer-popup");
        buttonEditOffer.addEventListener("click", function(){
            confirmationOfferPopup.classList.remove("active");
            editOfferPopup.classList.add("active");
        })
        ////////////////////////////////////////////////////// pay -> edit
        const buttonEditOfferPay = document.querySelector(".pay-offer-edit-button");
        buttonEditOfferPay.addEventListener("click", function(){
            payOfferPopup.classList.remove("active");
            editOfferPopup.classList.add("active");
        })
        const buttonAdaptEditOfferPay = document.querySelector(".pay-offer-edit-button-adapt");
        buttonAdaptEditOfferPay.addEventListener("click", function(){
            payOfferPopup.classList.remove("active");
            editOfferPopup.classList.add("active");
        })


        //////////////////////////////////////////////////// pay-offer popup
        const buttonPayOffer = document.querySelector(".edit-services-order-continue-button");
        const payOfferPopup = document.querySelector(".pay-offer-popup");
        buttonPayOffer.addEventListener("click", function(){
            editOfferPopup.classList.remove("active");
            payOfferPopup.classList.add("active");
        })


        ///////////////////////////////////////////////// Successfulg pay popup open afetr confirmation
        const buttonEndPayConfirmation = document.querySelector(".offer-pay-button");
        const successfulPayPopup = document.querySelector(".successful-pay-popup");
        const successfulPayPopupNameTariiff = document.querySelector(".successful-pay-title span");
        buttonEndPayConfirmation.addEventListener("click", function(){
            confirmationOfferPopup.classList.remove("active");
            successfulPayPopup.classList.add("active");
            successfulPayPopupNameTariiff.textContent = nameTariff;
        })
        //////////////////////////////////////////////////successful pay popup 
        const buttonEndPayOffer = document.querySelector(".pay-offer-button");
        buttonEndPayOffer.addEventListener("click", function(){
            payOfferPopup.classList.remove("active");
            successfulPayPopup.classList.add("active");
        })
        ////////////////////////////////////////////////// Wrong pay popup close
        const buttonCloseSuccessfulPay = document.querySelector(".successful-pay-button");
        buttonCloseSuccessfulPay.addEventListener("click", function(){
            successfulPayPopup.classList.remove("active");
            pageActive();
        })

/*
        ////////////////////////////////////////////////// Wrong pay popup open afetr confirmation
        const wrongPayPopup = document.querySelector(".wrong-pay-popup");
        buttonEndPayConfirmation.addEventListener("click", function(){
            confirmationOfferPopup.classList.remove("active");
            wrongPayPopup.classList.add("active");
        })
        ////////////////////////////////////////////////// Wrong pay popup 
        buttonEndPayOffer.addEventListener("click", function(){
            payOfferPopup.classList.remove("active");
            wrongPayPopup.classList.add("active");
        })
        ////////////////////////////////////////////////// Wrong pay popup close
        const buttonCloseWrongPay = document.querySelector(".wrong-pay-button");
        buttonCloseWrongPay.addEventListener("click", function(){
            wrongPayPopup.classList.remove("active");
            pageActive();
        })
*/



        ///////////////////////////////////////////// checkbox agree with rights
        const checkboxRights = document.querySelector(".checkbox-wrapper");
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
            if(selectSocialSubmenu.classList.contains("active")){
                selectSocialSubmenu.classList.remove("active");
            }
            else{
                selectSocialSubmenu.classList.add("active");
            }
        })
        let nameSocialNetworkMobile = 0;
        selectSocialSubmenuItem.forEach(function(el){ el.addEventListener("click", function(){
            selectSocialContent.innerHTML = this.innerHTML;
            selectSocialContent.dataset.name = this.dataset.name;
            nameSocialNetworkMobile = this.dataset.name;
            for (let i = 0; i < selectServicesSubmenuItemMobile.length; i++){
                if( selectServicesSubmenuItemMobile[i].classList.contains("selected")){
                    selectServicesSubmenuItemMobile[i].classList.remove("selected");
                }
            }
            if(dataSocial[this.dataset.name].length!=null){
                for (let i=0; i<dataSocial[this.dataset.name].length; i++){
                    document.querySelector(`.item-mobile-list-of-services[data-name="${dataSocial[this.dataset.name][i]}"]`).classList.add("selected");
                }
            }
        })})
        /////////////////////////////////////////////////////

         /////////////////////////////////// select-services-mobile
         const selectServicesMobile = document.querySelector(".mobile-list-of-services-wrapper");
         const selectServicesContentMobile = document.querySelector(".mobile-list-of-services-content");
         const selectServicesSubmenuMobile = document.querySelector(".mobile-list-of-services");
         const selectServicesSubmenuItemMobile = Array.from(document.getElementsByClassName("item-mobile-list-of-services"));
         selectServicesMobile.addEventListener("click", function(){
             if(selectServicesSubmenuMobile.classList.contains("active")){
                 selectServicesSubmenuMobile.classList.remove("active");
             }
             else{
                 selectServicesSubmenuMobile.classList.add("active");
             }
         })
         selectServicesSubmenuItemMobile.forEach(function(el){ el.addEventListener("click", function(){
             selectServicesContentMobile.innerHTML = this.innerHTML;
             selectServicesContentMobile.dataset.name = this.dataset.name;
             console.log(selectServicesContentMobile.dataset.name);
             listTariffServices.innerHTML = "";
                for(let j=0; j<dataTariff[this.dataset.name].length; j++){
                    let a = document.createElement("div");
                    a.className = "item-tariff-of-service";
                    a.innerHTML = `<div class="item-tariff-title-and-description">
                        <div class="item-tariff-title-wrapper">
                            <div class="social-icon-for-tariff">
                                <img src="${`../img/` + nameSocialNetworkMobile + `.png`}" alt="alt">
                            </div>
                            <div class="item-tariff-title-price-description">
                                <div class="item-tariff-service-title-and-price">
                                    <div class="item-tariff-service-title">${dataTariff[this.dataset.name][j].name}</div>
                                    <div class="item-tariff-service-price">
                                        <div class="item-tariff-service-price-title">Цена:</div>
                                        <div class="item-tariff-service-price-value">${dataTariff[this.dataset.name][j].value}₽ за 1 шт</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="button-tariff-details-and-offer">
                            <button class="button-tariff-details service-page" data-id="${j}" type="button">Подробнее</button>
                            <button class="button-tariff-offer service-page" type="button">Заказать</button>
                        </div>
                        <div class="mobile-button-tariff-details-and-offer">
                            <svg class="icon-basket">
                                <use xlink:href="img/icons/icons.svg#basket"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="item-tariff-description-wrapper" data-id="${j}">
                        <div class="item-tariff-description">Активные пользователи лайкают 
                            Вашу онлайн трансляцию. Мгновенный старт и огромные объемы.</div>
                        <div class="quest-quality-and-speed service-page">
                            <div class="quest-quality">
                                <span>Качество: 3/5</span>
                                <div class="likes">
                                    <img src="img/like.png" alt="alt">
                                </div>
                            </div>
                            <div class="quest-speed">
                                <span>Скорость: 3/5</span>
                                <div class="likes">
                                    <img src="img/like.png" alt="alt">
                                </div>
                            </div>
                        </div>
                    </div>`
                listTariffServices.appendChild(a);
            }
         })})




         ///////////////////////////////////////////////////// select left service and put in select right
         const listOfServices = document.getElementsByClassName("item-service");
         if(listOfServices){
            listOfServices.forEach(function(el){el.addEventListener("click", function(){
                if(document.querySelector(".item-service.active")){
                    document.querySelector(".item-service.active").classList.remove("active");
                }
                let itemSubmenuListOfServices = document.querySelectorAll(`.service-submenu-item[data-name=${this.dataset.name}]`);
                if(itemSubmenuListOfServices.length!=0){
                    this.classList.add("active");
                    selectTariffSubmenu.innerHTML = "";
                    for(let i=0; i<itemSubmenuListOfServices.length; i++){
                        let variableForSubMenuItem = document.createElement("div");
                        variableForSubMenuItem.classList.add("item-list-of-tariff");
                        variableForSubMenuItem.setAttribute("data-value", itemSubmenuListOfServices[i].dataset.value);
                        variableForSubMenuItem.innerHTML = itemSubmenuListOfServices[i].innerHTML;
                        selectTariffSubmenu.appendChild(variableForSubMenuItem);
                    }
                    selectTariffContent.textContent = "Выберите тариф";
                    selectTariffSubmenuItem = Array.from(document.getElementsByClassName("item-list-of-tariff"));
                    selectTariffSubmenuItem.forEach(function(el){ el.addEventListener("click", selectServiceTariffSubmenu)});
                }
            })})
        }
         ///////////////////////////////////////////////////////////////////

         ////////////////////////////////////////////////// select-tariff
         const selectTariff = document.querySelector(".list-of-tariff-wrapper");
         const selectTariffContent = document.querySelector(".list-of-tariff-content");
         const selectTariffSubmenu = document.querySelector(".list-of-tariff");
         let selectTariffSubmenuItem = Array.from(document.getElementsByClassName("item-list-of-tariff"));
         if(selectTariff){
            selectTariff.addEventListener("click", function(){
                if(selectTariffSubmenu.classList.contains("active")){
                    selectTariffSubmenu.classList.remove("active");
                }
                else{
                    selectTariffSubmenu.classList.add("active");
                }
            })
        }
         function selectServiceTariffSubmenu(){
            selectTariffContent.innerHTML = this.innerHTML;
            selectTariffContent.dataset.value = this.dataset.value;
            valueTariff = +this.dataset.value;
            nameTariff = selectTariffContent.textContent;
            getActiveOfferButton();
         }
         selectTariffSubmenuItem.forEach(function(el){ el.addEventListener("click", selectServiceTariffSubmenu)})

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
             totalSummForSubPopup.value = (+countOfInputSubPopup.value * +valueTariff).toFixed(2);
         })})
         //////////////////////////////////////


        /////////////////////////////////// input link for service site
        const inputLinkForService = document.querySelector(".input-for-link");
        inputLinkForService.addEventListener("change", function(){
            linkSocialValue = linkSocialForOffer.value;
            getActiveOfferButton();
        })
        ///////////////////////////form input calculate tariff main page
        const itemsSocialNetwork = document.getElementsByClassName("item-social");
        let nameSocialNetwork = 0;
        if(itemsSocialNetwork){
            itemsSocialNetwork.forEach(function(el){el.addEventListener("click", function(){
                if(document.querySelector(".item-social.active")){
                    document.querySelector(".item-social.active").classList.remove("active");
                }
                if(document.querySelector(".item-social.selected")!=null){
                    document.querySelector(".item-social.selected").classList.remove("selected");
                    for(let i = 0; i< itemServices.length; i++){
                        if(itemServices[i].classList.contains("selected")){
                            itemServices[i].classList.remove("selected");
                        }
                    }
                }
                this.classList.add("active");
                nameSocialNetwork = this.dataset.name;
                for( let i = 0; i < itemServices.length; i++){
                    if(itemServices[i].classList.contains("selected")){
                        itemServices[i].classList.remove("selected");
                    }
                }
                if(dataSocial[this.dataset.name].length!=null){
                    for (let i=0; i<dataSocial[this.dataset.name].length; i++){

                        document.querySelector(`.item-service-service-page[data-name="${dataSocial[this.dataset.name][i]}"]`).classList.add("selected");
                    }
                }
            })})
        }
        if(itemServices){
            itemServices.forEach(function(el){el.addEventListener("click", function(){
                if(document.querySelector(".item-service-service-page.active")){
                    document.querySelector(".item-service-service-page.active").classList.remove("active");
                }
                this.classList.add("active");
                listTariffServices.innerHTML = "";
                for(let j=0; j<dataTariff[this.dataset.name].length; j++){
                    console.log(this.dataset.name);
                    let a = document.createElement("div");
                    a.className = "item-tariff-of-service"
                    a.innerHTML = `<div class="item-tariff-title-and-description">
                        <div class="item-tariff-title-wrapper">
                            <div class="social-icon-for-tariff">
                                <img src="${`../img/` + nameSocialNetwork + `.png`}" alt="alt">
                            </div>
                            <div class="item-tariff-title-price-description">
                                <div class="item-tariff-service-title-and-price">
                                    <div class="item-tariff-service-title">${dataTariff[this.dataset.name][j].name}</div>
                                    <div class="item-tariff-service-price">
                                        <div class="item-tariff-service-price-title">Цена:</div>
                                        <div class="item-tariff-service-price-value">${dataTariff[this.dataset.name][j].value}₽ за 1 шт</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="button-tariff-details-and-offer">
                            <button class="button-tariff-details service-page" data-id="${j}" type="button">Подробнее</button>
                            <button class="button-tariff-offer service-page" type="button">Заказать</button>
                        </div>
                        <div class="mobile-button-tariff-details-and-offer">
                            <svg class="icon-basket">
                                <use xlink:href="img/icons/icons.svg#basket"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="item-tariff-description-wrapper" data-id="${j}">
                        <div class="item-tariff-description">Активные пользователи лайкают 
                            Вашу онлайн трансляцию. Мгновенный старт и огромные объемы.</div>
                        <div class="quest-quality-and-speed service-page">
                            <div class="quest-quality">
                                <span>Качество: 3/5</span>
                                <div class="likes">
                                    <img src="img/like.png" alt="alt">
                                </div>
                            </div>
                            <div class="quest-speed">
                                <span>Скорость: 3/5</span>
                                <div class="likes">
                                    <img src="img/like.png" alt="alt">
                                </div>
                            </div>
                        </div>
                    </div>`
                listTariffServices.appendChild(a);
                };
                let accordeonTariff = Array.from(document.getElementsByClassName("button-tariff-details service-page"));
                accordeonTariff.forEach(function(el) {el.addEventListener('click', function (){
                    if(this.classList.contains("active")){
                        console.log(this);
                        this.textContent = "Подробнее";
                        this.classList.remove("active");
                        document.querySelector(`.item-tariff-description-wrapper[data-id="${this.dataset.id}"]`).classList.remove("active");
                    }
                    else{
                        this.classList.add("active");
                        this.textContent = "Скрыть";
                        document.querySelector(`.item-tariff-description-wrapper[data-id="${this.dataset.id}"]`).classList.add("active");
                    }
                })})
            } )})
        } 

        const countOfInputSub = document.querySelector(".count-value input");
        const inputSliderForSub =  document.querySelector(".js-input-for-count-sub");
        const totalSummForSub = document.querySelector(".total-value input");
        if(countOfInputSub && inputSliderForSub && selectTariff && totalSummForSub){
            let instance;
            let min = 500;
            let max = 10000;
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
                    totalCountOfSub = countOfInputSub.value;
                    totalCountForPay = totalSummForSub.value;
                    getActiveOfferButton();
                }
            });
            let countFromInput = +countOfInputSub.value;
            instance = $(".js-input-for-count-sub").data("ionRangeSlider");
            countOfInputSub.addEventListener('keypress', function() {
                countFromInput = countOfInputSub.value;
                if (min<=countFromInput && countFromInput<=max){
                    countOfInputSub.value = countFromInput;
                    totalSummForSub.value = (+countOfInputSub.value * +valueTariff).toFixed(2);
                    instance.update({
                        from: countFromInput
                    });
                    getActiveOfferButton();
                }
                else{
                    if (countFromInput < min) {
                    countFromInput = min;
                    countOfInputSub.value = countFromInput;
                    totalSummForSub.value = (+countOfInputSub.value * +valueTariff).toFixed(2);
                    getActiveOfferButton();
                } else if (countFromInput > max) {
                    countFromInput = max;
                    countOfInputSub.value = countFromInput;
                    totalSummForSub.value = (+countOfInputSub.value * +valueTariff).toFixed(2);
                    getActiveOfferButton();
                }
                instance.update({
                    from: countFromInput
                });
                totalCountOfSub = countOfInputSub.value;
                totalCountForPay = totalSummForSub.value;
            }
            });
            /*selectTariff.addEventListener('click', function(){
                valueTariff = selectTariff.options[selectTariff.selectedIndex].value;
                totalSummForSub.value = +valueTariff * +countFromInput;
                console.log(valueTariff + " " + countFromInput);
            })*/
        }
        ///////////////////////////////////// form input calculate tariff popup
        const countOfInputSubPopup = document.querySelector(".count-value-input-wrapper-popup input");
        const minusCountOfInputSubPopup = document.querySelector(".count-value-input-popup-minus");
        const plusCountOfInputSubPopup = document.querySelector(".count-value-input-popup-plus");
        const totalSummForSubPopup = document.querySelector(".total-value-popup input");
        if(countOfInputSubPopup && selectTariffPopup && totalSummForSubPopup){
            let min = 500;
            let max = 10000;
            console.log(countOfInputSubPopup.value);
            //let valueTariff = selectTariff.options[selectTariff.selectedIndex].value;;
            let countFromInput = +countOfInputSubPopup.value;
            countOfInputSubPopup.addEventListener('change', function() {
                countFromInput = countOfInputSubPopup.value;
                if (min<=countFromInput && countFromInput<=max){
                    countOfInputSubPopup.value = countFromInput;
                    totalSummForSubPopup.value = (+countOfInputSubPopup.value * +valueTariff).toFixed(2);
                }
                else{
                    if (countFromInput < min) {
                    countFromInput = min;
                    countOfInputSubPopup.value = countFromInput;
                    totalSummForSubPopup.value = (+countOfInputSubPopup.value * +valueTariff).toFixed(2);
                } else if (countFromInput > max) {
                    countFromInput = max;
                    countOfInputSubPopup.value = countFromInput;
                    totalSummForSubPopup.value = (+countOfInputSubPopup.value * +valueTariff).toFixed(2);
                }
            }
            });
            minusCountOfInputSubPopup.addEventListener("click", function(){
                if(countOfInputSubPopup.value<=100){
                    countOfInputSubPopup.value = 100;
                }
                else{
                    countOfInputSubPopup.value = +countOfInputSubPopup.value - 1;
                }
                totalSummForSubPopup.value = (+countOfInputSubPopup.value * +valueTariff).toFixed(2);
            })
            plusCountOfInputSubPopup.addEventListener("click", function(){
                if(countOfInputSubPopup.value>=50000){
                    countOfInputSubPopup.value=50000
                }
                else{
                    countOfInputSubPopup.value = +countOfInputSubPopup.value + 1;  
                }
                totalSummForSubPopup.value = (+countOfInputSubPopup.value * +valueTariff).toFixed(2);
            })
            
        }

        ///////////////////////////////////// 

        ////////////////////accordeon main
        const accordeonQuestion = Array.from(document.getElementsByClassName("question"));
        if(accordeonQuestion){
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
        }
        /////////////////////////////////////
        /////////////////////////////////////

        /////////////////////////////////////// scrollbar
        const listFeedback = document.querySelector('.list-of-feedback');
        if(listFeedback){
            const simpleBarForListFeedback = new SimpleBar(listFeedback, {
                autoHide: false
            });
        }

        const listTariffServices = document.querySelector('.services-tariffs');
        if(listTariffServices){
            const simpleBarForListTariffServices = new SimpleBar(listTariffServices, {
                autoHide: false
            });
        }

        //////////////////////// LOAD MORE
        let countLoadComments = 3;
        let feedBackComments = document.getElementsByClassName("item-feedback");
        const buttonLoadMore = document.querySelector(".load-more-feedback");
        for(let i = 3; i<feedBackComments.length; i++){
            feedBackComments[i].classList.add("disabled");
        }
        if(buttonLoadMore){
            buttonLoadMore.addEventListener('click', function(){
                countLoadComments +=3;
                if(feedBackComments.length>=countLoadComments){
                    for(let i=0; i<countLoadComments; i++){
                        feedBackComments[i].classList.remove("disabled");
                    }
                    if(feedBackComments.length==countLoadComments){
                        buttonLoadMore.classList.add("disabled");
                    }
                    simpleBarForListFeedback.recalculate();
            }})
        }
})