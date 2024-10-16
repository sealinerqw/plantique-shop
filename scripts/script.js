//появление текста при ховере на карточках коллекции
const selectionItems = document.querySelectorAll('.selection_item')

selectionItems.forEach(element =>{
  const itemText = element.querySelector('.item-text')
  element.addEventListener("mouseenter", ()=>{
    itemText.classList.add('visible')
  })
  
  element.addEventListener("mouseleave", ()=>{
    itemText.classList.remove("visible")
  })
  
})

//swiper
const swiper = new Swiper('.swiper',
  {
    direction: "horizontal",
    loop: true,
    
    pagination:{
      el: '.swiper-pagination',
      clickable: true
    },

    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }
)

//воспроизведение видео при скролле до секции с видео
const videoDiv = document.querySelector('.video')
const videoPlayer = document.querySelector(".video_player")

const videoIntersectionObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry) =>{
    if (entry.isIntersecting){
      videoPlayer.play()
    } else {
      videoPlayer.pause()
    }
  })
})
videoIntersectionObserver.observe(videoDiv)

//Открытие карточек faq-секции

const faqQuestions = document.querySelectorAll('.faq_question')

faqQuestions.forEach(element =>{
  const faqQuestionButton = element.querySelector('.question-title-button')
  const faqQuestionAnswer = element.querySelector('.faq_question-answer')
  const buttonArrow = element.querySelector("#arrow")
  let open = false

    faqQuestionButton.addEventListener("click", ()=>{
    if(!open){
      open = true
      faqQuestionAnswer.classList.add("visible")
      buttonArrow.style.transform = "scaleY(-1)"
    } else{
      open = false
      faqQuestionAnswer.classList.remove("visible")
      buttonArrow.style.transform = "scaleY(1)"
    }
  })
})