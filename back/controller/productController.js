const Product = require("../model/product");


// Create a Product
exports.postProduct = async (req, res) => {
  console.log(res.data)
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a Product by ID
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send();
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Update a Product
exports.updateProduct = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'description', 'price', 'category', 'images', 'isActive'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send();
    }

    updates.forEach((update) => (product[update] = req.body[update]));
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).send();
    }

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};


