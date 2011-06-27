jQuery Placeholder Fix
======================

This plugin aims to add the placeholder attribute to browsers that not support this feature, 
rendering just like there was support.

The plugin is responsible for check if the browser supports or not the placeholder attribute, 
applying only when necessary (or forcing through "force" option).

Usage
-----
To use the plugin, first we need to add the jQuery lib to our page:

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js">    </script>

*Note that I'm using Google's CDN to avoid local bandwidth consume, but nothing prevents you
to use a local version o jQuery, just change the URL.

Below, let's add the plugin:
    
    <script type="text/javascript" src="jquery.placeholder.fix.js"></script>

The plugin's call can be made in several ways:
- To a specific form;
- To a specific field;
- For all inputs and textareas of the document.
It's just use the right selector:
    <script type="text/javascript">
        $(document).ready(function(){
            $(this).placeholder();
        });
    </script>

Now, just create your form, like you always do, adding the placeholder attribute in the fields:

    <form action="#" method="get">
        <fieldset>
            <legend>Contact</legend>
            <label for="contact_name">Name</label>
            <input type="text" name="contact_name" id="contact_name" placeholder="Name" />
            <label for="contact_email">E-mail</label>
            <input type="text" name="contact_email" id="contact_email" placeholder="E-mail" />
            <label for="contact_message">Message</label>
            <textarea name="contact_message" id="contact_message" placeholder="Message" /></textarea>
        </fieldset>
    </form>

Options
-------
The plugin has the option to force to render the placeholder through it, even
if the browser has placeholder support:

    $(document).ready(function(){
      $(this).placeholder({
        force: true
      });
    });

Styling
-----------
Each field that use the plugin, has the class "placeholder" when it's empty, getting easier to style:

    input.placeholder{
      color:#ccc;
      font-style:italic;
    } 

TODO
----
- Add support to password input type;
- Add option to hide field label;
