import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import SocialIcons from '@/components/SocialIcons.vue';
import Icon from '@/components/Icon.vue';

describe('SocialIcons.vue', () => {
  it('contains 3 icons', () => {
    const wrapper = shallowMount(SocialIcons);
    expect(wrapper.findAll(Icon).length).to.equal(3);
  });
  it('first icon name is facebook', () => {
    const wrapper = shallowMount(SocialIcons);
    const icon = wrapper.findAll(Icon).at(0);
    expect(icon.props().name).to.equal('facebook');
  });
  it('second icon name is linkedin', () => {
    const wrapper = shallowMount(SocialIcons);
    const icon = wrapper.findAll(Icon).at(1);
    expect(icon.props().name).to.equal('linkedin');
  });
  it('third icon name is soundcloud', () => {
    const wrapper = shallowMount(SocialIcons);
    const icon = wrapper.findAll(Icon).at(2);
    expect(icon.props().name).to.equal('soundcloud');
  });
});
