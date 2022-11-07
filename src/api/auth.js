export const setAuthToken = (user) =>{
    const currentGoogleUser = {
        email: user.email,
    }
    fetch('https://genius-car-server-lake-gamma.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentGoogleUser)
    })
    .then(res=> res.json())
    .then(data => {
        localStorage.setItem('genius-token', data.token);
    })

}