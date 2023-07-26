

async function allattributes() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}attribute/all`);
  const productfilter = await response.json();
  // console.log(productfilter, "aaaa")
  return productfilter.data;

}

async function createattribute(obj: any) {

 

  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}attribute/create`, {
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
      alert(res.statusText)
      return { "status": false };
    }

  });


}



export const attributeService = {
  allattributes,
  createattribute
};