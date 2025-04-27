document.addEventListener('DOMContentLoaded', function() {
    // Create floating elements
    createFloatingElements();
    
    // Password input animation
    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('input', animatePasswordChars);
    
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (passwordInput.value === "harsha") {
            // Correct password
            celebrate();
            
            // Redirect after celebration
            setTimeout(() => {
                window.location.href = "main.html";
            }, 3000);
        } else {
            // Wrong password
            wrongPassword();
        }
    });
    
    function createFloatingElements() {
        const heartsContainer = document.querySelector('.floating-hearts');
        const starsContainer = document.querySelector('.floating-stars');
        const balloonsContainer = document.querySelector('.floating-balloons');
        
        // Create hearts
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = 3 + Math.random() * 4 + 's';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 7000);
            }, i * 300);
        }
        
        // Create stars
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + 'vw';
                star.style.animationDuration = 4 + Math.random() * 5 + 's';
                star.style.animationDelay = Math.random() * 5 + 's';
                starsContainer.appendChild(star);
                
                setTimeout(() => {
                    star.remove();
                }, 9000);
            }, i * 400);
        }
        
        // Create balloons
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.className = 'balloon balloon-' + (i % 3 + 1);
                balloon.style.left = Math.random() * 100 + 'vw';
                balloon.style.animationDuration = 8 + Math.random() * 5 + 's';
                balloon.style.animationDelay = Math.random() * 5 + 's';
                balloonsContainer.appendChild(balloon);
                
                setTimeout(() => {
                    balloon.remove();
                }, 13000);
            }, i * 1000);
        }
    }
    
    function animatePasswordChars() {
        const password = passwordInput.value;
        const animatedPassword = password.split('').map(char => 
            `<span class="password-char" style="animation-delay: ${Math.random() * 0.2}s">${char}</span>`
        ).join('');
        
        // Create a fake div to measure the width
        const fakeDiv = document.createElement('div');
        fakeDiv.style.position = 'absolute';
        fakeDiv.style.visibility = 'hidden';
        fakeDiv.style.whiteSpace = 'nowrap';
        fakeDiv.style.fontFamily = '"Dancing Script", cursive';
        fakeDiv.style.fontSize = '1.2rem';
        fakeDiv.style.letterSpacing = '2px';
        fakeDiv.innerHTML = animatedPassword;
        document.body.appendChild(fakeDiv);
        
        // Set the cursor position
        passwordInput.style.width = (fakeDiv.offsetWidth + 40) + 'px';
        document.body.removeChild(fakeDiv);
        
        // Create a new input event to update the value with spans
        const inputEvent = new Event('input', { bubbles: true });
        Object.defineProperty(inputEvent, 'target', { value: { value: password } });
        passwordInput.dispatchEvent(inputEvent);
    }
    
    function celebrate() {
        document.querySelector('.login-box').classList.add('celebrate');
        
        // Show all confetti
        document.querySelectorAll('.confetti').forEach(confetti => {
            confetti.style.opacity = '1';
        });
        
        // Make balloons fly away
        document.querySelectorAll('.balloon').forEach(balloon => {
            balloon.style.animation = 'float-away 2s forwards';
        });
        
        // Title animation
        const title = document.querySelector('.birthday-title');
        title.style.transform = 'scale(1.2)';
        title.style.textShadow = '0 0 10px rgba(255, 107, 136, 0.8)';
    }
    
    function wrongPassword() {
        passwordInput.value = '';
        passwordInput.focus();
        loginForm.classList.add('shake');
        setTimeout(() => {
            loginForm.classList.remove('shake');
        }, 500);
        
        passwordInput.style.boxShadow = '0 0 0 2px rgba(255, 0, 0, 0.5)';
        setTimeout(() => {
            passwordInput.style.boxShadow = 'none';
        }, 1000);
    }
});