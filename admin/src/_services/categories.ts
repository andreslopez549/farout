

async function allcategories() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}category/all`);
  const productfilter = await response.json();
  return productfilter.category;

}

async function createcategory(obj: any) {

  const json = {
    "name": obj.get("name"),
    "type": obj.get("type")
  };

 const create= fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}category/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(json)
  }).then(res => {

    if (res.status == 200) {

      return { "status": true };

    }
    else {
      alert(res.statusText)
      return { "status": false };
    }

  });

  return create;


}

async function getcategories(id) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}category/${id}`);
  const productfilter = await response.json();
  return productfilter.category;

}

async function editcategory(obj: any) {


  const result=await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}category/edit/${obj._id}`, {
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

async function deletecategory(id) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}category/${id}`,{
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




export const categoryService = {
  allcategories,
  createcategory,
  getcategories,
  editcategory,
  deletecategory

};