const {Schema, model} = require('mongoose');

const ProfessionalSchema = new Schema(
    {
        firstName:String,
        lastName:String,
        age:Number,
        weight:Number,
        height:Number,
        isRetired:Boolean,
        nationality:String,
        oscarNumber:Number,
        profession:String
    }
)

module.exports = model('Professional', ProfessionalSchema, 'professionals')