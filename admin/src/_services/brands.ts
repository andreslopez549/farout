

async function allbrands() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}brand/all`);
  const productfilter = await response.json();
  return productfilter.brand;

}

async function createbrand(obj: any) {

  const json = {
    "name": obj.get("name"),
    "type": obj.get("type")
  };
  
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}brand/create`, {
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


}

async function getbrands(id) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}brand/${id}`);
  const productfilter = await response.json();
  return productfilter.brand;

}

async function editbrand(obj: any) {


  const result = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}brand/edit/${obj._id}`, {
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

async function deletebrand(id) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}brand/${id}`,{
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




export const brandService = {
  allbrands,
  createbrand,
  getbrands,
  editbrand,
  deletebrand

};