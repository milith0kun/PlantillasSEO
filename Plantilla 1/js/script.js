document.addEventListener('DOMContentLoaded', () => {
    // --- Funcionalidad para Mostrar/Ocultar Recetas ---
    const recipeButtons = document.querySelectorAll('.toggle-recipe'); // Botones para mostrar/ocultar recetas
    recipeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const recipeDiv = document.getElementById(this.dataset.recipeId);
            recipeDiv.classList.toggle('hidden'); // Usar una clase para mostrar/ocultar
            this.innerText = recipeDiv.classList.contains('hidden') ? 'Mostrar receta especial' : 'Ocultar receta'; // Cambiar texto del botón
        });
    });

    // --- Validación de formulario de contacto ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener valores del formulario
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validación simple
            if (name === '' || email === '' || message === '') {
                alert('Por favor, completa todos los campos.');
                return; // Termina la ejecución si los campos están vacíos
            }

            document.getElementById('formResponse').style.display = 'block'; // Muestra el mensaje de respuesta
            contactForm.reset(); // Limpia los campos del formulario
            console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`); // Solo para depuración
        });
    }

    // --- Calculador de Calorías ---
    const calorieCalculator = document.getElementById('calorieCalculator');
    if (calorieCalculator) {
        calorieCalculator.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener valores del formulario
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            const age = parseInt(document.getElementById('age').value);
            const activityLevel = document.getElementById('activityLevel').value;

            // Calcular las calorías a partir de la fórmula de Harris-Benedict
            let bmr; // Tasa de Metabolismo Basal
            if (activityLevel === 'sedentario') {
                bmr = 1.2; // Sedentario
            } else if (activityLevel === 'ligero') {
                bmr = 1.375; // Ligero
            } else if (activityLevel === 'moderado') {
                bmr = 1.55; // Moderado
            } else {
                bmr = 1.725; // Alto
            }

            // Calorías necesarias por día
            const caloricNeeds = Math.round(((10 * weight) + (6.25 * height) - (5 * age) + 5) * bmr); // Fórmula adaptada para hombres
            alert(`Tu requerimiento calórico estimado es de ${caloricNeeds} calorías al día.`);
        });
    }

    // --- Funcionalidad para Mindful Eating ---
    const mindfulnessButtons = document.querySelectorAll('.toggle-mindfulness');
    mindfulnessButtons.forEach(button => {
        button.addEventListener('click', function () {
            const techniqueDiv = document.getElementById(this.dataset.techniqueId);
            techniqueDiv.classList.toggle('hidden'); // Usar una clase CSS para mostrar/ocultar
            this.innerText = techniqueDiv.classList.contains('hidden') ? 'Mostrar Técnica' : 'Ocultar Técnica'; // Cambiar texto del botón
        });
    });
});


// Detectar el desplazamiento de la página
window.addEventListener('scroll', function () {
    const secondSection = document.getElementById('about'); // Referencia a la segunda sección
    const header = document.querySelector('.header');

    // Verificar si hemos desplazado más allá de la segunda sección
    if (window.scrollY >= secondSection.offsetTop) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});