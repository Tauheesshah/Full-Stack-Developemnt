import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    // BASIC INFO

    title: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    // PRICE

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
    },

    discount: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      required: true,
    },

    // PRODUCT IMAGES

    images: [
      {
        type: String,
      },
    ],

    // SPECIFICATIONS

    specifications: {
      model: String,

      processor: String,

      ram: String,

      storage: String,

      display: String,

      graphics: String,

      operatingSystem: String,

      battery: String,

      ports: String,

      connectivity: String,

      camera: String,

      audio: String,

      adapter: String,

      weight: String,
    },

    // EXTRA FEATURES

    features: [
      {
        type: String,
      },
    ],

    // RATINGS

    rating: {
      type: Number,
      default: 0,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    // STATUS

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isLatest: {
      type: Boolean,
      default: false,
    },

    // BRAND LOGO / THUMBNAIL

    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);