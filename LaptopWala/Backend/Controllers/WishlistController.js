import Wishlist from "../Models/WishListModel.js";


// ADD TO WISHLIST

export const AddToWishlist = async (req, res) => {

  try {

    const { productId } = req.body;

    const userId = req.user._id;

    let wishlist = await Wishlist.findOne({
      userId,
    });

    // CREATE IF NOT EXISTS

    if (!wishlist) {

      wishlist = await Wishlist.create({
        userId,
        products: [productId],
      });

      return res.status(201).json(wishlist);
    }

    // CHECK DUPLICATE

    const alreadyExists =
      wishlist.products.includes(productId);

    if (alreadyExists) {

      return res.status(400).json({
        message: "Already In Wishlist",
      });
    }

    wishlist.products.push(productId);

    await wishlist.save();

    res.status(200).json(wishlist);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET WISHLIST

export const GetWishlist = async (req, res) => {

  try {

    const wishlist = await Wishlist.findOne({
      userId: req.user._id,
    }).populate("products");

    res.status(200).json(wishlist);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};


// REMOVE FROM WISHLIST

export const RemoveWishlist = async (
  req,
  res
) => {

  try {

    const wishlist = await Wishlist.findOne({
      userId: req.user._id,
    });

    wishlist.products =
      wishlist.products.filter(
        (item) =>
          item.toString() !== req.params.id
      );

    await wishlist.save();

    res.status(200).json({
      message: "Removed",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};