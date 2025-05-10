const btn = document.getElementById('animatedBtn');
const colorPicker = document.getElementById('colorPicker');

// Load saved color on page load
window.onload = () => {
const savedColor = localStorage.getItem('btnColor');
if (savedColor) {
    btn.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
    }
};

// Save selected color to localStorage and apply it
colorPicker.addEventListener('input', () => {
    const color = colorPicker.value;
    localStorage.setItem('btnColor', color);
    btn.style.backgroundColor = color;
});

// Add animation on click
btn.addEventListener('click', () => {
    btn.classList.add('animate');
  setTimeout(() => btn.classList.remove('animate'), 600); // reset animation
});
