const Company=require('../models/Company');
const Exp = require('../models/Experience');

exports.getCompanies = async (req,res) => {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
    try{
        const comps = await Company.find(searchOptions).sort({name:'asc'});
        const exp = new Exp()
        res.render('complist',{
            comps:comps,
            searchOptions: req.query,
            exp:exp,
            user:req.user
            
        });
    }
    catch{
        res.redirect('/');
    }
}

exports.addCompany = async (req,res) => {
    const exp = new Exp({
        name: req.body.name,
        branch: req.body.branch,
        year:req.body.year,
        company: req.body.company,
        exp:req.body.exp,
        intro:req.body.intro,
        img:req.file.filename
        
      })
      try{
        const newExp = await exp.save()
        
        if(1)
        {
          req.flash('success_msg','Experience is sent for approval !');
          res.redirect('/comps');
        }
        
      }
      catch{
            
        req.flash('error_msg','Please fill all fields ');    
        res.redirect('/comps');
        
      }
}

exports.getCompanyById = async (req,res) => {
    try {
        const company = await Company.findById(req.params.id)
        const exps = await Exp.find({ company: company.id }).sort({name:'asc'}).exec()
        res.render('explist', {
          company:company,
          expbycompany: exps,
          user:req.user
        })
        
      } catch {
        res.redirect('/')
      }
}