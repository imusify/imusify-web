import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Legal from '@/components/Legal.vue';

describe('Legal.vue', () => {
  it('renders Legal title', () => {
    const wrapper = shallowMount(Legal);
    expect(wrapper.find('h1').text()).to.include('Legal');
  });
});
