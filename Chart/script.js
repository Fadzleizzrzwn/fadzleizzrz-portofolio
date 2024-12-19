const salesData = {
    labels: [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 
      'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ],
    datasets: [
      {
        label: '2022',
        data: [4000, 6000, 7000, 8000, 9000, 5000, 3000, 4000, 6000, 7000, 8000, 7000],
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Warna merah
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: '2023',
        data: [3000, 5000, 8000, 8500, 9500, 7000, 4000, 4500, 6500, 8500, 9000, 8500],
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Warna hijau
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };
  
  // Membuat chart dengan animasi naik/turun
  const ctx = document.getElementById('salesChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: salesData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Laporan Penjualan 2022 VS 2023'
        }
      },
      animation: {
        duration: 2000, // Durasi total animasi (dalam milidetik)
        easing: 'easeOutQuart', // Efek animasi untuk pergerakan mulus
        onProgress: function(animation) {
          const chartInstance = animation.chart;
          const ctx = chartInstance.ctx;
  
          ctx.clearRect(0, 0, chartInstance.width, chartInstance.height); // Membersihkan canvas
          chartInstance.draw(); // Menggambar ulang grafik
        }
      },
      scales: {
        y: {
          beginAtZero: true // Sumbu Y dimulai dari 0
        }
      }
    }
  });