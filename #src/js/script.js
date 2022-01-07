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
            slidesToShow: 10
        })


        ///////////////////////////form input calculate tariff
        const selectTariff = document.querySelector(".select-tariff");
        const countOfInputSub = document.querySelector(".count-value input");
        const inputSliderForSub =  document.querySelector(".js-input-for-count-sub");
        const totalSummForSub = document.querySelector(".total-value input");
        if(countOfInputSub && inputSliderForSub && selectTariff && totalSummForSub){
            let instance;
            let min = 500;
            let max = 10000;
            console.log(countOfInputSub.value);
            let valueTariff = 0;
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
                    instance.update({
                        from: countFromInput
                    });
                }
                else{
                    if (countFromInput < min) {
                    countFromInput = min;
                    countOfInputSub.value = countFromInput;
                } else if (countFromInput > max) {
                    countFromInput = max;
                    countOfInputSub.value = countFromInput;
                }
                instance.update({
                    from: countFromInput
                });
            }
            });
            selectTariff.addEventListener('click', function(){
                valueTariff = selectTariff.options[selectTariff.selectedIndex].value;
                totalSummForSub.value = +valueTariff * +countFromInput;
                console.log(valueTariff + " " + countFromInput);
            })
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
})