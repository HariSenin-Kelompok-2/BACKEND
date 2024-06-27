const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

module.exports = hashPassword