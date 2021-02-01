interface Response {
    token: string;
    user: {
        name : string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'asfghjklasghflhjkgawlghjfkajsgfv',
                user: {
                    name: 'Caio Anderson',
                    email: 'caioanderson022@gmail.com',
                }
            })
        }, 2000);
    });
}