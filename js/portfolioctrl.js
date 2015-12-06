app.controller("PortfolioCtrl", [ "$scope", function($scope){
    $scope.showcases = [
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
        },
        { path: "img/wikipediaapi.PNG", name: "Wikipedia Api", 
        descrtiption: "asd asd asd asd",
        link: "http://thekairath.github.io/FrontEndProjectz/wikipediaapi/"
        }
    ]
}]);