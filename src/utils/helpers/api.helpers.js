export const errorHandler = () => { }

export const PromisifyError = (error) => {
    return new Promise((resolve, reject) => {
        reject(errorHandler(error))
    });
}

export const setHeaderInfo = () => {
    return {
        "authorization": "ACCESS_TOKEN"
    };
}