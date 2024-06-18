const Businfo = require("../model/businfo");

const getBusInfo = async (req, res) => {
  try {
    const entries = await Businfo.find();
    return res.status(200).json(entries);
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
};

const addBusInfo = async (req, res) => {
  try {
    const newData = req.body;
    await Businfo.create(newData);
    res.status(201).json({ message: "New data added successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
};

const deleteBusInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDocument = await Businfo.deleteOne({ _id: id });
    if (deletedDocument) {
      res.status(200).json({ message: "Expense Deleted" });
    } else {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
};

module.exports={getBusInfo,addBusInfo,deleteBusInfo}