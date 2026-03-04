/* ============================================
   ENROSADIRA — Contact Form
   Validation + Formspree submission
   ============================================ */

(function () {
  'use strict';

  const form = document.getElementById('contactForm');
  if (!form) return;

  function t(englishText) {
    return (window.enrosadiraI18n && window.enrosadiraI18n.translateText)
      ? window.enrosadiraI18n.translateText(englishText)
      : englishText;
  }

  const fields = {
    name: {
      el: document.getElementById('name'),
      error: document.getElementById('nameError'),
      validate(value) {
        if (!value.trim()) return t('Please enter your name.');
        if (value.trim().length < 2) return t('Name must be at least 2 characters.');
        return '';
      },
    },
    email: {
      el: document.getElementById('email'),
      error: document.getElementById('emailError'),
      validate(value) {
        if (!value.trim()) return t('Please enter your email.');
        // Basic email pattern
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(value.trim())) return t('Please enter a valid email address.');
        return '';
      },
    },
    message: {
      el: document.getElementById('message'),
      error: document.getElementById('messageError'),
      validate(value) {
        if (!value.trim()) return t('Please enter a message.');
        if (value.trim().length < 10) return t('Message must be at least 10 characters.');
        return '';
      },
    },
  };

  const submitBtn = document.getElementById('formSubmit');
  const submitText = form.querySelector('.form__submit-text');
  const submitLoading = form.querySelector('.form__submit-loading');
  const submitSuccess = form.querySelector('.form__submit-success');

  // Validate a single field
  function validateField(field) {
    const msg = field.validate(field.el.value);
    field.error.textContent = msg;
    if (msg) {
      field.el.classList.add('form__input--error');
    } else {
      field.el.classList.remove('form__input--error');
    }
    return !msg;
  }

  // Live validation on blur
  Object.values(fields).forEach((field) => {
    field.el.addEventListener('blur', () => validateField(field));
    field.el.addEventListener('input', () => {
      if (field.el.classList.contains('form__input--error')) {
        validateField(field);
      }
    });
  });

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    Object.values(fields).forEach((field) => {
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) return;

    // Show loading state
    submitBtn.disabled = true;
    submitText.hidden = true;
    submitLoading.hidden = false;

    const actionUrl = (form.getAttribute('action') || '').trim();
    if (!actionUrl) {
      const subject = encodeURIComponent('Website inquiry');
      const lines = [
        'Name: ' + (fields.name.el.value || ''),
        'Email: ' + (fields.email.el.value || ''),
        'Company: ' + (document.getElementById('company').value || ''),
        '',
        (fields.message.el.value || ''),
      ];
      const body = encodeURIComponent(lines.join('\n'));

      submitLoading.hidden = true;
      submitText.hidden = false;
      submitBtn.disabled = false;
      window.location.href = 'mailto:info.enrosadira@gmail.com?subject=' + subject + '&body=' + body;
      return;
    }

    try {
      const formData = new FormData(form);

      const response = await fetch(actionUrl, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        // Show success
        submitLoading.hidden = true;
        submitSuccess.hidden = false;
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          submitSuccess.hidden = true;
          submitText.hidden = false;
          submitBtn.disabled = false;
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      // Show error state
      submitLoading.hidden = true;
      submitText.hidden = false;
      submitText.textContent = t('Error — try again');
      submitBtn.disabled = false;

      setTimeout(() => {
        submitText.textContent = t('Send Message');
      }, 3000);
    }
  });

})();
