import { tsMethodSignature } from "../../../../../../../AppData/Local/Microsoft/TypeScript/4.4/node_modules/@babel/types/lib/index";

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    }
  );
  return token;
};
