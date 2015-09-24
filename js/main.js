$( ".js-buttonOne" ).click(function() {
  $(".js-buttonOne").remove();  
  $( ".header" ).append( "<input placeholder='add a to-do.'></input><button class='js-buttonSubmit button'>submit</button>" );
  });




var arr = [];



    function addItemToList( arr, item ) {
        if ( typeof item !== 'string' ) {
            return arr;
        }
        arr.push( item );
        return arr; 
    }



    function addItemToListFront( arr, item ) {
        if ( typeof item !== 'string' ) {
            return arr;
        }
        arr.splice (0, 0, item );
        return arr;
    }



    function removeItemFromListEnd( arr ) {
        arr.pop();
        return arr;
    }



    function removeItemFromListStart( arr ) {
        arr.splice(0, 1);
        return arr;
    }



    function getItemFromList( arr, i ) {
        if ( typeof arr[i] === 'undefined' ) {
        return -1;
        }
        var item = arr[i];
        return item;
    }



    function removeItemFromPosition( arr, i ) {
        if ( typeof arr[i] === 'undefined' ) {
        return -1;
        }
        arr.splice( i, 1 );
        return arr;
    }

