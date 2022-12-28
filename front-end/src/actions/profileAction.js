import axios from 'axios'

export const startPostProfile = (formData, handleProfileData) => {

    return (dispatch) => {
        axios.post("http://localhost:3055/users/profile", formData, {
            headers: {
                "Authorization": localStorage.getItem("exp-token")
            }
        })
        .then((response) => {
            const data = response.data
            handleProfileData(data)
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export const startGetProfile = (handleProfileData) => {

    return (dispatch) => {
        axios.get("http://localhost:3055/users/profile", {
            headers: {
                "Authorization": localStorage.getItem("exp-token")
            }
           
    })
    .then((response) => {
        const data = response.data
        handleProfileData(data)
    })
    .catch((err) => {
        alert(err.message)
    })
}

}

export const startUpdateProfile = (id, formData, handleProfileData) => {

    return (dispatch) => {
        axios.put(`http://localhost:3055/users/profile/${id}`, formData, {
            headers: {
                'Authorization': localStorage.getItem('exp-token')
            }
        })
        .then((response) => {
            const data =response.data
            handleProfileData(data)
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}