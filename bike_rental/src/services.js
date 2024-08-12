import axios from 'axios'

const API_URL='https://localhost:7065/api'

const getTokenFromURL = () => {
    const url = new URL(window.location.href);
    return url.searchParams.get('token');
};

export const register_user=async(data)=>{
    const response=await axios.post(`${API_URL}/Users/Register`,data)
    return response
}

export const states=async()=>{
    const response=await axios.get(`${API_URL}/States`)
    return response
}

export const getCity=async(id)=>{
    const response=await axios.get(`${API_URL}/Cities/${id}`,)
    return response
}

export const login=async(data)=>{
    const response=await axios.post(`${API_URL}/Users/Authenticate`,data)
    return response
}

export const addbike=async(data)=>{
    const token = getTokenFromURL();
    console.log("token",token,data);

    const response = await axios.post(`${API_URL}/Bikes`, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).catch(error => {
        console.error("Error:", error.response || error.message);
    });
    
    return response;
}

export const fetchbike=async()=>{
    const token = getTokenFromURL();
    console.log("token",token);

    const response=await axios.get(`${API_URL}/Bikes`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
        })
    return response
}

export const getBikeById = async (id) => {
    const token = getTokenFromURL();
    console.log("Token:", token);

    try {
        const response = await axios.get(`${API_URL}/Bikes/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log("Response::::",response);
        
        return response;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error("Error Response:", error.response);
        } else if (error.request) {
            // Request was made but no response was received
            console.error("Error Request:", error.request);
        } else {
            // Something else caused the error
            console.error("Error Message:", error.message);
        }
        throw error; // Re-throw the error after logging it
    }
};


export const updateBikeDetails=async(id,data)=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.put(`${API_URL}/Bikes/${id}`,data,{ 
        headers: {
         'Authorization': `Bearer ${token}`
        }
    }).catch(error => {
        console.error("Error:", error.response || error.message);
    });
    return response
}

export const deleteBike=async(id)=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.delete(`${API_URL}/Bikes/${id}`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response
}

export const getUserDetails=async()=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.get(`${API_URL}/Userprofiles`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return response
}


export const getUserById=async(id)=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.get(`${API_URL}/Users/${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`

        }
    })
    return response
}


export const getUsers=async()=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.get(`${API_URL}/Users`,{
        headers:{
            'Authorization': `Bearer ${token}`

        }
    })
    return response
}

export const updateById=async(id,data)=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.put(`${API_URL}/Users/${id}`,data,{
        headers:{
            'Authorization': `Bearer ${token}`

        }
    })
    return response
}

export const addState=async(data)=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const add_state={
        "stateName":data
    }
    const response=await axios.post(`${API_URL}/States`,add_state,{
        headers:{
            'Authorization': `Bearer ${token}`

        }
    })
    return response
}
export const addCity=async(data)=>{
    const token = getTokenFromURL();
    console.log("token",token,data);
    
    const response=await axios.post(`${API_URL}/Cities`,data,{
        headers:{
            'Authorization': `Bearer ${token}`

        }
    })
    return response

}

export const getState=async()=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.get(`${API_URL}/States`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
    return response
}

export const addRentalRecord=async(data)=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.post(`${API_URL}/Rentalrecords`,data,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
    return response
}

export const getCities=async()=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.get(`${API_URL}/Cities`,)
    return response

}

export const fetchRentalRecord=async(id)=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.get(`${API_URL}/Rentalrecords/by-user/${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
    return response

}

export const getCityById=async(id)=>{
    const token = getTokenFromURL();
    console.log("token",token);
    const response=await axios.get(`${API_URL}/Cities/${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
    return response
}

