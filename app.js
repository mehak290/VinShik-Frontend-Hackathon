// 👋 tiny wave animation
window.addEventListener('load', () => {
  const wave = document.querySelector('.wave');
  if(!wave) return;
  wave.animate(
    [{transform:'rotate(0deg)'},{transform:'rotate(15deg)'},{transform:'rotate(0deg)'}],
    {duration:900,iterations:1,easing:'ease-in-out',delay:200}
  );
});

// === CHARTS ===
function createBarChart(ctx, color) {
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["", "", "", "", "", ""],
      datasets: [{
        data: [5, 8, 6, 10, 7, 9],
        backgroundColor: color,
        borderRadius: 4,
        barThickness: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { display: false }
      }
    }
  });
}

createBarChart(document.getElementById('chartBlue'), "#3b82f6");
createBarChart(document.getElementById('chartOrange'), "#f59e0b");
createBarChart(document.getElementById('chartGreen'), "#22c55e");
createBarChart(document.getElementById('chartPurple'), "#a78bfa");
