document.addEventListener('DOMContentLoaded', function () {
  const today = new Date();
  const todayDate = today.getDate();

  const rows = document.querySelectorAll('tbody tr');
  rows.forEach(row => {
      const rowDate = parseInt(row.getAttribute('data-tanggal'), 10);
      if (rowDate === todayDate) {
          row.classList.add('bg-primary', 'text-white');
      }
  });
});