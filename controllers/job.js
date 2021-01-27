const Job = require("../models/job");


const create = async (req, res) => {
    const {
        firstName,
        lastName,
        PO,
        storeNumber,
        date,
        notes,
        items,
    } = req.body

    console.log('req.body: >>', req.body)

    const jobExists = await Job.findOne({
        PO: PO,
    });

    if (jobExists) {
        return res.status(401).json({
            error: "Job already exists.",
        });
    }

    try {
        const job = new Job({
            firstName: firstName,
            lastName: lastName,
            storeNumber: storeNumber,
            PO: PO,
            date: date,
            notes: notes,
            items: items
        })

        const newJob = await job.save()

        return res.status(200).json({
            job : newJob._id
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
};



module.exports = {
    create,

}