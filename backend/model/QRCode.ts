import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUrl extends Document {
  originalUrl: string;
  qrcode: string;
  clickCount: number;
  createdAt: Date;
  userId: mongoose.Types.ObjectId;
}

const QrcodeShema: Schema<IUrl> = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  qrcode: { type: String, required: true, unique: true },
  clickCount: { type: Number, default: 0, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const Qrcode : Model<IUrl> = mongoose.model<IUrl>('Url', QrcodeShema);

export default Qrcode;
