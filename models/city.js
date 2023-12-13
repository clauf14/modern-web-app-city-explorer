import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    population: {
        type:Number,
        required: false
    },
    country: {
        type:String,
        required: true
    },
    elevation: {
        type:Number,
        required: true
    },
    cityId: {
        type: Number,
        required: true
    }
})

let City;

try {
    City = mongoose.model('City');
  } catch (e) {
    City = mongoose.model('City', citySchema);
  }

export default City;