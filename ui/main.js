var  button = document.getElementById('counter');
    
    button.onclick= function () {
        
        var request= newXMLHttpRequest();
        request.onreadystatechange = function (){
            if(request.readyState === XMLHttpRequest.DONE) {
                if(request.status===200) {
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                     span.innerHTML = counter.toString(); 
                }
            }
        };
        
        request.open('GET', 'http://zaibmohd07.imad.hasura-app.io/counter',true);
        request.send(null);
    };
    
    var nameInput = document.getIdByElement('name');
    var name = nameInput.value;
    var submit = document.getElementById('submit_btn');
    submit.onclcik = function() {
        
        var names = ['name1', 'name2', 'name3', 'name4'];
        var list = '';
        
        for (var i=0 ;i< names.length; i++) {
            list += '<li>' + names[i] + '</li>'; 
            }
        var ul = document.getElementById('namelsit');
        ul.innerHTML = list;
            };