module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      nome: String,
      sobrenome: String,
      telefone: String,
      cpf: {
        type: String,
        unique: true // cpf must be unique
      }
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Customer = mongoose.model("customer", schema);
  return Customer;
};
