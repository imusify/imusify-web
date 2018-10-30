import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import About from '@/components/About.vue';

describe('About.vue', () => {
  it('renders About imusify title', () => {
    const wrapper = shallowMount(About);
    expect(wrapper.find('h1').text()).to.include('About imusify');
  });
});
