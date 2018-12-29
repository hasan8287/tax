const mongoose = require('mongoose');

const { Schema } = mongoose;

const Articles = new Schema({
  title: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  tag: [String],
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
});

module.exports = mongoose.model('articles', Articles);
