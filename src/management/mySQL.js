const rootLink = "https://thoughtpage-backend-production.up.railway.app"

export async function getLastThoughts() {
  const url = `${rootLink}/thoughts?num=5`
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

export function getThoughts({categories="", views=1, quantity="", page=""}) {
  const url = `${rootLink}/thoughts?categories=${categories}&views=${views}&quantity=${quantity}&page=${page}`
  return fetch(url)
  .catch( error => {
    console.error('An error occurred:', error)
  })
}


export function deleteThoughts({id}) {
  const url = `${rootLink}/thoughts/${id}`;
  fetch(url, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
}

export function postThoughts({body}) {
  const url = `${rootLink}/thoughts`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },  
    body: JSON.stringify(body)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
}


export function editThoughts({id, body}) {
  const url = `${rootLink}/thoughts/${id}`;
  fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },  
    body: JSON.stringify(body)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json()
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
}

