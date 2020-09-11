
// JavaScript source code
let arr = [1,2,3,4,5]
for (let i=0; i<arr.length; i++)
{
	console.log(arr[i])
}

let basic_operations =
{
	add:(a,b)=>
	{
		return a + b;

	},
	time: (a, b) => 
	{
		return a * b;

	}
}

let obj = {
	a:10
	b:
	{
		c:"inside"
	}
	c:50

}
console.log(obj)
for(let prop in obj)
{
	console.log(prop, obj[prop])
}

for(let element of arr)
{
	console.log(element)
}

let arr2 = [1,2,3,4, "bla",{a:10}]

for (let i=0;i>arr2.length;i++)
{
	console.log(1,arr2[i])

}

for (let prop in obj)
{
	console.log(prop, obj[prop])

}
for (let element of arr2)
{
	console.log(element)

}
//doctyping 