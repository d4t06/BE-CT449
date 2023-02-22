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

  async addContact(req, res) {
    const params = req.body; //params = {name: "asb", favorite: abc}
    const newContact = new Contact(params);
    try {
      await newContact.save();
      res.json("add contact successful");
    } catch (error) {
      res.status(500).json("loi server");
    }
  }

  async destroy(req, res) {
    try {
      await Contact.deleteMany();
      res.json("destroy successful");
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
      res.json([contacts]);
    } catch (error) {
      res.status(500).json("loi server");
    }
  }

  async updateOne(req, res) {
    const { id } = req.params;
    const params = req.body;

    try {
      await Contact.updateOne({ _id: id }, params);
      res.json("update successful");
    } catch (error) {
      res.status(500).json("loi server");
    }
  }

  async deleteOne(req, res) {
    const { id } = req.params;

    try {
      await Contact.deleteOne({ _id: id });
      res.json("delete successful");
    } catch (error) {
      res.status(500).json("loi server");
    }
  }
}

module.exports = new contactController();
