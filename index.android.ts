
module.exports = {
    navTabExists: function(){
        if (devlight && devlight.io && devlight.io.library && devlight.io.library.ntb) {
            console.log('Found devlight');
            return;
        }
        console.log('did not find devlight');
    }
};