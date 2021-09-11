$(function(){

    $("#fetchdata").on('click', function(){
        $.get( "/fetchdata", function( data ) {
            var employees = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(employees, function(index, employee ) {

                string += '<tr><td>'+(index+1)+'</td><td>'+employee['_id']+'</td><td>'+employee['nameoftheCandidate']+'</td><td>'+employee['Email']+'</td><td>'+employee['mobileno']+'</td><td>'+employee['DateofBirth']+'</td></tr>'+employee['WorkExperience']+'</td><td>'+employee['ResumeTitle']+'</td><td>'+employee['CurrentLocation']+'</td><td>'+employee['PostalAddress']+'</td><td>'+employee['CurrentEmployer']+'</td><td>'+employee['CurrentDesignation']+'</td><td>';
            });

            $("#trdata").html(string);
        });
    });
 
    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

}); 