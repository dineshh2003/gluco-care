const Pharmacy = require('../models/stores');
 
const getStores = async(req, res) => {
    try {
        const stores  = await Pharmacy.find();
        res.json(stores)
        if(!stores){
            return res.status(404).json({ message: 'stores not found' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get stores' });
    }
}

module.exports = {getStores};