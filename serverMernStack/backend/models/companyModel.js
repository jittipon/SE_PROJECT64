const mongoose = require('mongoose')

var companySchema = mongoose.Schema({
    companyName: {
        type: String,
       
    },
    businessType:{
        type: String,
        
    },
    address:{
        type: String,
      
    },
    phoneNumber:{
        type: String,
    
    }
    ,
    tel:{
        type: String,
      
    },
    time:{
        type:String
    }
},)

companySchema.pre('save', function(next) {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const date = dd + '/' + mm + '/' + yyyy;
    this.time = date
    next();
  });

module.exports = mongoose.model('companies', companySchema)