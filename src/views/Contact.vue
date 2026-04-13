<template>
  <div class="contact-page">
    <!-- Contact Header -->
    <section class="contact-header">
      <div class="container">
        <h1 class="page-title">Get in Touch</h1>
        <p class="page-description">
          I'm open to discussing projects, collaborations, or answering any questions. 
          Feel free to reach out through the form below or connect with me directly.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="form-section">
            <h2 class="section-heading">Send a Message</h2>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  class="form-input"
                  :class="{ 'error': errors.name }"
                  placeholder="Your name"
                  required
                />
                <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="form-input"
                  :class="{ 'error': errors.email }"
                  placeholder="your.email@example.com"
                  required
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  class="form-textarea"
                  :class="{ 'error': errors.message }"
                  placeholder="Your message..."
                  rows="6"
                  required
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>

              <button type="submit" class="submit-button" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>

              <div v-if="submitStatus === 'success'" class="status-message success">
                Message sent successfully! I'll get back to you soon.
              </div>
              <div v-if="submitStatus === 'error'" class="status-message error">
                Something went wrong. Please try again or email me directly.
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="info-section">
            <h2 class="section-heading">Contact Information</h2>
            
            <div class="info-card">
              <h3 class="info-title">Email</h3>
              <a href="mailto:ahmadsholehuddin305@gmail.com" class="info-link">
                ahmadsholehuddin305@gmail.com
              </a>
            </div>

            <div class="info-card">
              <h3 class="info-title">Connect With Me</h3>
              <div class="social-links">
                <a 
                  href="https://github.com/Ahmad-SHD07" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/ahmad-solehudin-402066352/?locale=en_US" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/amadddd07_/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>

            <div class="info-card availability">
              <h3 class="info-title">Availability</h3>
              <p class="availability-text">
                Currently available for small projects, collaborations, and learning opportunities. 
                Open to discussing internship or freelance work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// Form data
const formData = reactive({
  name: '',
  email: '',
  message: ''
});

// Form validation errors
const errors = reactive({
  name: '',
  email: '',
  message: ''
});

// Form state
const isSubmitting = ref(false);
const submitStatus = ref(''); // 'success' | 'error' | ''

// Validate form
const validateForm = () => {
  let isValid = true;
  
  // Reset errors
  errors.name = '';
  errors.email = '';
  errors.message = '';

  // Validate name
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
    isValid = false;
  } else if (!emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email';
    isValid = false;
  }

  // Validate message
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
    isValid = false;
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
    isValid = false;
  }

  return isValid;
};

// Handle form submission
const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = '';

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Success
    submitStatus.value = 'success';
    
    // Reset form
    formData.name = '';
    formData.email = '';
    formData.message = '';
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      submitStatus.value = '';
    }, 5000);
    
  } catch (error) {
    console.error('Error submitting form:', error);
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
/* Base Styles */
.contact-page {
  background-color: #1a1625;
  color: #f5f5f5;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Contact Header */
.contact-header {
  padding: 8rem 0 3rem 0;
  text-align: center;
}

.page-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #f5f5f5;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;
}

.page-description {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #b8b8b8;
  max-width: 700px;
  margin: 0 auto;
}

/* Contact Content */
.contact-content {
  padding: 4rem 0 6rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
}

/* Section Heading */
.section-heading {
  font-size: 1.75rem;
  font-weight: 600;
  color: #f5f5f5;
  margin: 0 0 2rem 0;
  position: relative;
  padding-bottom: 0.75rem;
}

.section-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 3px;
  background-color: #c1394a;
}

/* Contact Form */
.contact-form {
  background-color: #211a2e;
  padding: 2.5rem;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 1.75rem;
}

.form-label {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: #f5f5f5;
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  color: #f5f5f5;
  background-color: #1a1625;
  border: 2px solid #2d2640;
  border-radius: 4px;
  transition: border-color 0.25s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #c1394a;
}

.form-input.error,
.form-textarea.error {
  border-color: #c1394a;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  display: block;
  font-size: 0.85rem;
  color: #c1394a;
  margin-top: 0.5rem;
}

.submit-button {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #c1394a;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.submit-button:hover:not(:disabled) {
  background-color: #a02f3d;
  transform: translateY(-2px);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status-message {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 4px;
  font-size: 0.95rem;
  text-align: center;
}

.status-message.success {
  background-color: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #4ade80;
}

.status-message.error {
  background-color: rgba(193, 57, 74, 0.1);
  border: 1px solid rgba(193, 57, 74, 0.3);
  color: #c1394a;
}

/* Contact Information */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background-color: #211a2e;
  padding: 2rem;
  border-radius: 4px;
  border-left: 3px solid #c1394a;
}

.info-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #f5f5f5;
  margin: 0 0 1rem 0;
}

.info-link {
  display: inline-block;
  font-size: 1rem;
  color: #b8b8b8;
  text-decoration: none;
  transition: color 0.25s ease;
}

.info-link:hover {
  color: #c1394a;
}

/* Social Links */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #b8b8b8;
  background-color: #1a1625;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-link:hover {
  color: #c1394a;
  background-color: rgba(193, 57, 74, 0.1);
  transform: translateX(5px);
}

.social-link svg {
  flex-shrink: 0;
}

/* Availability */
.availability-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #b8b8b8;
  margin: 0;
}

/* Tablet */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .container {
    padding: 0 1.5rem;
  }

  .contact-header {
    padding: 6rem 0 2.5rem 0;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .page-description {
    font-size: 1.1rem;
  }

  .contact-content {
    padding: 3rem 0 5rem 0;
  }

  .contact-form {
    padding: 2rem;
  }

  .section-heading {
    font-size: 1.5rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .contact-header {
    padding: 5rem 0 2rem 0;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-description {
    font-size: 1rem;
  }

  .contact-content {
    padding: 2.5rem 0 4rem 0;
  }

  .contact-grid {
    gap: 2.5rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .form-input,
  .form-textarea {
    font-size: 0.95rem;
    padding: 0.75rem 0.875rem;
  }

  .submit-button {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }

  .info-card {
    padding: 1.5rem;
  }

  .social-link {
    font-size: 0.95rem;
  }
}
</style>