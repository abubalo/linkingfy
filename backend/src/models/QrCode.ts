import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IQrCode extends Document {
  originalUrl: string;
  qrcode: string;
  openCount: number;
  createdAt: Date;
  userId: mongoose.Types.ObjectId;
}

const QrcodeShema: Schema<IQrCode> = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  qrcode: { type: String, required: true, unique: true },
  openCount: { type: Number, default: 0, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const Qrcode : Model<IQrCode> = mongoose.model<IQrCode>('QrCode', QrcodeShema);

export default Qrcode;
