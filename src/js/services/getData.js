const getData = async (url) => {
    const result = await fetch(url, {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await result.json();
}

export {getData};