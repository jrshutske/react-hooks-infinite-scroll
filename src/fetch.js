export default async function fetchData(search,take,skip) {
    try {
      let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${"cR7PKuXUZg1xE65tbEeo2C6yN95jYZsz"}&q=${search}&limit=${take}&offset=${skip}&rating=G&lang=en`)  
      let jsonResponse = await response.json()
      return jsonResponse.data
    } catch(err) {
      console.log(err)
    }
  }