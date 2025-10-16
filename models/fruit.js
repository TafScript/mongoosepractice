const fruitScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    readyToEat: {
        type: Boolean,
        required: true
    }
})

const Fruit = mongoose.model()