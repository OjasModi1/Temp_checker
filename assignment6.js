var tempertaure=[54,48,72,63,66,78,97,97,36,18];
function get_max(temperature )
{
 var n=temperature.length;
 var max=temperature[0];   
 for(i=0;i<n;i++)
 {
  if (temperature[i]>max)
  {
  var max=temperature[i]   
  }
   }
console.log( max);   
}
get_max(tempertaure);

var temperature=[54,48,72,63,66,78,97,97,36,18];
function get_mean()
{
var k=temperature.length;
var sum=0;
for(i=0;i<k;i++)
{
 sum+=temperature[i]; 
}
var mean=sum/10;
console.log(mean);
}
get_mean();
var temperature=[54,48,72,63,66,78,97,97,36,18];
function get_min( )
{
 var n=temperature.length;
 var min=temperature[0];   
 for(i=0;i<n;i++)
 {
  if (temperature[i]<min)
  {
  var min=temperature[i]   
  }
   }
console.log( min);   
}
get_min()

function insert(x)
{
 temperature.push(x);   
}
function get_mode(){
       var mode;
       var k;
       for(var j=0; j<a.length;j++){
           if(m[a[j]]===undefined)
               m[a[j]]=0;
           m[a[j]]=m[a[j]]+1;
       }
        
       var max_freq=0;
       for(k in m){
           if(m[k]>max_freq){
               max_freq=m[k];
               mode=k;
           }
       }
       return mode;
    }