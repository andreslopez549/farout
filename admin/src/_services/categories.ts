

async function allcategories() {
 
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}category/all`);
  const productfilter=await response.json();
  return productfilter.category;

}

async function createcategory(obj:any){
   
  const json={"name":obj.get("name"),
              "type":obj.get("type")
};
console.log()
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}category/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(json)
   }).then(res => {
            
    if(res.status==200){
     
      return {"status":true};
     
    }
    else{
     alert(res.statusText)
      return {"status":false};
    }
    
});
   

}



export const categoryService = {
  allcategories,
  createcategory
   
};