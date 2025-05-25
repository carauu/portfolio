// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      
      if (navList.classList.contains('active')) {
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column';
        navList.style.position = 'absolute';
        navList.style.top = '80px';
        navList.style.left = '0';
        navList.style.width = '100%';
        navList.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navList.style.backdropFilter = 'blur(10px)';
        navList.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        navList.style.padding = '1rem';
      } else {
        navList.style.display = '';
      }
    });
  }
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        if (navList.classList.contains('active')) {
          navList.classList.remove('active');
          navList.style.display = '';
        }
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Typed text effect
  const typedTextElement = document.querySelector('.typed-text');
  
  if (typedTextElement) {
    const texts = [
      "Análise e Desenvolvimento de Sistemas",
      "10+ anos como técnica de informática",
      "Desenvolvimento Full-Stack: HTML, CSS, JavaScript, Python e PHP",
      "Inteligência Artificial: Projetos de Agentes de IA",
      "Cibersegurança: Pentesting e Ethical Hacking"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
      
      // If word is complete
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at end
      } 
      // If deletion is complete
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before typing next word
      }
      
      setTimeout(type, typingSpeed);
    }
    
    // Start typing effect
    setTimeout(type, 1000);
  }

  // Form submission
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real application, you would send the form data to a server
      // For now, we'll just show a success message
      const formData = new FormData(contactForm);
      let formValues = {};
      
      for (let [key, value] of formData.entries()) {
        formValues[key] = value;
      }
      
      console.log('Form submitted:', formValues);
      
      // Show success message
      const formGroups = contactForm.querySelectorAll('.form-group');
      const submitButton = contactForm.querySelector('button[type="submit"]');
      
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.style.backgroundColor = 'rgba(161, 68, 235, 0.1)';
      successMessage.style.color = '#a144eb';
      successMessage.style.padding = '1rem';
      successMessage.style.borderRadius = '8px';
      successMessage.style.marginTop = '1rem';
      successMessage.style.textAlign = 'center';
      successMessage.style.fontWeight = '500';
      successMessage.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
      
      // Clear form fields
      contactForm.reset();
      
      // Replace button with success message
      submitButton.style.display = 'none';
      contactForm.appendChild(successMessage);
      
      // Restore form after 5 seconds
      setTimeout(() => {
        successMessage.remove();
        submitButton.style.display = '';
      }, 5000);
    });
  }
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  
  if (header) {
    if (window.scrollY > 100) {
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      header.style.height = '70px';
    } else {
      header.style.boxShadow = '';
      header.style.height = '80px';
    }
  }
});