import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

export const expectShallow = (component: React.ReactElement<any>): jest.Matchers<void> => {
    return expect(toJson(enzyme.shallow(component)));
};

export const expectMounted = (component: React.ReactElement<any>): jest.Matchers<void> => {
    return expect(toJson(enzyme.mount(component)));
};

export default expectShallow;
