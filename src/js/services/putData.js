// http://localhost:3000/task/${comletedItem.id}
async function putData(url, data) {
    const result = await fetch(url, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
         body: JSON.stringify( data)
    });
    return await result.json();

}

export {putData};