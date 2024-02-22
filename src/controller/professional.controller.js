const ProfessionalModel = require('../models/professional');


function getOneAll(req, res){
    let emptyQuery = {};
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    if(firstName && lastName){
        ProfessionalModel.find({firstName: firstName, lastName:lastName})
        .then((professional) =>{
            console.log(req.query.firstName);
            console.log(professional);
            res.send(professional)
        })
        .catch((err) =>{
            console.log(err);
            process.exit(-1);
        })
    } else if (emptyQuery){
        ProfessionalModel.find(emptyQuery)
        .then((professional) =>{
            console.log(professional);
            res.send(professional)
        })
        .catch((err) =>{
            console.log(err);
            process.exit(-1);
        })
    }
}

function addOne(req, res){
    console.log(req.body);
    let professional = new ProfessionalModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        weight:req.body.weight,
        isRetired:req.body.isRetired,
        nationality:req.body.nationality,
        oscarNumber: req.body.oscarNumber,
        profession: req.body.profession
    })
    professional.save()
    .then((professional)=>{
        console.log('Dato guardado correctamente');
        console.log(professional);
        res.send(professional);
    })
    .catch((err)=>{
        console.log(err)
    })
}

function updateOne(req, res){
    console.log(req.body);

    ProfessionalModel.findOneAndUpdate(
        {
        firstName:req.body.firstName,
        },
        {$set: {lastName: req.body.lastName,
                age: req.body.age,
                height: req.body.height,
                isRetired: req.body.isRetired,
                nationality: req.body.nationality,
                oscarNumber: req.body.oscarNumber,
                profession: req.body.profession}
        }
        )
    .then((professional)=>{
        console.log('Dato acturalizado correctamente')
        res.send(professional);
    })
    .catch((err)=>{
        console.log(err);
    })
}

function deleteOne(req, res){
    console.log(req.body);
        ProfessionalModel.deleteOne(
            {firstName:req.body.firstName})
        .then((professional)=>{
            console.log('Foto eliminado correctamente');
            res.send(professional);
        })
        .catch((err)=>{
            console.log(err);
        })
    } 


module.exports = {
    getOneAll,
    addOne,
    updateOne,
    deleteOne
}