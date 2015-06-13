import {parseAndGetStatement} from '../../../utils';
import {expect} from 'chai';

describe('VariableDeclaration', () => {
    it('should return correct type', () => {
        expect(parseAndGetStatement('var x;').type).to.equal('VariableDeclaration');
    });

    it('should accept var', () => {
        var statement = parseAndGetStatement('var x;');
        expect(statement.type).to.equal('VariableDeclaration');
        expect(statement.kind).to.equal('var');
    });

    it('should accept let', () => {
        var statement = parseAndGetStatement('let x;');
        expect(statement.type).to.equal('VariableDeclaration');
        expect(statement.kind).to.equal('let');
    });

    it('should accept const', () => {
        var statement = parseAndGetStatement('const x = 1;');
        expect(statement.type).to.equal('VariableDeclaration');
        expect(statement.kind).to.equal('const');
        expect(statement.declarations.length).to.equal(1);
    });

    it('should accept multiple variable declarators', () => {
        var statement = parseAndGetStatement('var x , y, z = 2 ;');
        expect(statement.type).to.equal('VariableDeclaration');
        expect(statement.kind).to.equal('var');
        expect(statement.declarations.length).to.equal(3);
    });

    it('should work without semicolon', () => {
        var statement = parseAndGetStatement('var x');
        expect(statement.type).to.equal('VariableDeclaration');
        expect(statement.kind).to.equal('var');
    });
});
