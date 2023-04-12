
import  mongoose, {Schema, Model, Document} from "mongoose"

export interface IUser extends Document{
    fullname: string;
    email: string;
    password: string;
}

const UserSchema: Schema<IUser> = new Schema({
    fullname:{type: String, unique:true},
    email:{type: String, unique:true},
    password:{type: String, require:true}
})

const User: Model<IUser> = mongoose.models?.User || mongoose.model<IUser>("User", UserSchema)

export default User;