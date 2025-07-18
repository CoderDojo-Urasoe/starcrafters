// モバイルメニューの初期化と強化されたイベントハンドラー
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  
  const mobileNav = document.getElementById('mobileNav');
  const mobileMenu = document.getElementById('mobileMenu');
  
  // 初期状態を確実に設定
  if (mobileNav) {
      mobileNav.classList.remove('active');
      mobileNav.style.transform = 'translateY(-100%)';
      mobileNav.style.opacity = '0';
      mobileNav.style.visibility = 'hidden';
  }
  
  if (mobileMenu) {
      mobileMenu.classList.remove('active');
  }
  
  // モバイルメニューのクリックイベント
  if (mobileMenu) {
      mobileMenu.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const isActive = this.classList.contains('active');
          
          if (isActive) {
              this.classList.remove('active');
              if (mobileNav) {
                  mobileNav.classList.remove('active');
                  mobileNav.style.transform = 'translateY(-100%)';
                  mobileNav.style.opacity = '0';
                  mobileNav.style.visibility = 'hidden';
              }
          } else {
              this.classList.add('active');
              if (mobileNav) {
                  mobileNav.classList.add('active');
                  mobileNav.style.transform = 'translateY(0)';
                  mobileNav.style.opacity = '1';
                  mobileNav.style.visibility = 'visible';
              }
          }
      });
  }
  
  // モバイルナビのリンククリック時にメニューを閉じる
  if (mobileNav) {
      const mobileLinks = mobileNav.querySelectorAll('a');
      mobileLinks.forEach(link => {
          link.addEventListener('click', function() {
              if (mobileMenu) mobileMenu.classList.remove('active');
              mobileNav.classList.remove('active');
              mobileNav.style.transform = 'translateY(-100%)';
              mobileNav.style.opacity = '0';
              mobileNav.style.visibility = 'hidden';
          });
      });
  }

  // Hero Slideshow
  const slideshowContainer = document.querySelector('.slideshow-container');
  if (slideshowContainer) {
      const imageCount = 12; // スライドショーで表示する画像の総数を指定
      const keyvisualPath = 'img/keyvisual/';

      for (let i = 1; i <= imageCount; i++) {
          // 命名規則 '001.jpg', '002.jpg'... に従ってファイル名を生成
          const imageName = i.toString().padStart(3, '0') + '.jpg';

          const slide = document.createElement('div');
          slide.className = 'mySlides fade';
          
          const img = document.createElement('img');
          img.src = keyvisualPath + imageName;
          img.alt = `キービジュアル${i} - StarCraftersの活動風景`;
          
          slide.appendChild(img);
          slideshowContainer.appendChild(slide);
      }

      let slideIndex = 0;
      showSlides();

      function showSlides() {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          if (slides.length === 0) return;

          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          slideIndex = (slideIndex % slides.length) + 1;
          slides[slideIndex - 1].style.display = "block";
          setTimeout(showSlides, 4000); // 4秒ごとに画像を切り替え
      }
  }
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
          });
      }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
          entry.target.style.animationDelay = `${index * 0.1}s`;
      }
  });
}, observerOptions);

// Observe all loading elements
document.querySelectorAll('.loading').forEach(el => {
  observer.observe(el);
});

// Add interactive effects
document.querySelectorAll('.vision-card, .program-card, .team-member, .example-card, .npo-reason-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
  });
});

// Add loading screen effect
window.addEventListener('load', function() {
  setTimeout(() => {
      document.querySelectorAll('.loading').forEach((el, index) => {
          setTimeout(() => {
              el.classList.add('loaded');
          }, index * 50);
      });
  }, 300);
});

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.position = 'fixed';
scrollProgress.style.top = '0';
scrollProgress.style.left = '0';
scrollProgress.style.width = '0%';
scrollProgress.style.height = '3px';
scrollProgress.style.background = 'linear-gradient(90deg, #14b8a6, #0ea5e9)';
scrollProgress.style.zIndex = '10001';
scrollProgress.style.transition = 'width 0.3s ease';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
});

// Prevent horizontal scroll on mobile
document.addEventListener('touchmove', function(e) {
  if (e.touches.length > 1) {
      e.preventDefault();
  }
}, { passive: false });
