// Animating the statistics numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    const target = +stat.getAttribute('data-target');
    let count = 0;
  
    const updateCount = () => {
      if (count < target) {
        count += Math.ceil(target / 100);
        stat.innerText = count;
        setTimeout(updateCount, 30);
      } else {
        stat.innerText = target;
      }
    };
  
    updateCount();
  });
  