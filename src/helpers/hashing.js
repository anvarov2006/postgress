import bcrypt from "bcrypt";
const salt_round=10
async function hashPassword(password) {
    return bcrypt.hash(password,salt_round);
}
async function compareHashedPassword(password,hash) {
    if(!hash) return false;
    return bcrypt.compare(password,hash)
}

export {
    hashPassword,
    compareHashedPassword
}