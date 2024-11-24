let items = [];

exports.getAllItems = (req, res) => {
    res.status(200).json(items);
};


exports.getItemById = (req, res) => {
    const { id } = req.params;
    const item = items.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({ message: 'Item not found.' });
    }

    res.status(200).json(item);
};


exports.createItem = (req, res) => {
    const { id, title, price, category } = req.body;

    if (!id || !title || !price || !category) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    items.push({ id, title, price, category });
    res.status(201).json({ message: 'Item created successfully', item: { id, title, price, category } });
};


exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { title, price, category } = req.body;

    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found.' });
    }

    items[itemIndex] = { id, title, price, category };
    res.status(200).json({ message: 'Item updated successfully', item: items[itemIndex] });
};


exports.deleteItem = (req, res) => {
    const { id } = req.params;

    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found.' });
    }

    const deletedItem = items.splice(itemIndex, 1);
    res.status(200).json({ message: 'Item deleted successfully', item: deletedItem[0] });
};
