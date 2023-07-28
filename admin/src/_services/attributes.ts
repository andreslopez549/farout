

async function allattributes() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}attribute/all`);
  const attributefilter = await response.json();
  // console.log(attributefilter, "aaaa")
  return attributefilter.data;

}

async function createattribute(obj: any) {



  const create = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}attribute/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(obj)
  }).then(res => {

    if (res.status == 200) {

      return { "status": true };

    }
    else {
      // alert(res.statusText)
      return { "status": false };
    }

  });

  return create;


}

async function getattribute(id) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}attribute/show/${id}`);
  const attributefilter = await response.json();
  return attributefilter.data;

}

async function editattribute(obj: any, id: any) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}attribute/edit/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/JSON'
    },
    body: JSON.stringify(obj)
  }).then(res => {

    if (res.status == 200) {

      return { "status": true };

    }
    else {
      alert(res.statusText)
      return { "status": false };
    }

  });

     return response;

}


export const attributeService = {
  allattributes,
  createattribute,
  getattribute,
  editattribute
};