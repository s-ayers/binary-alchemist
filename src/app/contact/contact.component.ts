import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import * as person from '../app.json';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends PageComponent implements OnInit {
  public location: string = person.location;
  public website: string = person.website;

  ngOnInit() {
    // super.ngOnInit();
    /* ---------------------------------------------------------------------- */
    /* -------------------------- Contact Form ------------------------------ */
    /* ---------------------------------------------------------------------- */

    // Needed variables
    var $contactform = $('#contactform');
    var $success = ' Your message has been sent. Thank you!';
    var response = '';

    $('#contactform').submit(function() {
      $.ajax({
        type: 'POST',
        url: 'php/contact.php',
        data: $(this).serialize(),
        success: function(msg) {
          var msg_error = msg.split(',');
          var output_error = '';

          if (msg_error.indexOf('error-message') != -1) {
            $('#contact-message').addClass('has-error');
            $('#contact-message').removeClass('has-success');
            output_error = 'Please enter your message.';
          } else {
            $('#contact-message').addClass('has-success');
            $('#contact-message').removeClass('has-error');
          }

          if (msg_error.indexOf('error-email') != -1) {
            $('#contact-email').addClass('has-error');
            $('#contact-email').removeClass('has-success');
            output_error = 'Please enter valid e-mail.';
          } else {
            $('#contact-email').addClass('has-success');
            $('#contact-email').removeClass('has-error');
          }

          if (msg_error.indexOf('error-name') != -1) {
            $('#contact-name').addClass('has-error');
            $('#contact-name').removeClass('has-success');
            output_error = 'Please enter your name.';
          } else {
            $('#contact-name').addClass('has-success');
            $('#contact-name').removeClass('has-error');
          }

          if (msg == 'success') {
            response =
              '<div class="alert alert-success success-send">' +
              '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
              '<i class="glyphicon glyphicon-ok" style="margin-right: 5px;"></i> ' +
              $success +
              '</div>';

            $('.reset').trigger('click');
            $('#contact-name').removeClass('has-success');
            $('#contact-email').removeClass('has-success');
            $('#contact-message').removeClass('has-success');
          } else {
            response =
              '<div class="alert alert-danger error-send">' +
              '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
              '<i class="glyphicon glyphicon-remove" style="margin-right: 5px;"></i> ' +
              output_error +
              '</div>';
          }
          // Hide any previous response text
          $('.error-send,.success-send').remove();
          // Show response message
          $contactform.prepend(response);
        }
      });
      return false;
    });
  }
}
