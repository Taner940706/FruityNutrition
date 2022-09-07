export const settings = {
    host_fruit: '',
    host_img:''

};

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;

        } catch (err) {
            return response;
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}


function createOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    }


    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, createOptions());
}


export async function put(url, data) {
    return await request(url, createOptions('put', data));
}
