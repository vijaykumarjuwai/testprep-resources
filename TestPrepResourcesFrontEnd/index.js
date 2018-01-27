var app = angular.module('myApp', []);
app.controller('indexCtrl', function($scope, $http) {


    // $scope.questions = [];

// make the idCollector work
// here a is the index value and nameofbutton is simply the string that is displaying
// thus it can find the what section and what test
    // $scope.idCollector = function(clicked_id) {

    //     // for (var i = scope.questions.length - 1; i >= 0; i--) {
    //     //     Things[i]
    //     //     if section == nameofbutton && testinstance_id == a
    //     //         answerKeys.push(questions[i])
    //     // }

    //     // ng-repeat for answer in answerkeys
    //     //     {{ answer.questions_number }}
    //     //     {{ answer.answer }}

    // };

    $scope.selectedQuestions = [];

    $scope.satReadingBtnId = 'Section 1: Reading Test';
    $scope.satWritingBtnId = 'Section 2: Writing & Language Test';
    $scope.satMath_1_BtnId = 'Section 3: Math Test - No Calculator';
    $scope.satMath_2_BtnId = 'Section 4: Math Test - Calculator';

    $scope.clickcounter = 1;

    $scope.tableShow == false;

    $scope.idCollector = function(sectionId, test_instance_id) {

    $scope.tableShow == true;  

            $scope.selectedQuestions = [];    
     
            var x;
            for (var x = 0; x < $scope.questions.length; x++) {
                console.log('questions: ' + $scope.questions[x].testinstance_id);
                if ($scope.questions[x].section == sectionId && $scope.questions[x].testinstance_id == test_instance_id) {
                    $scope.selectedQuestions.push($scope.questions[x]);
                }

                else {
                    console.log('$scope.questions[x].section != sectionId')
                }

            }

    };

    $scope.clearSelectedQuestions = function(){
        $scope.selectedQuestions = []; 
    }

    $http.get("http://127.0.0.1:3000/tests.json")
    .then(function(response) {
        $scope.testTypes = response.data;
        // console.log('test types', $scope.testTypes)

    });

    $http.get("http://127.0.0.1:3000/testinstances.json")
    .then(function(response) {
        $scope.testInstances = response.data;
        // console.log('test instances', $scope.testInstances);
    });

    $http.get("http://127.0.0.1:3000/testsections.json")
    .then(function(response){
        $scope.testSections = response.data;
        // console.log("testSections", $scope.testSections);

    });

    $http.get("http://127.0.0.1:3000/questions.json")
    .then(function(response){
        $scope.questions = response.data;
        // console.log("questions", $scope.questions);
// printing out the answers
        // var j;
        // for (var j = 0; j < $scope.questions.length; j++) {
        //     console.log($scope.questions[j].answer)
        //     $scope.questions.push($scope.questions[j]);
        // }

    });

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("active");

                /* Toggle between hiding and showing the active panel */
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }


});

