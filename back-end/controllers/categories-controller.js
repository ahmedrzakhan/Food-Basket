const Categories = require("./../models/Categories");

const getProductsByCity = async (req, res) => {
  const { city } = req.query;

  const items = await Categories.find(
    {
      "cities.city": city,
    }
    // {
    //   $filter: {
    //     input: "$cities",
    //     as: "city",
    //     cond: { $eq: ["$$city", city] },
    //   },
    // }
  );

  res.send(items);
};

const getByCategory = async (req, res) => {
  const { category } = req.query;
  console.log(category);
  const items = await Categories.find({
    category: category,
  });

  res.send(items);
};

const getBySubCategory = async (req, res) => {
  const { sub_category } = req.query;

  const items = await Categories.find({
    sub_category: sub_category,
  });

  res.send(items);
};

const getProductItem = async (req, res) => {
  const { _id } = req.query;
  const item = await Categories.findById(_id);
  res.send(item);
};

module.exports = {
  getProductsByCity,
  getByCategory,
  getBySubCategory,
  getProductItem,
};
