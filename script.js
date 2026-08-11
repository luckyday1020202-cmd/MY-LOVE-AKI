document.addEventListener('DOMContentLoaded', () => {
  const envelopeBody = document.getElementById('envelopeBody');
  const letterPaper = document.getElementById('letterPaper');
  const bgMusic = document.getElementById('bgMusic');
  
  const waveTransition = document.getElementById('waveTransition');
  const oceanBg = document.getElementById('oceanBg');
  const scene2Card = document.getElementById('scene2Card');
  
  const sunsetBg = document.getElementById('sunsetBg');
  const birthdayCard = document.getElementById('birthdayCard');
  
  const scene1 = document.getElementById('scene1');
  const scene2 = document.getElementById('scene2');
  const scene3 = document.getElementById('scene3');
  const scene4 = document.getElementById('scene4');
  const scene5 = document.getElementById('scene5');
  const scene6 = document.getElementById('scene6');

  const btnScene1Next = document.getElementById('btnScene1Next');
  const btnScene2Next = document.getElementById('btnScene2Next');
  const btnRestart = document.getElementById('btnRestart');
  const btnThaiNight = document.getElementById('btnThaiNight');
  const btnScene4Next = document.getElementById('btnScene4Next');
  
  const phoneCard = document.getElementById('phoneCard');
  const phoneCloseBtn = document.getElementById('phoneCloseBtn');
  const iphoneModal = document.getElementById('iphoneModal');
  const modalMemoryBtn = document.getElementById('modalMemoryBtn');
  
  const btnFinalRestart = document.getElementById('btnFinalRestart');

  // 1. 點擊信封瞬間：打開信件並播放背景音樂
  envelopeBody.addEventListener('click', () => {
    if (envelopeBody.classList.contains('open')) return;
    
    bgMusic.volume = 0.5;
    bgMusic.play().catch(error => {
      console.log("音樂播放需要互動權限");
    });

    envelopeBody.classList.add('open');
    setTimeout(() => letterPaper.classList.add('extracted'), 600);
    setTimeout(() => {
      envelopeBody.classList.add('open-anim');
      btnScene1Next.style.opacity = '1';
    }, 1200);
  });

  // 2. 波紋動畫
  const causticsContainer = document.getElementById('causticsContainer');
  setInterval(() => {
    if (!scene2.classList.contains('active')) return;
    const line = document.createElement('div');
    line.className = 'caustic-line';
    line.style.width = `${Math.random() * 120 + 80}px`;
    line.style.top = `${Math.random() * 90}%`;
    line.style.left = `${Math.random() * 80}%`;
    causticsContainer.appendChild(line);
    setTimeout(() => line.remove(), 4000);
  }, 800);

  // 3. 第一幕 -> 第二幕
  btnScene1Next.addEventListener('click', (e) => {
    e.stopPropagation();
    waveTransition.classList.add('animating');

    setTimeout(() => {
      scene1.classList.remove('active');
      scene2.classList.add('active');
      
      setTimeout(() => { waveTransition.style.display = 'none'; }, 500);

      setTimeout(() => {
        scene2Card.classList.add('show');
      }, 300);

    }, 900); 
  });

  // 4. 第二幕 -> 第三幕
  btnScene2Next.addEventListener('click', () => {
    scene3.classList.add('active');
    scene3.style.zIndex = "1"; 
    scene2.style.zIndex = "2"; 

    oceanBg.classList.add('fade-out');
    sunsetBg.classList.add('spread-active');

    setTimeout(() => {
      scene2.classList.remove('active');
      scene3.style.zIndex = "2"; 
      birthdayCard.classList.add('bounce-in');
    }, 1800); 
  });

  // 5. 再次重溫
  btnRestart.addEventListener('click', () => {
    scene3.style.transition = "opacity 1s ease";
    scene3.style.opacity = "0";

    setTimeout(() => {
      scene3.classList.remove('active');
      scene3.style.opacity = "1";
      sunsetBg.classList.remove('spread-active');
      birthdayCard.classList.remove('bounce-in');

      oceanBg.classList.remove('fade-out');
      scene2.classList.add('active');
      scene2.style.zIndex = "2";
      scene2Card.classList.add('show');
    }, 1000);
  });

  // 6. 前往泰國大象節夜市與餐廳
  btnThaiNight.addEventListener('click', () => {
    scene3.style.transition = "opacity 1s ease";
    scene3.style.opacity = "0";

    setTimeout(() => {
      scene3.classList.remove('active');
      scene3.style.opacity = "1";
      sunsetBg.classList.remove('spread-active');
      birthdayCard.classList.remove('bounce-in');

      scene4.classList.add('active');
    }, 1000);
  });

  // 7. 第四幕 -> 第五幕 (曼谷山頂遠景與煙火)
  btnScene4Next.addEventListener('click', () => {
    scene4.style.transition = "opacity 1s ease";
    scene4.style.opacity = "0";

    setTimeout(() => {
      scene4.classList.remove('active');
      scene4.style.opacity = "1";

      scene5.classList.add('active');

      setTimeout(() => {
        phoneCard.classList.add('show-phone');
      }, 2200);

    }, 1000);
  });

  // 8. 點擊手機內的關閉按鈕 -> 彈出 iPhone 風格透明玻璃選項框
  phoneCloseBtn.addEventListener('click', () => {
    phoneCard.style.transform = "scale(0.9)";
    phoneCard.style.opacity = "0.5";
    iphoneModal.classList.add('show-modal');
  });

  // 9. 點擊彈窗中的「回憶」按鈕 -> 完美平順切換到第六幕黑幕畫面
  modalMemoryBtn.addEventListener('click', () => {
    iphoneModal.classList.remove('show-modal');
    phoneCard.classList.remove('show-phone');

    scene5.style.transition = "opacity 2s ease";
    scene5.style.opacity = "0";

    setTimeout(() => {
      scene5.classList.remove('active');
      scene5.style.opacity = "1"; // 重置回原樣
      scene6.classList.add('active');
    }, 2000);
  });

  // 10. 最終畫面的「回憶」按鈕：點擊後回到最開始的地方
  btnFinalRestart.addEventListener('click', () => {
    location.reload();
  });
});