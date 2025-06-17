// Assigment 7 vue.js

const app = Vue.createApp({
    
    data() {
        return {
            firstname: '',
            firstnameError: '',
            email: '',
            emailError: '',
            message: '',
            messageError: ''
        };
    },
    
    methods: {
        handleSubmit() {
            this.firstnameError = '';
            this.emailError = '';
            this.messageError = '';

        
            let formIsValid = true; 

            // Validate first name input
            if (!this.firstname) { 
                this.firstnameError = 'First name is required.';
                formIsValid = false;
            } else if (!/^[A-Za-z]+$/.test(this.firstname)) {
                this.firstnameError = 'Please enter a valid first name, no special characters or spaces allowed.';
                formIsValid = false;
            }

            // Validate email input
            if (!this.email) { 
                this.emailError = 'Email address is required.';
                formIsValid = false;
            } else if (!/^\S+@\S+\.\S+$/.test(this.email)) {
                this.emailError = 'Please enter a valid email address.';
                formIsValid = false;
            }

            // Validate message text area input
            if (!this.message) {
                this.messageError = 'Message is required.';
                formIsValid = false;
            } else if (this.message.length < 10) { 
                this.messageError = 'Your message must be at least 10 characters.';
                formIsValid = false;
            }

            if (formIsValid) {
                
                console.log('Form submitted successfully!');
                console.log('First Name:', this.firstname);
                console.log('Email:', this.email);
                console.log('Message:', this.message);
                
                alert(
                    `Form submitted successfully!\n` +
                    `First Name: ${this.firstname}\n` +
                    `Email: ${this.email}\n` +
                    `Message: ${this.message}\n` +
                    `Amisha will reach out to you soon.`
                );

            } 
        }
    }
});


app.mount('#app');
