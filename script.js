window.onload = function() {
    const productContainer = document.querySelector('.product-container ul');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
  
    let currentIndex = 0;
    const itemWidth = 1030; // カードの幅 (500px) + 余白 (30px)
    const containerWidth = document.querySelector('.product-container').offsetWidth;
    const totalItems = document.querySelectorAll('.product-container li').length;
    const maxIndex = totalItems - Math.floor(containerWidth / itemWidth);
  
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        productContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentIndex < maxIndex) {
        currentIndex++;
        productContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      }
    });
  }