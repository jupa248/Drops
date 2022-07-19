import Cookies from 'js-cookie';

const jwtToken = Cookies.get('user_token')

export const config = {
    headers: {
        Authorization: 'Bearer '+ jwtToken
    },
}