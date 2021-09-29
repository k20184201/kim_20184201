UserSchema.methods.serialize=function(){
    const data=this.toJSON();
    delete data.hashedPassword;
    return data;
};