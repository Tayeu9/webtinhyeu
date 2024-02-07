function continueAction() {
        
    }
    
    // Giả lập việc loading đã hoàn thành sau 3 giây
    setTimeout(function() {
      
      document.querySelector('.loading-bar').style.display = 'none';
      document.getElementById('loading-image').style.display='none';
      document.getElementById('continueBtn').classList.remove('hidden');
      
      writeText("Bạn có một bức thư từ Huỳnh Văn Tiến","writingText");
    }, 3000);
    document.addEventListener("DOMContentLoaded", function() {
      createFallingLetter();
    });
    
    function createFallingLetter() {
      const letter = document.createElement("img");
      letter.classList.add("falling-letter");
      document.querySelector(".falling-letter").appendChild(letter);
    }
// Ẩn lettor
function hideLetter() {
    var letter = document.querySelector('.lathu');
    var text = document.getElementById("writingText");
    var laudai = document.getElementById("laudai");
    var p2 =document.getElementById("p2");
    writeText("Thiên Diệu Hoàng Triều !\nĐây là nơi hai ta gặp nhau lần đầu\ntiên! lúc đó ta thấy nàng là người\nnói chuyện dễ thương và dễ gần\nnhất, còn giỏi nữa. Thấy cách nói\nchuyện của nàng rất hợp với ta\nthế rồi thích nàng từ lúc nào!","writingText2");
    letter.style.display = 'none';
    text.style.display='none';
    var image = document.querySelector('.chibi');
  var bt2 = document.getElementById('btnext2');
  bt2.style.display='none';
    laudai.classList.toggle('show-laudai');
    p2.classList.toggle('show-p2');
    image.style.transform = 'translateX(-500%)';
    setTimeout(function () {
      image.style.transform = 'translateX(500%)';
  }, 500); 
    // Ẩn bức thư
    letter.style.display = 'none';
    text.style.display='none';
    writeText("Đây","writingText2");
}

//Chu chay
function writeText(text,id) {
    const writingTextContainer = document.getElementById(id);
   
    // Se the text content of the container
    writingTextContainer.textContent = text;

    // Optional: You can perform additional actions before animation starts

    // Add animationend event listener to run code after animation completion
    writingTextContainer.addEventListener('animationend', function() {
      continueAction();
    });
  }


  function hide2() {

    var laudai = document.getElementById('laudai');
    var bt2=document.getElementById('btnext2').style.display='block';
    var writingText2 = document.getElementById('writingText2');
    var writingText3 = document.getElementById('writingText3');
    writingText3.style.display='block';
    var btnext =document.getElementById('btnext');
    laudai.style.display='none';
    writingText2.style.display='none';
    btnext.style.display='none';
    var laudai2 =document.getElementById('laudai2');
    laudai2.style.display='block';
    showSlides("slideshow1", 0);
showSlides("slideshow2", 0);
showSlides("slideshow3", 0);
showSlides("slideshow4", 0);
  }

  function hide3(){
    var laudai2 =document.getElementById('laudai2');
    laudai2.style.display='none';
    var bt2 = document.getElementById('btnext2');
    bt2.style.display='none';
    var writingText3 = document.getElementById('writingText3');
    writingText3.style.display='none';

    var p3 =document.getElementById('p3');
    var thun =document.getElementById('thun');
    p3.style.display='flex';
    thun.style.display='none';
    var aaa = document.getElementById('aaa');
    aaa.style.display='block';
    
  }


  let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;

function showSlides(slideshowId, slideIndex) {
  let i;
  let slides = document.querySelectorAll(`#${slideshowId} .slide`);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  // Kích hoạt hàm showSlides sau mỗi 12 giây (12000 milliseconds)
  setTimeout(() => showSlides(slideshowId, slideIndex), 12000);
}

// Gọi hàm showSlides cho từng slideshow




function hide4(){
  var sl1 =document.getElementById('slideshow1');
  sl1.style.display='none';
  var p3 = document.getElementById('p3');
  var p4 = document.getElementById('p4');
 
  
  p3.style.display='none';
  p4.style.display='block';
  var writeText = document.getElementById('writingText4');
  writeText.style.marginTop='10%'
  writeText.style.display='block'
}
window.onload = function() {
  var audio = document.getElementById("backgroundAudio");
  audio.play();
}
