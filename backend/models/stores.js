const mongoose = require('mongoose');


const storeSchema = new mongoose.model({
    position: {
        type: [Number], 
        required: true,
      },
      icon: {
        type: String, 
        required: true,
      },
      store: {
        type: String,
        required: true,
      },
      medicines: {
        type: [String], 
        required: true,
      },
      contact: {
        type: String,
        required: true,
      },
})

const Store = mongoose.model("Store" , storeSchema);

module.export = Store;
