function isOperand(x)
{
	return (x >= 'a' && x <= 'z') ||
			(x >= 'A' && x <= 'Z');
}

function getInfix(exp)
{
	let s = [];

	for (let i = 0; i < exp.length; i++)
	{
		if (isOperand(exp[i]))
		{
		s.push(exp[i] + "");
		}
		else
		{
			let op1 = s.pop();
			
			let op2 = s.pop();
			s.pop();
			s.push("(" + op2 + exp[i] +
					op1 + ")");
		}
	}
	return s[s.length-1];
}
function postfixToinfix(){
let exp = document.getElementById("value").value
if(exp.length==0){
    alert("Enter Valid Expression");
    document.getElementById("show").value='';
}
else{
    let ans= getInfix(exp);
    document.getElementById('show').value=ans
}

}

