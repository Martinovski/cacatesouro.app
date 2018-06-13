  $(document).ready(function(e) {
      $('.btn_modal').click(function() {
          $('#modal').fadeIn(10);
      });

      $('.fechar, #modal').click(function(event) {
          if (event.target !== this) {
              return;
          }
          $('#modal').fadeOut(10);
      });
  });