
      let boxes = document.getElementsByClassName('box-nav');
      let outOfBox=document.getElementById('outOfBox')
      console.log(outOfBox);

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", () => {
      for (let j = 0; j < boxes.length; j++) {
        boxes[j].classList.add('blurr');
      }
      boxes[i].classList.remove('blurr');
    });


    outOfBox.addEventListener('mouseover',()=>{
      for (let j = 0; j < boxes.length; j++) {
        boxes[j].classList.remove('blurr');
      }
    })
  }
   