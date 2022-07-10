
  const sliderMain = document.querySelector(".slider_main");
  const sliderIteam = document.querySelectorAll(".slider_item");
  const prevBtn = document.querySelector(".button__left");
  const nextBtn = document.querySelector(".button__right");
  const dot = document.querySelectorAll(".button");

  var length = 0;
  var next = 0;
  console.log(sliderMain.style.left);
  nextBtn.addEventListener("click", function () {
    // length = document.getElementsByClassName(sliderMain).style.left;
    if (next < 3){
      next ++;
      length = next * 100;
      console.log(length);
      sliderMain.style = `left : -${length}%`;
      console.log(sliderMain.style.left);
    }
  });
  prevBtn.addEventListener("click", function () {
    console.log("prev");
    if (next > 0){
      next --;
      length = next * 100;
      console.log(length);
      sliderMain.style = `left : -${length}%`;
      console.log(sliderMain.style.left);
    }
    
  });
  // let x = 580;
  // chuyen.addEventListener("click" , function(){
  //   Main.style = `transform: translateX(-${x}px)`;
  //   console.log("chao");
  // })


