export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email !== null && email !== undefined && email !== "") {
        return re.test(email)
    } else {
        return false
    }
}

export const validateField = (data) => {
    return (data !== null && data !== undefined && data !== "")
}

export const validatePassword = (data) => {
    if (data !== null && data !== undefined && data !== "" && data.length >= 4) {
        return true;
    }
    return false;
}
