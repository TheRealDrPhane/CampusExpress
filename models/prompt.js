import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    destination: {
      type: String,
      required: [true, "Destination is required."],
    },
    location: {
      type: String,
      required: [true, "Location is required."],
    },
    roomNumber: {
      type: String,
      required: [true, "RoomNumber is required."],
    },
    phoneNumber: {
      type: String,
      required: [true, "PhoneNumber is required."],
    },
    orderType: {
      type: String,
      required: [true, "OrderType is required."],
    },
    price: {
      type: String,
      required: [true, "Price is required."],
    },
    note: {
      type: String,
      required: [true, "Note is required."],
    },
    tag: {
      type: String,
      required: [true, "Tag is required."],
    },
  },
  {
    timestamps: true, // This option will add createdAt and updatedAt fields
  }
);

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
