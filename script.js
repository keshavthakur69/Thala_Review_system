let input = document.querySelector(".input");
let main = document.querySelector(".main");
let main2 = document.querySelector(".main2");
let close = document.querySelector("#close");
let video1 = document.querySelector("#video1");
let video2 = document.querySelector("#video2");

let close2 = document.querySelector("#close2");
let main3 = document.querySelector(".main3");



// function clear() {
//   console.log("close");
//   main.classList.remove("mainafter");
//   main.classList.add("main");
//   main2.classList.remove("main2");
//   main2.style.visibility = "hidden";
//   // video.setAttribute("autoplay",false);
// }

close.addEventListener("click", () => {
  console.log("close clicked")

  // event.preventDefault();
  video1.pause();
  video2.pause();
  video1.parentNode.removeChild(video1);
  video2.parentNode.removeChild(video2);
  location.reload(true);
  
  
});

close2.addEventListener("click", () => {
  console.log("close clicked")
  // event.preventDefault();
  video1.pause();
  video2.pause();
  video1.parentNode.removeChild(video1);
  video2.parentNode.removeChild(video2);
  location.reload(true);

});
// function setvideo() {
//   let video = document.querySelector(".video-div");
//   console.log("setvideo");
//   let element = document.createElement("video");
//   video.append("element");
//   element.style.visibility = "visible";
//   element.setAttribute("autoplay", true);
//   element.setAttribute("src", "dhoni.mp4");
// }

function dhoni() {
  console.log("hiiii");
  main.classList.add("mainafter");
  // main.classList.remove("main");
  main2.classList.add("main2");
  main2.style.visibility = "visible";

  // setvideo();
  // video.setAttribute("autoplay",true);

  console.log("hello");
}


function moyemoye() {
  console.log("moye");
  main.classList.add("mainafter");
  main3.style.visibility = "visible";
  main3.classList.add("main3");
  main2.style.position = "absolute";
}



const arr = ["7", "14", "07", "dhoni", "thala","Thala", "Dhoni","Maahi","Mahi","mahi","maahi","vaishno","snippet","26/11/8","9/11","7min","7minutes","7minute","msd","1425775840","msd"];

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  console.log("hi");
  let box = document.getElementById("box");
  let boxvalue = box.value;
  if (boxvalue === "") {
    console.log("empty");

    alert("please! fill something");
  } else {
    if(arr.includes(boxvalue)) {
      dhoni();
    }else{
      moyemoye();
    }

  }
});
