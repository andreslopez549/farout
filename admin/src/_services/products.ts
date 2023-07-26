

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


  const result = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/edit/${obj._id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(obj)
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



export const productService = {
  allproducts,
  createproduct,
  getproducts,
  editproducts

};