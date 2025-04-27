document.addEventListener('DOMContentLoaded', function() {
    // Create floating elements
    createFloatingElements();
    
    // Set up countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Check if it's her birthday (June 3)
    checkBirthday();
    
    // Create 25 reasons (you can customize these)
    setupReasons();
    
    // Animate days-left message
    animateDaysMessage();

    function createFloatingElements() {
        const balloonsContainer = document.querySelector('.floating-balloons');
        const heartsContainer = document.querySelector('.floating-hearts');
        const starsContainer = document.querySelector('.floating-stars');
        
        // Balloon colors
        const balloonColors = ['#ff6b88', '#ffb347', '#4cc9f0', '#7b2cbf', '#4ad295'];
        
        // Create balloons
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.style.left = Math.random() * 100 + 'vw';
                balloon.style.animationDuration = 5 + Math.random() * 10 + 's';
                balloon.style.animationDelay = Math.random() * 5 + 's';
                balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
                balloonsContainer.appendChild(balloon);
                
                // Remove balloon after animation
                setTimeout(() => {
                    balloon.remove();
                }, 15000);
            }, i * 500);
        }
        
        // Create hearts and stars continuously
        setInterval(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = 3 + Math.random() * 4 + 's';
            heartsContainer.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 7000);
            
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.animationDuration = 4 + Math.random() * 5 + 's';
            starsContainer.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, 9000);
        }, 300);
    }
    
    function updateCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        let birthday = new Date(currentYear, 5, 3); // June 3 (month is 0-indexed)
        
        // If birthday has passed this year, set to next year
        if (now > birthday) {
            birthday = new Date(currentYear + 1, 5, 3);
        }
        
        const diff = birthday - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        // Update days-left message
        document.getElementById('days-left').textContent = days;
    }
    
    function checkBirthday() {
        const now = new Date();
        const birthday = new Date(now.getFullYear(), 5, 3);
        
        if (now.getMonth() === birthday.getMonth() && now.getDate() === birthday.getDate()) {
            // It's her birthday!
            const birthdayEffect = document.querySelector('.birthday-effect');
            birthdayEffect.style.display = 'flex';
            
            // Create fireworks
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const firework = document.createElement('div');
                    firework.className = 'firework';
                    firework.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
                    firework.style.setProperty('--ty', (Math.random() * 200 - 100) + 'px');
                    firework.style.left = '50%';
                    firework.style.top = '50%';
                    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    birthdayEffect.appendChild(firework);
                    
                    setTimeout(() => {
                        firework.remove();
                    }, 2000);
                }, i * 100);
            }
            
            // Hide countdown
            document.querySelector('.countdown-container').style.display = 'none';
        }
    }
    
    function setupReasons() {
        const reasons = [
            "1. You're the most caring friend",
            "2. Your kindness knows no bounds",
            "3. You make every moment special",
            "4. Your friendship means the world to me",
            "5. You're the best listener",
            "6. You're my favorite person to talk to",
            "7. You understand me like no one else",
            "8. You're my sunshine on cloudy days",
            "9. You're my favorite notification",
            "10. You're simply irreplaceable",
             "NOTE - . Inka Chala Unnai kani place ledduu medamm !"
        ];
        
        const container = document.querySelector('.reasons-container');
        reasons.forEach(reason => {
            const div = document.createElement('div');
            div.className = 'reason';
            div.textContent = reason;
            container.appendChild(div);
        });
    }
    
    function animateDaysMessage() {
        const daysLeft = document.getElementById('days-left');
        setInterval(() => {
            daysLeft.style.transform = 'scale(1.2)';
            daysLeft.style.color = '#ff6b88';
            setTimeout(() => {
                daysLeft.style.transform = 'scale(1)';
                daysLeft.style.color = '#fff';
            }, 500);
        }, 2000);
    }
});