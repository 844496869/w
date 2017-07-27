/*
 * @Author: yong.wang 
 * @Date: 2017-07-27 20:26:12 
 * @Last Modified by: yong.wang
 * @Last Modified time: 2017-07-27 20:32:19
 */
module.exports = {
    clone: function(object) {
        return JSON.parse(JSON.stringify(object));
    }
};