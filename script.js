document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Carrossel (Animação de Troca de Imagens) ---
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
        // Remove a classe 'active' do item atual
        carouselItems[currentIndex].classList.remove('active');
        
        // Move para o próximo índice (volta ao início se chegar ao fim)
        currentIndex = (currentIndex + 1) % carouselItems.length;
        
        // Adiciona a classe 'active' ao novo item
        carouselItems[currentIndex].classList.add('active');
    }

    // Troca o slide a cada 5000 milissegundos (5 segundos)
    setInterval(showNextSlide, 5000); 


    // --- Lógica de Responsividade (Menu Hambúrguer) ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar/esconder o menu
        navLinks.classList.toggle('active');
    });


    // --- Lógica Simples de Animação ao Rolar (Scroll Reveal) ---
    const serviceCards = document.querySelectorAll('.servico-card');
    
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // 20% do elemento visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento estiver visível, adiciona a classe de animação
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Para o observador após a primeira animação
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => {
        // Estilo inicial para animação de fade-in e subida
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        observer.observe(card);
    });

});