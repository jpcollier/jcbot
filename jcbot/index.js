
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function() {

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "Let me get back to you":
                var backtoyou = new Audio('sounds/backtoyou.m4a');
                backtoyou.play(); 
                break;

            case "Goodbye":
                var goodbye = new Audio('sounds/goodone.m4a');
                goodbye.play();
                break; 

            case "Look into that":
                var lookintothat = new Audio('sounds/lookintothat.m4a');
                lookintothat.play();
                break;

            case "Let me pull that up":
                var pullthatup = new Audio('sounds/pullthatup.m4a');
                pullthatup.play();
                break;
                
            case "Sure why not":
                var snare = new Audio('sounds/surewhynot.m4a');
                snare.play();
                break;

            case "Low hanging fruit":
                var crash = new Audio('sounds/lowhanging.m4a');
                crash.play();
                break; 
            
            case "Hello":
                var heythere = new Audio('sounds/heythere.m4a');
                heythere.play();
                break; 

            default:
                break;
        };

    });

};