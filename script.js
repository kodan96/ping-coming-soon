$(document).ready(() => {

    const validateEmail = (email) => {


        return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        
    };

    const validate = () => {

        const error = $('.error');
        const email = $('#email').val();
        error.css('display', '');

        if(validateEmail(email)){
            error.toggle()
            error.html(`${email} is a valid email address`);
            error.css('color', 'green');
        } else {
            error.toggle()
            error.html(`${email} is not a valid email address`);
            error.css('color','red');
        }
    }

    $('#email').on('input', validate);


    $('.btn').on('click', (e) => {

        $('.error').css('display', '');

        if( validateEmail($('#email').val()) ) {


            e.preventDefault();
            $('.error').toggle()
            $('.error').html('Successfully Submitted')
            $('.error').css('color', 'green');
            $('#email').css('border', '1px solid green')
        } else {
        

            e.preventDefault();
            $('#email').css('border', '1px solid red')
            $('.error').html('Please enter an email address');
            $('.error').css('color','red');
            $('.error').slideToggle()
        }
    });
});