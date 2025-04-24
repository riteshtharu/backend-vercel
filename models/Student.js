import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  photo: { type: String, default: "" },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  age: { type: Number, required: true, min: 16, max: 99 },
  course: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Student = mongoose.model("Student", StudentSchema);

export default Student;
