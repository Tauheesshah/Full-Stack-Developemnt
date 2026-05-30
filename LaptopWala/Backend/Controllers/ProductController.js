import Product from "../models/ProductModel.js";

export const CreateProduct = async (req, res) => {
  try {

    const imageUrls = req.files.map((file) => file.path);
     const product = await Product.create({

      title: req.body.title,
      brand: req.body.brand,
      category: req.body.category,
      description: req.body.description,

      price: req.body.price,
      oldPrice: req.body.oldPrice,
      discount: req.body.discount,
      stock: req.body.stock,

      images: imageUrls,

      specifications: {

        model: req.body.model,
        processor: req.body.processor,
        ram: req.body.ram,
        storage: req.body.storage,
        display: req.body.display,
        graphics: req.body.graphics,
        operatingSystem: req.body.operatingSystem,
        battery: req.body.battery,
        ports: req.body.ports,
        connectivity: req.body.connectivity,
        camera: req.body.camera,
        audio: req.body.audio,
        adapter: req.body.adapter,
        weight: req.body.weight,
      },

      features: req.body.features.split(","),

      isFeatured: req.body.isFeatured,
      isLatest: req.body.isLatest,

    });

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const GetProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const GetSingleProduct = async (req, res) => {
  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return res.status(404).json({
        message: "Product Not Found",
      });
    }

    res.status(200).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};
// GET PRODUCTS BY BRAND

export const GetProductsByBrand =
async (req, res) => {

  try {

    const products =
      await Product.find({

        brand: {
          $regex: req.params.brand,
          $options: "i",
        },
      });

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

// GET PRODUCTS BY CATEGORY

export const GetProductsByCategory =
async (req, res) => {

  try {

    const products =
      await Product.find({

        category: {
          $regex:
            req.params.category,

          $options: "i",
        },
      });

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


