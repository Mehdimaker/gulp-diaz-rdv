$(document).ready(function() {


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
  
 
  $('.dropdown').dropdown({});

  $('.ui.form.abonnementSubmit').form({
    onSuccess : function(e){
      e.preventDefault();
      address = $(e.target).find('[name=address]').val();
      var post = {            
          title: $(e.target).find('[name=title]').val(),            
          description: $(e.target).find('[name=description]').val(),
          startdate: $(e.target).find('[name=startdate]').val(),            
          starthour: $(e.target).find('[name=starthour]').val(),            
          address: $(e.target).find('[name=address]').val(),            
          type: $(e.target).find('[name=type]').val(),            
      
        };


  

       console.log(post);

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
      societe: {
        identifier: 'societe',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci d'entrer votre societe"
          },
          {
            type   : 'minLength[6]',
            prompt : 'Votre société doit avoir plus de {ruleValue} caractères'
          }
        ]
      }, 
      email: {
        identifier: 'email',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci d'entrer un email"
          },
          {
            type   : 'email',
            prompt : "Merci d'entrer un e-mail valide"
          }
        ]
      } , 
       tel: {
        identifier: 'tel',
        rules: [
          {
            type   : 'number',
            prompt : "Merci dentrer un numéro de téléphone valide"
          }
        ]
      } , 
       address: {
        identifier: 'address',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci d'entrer une adresse"
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
       abonnement: {
        identifier: 'abonnement',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci de choisir un abonnement"
          }
        ]
      } 
    }
  });


});


