/**
 * @name: Assignment1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program.
 * @author: Sasha Gordon Greene
 */

 /*Create a single personal profile page about yourself with any kind of style. This page should include one picture, 1 or 2 paragraph, and header with navigation bar and footer.  
 The navigation bar will be used to create a link to another pages that you will create for the other questions. 
 The footer of your page should include current date and copy right information
 
 In your profile page, the name of the picture should appear after 10 second
 
 Create a stylesheet and add different style to your pages. All your page should have a footer that details your full name, copyright @ and year-->
 */
 
 


function revealName(){
    let pfpName = document.getElementById("pfp_block");
    pfpName.classList.add("show-me");
   
}




/**
    *
    *  Create a new page called weather. On this page use the concept of JavaScript named and anonymous function and create a program that can accept a temperature input in degree Fahrenheit and convert it into degree Celsius and from Celsius to Kelvin based on a button click event.  

    Hint: Use JQuery to access the DOM elements in your code for this question. 
    Do a little research to find out the basic formula for each calculation.
    */



    var outputCounter=0;
    $(document).ready(function(){
        
        if(document.getElementById("button")){
            //Bind This conversion function to our button when clicked
            $( "#button" ).click(function() {
                StartConversions(); 
              });
            }
    });
    
    

    function StartConversions(){
        outputCounter++; //increment to keep track of how many conversions we have done

       

        //get fahrenheit value from input
        var FahrenheitValue = $('#temp_input').val();

        var CelsiusValue = ConvertToCelsius(FahrenheitValue);
        var KelvinValue = ConvertToKelvin(CelsiusValue);

        console.log(FahrenheitValue);
        console.log(CelsiusValue);
        console.log(KelvinValue);

        //create some text to differentiate the different conversion with different headings
        var $heading=$("<h2>");
        $heading.html("Conversion "+outputCounter+": ");
        $("footer").before($heading);

        //Display Celsius
        var info={
            id:'celsius_output',
            
        };
            var $heading=$("<h3>", info);
            $heading.html("Celsius Output: "+CelsiusValue);
            $("footer").before($heading);
        

        //Display Kelvin
        var info={
            id:'kelvin_output',
            
        };
            var $heading=$("<h3>", info);
            $heading.html("Kelvin Output: "+KelvinValue);
            $("footer").before($heading);

    }

    function ConvertToKelvin(celsiusValue){
        return celsiusValue + 273.15;
    }


    function ConvertToCelsius(fahrenheitValue){
        return (fahrenheitValue - 32) * 5/9;
    }
        
        /**
    * @name: Assignment1
    * @Course Code: SODV1201
    * @class: Software Development Diploma program.
    * @author: Sasha Gordon Greene
    * 
    * 
    * 
    * Build a Mark to Grade converter web page with the following specification and create a link to it in your profile page
The MarkToGrade function scrapes the student mark out of the mark-input-box element and verifies it is realistic.
A Mark must be number only, nonnegative, and less than 101.
If an invalid mark is entered, it displays a message back to the user in the. validation-message element.
Messages should be informative... return as many different messages as you can to guide the user what kind of erroneous value has entered	
If the user entered any value above 90 Grade A should be displayed as a result
If user entered any value above 80 Grade B should be displayed
If user entered any value above 70 Grade C should be displayed
If user entered any value above 50 Grade D should be displayed
If user entered any value less than 50 Grade F should be displayed 
Hint 1: In JavaScript, we can use the global parseInt function to try and convert a string to a number.
Hint 2: Use exception handling.
Hint 3: Use HTML and JavaScript 
    * 
    */

 function ConvertMarkToGrade(){ 

    const grade = parseInt(document.getElementById('mark_input').value);
  
  
           //handle exceptions
           try{
               
               //check if numeric
               if(isNaN(grade)){
               throw "grade must be a number";
               }
               
               //check greater than or equal to 0
               if(grade<0){
               throw "grade must be non negative";
               } 
               
                //check less than or equal 100
               if(grade>100){
               throw"grade must be less than or equal to 100";
                    return;
                }
           }
           catch(err){
               console.error(err);
               document.getElementById("converted_grade_output").innerHTML=err;
               return;
           }
       
           
           

           if(grade<50){
               document.getElementById("converted_grade_output").innerHTML="F";
               return;
           }
           if(grade<70){
               document.getElementById("converted_grade_output").innerHTML="D";
               return;
           }
           if(grade<80){
               document.getElementById("converted_grade_output").innerHTML="C";
               return;
           }
           if(grade<90){
               document.getElementById("converted_grade_output").innerHTML="B";
               return;
           }
           document.getElementById("converted_grade_output").innerHTML="A";
           return;
           



       
}



/* Create a new staff page and write a program which display list of staff information with sorting capability by name and salary. Sample array data about staffs will be provided for you from your instructor. You can restructure the dataset as you want.  Link this staff page to your profile page.

For this question you are expected to apply the concept of loop, JavaScript object, Array and function. 
You can also use jQuery if needed
You can implement different solution for this question. All working attempts will be considered right.
    */
   


var dataSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", 372000 ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", 137500 ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", 327900 ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", 205500 ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", 103600 ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", 90560 ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", 342000 ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", 320800 ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", 170750 ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", 86000 ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", 433060 ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", 162700 ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", 470600 ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", 313500 ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", 385750 ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", 198500 ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", 725000],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", 237500 ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", 132000 ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", 217500 ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", 345000 ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", 675000 ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", 106450 ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", 85600 ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", 1200000 ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", 92575 ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", 357650 ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", 206850 ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", 850000 ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", 163000 ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", 95400 ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", 114500 ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", 145000 ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", 235500 ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", 324050 ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", 85675 ]
];

var sortedSet = [   
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", 372000 ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", 137500 ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", 327900 ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", 205500 ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", 103600 ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", 90560 ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", 342000 ],
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", 320800 ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", 170750 ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", 86000 ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", 433060 ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", 162700 ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", 470600 ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", 313500 ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", 385750 ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", 198500 ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", 725000],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", 237500 ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", 132000 ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", 217500 ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", 345000 ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", 675000 ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", 106450 ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", 85600 ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", 1200000 ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", 92575 ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", 357650 ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", 206850 ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", 850000 ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", 163000 ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", 95400 ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", 114500 ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", 145000 ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", 235500 ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", 324050 ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", 85675 ]
];





function SortByName() {

    for(var i=0; i<dataSet.length; i++){
    var firstIndex= FindMostFirst()

    
        //loop through all array columns
        for(var j=0; j<=5;j++){
           
            sortedSet[i][j]=dataSet[firstIndex][j];
            dataSet[firstIndex][j]="z";
        }
      
        
    }
     //send sorted data back to dataset
     for(var i=0; i<dataSet.length; i++){
        //loop through all array columns
        for(var j=0; j<=5;j++){
            
            dataSet[i][j]=sortedSet[i][j];
        }
      }
     
        
        

     printData();
 }
function FindMostFirst(){
    var firstIndex=0; //set highest equal to the index
    var mostFirst=dataSet[0][0];//set first element as the lowest.

    var i;
    //find the highest element
    for(i=1; i<dataSet.length; i++){
      //  console.log("Compared "+dataSet[i][0]+ " with "+ mostFirst );
        if(dataSet[i][0].localeCompare(mostFirst)==-1){
            //console.log(dataSet[i][0]+"comes first");
            mostFirst=dataSet[i][0];
            firstIndex=i;
        }else{
           // console.log(mostFirst +"comes first")
        }
    }
   
    //console.log("first index: "+firstIndex);
    return firstIndex;
}


function SortByPay(){
   
    for(var i=0; i<dataSet.length; i++){
      //loop through all array columns
      for(var j=0; j<=5;j++){
          var highestIndex= findHighestIndexInArray()
          sortedSet[i][j]=dataSet[highestIndex][j];
          dataSet[highestIndex][j]=0;
      }
    }
    
  
    //send sorted data back to dataset
    for(var i=0; i<dataSet.length; i++){
      //loop through all array columns
      for(var j=0; j<=5;j++){
          
          dataSet[i][j]=sortedSet[i][j];
      }
    }
      
      
  
      printData();
  }

function findHighestIndexInArray(){
    var highestIndex=0; //set highest equal to the index
    var highest=dataSet[0][5];//set first element as the lowest.

    var i;
    //find the highest element
    for(i=1; i<dataSet.length; i++){
        console.log("Compared "+dataSet[i][5]+ " with "+ highest );
        if(dataSet[i][5]>highest){
            console.log(dataSet[i][5]+"was higher");
            highest=dataSet[i][5];
            highestIndex=i;
        }else{
            console.log(highest +"Was Higher")
        }
    }
   
    console.log("Highest index: "+highestIndex);
    return highestIndex;
}






    


//prints all elements in the array
function printData(){

    console.log(dataSet);
    console.log(sortedSet);
    //clear the output element
    document.getElementById("output").innerHTML="";

    //loop through all the employees
    for(var i=0; i<dataSet.length; i++){
        document.getElementById("output").innerHTML+=i+": ";
        //loop through all the employee attributes
        for(var j=0; j < dataSet[0].length; j++){
            document.getElementById("output").innerHTML+=dataSet[i][j]+", ";
        }
        document.getElementById("output").innerHTML+="<br>";
    }

}

$(document).ready(function(){
    
    if(document.getElementById("output")!=null){
        printData();
    }

    
        


      //Bind This conversion function to our button when clicked
    $( "#button_sort_name" ).click(function() {
        SortByName();
      });

      //Bind This conversion function to our button when clicked
    $( "#button_sort_salary" ).click(function() {
        SortByPay(); 
      });
      
});



