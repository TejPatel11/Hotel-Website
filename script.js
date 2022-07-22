function pullXml(){
           
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function(){
                if (this.readyState == 4 && this.status==200){
                   parseUserData(this.responseXML); 
                }
            }
            
            xmlhttp.open("GET", "data.xml", true);
            xmlhttp.send();
        }
        
        function parseUserData (xmlFile){
            var outputData="";
            var people = xmlFile.getElementsByTagName("people");
            for (var index=0; index < people.length; index++){
                outputData+=people[index].getElementsByTagName("name")[0].childNodes[0].nodeValue + " Age: ";
                outputData+=people[index].getElementsByTagName("age")[0].childNodes[0].nodeValue + " Job:";
                outputData+=people[index].getElementsByTagName("job")[0].childNodes[0].nodeValue + " <br>";
            }
            document.getElementById("peopleList").innerHTML = outputData;
        }

function myfunction(){
    document.getElementById("wrapper").style.backgroundColor = "lightblue";
    document.getElementById("wrapper").style.color="red";
}