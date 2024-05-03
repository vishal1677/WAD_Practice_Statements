document.getElementById('btn').addEventListener('click',function(){
let val1=document.getElementById('inp1').value;
let val2=document.getElementById('inp2').value;

let arr1=val1.split('#').map(Number);
let arr2=val2.split('#').map(Number);

let mat1=[];
let mat2=[];
let htmlE=``;

for(let i=0; i<arr1[0]; i++)
{
  let temp=[];
  let val=(i+1)*arr1[2];
  htmlE+=`<tr>`;
  for(let j=0; j<arr1[1]; j++)
  {
   htmlE+=`<td>${val}</td>`;
   temp.push(val);
   val+=(i+1);
  }

  mat1.push(temp);
  htmlE+=`</tr>`;
}

let tb1=document.getElementById('tbl1');
let tb2=document.getElementById('tbl2');
tb1.innerHTML=htmlE;

htmlE=``;

for(let i=0; i<arr2[0]; i++)
{
  let temp=[];
  let val=(i+1)*arr2[2];
  htmlE+=`<tr>`;
  for(let j=0; j<arr2[1]; j++)
  {
   htmlE+=`<td>${val}</td>`;
   temp.push(val);
   val+=(i+1);
  }

  mat2.push(temp);
  htmlE+=`</tr>`;
}

tb2.innerHTML=htmlE;
htmlE=``;

if(arr1[2] == arr2[2])
{
  for(let i=0; i<arr1[0]; i++)
  {
    let temp=[];
    let val=(i+1)*arr1[2];
    htmlE+=`<tr>`;
    for(let j=0; j<arr1[1]; j++)
    {
     htmlE+=`<td>${val}</td>`;
     temp.push(val);
     val+=(i+1);
    }
  
    mat1.push(temp);
    htmlE+=`</tr>`;
  }
}
else
{
 let mat3=new Array(arr1[0]);
 for(let i=0; i<arr1[0]; i++)
 {
  mat3[i]= new Array(arr1[1]);
 }

 multiply(mat1,mat2,mat3,arr1[0],arr1[1]);

 for(let i=0; i<arr1[0]; i++)
 {
  htmlE+=`<tr>`
  for(let j=0; j<arr1[1]; j++)
  {
    htmlE+=`<td>${mat3[i][j]}</td>`
  }

  htmlE+=`</tr>`;
 }
}

let tbl3=document.getElementById('tbl3');
tbl3.innerHTML=htmlE;

});

function multiply(mat1,mat2,mat3,col,row)
{
  for(let i=0; i<row; i++)
  {
    for(let j=0; j<col; j++)
    {
      mat3[i][j]=mat1[i][j]*mat2[i][j];
    }
  }
}