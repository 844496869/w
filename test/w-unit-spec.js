/*
 * @Author: yong.wang 
 * @Date: 2017-07-27 20:38:13 
 * @Last Modified by: yong.wang
 * @Last Modified time: 2017-07-27 21:06:17
 */
var w = require("../index");
var expect = require("chai").expect;
var _ = require("lodash");

describe("test clone in w ", function() {
    it('Test clone Array', function() {
        var originArray = [1, 2, 3];
        var copyArray = w.clone(originArray);
        copyArray = [2, 3, 4];
        expect(_.isEqual(originArray, [1, 2, 3])).to.be.ok;
    });
    it('test clone Object', function() {
        var originObject = { "key": "value" };

        var copyObject = w.clone(originObject);
        copyObject = { "key": "value1" };
        expect(_.isEqual(originObject, { "key": "value" })).to.be.ok;
    });
})