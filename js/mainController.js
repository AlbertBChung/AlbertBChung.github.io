app.controller('MainController', ['$scope', 'skills', 'clubs', 'work', 'bio','hobbies', function($scope, skills, clubs, work, bio,hobbies) {
	//param: name of service that exists, new name for variable

  bio.success(function(data) {
    $scope.bio = data;
  });
  skills.success(function(data) {
    $scope.skillList = data;
  });
  clubs.success(function(data) {
    $scope.clubList = data;
  });
  work.success(function(data) {
    $scope.workList = data;
  });
  hobbies.success(function(data) {
    $scope.hobbyList = data;
  });



}]);

app.directive('customHover', function () {
    return {
        link: function (scope, element, attr) {
            $(element).hover(
            function () {
              if($(window).width()<800 && $(this).attr('class') == 'work-entry ng-scope'){
                if($( this ).find('h2').text() == 'Riverside Research, Lizzi Center For Biomedical Engineering'){
                  $( this ).append('<ul>')
                  for(var i=0; i<scope.workList.work[0].descriptionList.length; i++){
                    $( this ).append('<li>'+scope.workList.work[0].descriptionList[i]+'</li>')
                  }
                  $( this ).append('</ul>').find('li').css('font-size', '18px')
                }
                else if ($( this ).find('h2').text() == 'Cornell Engineering World Health Project Team'){
                  $( this ).append('<ul>')
                  for(var i=0; i<scope.workList.work[1].descriptionList.length; i++){
                    $( this ).append('<li>'+scope.workList.work[1].descriptionList[i]+'</li>')
                  }
                  $( this ).append('</ul>').find('li').css('font-size', '18px')
                }
                else if ($( this ).find('h2').text() == 'Course Consultant for Introduction to Computing Using MATLAB CS 1112'){
                  $( this ).append('<ul>')
                  for(var i=0; i<scope.workList.work[2].descriptionList.length; i++){
                    $( this ).append('<li>'+scope.workList.work[2].descriptionList[i]+'</li>')
                  }
                  $( this ).append('</ul>').find('li').css('font-size', '18px')
                }
                $(this).animate({
                  height: '80vh'
                })
              }else{
                if($(this).attr('class') == 'work-entry ng-scope'){
                  var div = $( this ).clone().prop({ id: 'focus'});
                  var location = $( this ).offset();
                  div.css({'z-index': '99', position:'absolute', top: location.top, left: location.left, margin: 0})
                  if(div.find('h2').text() == 'Riverside Research, Lizzi Center For Biomedical Engineering'){
                    div.append('<ul>')
                    for(var i=0; i<scope.workList.work[0].descriptionList.length; i++){
                      div.append('<li>'+scope.workList.work[0].descriptionList[i]+'</li>')
                    }
                    div.append('</ul>').find('li').css('font-size', '25px')
                  }
                  else if (div.find('h2').text() == 'Cornell Engineering World Health Project Team'){
                    div.append('<ul>')
                    for(var i=0; i<scope.workList.work[1].descriptionList.length; i++){
                      div.append('<li>'+scope.workList.work[1].descriptionList[i]+'</li>')
                    }
                    div.append('</ul>').find('li').css('font-size', '25px')
                  }
                  else if (div.find('h2').text() == 'Course Consultant for Introduction to Computing Using MATLAB CS 1112'){
                    div.append('<ul>')
                    for(var i=0; i<scope.workList.work[2].descriptionList.length; i++){
                      div.append('<li>'+scope.workList.work[2].descriptionList[i]+'</li>')
                    }
                    div.append('</ul>').find('li').css('font-size', '25px')
                  }
                  div.appendTo("body")
                    .animate({
                      left: '8%',
                      top: '305vh',
                      width: '80%',
                      height: '80vh'
                    })
                    $('.work-entry').not('#focus').hide();
                }
                else if($(this).attr('class') == 'row'){
                  $('#focus').remove();
                  $('.work-entry').not('#focus').show();
                }
              }
            },
            function () {
              if($(window).width()<800 && $(this).attr('class') == 'work-entry ng-scope'){
                $(this).css('z-index', '0')
                $(this).find('li').remove()
               $(this).animate({
                height: '35vh'
              })
            }
          });
        }
    }
});
