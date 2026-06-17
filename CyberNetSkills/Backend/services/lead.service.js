import Lead from "../models/Lead.js";

const createLead = async (
  data
) => {
  return await Lead.create(data);
};

const getLeads = async () => {
  return await Lead.find().sort({
    createdAt: -1,
  });
};

export default {
  createLead,
  getLeads,
};