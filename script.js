javascript
document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');

    // First button section
    const buttonsDiv1 = document.createElement('div');
    buttonsDiv1.className = 'buttons';
    const button1 = document.createElement('a');
    button1.href = '#';
    button1.className = 'button1';
    button1.textContent = 'Layanan Kami';
    buttonsDiv1.appendChild(button1);

    // Second button section
    const buttonsDiv2 = document.createElement('div');
    buttonsDiv2.className = 'buttons';
    const button2 = document.createElement('a');
    button2.href = '#';
    button2.className = 'button3';
    button2.innerHTML = 'Baca Selengkapnya <i class="bi bi-arrow-right-circle-fill"></i>';
    buttonsDiv2.appendChild(button2);

    // Third button section
    const buttonsDiv3 = document.createElement('div');
    buttonsDiv3.className = 'buttons';
    const button3 = document.createElement('a');
    button3.href = '#';
    button3.className = 'button3';
    button3.innerHTML = 'Baca Selengkapnya <i class="bi bi-arrow-right-circle-fill"></i>';
    buttonsDiv3.appendChild(button3);

    // Fourth button section
    const buttonsDiv4 = document.createElement('div');
    buttonsDiv3.className = 'buttons';
    const button4 = document.createElement('a');
    button3.href = '#';
    button3.className = 'button3';
    button3.innerHTML = 'Baca Selengkapnya <i class="bi bi-arrow-right-circle-fill"></i>';
    buttonsDiv3.appendChild(button4);

    // Button to app div
    app.appendChild(buttonsDiv1);
    app.appendChild(buttonsDiv2);
    app.appendChild(buttonsDiv3);
    app.appendChild(buttonsDiv4);
});

