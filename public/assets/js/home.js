function linkedin() {
	window.open('https://www.linkedin.com/in/arcadio-jose-arevalo-munoz','__black');
}

function github(){
    window.open('https://github.com/arevaloarcadio','__new');
}

function year() {
   document.querySelector('#year').innerHTML = new Date().getFullYear()
}

var typed = new Typed('.typing-text', {
    strings: ['Desarrollador Front-end','Desarrollador Back-end','Desarrollador Movil'],
    typeSpeed: 120,
    loop: true
});

function age(){
    var fechaInicio =  moment('1996-10-15');
    var fechaFin    =  moment();
    document.querySelector('#age').innerHTML = fechaFin.diff(fechaInicio, 'years')
}

jQuery('#contactUs-Form').on('submit',function(e){
  jQuery('#msg').html('');
  jQuery('#submit').html('Please wait');
  jQuery('#submit').attr('disabled',true);
  jQuery.ajax({
      url:'assets/php/submit.php',
      type:'post',
      data:jQuery('#contactUs-Form').serialize(),
      success:function(result){
          jQuery('#msg').html(result);
          jQuery('#submit').html('Submit');
          jQuery('#submit').attr('disabled',false);
          jQuery('#contactUs-Form')[0].reset();
      }
  });
  e.preventDefault();
});

function init() {
	year()
	age()
	document.querySelector('.github').addEventListener('click', github);
	document.querySelector('.linkedin').addEventListener('click', linkedin);
}

init()