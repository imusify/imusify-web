import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Privacy from '@/components/Privacy.vue';

describe('Privacy.vue', () => {
  it('renders Privacy Policy title', () => {
    const wrapper = shallowMount(Privacy);
    expect(wrapper.find('h1').text()).to.include('Privacy Policy');
  });
});
