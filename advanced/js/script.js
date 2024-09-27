        const overlay = document.querySelector('.overlay');
        const paragraphBox = document.querySelector('.paragraph-box');
        const btn3Wrapper = document.getElementById('btn3-wrapper');

        function toggleParagraph() {
            const isActive = paragraphBox.classList.toggle('active');
            overlay.style.opacity = isActive ? '1' : '0';
            overlay.style.visibility = isActive ? 'visible' : 'hidden';
            btn3Wrapper.style.display = isActive ? 'none' : 'flex'; // Hide button when active
        }

        btn3Wrapper.addEventListener('click', toggleParagraph);

        overlay.addEventListener('click', () => {
            paragraphBox.classList.remove('active');
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            btn3Wrapper.style.display = 'flex'; // Show button again
        });
  
