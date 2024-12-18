import mongoose from "mongoose";

const ecocorpSchema = mongoose.Schema(
  {
    email_address: {
      type: String,
      required: true,
    },
    org_name: {
      type: String,
      required: true,
    },
    no_of_employees: {
      type: Number,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    headquarters: {
      type: String,
      required: true,
    },
    website_url: {
      type: String,
      required: true,
    },
    full_name: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    current_initiative: {
      type: String,
      required: true,
    },
    goals: {
      type: String,
      required: true,
    },
    why_join: {
      type: String,
      required: true,
    },
    expectations: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default ecocorpSchema;
