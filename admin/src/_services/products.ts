

async function allproducts() {
 
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/all`);
  const productfilter=await response.json();
  return productfilter.product;

}

async function createproduct(obj:any){
   
 const result= await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/create`, {
    method: 'post',
    body: obj
   }).then(res => {
            
    if(res.status==200){
     
      return {"status":res.status};
     
    }else if(res.status==400){
     return {"status":res.status}
    }
    else{
   
      return {"status":res.status};
    }
   
});
 
return result;

}



export const productService = {
  allproducts,
    createproduct
   
};