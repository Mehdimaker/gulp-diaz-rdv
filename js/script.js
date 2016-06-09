$(document).ready(function() {

  // Fix menu when passed
  $('#home')
    .visibility({
      once: false,
      observeChanges: false,
      offset: 50,
      onBottomPassed:  function() {
        $('.navbar.fixed').removeClass('navone');
        $('.navbar.fixed').addClass('navtwo');
      },
      onBottomPassedReverse: function() {
        $('.navbar.fixed').removeClass('navtwo');
        $('.navbar.fixed').addClass('navone');

        $('.navbar .ui.item').removeClass('active');
        $('.navbar .ui.item.'+this.id).addClass('active');
      }
    });


  // Create sidebar and attach to menu open
  $('.ui.sidebar').sidebar({
    'closable':false    
  });
  $(' .toc.item, .sidebar .item').on('click', function() {
    if( $('.ui.sidebar').hasClass("visible") ){
      $('.ui.sidebar').sidebar('hide');
      $('.toc.item').removeClass("open");
      $('.toc.item').addClass("closed");

    }
    else{

      $('.ui.sidebar').sidebar('show');
      $('.toc.item').removeClass("closed");
      $('.toc.item').addClass("open");
    }
  });
  
  // Scrollmovement
  $(function () {
    // Au click sur chaque lien nous ferons apelle à la fonction animate de Jquery
    $('.navbar a.item:not(a.item.toc)').on('click', function (e) {
      e.preventDefault();
      // hash permet de cibler le href de nos liens.
      var hash = this.hash;
      $('html, body').animate({
          scrollTop: $(this.hash).offset().top
      }, 1000, function () {
          window.location.hash = hash;
      });
    });
  });

  //add class active on scroll
  $('section')
    .visibility({
      once: false,
      observeChanges: false,
      offset: 50,
      onTopPassed: function() {
        $('.navbar .ui.item').removeClass('active');
        $('.navbar .ui.item.'+this.id).addClass('active');
         },
      onBottomPassedReverse: function() {
        $('.navbar .ui.item').removeClass('active');
        $('.navbar .ui.item.'+this.id).addClass('active');
      }
  });


  
  //CONTACT
  $('.dropdown').dropdown({});


  //ANIATION
  $('.cards').visibility({
    once: false,
    offset: 50,
    onTopVisible: function() {
      $('.ui.card').transition({
        animation : 'pulse',
        reverse   : true,
        interval  : 200
      });
    }
  });

  $('#two .six.wide.right img').visibility({
    once:true,      
    observeChanges: false,
    onTopVisible: function() {
      $('.six.wide.right img ').transition('fly left');
    }
  });

  $('#two .six.wide.left img').visibility({
    once:true,      
    observeChanges: false,    
    onTopVisible: function() {
      $('.six.wide.left img').transition('fly right');
    }
  });

  //MODAL rdv
  $(function () {
    $('.lauchModalrdv').on('click', function () {
      $('.ui.modal.modalrdv').modal('show');
      $('#startdate').calendar({
        type: 'date',
        formatter: {
          date: function (date, settings) {
            if (!date) return '';
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return day + '/' + month + '/' + year;
          }
        }
      });
    });

     $('.ui.form.rdvSubmit').form({
    onSuccess : function(e){
      e.preventDefault();
      var post = {            
          nom: $(e.target).find('[name=nom]').val(),  
          tel: $(e.target).find('[name=tel]').val(),            
          profession: $(e.target).find('[name=profession]').val(),
          date: $(e.target).find('[name=date]').val(),            
                    
      
        };

       console.log(post);
  $('.ui.modal.modalrdv').modal('hide');
  alert("merci votre demande de prise de rendez vous à été bien prise en compte, un de nos conseiller vous contactera très vite.");
    },
    fields: {
      nom: {
        identifier: 'nom',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci d'entrer votre nom"
          },
          {
            type   : 'minLength[4]',
            prompt : 'Votre nom doit avoir plus de {ruleValue} caractères'
          }
        ]
      } ,   
       tel: {
        identifier: 'tel',
        rules: [
          {
            type   : 'number',
            prompt : "Merci dentrer un numéro de téléphone valide"
          },
           {
            type   : 'empty',
            prompt : "Merci d'entrer un numéro"
          }
        ]
      } , 
       profession: {
        identifier: 'profession',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci d'entrer une profession"
          }
        ]
      } , 
       date: {
        identifier: 'date',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci de choisir une date"
          }
        ]
      } 
    }
  });

  });

$('.ui.form').form({
    onSuccess : function(e){
        e.preventDefault();
        var post = {            
            nom: $(e.target).find('[name=nom]').val(),  
            tel: $(e.target).find('[name=tel]').val(),            
            profession: $(e.target).find('[name=profession]').val(),
            date: $(e.target).find('[name=date]').val(),             
        };
    
    console.log(post)

    },
    fields: {
      nom: {
        identifier: 'nom',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci d'entrer votre nom"
          },
          {
            type   : 'minLength[4]',
            prompt : 'Votre nom doit avoir plus de {ruleValue} caractères'
          }
        ]
      } ,   
       tel: {
        identifier: 'tel',
        rules: [
          {
            type   : 'number',
            prompt : "Merci dentrer un numéro de téléphone valide"
          },
           {
            type   : 'empty',
            prompt : "Merci d'entrer un numéro"
          }
        ]
      } , 
       profession: {
        identifier: 'profession',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci d'entrer une profession"
          }
        ]
      } , 
       date: {
        identifier: 'date',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci de choisir une date"
          }
        ]
      } 
    }
  });


});


