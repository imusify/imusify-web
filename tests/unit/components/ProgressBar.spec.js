import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import ProgressBar from '@/components/ProgressBar.vue';

describe('ProgressBar', () => {
  let wrapper;
  let componentInstance;
  beforeEach(() => {
    wrapper = shallowMount(ProgressBar, {
      propsData: {
        width: '45%',
        percent: 10,
      },
    });
    componentInstance = wrapper.vm;
  });
  it('.progress width is 45%', () => {
    const width = '45%';
    expect(wrapper.find('.progress').element.style.width).to.equal(width);
  });
  it('.elapsed is rendered', () => {
    expect(wrapper.find('.elapsed').element.style.width).to.equal(componentInstance.completed);
  });
  it('.remainder is rendered', () => {
    expect(wrapper.find('.remainder').element.style.width).to.equal(componentInstance.remainder);
  });
});
