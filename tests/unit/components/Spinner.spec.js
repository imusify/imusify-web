import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import Spinner from '@/components/Spinner.vue';
import Icon from '@/components/Icon.vue';

describe('Spinner.vue', () => {
  it('renders Spinner Icon', () => {
    const wrapper = shallowMount(Spinner);
    const icon = wrapper.find(Icon).props().name;
    expect(icon).to.equal('spinner');
  });
});
