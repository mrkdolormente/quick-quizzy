import { mount } from '@vue/test-utils';
import Modal from './Modal.vue';

describe('Modal', () => {
  it('renders properly', () => {
    const wrapper = mount(Modal, {});
    expect(wrapper.text()).toContain('Welcome to Modal');
  });
});
