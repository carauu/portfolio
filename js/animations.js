document.addEventListener('DOMContentLoaded', function() {
  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.skill-progress-bar');
  
  function animateSkillBars() {
    skillBars.forEach(bar => {
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (barPosition < screenPosition) {
        bar.style.width = bar.style.width || bar.getAttribute('style').split('width:')[1].split(';')[0].trim();
      } else {
        bar.style.width = '0';
      }
    });
  }
  
  // Run once on load
  setTimeout(animateSkillBars, 500);
  
  // Run on scroll
  window.addEventListener('scroll', animateSkillBars);
  
  // Animate elements on scroll
  const animateElements = document.querySelectorAll('.skill-category, .project-card, .section-title, .hero-content, .hero-illustration, .about-content, .contact-content');
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  function addAnimation() {
    animateElements.forEach(element => {
      if (isInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated');
        element.style.animation = 'fadeInUp 0.6s ease forwards';
      }
    });
  }
  
  // Create animation keyframes
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .skill-category, .project-card, .section-title, .hero-content, .hero-illustration, .about-content, .contact-content {
      opacity: 0;
    }
    
    .animated {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
  
  // Initial run
  setTimeout(addAnimation, 300);
  
  // On scroll
  window.addEventListener('scroll', addAnimation);
  
  // Add hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('.project-card, .skill-category, .btn, .nav-link, .social-link');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease, background-color 0.3s ease';
      
      if (this.classList.contains('project-card') || this.classList.contains('skill-category')) {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      } else if (this.classList.contains('btn')) {
        this.style.transform = 'translateY(-2px)';
      }
    });
    
    element.addEventListener('mouseleave', function() {
      if (this.classList.contains('project-card') || this.classList.contains('skill-category')) {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      } else if (this.classList.contains('btn')) {
        this.style.transform = 'translateY(0)';
      }
    });
  });
  
  // Logo animation
  const logo = document.querySelector('.logo-text');
  
  if (logo) {
    logo.addEventListener('mouseenter', function() {
      this.style.transition = 'transform 0.3s ease, color 0.3s ease';
      this.style.transform = 'scale(1.1)';
    });
    
    logo.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  }
});