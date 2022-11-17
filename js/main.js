const blob_anim = KUTE.fromTo(
  "#blob1",
  {path: "#blob1"},
  {path: "#blob2"},
  {repeat: 999, duration: 3000, yoyo: true})


const welcome_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#welcome-section",
    pin: "#welcome-section",
    // preventOverlaps: true,
    // fastScrollEnd: true,
    start: "top top",
    pinSpacing: false,
  }
})
  .from("#blob",   // BLOB ANIMATION
    {
      y: "-100vh", onComplete: () => {
        blob_anim.start()
      }, scale: 1, duration: 2.5, ease: 'back'
    }
  ).fromTo(document.querySelectorAll(".content-body"), // WELCOME SECTION TEXT ANIMATION
    {y: "-100%", opacity: 0},
    {y: 0, opacity: 1, duration: 2, ease: "power2.easeIn"}, "<+.5")
  .fromTo(document.querySelectorAll(".content-title"),
    {opacity: 0, x: "-30%"},
    {opacity: 1, x: 0, duration: 2, ease: "power2"}, "<+.5")


const phone_el = document.querySelector("#iphone")
const icon_parent_el = phone_el.querySelector(".icon-parent")

const phone_pin = ScrollTrigger.create({
  trigger: "#phone-section",
  start: "top top",
  pin: "#phone-section",
  pinSpacing: false,
  endTrigger: "#hm-section",
  end: "top top",
  animation:gsap.timeline()
  .fromTo(phone_el, {rotate: 90, ease: "back", duration: 1, scale:.8}, {rotate: 0,scale:1})
  .from(phone_el.querySelectorAll(".device-icon"),
    {rotate: -90, transformOrigin: "50% 50%", ease: "back", duration: 1}, "<+.1")
  .fromTo('.iphone-content', { opacity:0, y:"50vh",duration: 1}, { opacity:1, y:"0" },"<-.1")
  // .to("#iphone", {scale: .9, ease: "power2", duration: 1.5,}, "<.2")
  //

})
//
// const phone_tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#phone-section",
//     start: "top top",
//     toggleActions: "play none none reverse",
//
//   }
// })
//   .from(phone_el, {rotate: 90, ease: "back", duration: 1, scale:.8})
//   .from(phone_el.querySelectorAll(".device-icon"),
//     {rotate: -90, transformOrigin: "50% 50%", ease: "back", duration: 1}, "<+.1")
//   .to('.iphone-content', { opacity:1, duration: .5}, "<-.1")
//   .to("#iphone", {scale: .9, ease: "power2", duration: 1.5,}, "<.2")


const phone_scroll_tl = ScrollTrigger.create(
  {
    trigger: "#iphone",
    start: "top top",
    // pin:"#phone-section",
    // markers: true,
    pinSpacing: false,
    scrub: true,
    animation: gsap.timeline().to(icon_parent_el, {
      x: () => -(icon_parent_el.scrollWidth * .80),
    })
  }
)
// ROTATE PHONE ANIMATION

const imac = document.querySelector("#imac")
const imac_icons = imac.querySelector(".icon-parent")
const imac_trigger = ScrollTrigger.create(
  {
    // markers: true,
    trigger: "#mac-section",
    start: 'top top',
    pin: true,
    pinSpacing: false,
    endTrigger: "#hm-section",
    end: "top top",
    toggleActions: "play none none reset",
    animation: gsap.timeline().to("#iphone", {scale: .8, opacity: 0, duration: .3})
      .fromTo(imac,
        {scale: 1.1, opacity: 0,  duration: .3},
        {scale: .9, opacity: 1, }
      )
      .fromTo(".iphone-content", {scale: 1, opacity: 1,}, {scale: .5, opacity: 0, duration: .3,}, "<")
      .fromTo(imac,{y: "-10%",  duration: 1}, {y: 0, }, ">")
      .fromTo(".imac-content ", {y: "-50%", opacity: 0}, {y: 0, opacity: 1})
      .fromTo(imac.querySelectorAll(".device-icon"),
        {opacity: 0, y: 10}, {stagger: {each: 0.1}, opacity: 100, y: 0,}, "<-1"),

  }
)
const imac_scroller = ScrollTrigger.create(
  {

    // pinnedContainer: "#mac-section",
    // pin: "#mac-section",
    // pinSpacer: "",
    trigger: "#imac",
    start: "center-=15vh top",
    // endTrigger: "#hm-section",
    end: "bottom+=100vh top",
    // markers: true,
    scrub: true,
    toggleActions: "play none none reverse",
    animation: gsap.timeline().to(
      imac_icons,
      {y: () => -(imac_icons.scrollHeight * .6)}),
    // preventOverlaps: true,
    // fastScrollEnd: true,
    pinSpacing: false,


  }
)


const portfolio_tl = gsap.timeline({
  scrollTrigger: {
    // markers: true,

    scrub: .5,
    trigger: "#hm-section",
    start: "top center",
    end: "top top",
    // toggleClass: {
    //   targets: [
    //     "#hm_overlay_final",
    //     "#hm_ipad_mockup", "#hm_iphone_mockup"],
    //   className: "hide"
    // }

  }
})
  .fromTo("#hm-parent", {scale: 1.7,}, {scale: .9})
  .from("#hm_intro_vid", {borderRadius: "0"})
  .from("#hm-heading",
    {y: "-100%", opacity: 0,})


const hm_tl = ScrollTrigger.create(
  {
    // preventOverlaps: true,
    trigger: "#hm-section",
    pin: true,
    start: "top top",
    // toggleActions: "play none none reset",
    // end: "+=2000",
    // // markers: true,
    // fastScrollEnd: true,
    pinSpacing: false,
    // scrub: .5,
    endTrigger: "#contact-section",
    end: "top top"

  }
)

const hm_scrub = gsap.timeline({
  scrollTrigger: {

    // markers: true,
    pinSpacing: false,
    // pin: true,
    scrub: .5,
    trigger: "#hm-section",
    start: "top top",
    end: "center top",

  }
})
  .to("#hm_mac_overlay", {scale: .68,})
  .to("#hm_overlay_final", {scale: .72,}, "<")
  .to("#hm_ipad_mockup", {scale: .58,}, "<")
  .to("#hm_iphone_mockup", {scale: .49,}, "<")
  .fromTo(
    "#hm_overlay_final",
    {clipPath: "polygon(100% 100%, 100% 0%, 100% 100%, 0% 100%)"},
    {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1},
    "<")
  .fromTo("#hm_ipad_mockup", {left: "30%"}, {
    left: "65%", duration: 1
  }, "<")

  .to("#hm_iphone_mockup", {
    opacity: 1, duration: .06, scale: .52
  }, "<+.5")
  .to("#hm_iphone_mockup", {
    ease: "Expo.easeIn",
    duration: .55,
    left: "62%",

  }, "<")
  .fromTo("#hm-text-content",
    {left: "-10%"},
    {opacity: 1, ease: "power3.easeIn", duration: 1, left: "0"})

const memorize_slide =document.querySelector("#memorize-slide")
const memorize_tl = ScrollTrigger.create({
  trigger: "#memorize-padding",
  // pin: true,
  // markers: true,
  start: "top center",
  pinSpacing: false,
  toggleActions: "play complete none reverse",
  animation: gsap.timeline()
    .to("#hm-text-content", {height:0,  y:"100%", ease: "power3.easeIn",  duration:0.5})
    .to("#memorize-text-content", {height: "auto",  ease: "power3.easeIn", duration:0.5}, "<")
    .to(["#hm_mac_overlay", "#hm_overlay_final", "#memorize-slide"], {zIndex:5, duration:0})
    .to(["#hm_mac_overlay", "#hm_overlay_final", ], {scale:"+=.05", duration:1})
    .to("#memorize-slide", {scaleY:"+=.05", scaleX:"+=.04", duration:1}, "<")
    .to("#hm_ipad_mockup", {x:"-50%", duration:.5, ease: "power3.easeIn",},"<")
    .to("#hm_iphone_mockup", {x:"-50%", duration:.5, ease: "power3.easeIn",}, "<")
    // .set("#memorize-slide", {opacity:1})
    .fromTo(memorize_slide, {opacity:0, duration:0.01, }, {opacity:1 },"<-0.5")
       .to("#hm-heading",  { duration:.5, width: 0}, "")
    .to("#memorize-heading", {duration:.5 ,width:'auto'} ,"<")
    // .fromTo(memorize_slide.querySelector('iframe'), {y:"-100%", duration:.5, ease:"easeIn"}, {y:0, }, "<")

  // endTrigger:"#contact-section",
  // end: "top top"

})

const play_memorize_btn = document.querySelector("#play-btn")
const quit_btn = document.querySelector("#close-game-btn")

const game_zoom_anim = gsap.timeline({paused:true})
    .to("#hm-parent",
      {
        transform: "unset",
        width:"100vw",
        height:"100vh",
        maxWidth:"100vw",
        maxHeight:"100vh",
        position:"absolute",
        duration:0
        })
        .fromTo("#memorize-slide",
          {top: "15.2%", left: "1.25%" , width:"100%", height:"100%",},
          {aspectRatio:"unset", top:0, left:0, width:"100vw", height:"100vh",
            transform: "unset",}
        )
    .to("body", {height:"100vh", overflow:"hidden",})
    .to("#memorize-slide",
    { height:"100vh", width:"100vw", duration:1, })
    .to("#close-game-btn", {y:0, duration:1 }, "<")

play_memorize_btn.addEventListener("click", ()=>{

  game_zoom_anim.play()
})


quit_btn.addEventListener("click", (e)=>{
  game_zoom_anim.reverse()
})

const contact_tl = gsap.timeline(
  {
    scrollTrigger: {
      trigger: "#contact-section",
      pin: true,
      start: "top top",
      pinSpacing: false
    }
  }
)
const contact_trigger = ScrollTrigger.create({
  trigger: "#contact-section",
  start: "top center",
  toggleActions: "play complete none reverse",

  animation: gsap.timeline().fromTo(
    ".contact-section-heading", {opacity: 0, x: -10, duration: 1}, {opacity: 1, x: 0, duration: 1})
    .from(".social-icon", {
      duration: .5, scale: 0, y: 20, x: 20, ease: "power1.inOut",
      stagger: {
        grid: [1, 5],
        from: "end",
        ease: "power2.in",
        amount: 1
      }
    }, "<")
})
const link_btn = document.querySelectorAll(".link-btn")
link_btn.forEach((_link_btn) => {
  _link_btn.addEventListener("click", handle_view_contact)
})

const show_anim = (el) => {
  gsap.timeline()
    .set(el, {overflow: "hidden", "white-space": "nowrap"})
    .to(el, {
      width: "0", duration: .3, onComplete: () => {
        el.setAttribute('href', el.dataset.link)
        el.innerText = `${el.dataset.link}`.split(":")[1]
      }
    }).to(el, {
    width: "auto", duration: .5, onComplete: () => {
      delete el.dataset.link
    }
  })
  el.removeEventListener("click", handle_view_contact)

}

function handle_view_contact(e) {
  e.preventDefault()
  e.target.dataset.link ? show_anim(e.target) : null

}
