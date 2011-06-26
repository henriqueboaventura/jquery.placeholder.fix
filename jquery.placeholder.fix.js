/**
 * jquery.placeholder.fix.js
 * @author: kidh0
 * @version: 1.0
 *
 * Created by Henrique Boaventura 201-06-24. Please report any bug at http://www.hboaventura.com
 * Inspired by Nico Hagenburger and his blog post: http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

//
(function($){
  $.fn.placeholder = function(options) {
    var opts = $.extend({}, $.fn.placeholder.defaults, options);
    var support = true;
    //have placeholder support?
    //create a new input and check if has placeholder attribute
    //See more: http://diveintohtml5.org/detect.html#input-placeholder
    elem = document.createElement('input');
    if(elem.placeholder == undefined){
      support = false;
    }

    //if there is no support to placeholder attribute, 
    //or force option true apply the fix
    if(!support || opts.force){
      return $('[placeholder]',this).each(function() {
        //on the focus event, clean the placeholder value
        //if is blank, turn the placeholder on again
        $(this).focus(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
          }
        }).blur(function() {
          var input = $(this);
          if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
          }
        }).blur();

        //fix to avoid to send the placeholder as an input value
        $(this).parents('form').submit(function() {
          $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
              input.val('');
            }
          })
        });
      });
    }
  };
  
  $.fn.placeholder.defaults = {
    force: false //force to use plugin placeholder
  };

})(jQuery);

