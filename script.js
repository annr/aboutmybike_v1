
document.addEventListener("DOMContentLoaded", function(event) { 

$(function()
{
	// Variable to store your files
	var files;

	// Add events
	$('input[type=file]').on('change', prepareUpload);
	$('form').on('submit', uploadFiles);

	// Grab the files and set them to our variable
	function prepareUpload(event)
	{
        //if(event.target.files.length > 1) {
            //$('.submit-message').html('Please select a single bike photo.');
            //return;
        //}
		files = event.target.files;
	}

	// Catch the form submit and upload the files
	function uploadFiles(event)
	{
		event.stopPropagation(); // Stop stuff happening
        event.preventDefault(); // Totally stop stuff happening

        var data = new FormData();
        if(files !== undefined) {
            // Create a formdata object and add the files
            

            $('.submit-message').html('<img src="img/spinner_large.gif">');
            $.each(files, function(key, value)
            {
                data.append(key, value);
            });
        
            $.ajax({
                url: 'submit.php?files',
                type: 'POST',
                data: data,
                cache: false,
                dataType: 'json',
                processData: false, // Don't process the files
                contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                success: function(data, textStatus, jqXHR)
                {
                if(typeof data.error === 'undefined')
                {
                    // Success so call function to process the form
                    submitForm(event, data);
                }
                else
                {
                    // Handle errors here
                    console.log('ERRORS: ' + data.error);
                }
                },
                error: function(jqXHR, textStatus, errorThrown)
                {
                    // Handle errors here
                    console.log('ERRORS: ' + textStatus);
                    // STOP LOADING SPINNER
                    $('.submit-message').html('');
                }
          });

        } else {
            // email-only signup.
            submitForm(event, data);
        }
        
    }

    function submitForm(event, data)
	{
		// Create a jQuery object from the form
		$form = $(event.target);
		
		// Serialize the form data
		var formData = $form.serialize();
		
		// You should sterilise the file names
        if(data.files !== undefined) {
            $.each(data.files, function(key, value)
            {
                formData = formData + '&filenames[]=' + value;
            });
        }

		$.ajax({
			url: 'submit.php',
            type: 'POST',
            data: formData,
            cache: false,
            dataType: 'json',
            success: function(data, textStatus, jqXHR)
            {
                console.log(data);
            	if(typeof data.error === 'undefined')
            	{
            		// Success so call function to process the form
            		console.log('SUCCESS: ' + data.success);
                    //$('.submit-message').html('Thanks! We\'ll be in touch soon.');
                    $('.submit-message').html(data.success);
            	}
            	else
            	{
            		// Handle errors here
            		console.log('ERRORS: ' + data.error);
                    $('.submit-message').html(data.error);
            	}
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
            	// Handle errors here
            	console.log('ERRORS: ' + textStatus);
                $('.submit-message').html('');
            }
		});
	}
});

});