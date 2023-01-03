function reload(){
           
  var call =new XMLHttpRequest();
  call.open('GET','movies.json',true);
  var th=document.getElementById('entete');
  call.onreadystatechange=function(){
      if(call.readyState===4 && call.status===200){
         
          var j=JSON.parse(call.responseText);

            for (let i =0;i<j.length;i++) {
              var url= j[i].poster;
            var res;
          res="";
              for(var t=0;t<j[i].actors.length;t++)
            
                  {
                      
                      res+="<ul><li>"+j[i].actors[t].nom+" "+j[i].actors[t].prenom+" "+j[i].actors[t].nationality+"<br>"+"</li></ul>";
                      
                     
           
                } 
                var test;
          test="";
              for(var p=0;p<j[i].festivals.length;p++)
            
                  {
                      
                      test+="<ul><li>"+j[i].festivals[p]+"<br>"+"</ul></li>";
                      
                     
           
                } 
                
                  th.insertAdjacentHTML("afterend",'<tr> <td class="align-middle text-center">'+j[i].titre+'</td>'+
                          '<td class="align-middle text-center">'+j[i].réalisateur+'</td>'+
                          '<td class="align-middle text-center">'+j[i].durée+'</td>'+
                          '<td class="align-middle text-center">'+j[i].année+'</td>'+
                          '<td class="align-middle text-center"><a href='+url+'>Poster Link </a> </td>'+
                          '<td >'+test+'</td>'
                          + '<td >'+res+'</td> </tr>'
                          );                
          }
      }
  }
  obj.send();
}  
function filtrer(titre){ 

var request =new XMLHttpRequest();
request.open('GET','movies.json',true);
  var tab=document.getElementById('table');
  // var entete=document.getElementById('entete');
  while(tab.hasChildNodes())
tab.removeChild(tab.firstChild);

request.onreadystatechange=function(){
      if(request.readyState===4 && request.status===200){
                var data=JSON.parse(request.responseText);         
          for (let e=0;e<data.length;e++)
           {
              var movie;
              movie=data[e];
              var url= movie.poster;
              if(movie.titre.startsWith(titre))
              {
                 var act;
                 act="";
                 for (let index = 0; index < movie.actors.length; index++) {
                        act+="<ul><li>"+movie.actors[index].nom+" "+movie.actors[index].prenom+" "+movie.actors[index].nationality+"<br>"+"</ul></li>";
                  
                 }
                 var fes;
                 fes=" ";
                 for (let loop = 0; loop < movie.festivals.length; loop++) {
                  fes+="<ul><li>"+movie.festivals[loop]+"<br>"+"</ul></li>";
                  
                 }
                 tab.insertAdjacentHTML("afterbegin",'<tr  class="table-danger text-center"> <th>titre</th>'+' <th>réalisateur</th>'
                                                      +'<th>durée</th>'+'<th>année</th> '+'<th>poster</th>'
                                                      +'<th>festivals</th> '+'<th>actors</th> </tr>'
                                                      +'<tr> <td class="align-middle text-center">'+movie.titre+'</td>'+
                                                      '<td class="align-middle text-center">'+movie.réalisateur+'</td>'+
                                                      '<td class="align-middle text-center">'+movie.durée+'</td>'+
                                                      '<td class="align-middle text-center">'+movie.année+'</td>'+
                                                      '<td class="align-middle text-center"><a href='+url+'>Poster Link </a></td>'+
                                                      '<td >'+fes+'</td>'
                                                      + '<td >'+act+'</td> </tr> <br>');                  
                }                       
          }
      }
  }
  request.send();
}

function sortTable(n) {
var table, rows, switching, x, y, shouldSwitch, dir, switchcount = 0;
table = document.getElementById("table");
switching = true;


dir = "asc"; 


while (switching) {

switching = false;
rows = table.rows;

for ( var i = 1; i < (rows.length - 1); i++) {

shouldSwitch = false;
x = rows[i].getElementsByTagName("TD")[n];
y = rows[i + 1].getElementsByTagName("TD")[n];

if (dir == "asc") {
if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

shouldSwitch= true;
break;
}
} else if (dir == "desc") {
if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

shouldSwitch= true;
break;
}
}
}
if (shouldSwitch) {
rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
switching = true;
switchcount ++;      
} else {
if (switchcount == 0 && dir == "asc") {
dir = "desc";
switching = true;
}
}
}
}
