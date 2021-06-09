$(function () {

    $('#button').click(function () {

        // let newSection = document.createElement('div');
        // newSection.classList.add('accordion-item');

        // let newContainer = document.createElement('div');
        // newContainer.classList.add('event-name')

        // let newHead = document.createElement('h4');

        // let newRef = document.createElement('div');
        // newRef.classList.add('ref')

        // let rollRef = document.createElement('div');
        // rollRef.classList.add('ref-roll')

        // let rolledContainer = document.createElement('div');
        // rolledContainer.classList.add('rolled-container')

        // let newText = document.createElement('p');
        // newText.classList.add('newText');

        // let textNameArea = document.getElementById('new-event-name').value;

        // let textDiscriptArea = document.getElementById('discription').value;


        let newAccordionItem = document.createElement('div');
        newAccordionItem.setAttribute('class', 'accordion-item');

        let newRow = document.createElement('div');
        newRow.setAttribute('class', 'row align-items-center');

        let newCol11 = document.createElement('div');
        newCol11.setAttribute('class', 'col-11');

        let newH2 = document.createElement('h2');
        newH2.setAttribute('class', 'accordion-header');
        newH2.setAttribute('id', 'headingOne');

        let newAccordionButton = document.createElement('button');
        newAccordionButton.setAttribute('type', 'button');
        newAccordionButton.setAttribute('class', 'accordion-button');
        newAccordionButton.setAttribute('data-bs-toggle', 'collapse');
        newAccordionButton.setAttribute('data-bs-target', '#collapseOne');
        newAccordionButton.setAttribute('aria-expanded', 'true');
        newAccordionButton.setAttribute('aria-controls', 'collapseOne');
        
        let newCol1 = document.createElement('div');
        newCol1.setAttribute('class', 'col-1');
        
        let newCloseButton = document.createElement('button');
        newCloseButton.setAttribute('type', 'button');
        newCloseButton.setAttribute('class', 'btn-close');
        newAccordionButton.setAttribute('aria-label', 'Close');

        let newCollapseOne = document.createElement('div');
        newCollapseOne.setAttribute('class', 'accordion-collapse collapse show');
        newCollapseOne.setAttribute('id', 'collapseOne');
        newCollapseOne.setAttribute('aria-labelledby', 'headingOne');
        newCollapseOne.setAttribute('data-bs-parent', '#accordionExample');

        let newAccordionBody = document.createElement('div');
        newAccordionBody.setAttribute('class', 'accordion-body');
      
        let container = document.getElementsByClassName('p-3');

        let itemName = document.getElementById('floatingTextarea').innerHTML;
        let itemBody = document.getElementById('floatingTextarea2').innerHTML;


        if (itemName && itemBody) {

            $('textarea').removeClass('error');
            $('p').hide();
            container.append(newAccordionItem);
            newAccordionItem.append(newRow);
            newAccordionItem.append(newCollapseOne);
            newRow.append(newCol11);
            newRow.append(newCol1);
            newCol11.append(newH2);
            newCol11.append(newAccordionButton);
            newCollapseOne.appendChild(newAccordionBody);

            newAccordionButton.innerHTML = itemName;
            newAccordionBody.innerHTML = itemBody;

            $('textarea').val("");
           
        } else {  
            $('textarea').addClass('error');
        }
        ;
    });

    $('body').on('click', '.btn-close', function () {
        $(this).parents('.accordion-item').remove();
        let items = $('.accordion-item');
        if (items.length == 0) {
            $('p').show();
        }
    });

    // $('body').on('click', 'a.test', function (e) {
    //     e.preventDefault();
    //     $(this).find('span.span_icon').toggleClass('active');
    //     $(this).parent().next().slideToggle(200);
    // });
})