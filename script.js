document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surpriseButton');
    const surpriseMessage = document.getElementById('surpriseMessage');

    surpriseButton.addEventListener('click', () => {
        surpriseMessage.classList.remove('hidden');
        document.getElementById('message').innerText = 'Your surprise is ready!';
        surpriseButton.disabled = true;
        surpriseButton.style.backgroundColor = '#ccc'; // Disable button color
    });

    const thankYouButton = document.getElementById('thankYouButton');

    thankYouButton.addEventListener('click', () => {
        alert('You’re welcome! I hope your birthday is as amazing as you are!');
    });
});
