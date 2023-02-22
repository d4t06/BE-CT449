## src > main.js
```js

const Contact = require("../models/Contact");

class contactController {
  async index(req, res) {
    try {
      const contacts = await Contact.find({});
      res.json(contacts);
    } catch (error) {
      res.status(500).json("loi server");
    }
  }

  addContact(req, res) {
    const params = req.body;
    const newContact = new Contact(params);

    newContact.save(function (err) {
      if (!err) res.json("add contact successfull");
      else res.status(500).json("loi server");
    });
  }

  async destroy(req, res) {
    try {
      await Contact.deleteMany();
      res.json("destroy successfull");
    } catch (error) {
      res.status(500).json("loi server");
    }
  }

  async favorite(req, res) {
    try {
      const contacts = await Contact.find({ favorite: true });
      res.json(contacts);
    } catch (error) {
      res.status(500).json("loi server");
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    
    try {
      const contacts = await Contact.findOne({ _id: id });
      res.json(contacts);
    } catch (error) {
      res.status(500).json("loi server");
    }
  }

  async updateOne(req, res) {
    const { id } = req.body;

    try {
      await Contact.updateOne({ _id: id });
      res.json("upate successfull");
    } catch (error) {
      res.status(500).json("loi server");
    }
  }

  async deleteOne(req, res) {
    const { id } = req.params;

    try {
      await Contact.deleteOne({ _id: id });
      res.json("delete successfull");
    } catch (error) {
      res.status(500).json("loi server");
    }
  }
}

module.exports = new contactController();





```