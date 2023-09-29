const path = require("path");
const Data = require("../models/companydata");

exports.getIndex = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}

exports.postdata = (req, res, next) => {
    const companyname = req.body.companyNamevalue;
    const pros = req.body.prosvalue;
    const cons = req.body.cons;
    const rating = parseInt(req.body.rating);
    Data.findAll({
        where: {
            companyname: companyname
        }
    }).then(results => {
        let totalRating = 0;
        let numberOfRatings = 0;
        results.forEach(result => {
            totalRating += result.rating;
            numberOfRatings++;
        });
        totalRating += rating;
        numberOfRatings++;
        const averageRating = totalRating / numberOfRatings;
        Data.create({
            companyname: companyname,
            pros: pros,
            cons: cons,
            rating: rating,
            overallrating: averageRating
        }).then(result => {
            res.redirect('/');
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });
};
exports.getData = (req, res, next) => {
    const companyname = req.params.companyname;
    Data.findAll({
        where: {
            companyname: companyname
        }
    }).then(results => {
        res.json(results);
    }).catch(err => {
        console.log(err);
    });
};
