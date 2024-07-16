const form = document.getElementById('contact-form');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario por defecto
            
            // Validación simple del formulario
            let isValid = true;
            
            // Validar nombre
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                isValid = false;
                setErrorFor(nameInput, 'El nombre no puede estar vacío');
            } else {
                setSuccessFor(nameInput);
            }
            
            // Validar email
            const emailInput = document.getElementById('email');
            if (!isValidEmail(emailInput.value.trim())) {
                isValid = false;
                setErrorFor(emailInput, 'El correo electrónico no es válido');
            } else {
                setSuccessFor(emailInput);
            }
            
            // Validar mensaje
            const messageInput = document.getElementById('message');
            if (messageInput.value.trim() === '') {
                isValid = false;
                setErrorFor(messageInput, 'El mensaje no puede estar vacío');
            } else {
                setSuccessFor(messageInput);
            }
            
            // Si el formulario es válido, enviar datos (aquí puedes agregar tu lógica de envío real)
            if (isValid) {
                // Aquí puedes agregar tu lógica de envío, por ejemplo, con fetch o XMLHttpRequest
                console.log('Formulario válido. Enviando datos...');
                // Simulación de envío exitoso
                setTimeout(function() {
                    alert('Mensaje enviado correctamente');
                    form.reset(); // Limpiar formulario después del envío
                }, 1000);
            }
        });
        
        function setErrorFor(input, message) {
            const formGroup = input.parentElement;
            const small = formGroup.querySelector('small');
            small.innerText = message;
            formGroup.className = 'form-group error';
        }
        
        function setSuccessFor(input) {
            const formGroup = input.parentElement;
            formGroup.className = 'form-group success';
        }
        
        function isValidEmail(email) {
            // Validación simple de correo electrónico con expresión regular básica
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }