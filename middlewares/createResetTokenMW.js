const crypto = require('crypto');

module.exports = (objRepo) => {
    const {TokenModel, UserModel} = objRepo;

    return async(req,res,next)=>{
        const {Email} = req.body;
        if(!Email){
            return res.status(400).send(`<img src="https://http.cat/400.jpg" alt="400 Bad Request">`);
        }

        //Elvileg ha arrayt adunk át logikai OR-ként fog rá tekinteni a butus mongodb
        //Nice! Ez jó lesz a ctf miatt
        //Technically ez egy user, nem egy "existing email" de mind 1
        const existingEmail = await UserModel.findOne({Email: Email})

        if(!existingEmail){
            return res.status(400).send(`<img src="https://http.cat/400.jpg" alt="400 Bad Request">`);
        }

        const resetToken = new TokenModel({
            user: existingEmail._id,
            token: crypto.randomBytes(20).toString('hex'),
        });

        await resetToken.save();

        //Tovább adni a tokenid-t hogy majd lehessen belőle linket csinálni és elküldeni:
        req.resetToken = resetToken.token;

        return next();

    }
}