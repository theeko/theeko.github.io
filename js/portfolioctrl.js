"use strict";

app.controller("PortfolioCtrl", [ "$scope", function($scope){
$scope.showcases = [
    { path: "img/meanvote.PNG", name: "Meanstack Vote App", 
    descrtiption: "asd asd asd asd",
    link: "http://guarded-crag-3272.herokuapp.com/"
    },
    { path: "img/pintclone.PNG", name: "Pinterest Clone", 
    descrtiption: "asd asd asd asd",
    link: "https://vast-thicket-9171.herokuapp.com/"
    },
    { path: "img/react-markdown.PNG", name: "React Markdownn Editor", 
    descrtiption: "asd asd asd asd",
    link: "http://codepen.io/kairath/full/ZQyEWP/"
    },
    { path: "img/reactladderboard.PNG", name: "React/Ajax Ladderboard", 
    descrtiption: "asd asd asd asd",
    link: "http://codepen.io/kairath/full/EVOvBM/"
    },
    { path: "img/nightlife.PNG", name: "Nightlife/Yelp Api", 
    descrtiption: "asd asd asd asd",
    link: "https://serene-escarpment-3856.herokuapp.com/"
    },
    { path: "img/promodoro.PNG", name: "Promodoro Clock", 
    descrtiption: "promodoro clock",
    link: "http://thekairath.github.io/FrontEndProjectz/PromodoroClock"
    },
    { path: "img/tictactoe.PNG", name: "TicTacToe", 
    descrtiption: "tictactoe game",
    link: "http://thekairath.github.io/FrontEndProjectz/tictactoe"
    },
    { path: "img/simongame.PNG", name: "Simon Game", 
    descrtiption: "asd asd asd asd",
    link: "http://thekairath.github.io/FrontEndProjectz/simongame/"
    }
    
];
}]);
