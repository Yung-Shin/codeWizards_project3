const { Schema, model } = require("mongoose");

const rouletteSchema = new Schema({
    winningName: {
      type: String,
      required: true,
      trim: true,
    },
    winningChance: {
      type: Number,
      required: true,
      trim: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: true,
      },
});

const Roulette = model("Roulette", rouletteSchema);


module.exports = Roulette;