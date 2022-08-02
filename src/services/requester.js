export const request = async (method, url, data ) => {
    try {
        let reqestBuilder;

        if(method === 'GET') {
            reqestBuilder = fetch(url);
        } else {
            reqestBuilder = fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }

        const respons = await reqestBuilder;
        const result = await respons.json();

        return result;
    } catch (error) {
        return error;
    }
}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');