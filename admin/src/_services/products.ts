

async function allproducts() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/all`);
  const productfilter = await response.json();
  return productfilter.product;

}

async function createproduct(obj: any) {

  const result = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/create`, {
    method: 'post',
    body: obj
  }).then(res => {

    if (res.status == 200) {

      return { "status": res.status };

    } else if (res.status == 400) {
      return { "status": res.status }
    }
    else {

      return { "status": res.status };
    }

  });

  return result;

}

async function getproducts(id) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/${id}`);
  const productfilter = await response.json();
  return productfilter.product;

}

async function editproducts(id:any,obj: any) {
   
     console.log(obj,"objectss");
     console.log(id,"id");
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/edit/${id}`, {
    method: 'put',
    body: obj
  }).then(res => {

    if (res.status == 200) {

      return { "status": res.status };

    }
    else {

      return { "status": res.status };
    }

  });

  return result;


}

async function deleteproduct(id) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/${id}`,{
    method: 'delete',
  }).then(res => {

    if (res.status == 200) {

      return {"status":true};

    } 
    else {

      return {"status":false,
               "error":res};
    }

  });

  return response;

}



export const productService = {
  allproducts,
  createproduct,
  getproducts,
  editproducts,
  deleteproduct

};