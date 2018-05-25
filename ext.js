var speechdata = new webkitSpeechRecognition();
var speak = function(text) {
speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
var zz;
speechdata.onresult = function(e) {zz = e.results[0][0].transcript;}
(function(ext) {
    // When Scratch closes, do this
    ext._shutdown = function() {
        // Nothing here at the moment...
    };
 
    // Tell Scratch if the extension is ready to do stuff
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}; // Status 1 = Red, Error // Status 1 = Yellow, Not Ready // Status 2 = Green, Ready
    };
 
    // Blocks to add to Scratch
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            ['w', 'get speech', 'gs'],
            ['w', 'say %s', 'hi', 'say'],
            ['r','Speech','s']
        ],
menus: {
txt: ['hi','bye','how are you?'],
superMath: ['radian sine', 'radian cosine', 'radian tangent', 'asin', 'atan', 'acos', 'power'],
geo: ['latitude','longitude']
}
    };
 
    // What blocks do go here
ext.gs = function() {
speechdata.start();
};
ext.say = function(a) {
speak(a);
};
ext.s = function() {
return zz;
};
    
    // Name of Scratch Extension goes here
    ScratchExtensions.register('speech', descriptor, ext); 
     // The name is 'Hello, World!''
})({});
