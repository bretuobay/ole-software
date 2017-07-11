import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $:any;
@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(function() {
      $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
         		$("#register-form").fadeOut(100);
        		$('#register-form-link').removeClass('active');
        		$(this).addClass('active');
        		e.preventDefault();
	     });
    	$('#register-form-link').click(function(e) {
        		$("#register-form").delay(100).fadeIn(100);
         		$("#login-form").fadeOut(100);
        		$('#login-form-link').removeClass('active');
        		$(this).addClass('active');
        		e.preventDefault();
    	});

});

  }

}
