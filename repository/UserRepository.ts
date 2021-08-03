// This is an example for user login 
//  using AXIOS


import ApiConfig from "../constants/ApiConfig";
import axios from "axios";
import FormData from 'form-data';

// login user
export function login(username: string, password: string) {
    const data = {
        grant_type: 'password',
        client_id: ApiConfig.clientId,
        client_secret: ApiConfig.clientSecret,
        username: username,
        password: password,
    }

    const formData = new FormData();

    Object['entries'](data).forEach((keyValue) =>
        formData.append(keyValue[0], keyValue[1])
    );

    return axios.post(`${ApiConfig.url}/o/token/`, formData).then(response => {
        return {
            accessToken: response.data.access_token,
            id: response.data.id,
        };
    });

}


export async function profile(accessToken: string) {
    const response = await axios.get(`${ApiConfig.url}/api/profile/`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    });

    const data = response.data;
    return {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        emailAddress: data.email_address
    };

}


// creating new user
export function registration(
    firstname: string,
    lastname: string,
    emailAddress: string,
    password: string) {

    const data = {
        first_name: firstname,
        last_name: lastname,
        email_address: emailAddress,
        password: password,
    }

    const formData = new FormData();
    Object['entries'](data).forEach((keyValue) =>
        formData.append(keyValue[0], keyValue[1])
    );

    return axios.post(
        `${ApiConfig.url}/api/registration/`, formData
    ).then(response => {
        console.log(response.data);
    }).catch(e => {
        throw e;
    });

}


// forgot password
export function forgotPassword(emailAddress: string) {
    const data = {
        email_address: emailAddress,
    }

    const formData = new FormData();

    Object['entries'](data).forEach((keyValue) =>
        formData.append(keyValue[0], keyValue[1])
    );
    return axios.post(
        `${ApiConfig.url}/api/forgot-password/`,
        formData,
    ).then(response => {
        console.log(response.data);
    });

}


export async function updateProfileName(accessToken: string, firstName: string, lastName: string) {

    const data = {
        first_name: firstName,
        last_name: lastName,
    }
    
    const formData = new FormData();
    Object['entries'](data).forEach((keyValue) =>
        formData.append(keyValue[0], keyValue[1])
    );

    return axios.patch(`${ApiConfig.url}/api/profile/`, formData, {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    }
    }).then(response => {
        console.log(response);
    });

}


// update profile info
export async function updateProfileEmailAddress(accessToken: string, emailAddress: string) {

    const data = {
        email_address: emailAddress,
    }
    
    const formData = new FormData();
    Object['entries'](data).forEach((keyValue) =>
        formData.append(keyValue[0], keyValue[1])
    );

    return axios.patch(`${ApiConfig.url}/api/profile/`, formData, {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    }
    }).then(response => {
        console.log(response);
    }).catch(e => {
        throw e.response;
    });

}



//update password
export async function updateProfilePassword(accessToken: string, oldPassowrd: string, newPassword: string) {

    const data = {
        old_password: oldPassowrd,
        new_password: newPassword
    }
    
    const formData = new FormData();
    Object['entries'](data).forEach((keyValue) =>
        formData.append(keyValue[0], keyValue[1])
    );

    return axios.patch(`${ApiConfig.url}/api/change-password/`, formData, {
    headers: {
        Authorization: `Bearer ${accessToken}`,
    }
    }).then(response => {
        console.log(response.data);
    }).catch((e) => {
        // console.log(e.response.data);
        throw e.response;
    });

}
