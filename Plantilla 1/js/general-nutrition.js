document.addEventListener('DOMContentLoaded', () => {

    // --- Validación de formulario de contacto ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar el envío del formulario

            // Obtener valores del formulario
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validación mejorada
            if (!name || !email || !message) {
                showMessage('Por favor, completa todos los campos.', 'error');
                return;
            }

            if (!validateEmail(email)) {
                showMessage('Por favor, introduce un correo electrónico válido.', 'error');
                return;
            }

            showMessage('¡Mensaje enviado con éxito!', 'success');
            contactForm.reset(); // Limpia los campos del formulario
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

            if (isNaN(weight) || isNaN(height) || isNaN(age)) {
                showMessage('Por favor, ingresa valores numéricos válidos.', 'error');
                return;
            }

            // Calcular las calorías a partir de la fórmula de Harris-Benedict
            const activityFactors = {
                sedentario: 1.2,
                ligero: 1.375,
                moderado: 1.55,
                alto: 1.725
            };
            const bmr = activityFactors[activityLevel] || 1.2;
            const caloricNeeds = Math.round(((10 * weight) + (6.25 * height) - (5 * age) + 5) * bmr); // Fórmula adaptada para hombres

            showMessage(`Tu requerimiento calórico estimado es de ${caloricNeeds} calorías al día.`, 'success');
        });
    }

    // --- Mostrar/Ocultar Recetas ---
    const recipeButtons = document.querySelectorAll('.toggle-recipe');
    recipeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const recipeDiv = document.getElementById(this.dataset.recipeId);
            recipeDiv.classList.toggle('hidden');
            this.innerText = recipeDiv.classList.contains('hidden') ? 'Mostrar receta especial' : 'Ocultar receta';
        });
    });

    // --- Funciones auxiliares ---
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerText = message;
        document.body.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

});

