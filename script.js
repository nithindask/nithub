// Optional: Make the orb follow mouse slightly
document.addEventListener('mousemove', (e) => {
    const orb = document.querySelector('.orb');
    const x = e.clientX / window.innerWidth * 50;
    const y = e.clientY / window.innerHeight * 50;
    orb.style.transform = `translate(${x}px, ${y}px)`;
});