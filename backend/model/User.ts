
import  mongoose, {Schema, Model, Document} from "mongoose"

interface IUser extends Document{
    email: string;
    password: string;
}

const UserSchema: Schema<IUser> = new Schema({
    email:{type: String, unique:true},
    password:{type: String, require:true}
})

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema)

export default User;