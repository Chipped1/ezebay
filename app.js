const request = require('superagent');

const chip = {};

module.exports = function(q, appid, callback) {
    chip.ebay(q, appid, callback)
};

chip.ebay = function(q, appid, callback) {
    var response = request.get(`http://open.api.ebay.com/shopping`);
    if (response) {
        request.get(`http://open.api.ebay.com/shopping`)
        .query({'version': 713})
        .query({'callname': 'FindItems'})
        .query({'appid': appid})
        .query({'ResponseEncodingType': 'JSON'})
        .query({'QueryKeywords': q})
        .end(function(err, res) {
            if (err) return callback(`An error has occured: ${err}`);
            var parsedJSON = JSON.parse(res.text);
            var item = parsedJSON.Item;

            // Invalid argument catches/errors
            if (parsedJSON.Errors) return callback('Invalid Application ID/key.');
            if (!item) return callback('An error has occured. Possibly invalid search query.');

            // Initiating variables
            item = item[0];
            const name = item.Title;
            const price = item.ConvertedCurrentPrice.Value;
            const image = item.GalleryURL;
            const category = item.PrimaryCategoryName;
            const url = item.ViewItemURLForNaturalSearch;
            const status = item.ListingStatus;
            const id = item.ItemID;
            const categoryID = item.PrimaryCategoryID;
            const searchURL = parsedJSON.ItemSearchURL;

            // Output
            const result = {
            'name': name,
            'price': price,
            'image': image,
            'category': category,
            'url': url,
            'status': status,
            'id': id,
            'categoryId': categoryID,
            'searchURL': searchURL
            };
            
            return callback(result);
        })
    }
}