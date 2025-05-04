fetch('data/testimonials.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('testimonial-container');
    container.innerHTML = '';
    data.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `<p>"${item.quote}"<br><strong>– ${item.name}</strong></p>`;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error('Error loading testimonials:', err);
  });
