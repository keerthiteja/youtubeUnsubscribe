Here's a way to unsubscribe from all YouTube channels at once.

Go to your subscription manager page and copy this code into your browser's address bar, then press Enter:

javascript: 
(function(){ 
    var btns = document.getElementsByTagName('button'); 
    for (var i = 0; i < btns.length; i++) { 
        if (btns[i].dataset.isSubscribed == "True") { 
            if (!!btns[i].dataset.showUnsubConfirmDialog) { 
                delete btns[i].dataset.showUnsubConfirmDialog; 
            } 
            btns[i].click(); 
        } 
    } 
})();) 
