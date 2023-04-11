import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUrl extends Document {
  originalUrl: string;
  shortUrl: string;
  clickCount: number;
  createdAt: Date;
  userId: mongoose.Types.ObjectId;
}

const urlSchema: Schema<IUrl> = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  clickCount: { type: Number, default: 0, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const Url: Model<IUrl> = mongoose.model<IUrl>('Url', urlSchema);

export default Url;
