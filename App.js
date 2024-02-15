var crcr = document.querySelector(".circle")
var main = document.querySelector("main")
var video = document.querySelector(".img-cont video")
var hma = document.querySelector(".circle div")
var buttons = document.querySelector(".button")
var intro = document.querySelector(".intro")


function loco(){
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});
}

function scrollXloco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});
tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


setTimeout(()=>{
    main.style.display = "inline"
    let tl = gsap.timeline()

tl.from("nav .logo",{
    y: 20,
    opacity: 0,
})
// tl.from("nav .nav-part2 button",{
//     y: 20,
//     opacity: 0,
// })
tl.from("nav .nav-part2 button",{
    scale: 0,
})
tl.from(".right h1",{
    opacity: 0,
})
tl.from(".left div",{
    y: 20,
    opacity: 0,
}) 
tl.from(".left button",{
   scale: 0,
})

gsap.from(".page1 .img-cont video", {
    scale: 0,
})

}, 8000)

function cursor(){
    main.addEventListener("mousemove", (val)=>{
        crcr.style.left = val.clientX - 10 + "px",
        crcr.style.top = val.clientY - 15 + "px"
    })
}

function mg_video() {
    video.addEventListener("mouseenter", ()=>{
        crcr.addEventListener("mousemove", (val)=>{
            crcr.style.height =  100 + "px",
            crcr.style.width =  100 + "px"
            hma.style.display = "block"
        })
    })
    
        video.addEventListener("mouseleave", (val)=>{
            crcr.style.height =  0 + "px",
            crcr.style.width =  0 + "px"
            hma.style.display = "none"
        })
    
    
    video.addEventListener("mouseenter", (e)=>{
        // console.log("hi");
        crcr.style.display = "inline"
        crcr.style.height = 100 + "px",
        crcr.style.width = 100 + "px"
        crcr.style.left = e.clientX + "px",
        crcr.style.top = e.clientY + "px",
        crcr.style.transition = "all linear 0.3s"
        hma.style.display = "block"
    })
    video.addEventListener("mouseleave", (e)=>{
        crcr.style.display = "none"
        hma.style.display = "none"
        crcr.style.transition = "all linear 0.1s"
    })
}

function section(){
    let imgf = document.querySelector("section .imgf")
    var sectionf = document.querySelectorAll(".secf")
    sectionf.forEach((sections)=>{ 
            sections.addEventListener("mouseenter", ()=>{
                imgf.style.position = "absolute"
                imgf.style.display = "inline"
                imgf.style.top = "-8vw"
                imgf.style.left = "0"
                imgf.style.zIndex = "9999"
                imgf.style.scale = "1"
            })
            sections.addEventListener("mouseleave", ()=>{
                imgf.style.position = "absolute"
                imgf.style.display = "none"
                imgf.style.top = "-8vw"
                imgf.style.left = "0"
                imgf.style.zIndex = "9999"
                imgf.style.scale = "0"
            })
            sections.addEventListener("mousemove", (e)=>{
                imgf.style.left = e.clientX - 215 + "px"
                crcr.style.display = "inline"
            })
        })
        var sectionsec =document.querySelector(".secs")
        let imgs = document.querySelector("section .imgs")
        sectionsec.addEventListener("mouseenter", ()=>{
            imgs.style.position = "absolute"
            imgs.style.display = "inline"
            imgs.style.top = "-8vw"
            imgs.style.left = "0"
            imgs.style.zIndex = "9999"
            imgs.style.scale = "1"
        })
        sectionsec.addEventListener("mouseleave", ()=>{
            imgs.style.position = "absolute"
            imgs.style.display = "none"
            imgs.style.top = "-8vw"
            imgs.style.left = "0"
            imgs.style.zIndex = "9999"
            imgs.style.scale = "0"
        })
        sectionsec.addEventListener("mousemove", (e)=>{
            imgs.style.left = e.clientX - 215 + "px"
            crcr.style.display = "inline"
        })
        var sectionset =document.querySelector(".sect")
        let imgt = document.querySelector("section .imgt")
        sectionset.addEventListener("mouseenter", ()=>{
            imgt.style.position = "absolute"
            imgt.style.display = "inline"
            imgt.style.top = "-8vw"
            imgt.style.left = "0"
            imgt.style.zIndex = "9999"
            imgt.style.scale = "1"
        })
        sectionset.addEventListener("mouseleave", ()=>{
            imgt.style.position = "absolute"
            imgt.style.display = "none"
            imgt.style.top = "-8vw"
            imgt.style.left = "0"
            imgt.style.zIndex = "9999"
            imgt.style.scale = "0"
        })
        sectionset.addEventListener("mousemove", (e)=>{
            imgt.style.left = e.clientX - 215 + "px"
            crcr.style.display = "inline"
        })
}

setTimeout(()=>{
    intro.style.top = "-200%"
}, 8000)

section()
// menuAnimation()
mg_video()
cursor()
scrollXloco()
loco()
