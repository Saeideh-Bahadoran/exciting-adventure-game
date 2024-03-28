function isValidPlace(newItem, prevItem) {
    // item : {
    //     x: Number,
    //     y: Number,
    //     w: Number,
    //     h: number
    // }
    const TRESHOLD = 6; // in pixel

    if ((newItem.x > prevItem.x + prevItem.w + TRESHOLD) ||
        (newItem.y > prevItem.y + TRESHOLD) ||
        (newItem.x + newItem.w + TRESHOLD < prevItem.x) ||
        (newItem.y + newItem.h + TRESHOLD < prevItem.y))
        return true

    return false
}