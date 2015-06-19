'use strict';
var rootRequire = require('root-require');
var testRequire = rootRequire('tests/lib/testRequire');

var expect = require('chai').expect;
var jsdom = require('jsdom');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('HelloMessage.jsx', function () {
    var HelloMessage;

    beforeEach(function () {
        global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
        global.window = document.parentWindow;
        global.navigator = global.window.navigator;

        HelloMessage = testRequire('src/js/components/HelloMessage');
    });

    it('should be true', function () {
        expect(true).to.be.true;
    });

    it('should be equal to "Hello World"', function () {
        var renderedComponent = TestUtils.renderIntoDocument(
            <HelloMessage />
        );

        expect(renderedComponent.props).to.deep.equal({name: 'World'});
        expect(renderedComponent.getDOMNode().textContent).to.equal('Hello World');
    });

    it('should be equal to "Hello Stanley"', function () {
        var props = {
            name: 'Stanley'
        };
        var renderedComponent = TestUtils.renderIntoDocument(
            <HelloMessage {...props} />
        );

        expect(renderedComponent.props.name).to.equal(props.name);
        expect(renderedComponent.getDOMNode().textContent).to.equal('Hello Stanley');
    });
});
