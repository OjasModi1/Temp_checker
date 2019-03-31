let temperature=[36,48,60,72,85,85,19,23,37,71];
let max=temperature[0];
let min=temperature[0];
let n=temperature.length;
function get_max()
{
for(i=0;i<=n;i++)
{
if (temperature[i]>max)
{
 max=temperature[i];    
}
}
return max;
}
let max_value=get_max();
console.log(max_value);
function get_min()
{
for(i=0;i<=n;i++)
{
if (temperature[i]<min)
{
 min=temperature[i];    
}
}
return min;
}
let min_value=get_min();
console.log(min_value); 
function get_mean()
{
var temperature=[36,48,60,72,85,85,19,23,37,71];   
var k=temperature.length;
var sum=0;
for(i=0;i<=k;i++)
{
 sum+=temperature[i]; 
}
var mean=sum/k;
return mean;
}
console.log(get_mean());
function insert()
{
var temperature=[36,48,60,72,85,85,19,23,37,71];
temperature.push(36);
m=temperature[temperature.length-1];
return m;
}
console.log(insert());
function get_mode(){
    var temperature=[14,20,30,30,20,30];
    var mode;
    var m=[];
    for(var j=0; j<temperature.length;j++){
        m[temperature[j]]=m[temperature[j]]+1;
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
console.log(get_mode());




