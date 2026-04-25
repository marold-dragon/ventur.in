// Contact Form Handler with Resend Integration

export default (() => {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        const formMessage = document.getElementById('form-message');
        const formData = new FormData(contactForm);
        
        // Get form values
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const company = formData.get('company');
        const message = formData.get('message');
        
        // Clear previous messages
        formMessage.classList.add('hidden');
        formMessage.className = 'hidden';
        
        // Frontend validation
        if (!name || !name.trim()) {
            showFormMessage(formMessage, 'Please enter your name.', 'error');
            return;
        }
        
        if (!email || !email.trim()) {
            showFormMessage(formMessage, 'Please enter your email address.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage(formMessage, 'Please enter a valid email address.', 'error');
            return;
        }
        
        if (!phone || !phone.trim()) {
            showFormMessage(formMessage, 'Please enter your phone number.', 'error');
            return;
        }
        
        // Phone validation (basic format check)
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (!phoneRegex.test(phone)) {
            showFormMessage(formMessage, 'Please enter a valid phone number.', 'error');
            return;
        }
        
        if (!message || !message.trim()) {
            showFormMessage(formMessage, 'Please enter your message.', 'error');
            return;
        }
        
        if (message.trim().length < 10) {
            showFormMessage(formMessage, 'Message must be at least 10 characters long.', 'error');
            return;
        }
        
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Sending...';
        submitBtn.classList.add('opacity-70', 'cursor-not-allowed');
        
        try {
            // Call the serverless function
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    phone: phone.trim(),
                    company: company ? company.trim() : '',
                    subject: `Contact from ${name.trim()}${company ? ` (${company.trim()})` : ''}`,
                    message: message.trim()
                })
            });
            
            const data = await response.json();
            
            if (response.ok && data.success) {
                showFormMessage(formMessage, 'Message sent successfully! We\'ll get back to you soon.', 'success');
                contactForm.reset();
                
                // Auto-hide success message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 5000);
            } else {
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            showFormMessage(formMessage, 'Failed to send message. Please try again or contact us directly at marold.dragon@gmail.com', 'error');
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send a message';
            submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
        }
    });
    
    // Helper function to show form messages
    function showFormMessage(element, message, type) {
        element.textContent = message;
        element.classList.remove('hidden');
        
        if (type === 'error') {
            element.className = 'py-3 px-4 bg-red-100 text-red-700 rounded-lg border border-red-200';
        } else if (type === 'success') {
            element.className = 'py-3 px-4 bg-green-100 text-green-700 rounded-lg border border-green-200';
        }
    }
})();
