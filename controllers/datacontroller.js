const path = require("path");
const Data = require("../models/companydata");

exports.getIndex = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}

exports.postdata = async (req, res, next) => {
    try {
        const companyname = req.body.companyNamevalue;
        const pros = req.body.prosvalue;
        const cons = req.body.cons;
        const rating = parseInt(req.body.rating);

        const results = await Data.findAll({
            where: {
                companyname: companyname
            }
        });

        let totalRating = 0;
        let numberOfRatings = 0;

        results.forEach(result => {
            totalRating += result.rating;
            numberOfRatings++;
        });

        totalRating += rating;
        numberOfRatings++;

        const averageRating = (totalRating / numberOfRatings).toFixed(1);

        await Data.create({
            companyname: companyname,
            pros: pros,
            cons: cons,
            rating: rating,
            overallrating: averageRating
        });

        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
};

exports.getData = async (req, res, next) => {
    try {
        const companyname = req.params.companyname;
        const results = await Data.findAll({
            where: {
                companyname: companyname
            }
        });
        res.json(results);
    } catch (err) {
        console.log(err);
    }
};
