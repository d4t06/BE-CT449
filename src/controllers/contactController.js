const Contact = require ("../models/Contact")

class contactController {
  async index(req, res) {
    const contacts = await Contact.find({}).catch(err => {
      res.status(500).json("loi server")
    })
    res.json(contacts)
  }

  addContact(req, res) {
      const params = req.body;
      const newContact = new Contact(params);

      newContact.save(function (err) {
         if (!err) res.json("add contact successfull");
         else console.log(err);
      });
  }

  async destroy(req, res) {
    await Contact.deleteMany().catch(err => {
      res.status(500).json("loi server")
    })
    res.json("destroy successfull")
  }

  async favorite(req, res) {
    const contacts = await Contact.find({favorite: true}).catch(err => {
      res.status(500).json("loi server")
    })
    res.json(contacts)
  }

  async getOne(req, res) {
    const {id} = req.params

    const contacts = await Contact.findOne({_id: id}).catch(err => {
      res.status(500).json("loi server")
    })
    res.json(contacts)

  }

  async updateOne(req, res) {
    const {id} = req.params
    const params = req.body

    await Contact.updateOne(params).catch(err => {
      res.status(500).json("loi server")
    })
    res.json("upate successfull")
  }
  async deleteOne(req, res) {
    const {id} = req.params

    await Contact.deleteOne({_id: id}).catch(err => {
      res.status(500).json("loi server")
    })
    res.json("delete successfull")
  }
}

module.exports = new contactController();
