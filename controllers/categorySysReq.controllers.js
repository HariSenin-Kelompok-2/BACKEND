const { CategorySysReq } = require("../models");

const getCategorySysReqs = async(req, res) => {
    const categorySysReq = await CategorySysReq.findAll()
    return res.status(200).json({ message: "success", data: categorySysReq})
}

module.exports = { getCategorySysReqs };