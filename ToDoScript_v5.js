$(function () {

    $('#button').click(function () {

        let newSection = document.createElement('section');
        newSection.classList.add('event');

        let newContainer = document.createElement('div');
        newContainer.classList.add('event-name')
        
        let newHead = document.createElement('h4');

        let newRef = document.createElement('div');
        newRef.classList.add('ref')

        let rollRef = document.createElement('div');
        rollRef.classList.add('ref-roll')

        let rolledContainer = document.createElement('div');
        rolledContainer.classList.add('rolled-container')

        let newText = document.createElement('p');
        newText.classList.add('newText');

        let textNameArea = document.getElementById('new-event-name').value;

        let textDiscriptArea = document.getElementById('discription').value;
        
            if (textNameArea && textDiscriptArea) {
    
                $('input').removeClass('error');
                $('textarea').removeClass('error');
                $('.empty').hide();
                $('#newDiv').prepend(newSection);
                newSection.append(newContainer);
                newContainer.prepend(newRef);
                newContainer.prepend(newHead);
                newSection.append(rolledContainer);
                rolledContainer.prepend(newText);
                rolledContainer.prepend(rollRef);
                newHead.innerHTML = textNameArea;
                newText.innerHTML = textDiscriptArea;
        
                $('textarea').val("");
                $('input').val("");
                $('.ref').html('<a class="clear" href=#><img id="clear" src="img/Cross.png"></a>');
                $('.ref-roll').html('<a href="#" class="test"><span     class="span_icon"> <img  class="span_icon" src="img/triangle.png"></span></a>');
            } else {
                $('input').addClass('error');
                $('textarea').addClass('error');
            };  
    });
    
    $('body').on('click', '.clear', function() {
        $(this).parents('.event').remove();
        let items = $('.event');
        if (items.length == 0) {
            $('.empty').show();
        }
    });
        
    $('body').on('click', 'a.test', function(e) {
        e.preventDefault();
        $(this).find('span.span_icon').toggleClass('active');
        $(this).parent().next().slideToggle(200); 
    });
})