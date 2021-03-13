import * as React from "react";
import TestRenderer from 'react-test-renderer';
import ProfileStatusWithHooks from "./ProfileStatus";

describe('Profilestatus component', ()=>{
    test('status in the state', ()=> {
        const mockCallback = jest.fn();
        const component = TestRenderer.create(<ProfileStatusWithHooks updateStatus={mockCallback} status={'allah'}/>);
        const testInstance = component.root;
        expect(testInstance.findAllByType('span').length).toBe(1);
        expect(testInstance.findByType('span').children[0]).toBe("allah");
    })
})