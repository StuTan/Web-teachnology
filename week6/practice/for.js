var arr=[1,2,3,4,5,6] 

//this function judge  how many elements are eligible return the sum
function visitor(arr)
{
	let sum=0;
	for(let i=0;i<arr.length;i++)
		if(arr[i]<5) sum++
	return sum;
}

//this function call the visitor function and visit every element
function foreach(arr,visitor)
{
 	var num=0;
 	return visitor(arr);
 }

 //this function call the foreach function and return the value of 
 //Whether all elements satisfy the condition
 function every(arr, judge1)
 {
 	let count=foreach(arr,visitor)
 	return judge1(arr,count);
 }

//judge  Whether all elements satisfy the condition
 function judge1(arr,count)
 {
 	if(arr.length==count) return true;
 	else return false;
 }

 //this function call the foreach function and return the value of 
 //Whether a element or more elements satisfy the condition
 function some(arr, judge2)
 {
 	let count=foreach(arr,visitor)
 	return judge2(arr,count);
 }

//judge Whether a element or more elements satisfy the condition
 function judge2(arr,count)
 {
 	if( count>0) return true;
 	else return false;
 } 

 console.log(every(arr,judge1));
 console.log(some(arr,judge2));