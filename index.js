$(document).ready( function(){

        $("#select").change(function(){//toda vez que eu trocar de opção
                let option = $("#select option:selected").val();
                let input = $('input[id="options"]');

                if(option==2) input.attr('placeholder', 'Em quantas vezes você pretende fazer?');
                else if(option==1) input.attr('placeholder', 'Quantas Horas?');
                else input.attr('placeholder', 'Quantos minutos?');
        });


});