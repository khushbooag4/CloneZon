const emailValidate = (email) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

const passwordValidate = (password) => {
    var re= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password)

}

module.exports = {
    emailValidate,
    passwordValidate
}