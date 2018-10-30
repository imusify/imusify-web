import { expect } from 'chai';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import ArtistTrackToggler from '@/components/ArtistTrackToggler.vue';

describe('ArtistTrackToggler.vue', () => {
  it('shows artist and track buttons', () => {
    const buttonText1 = 'Artists';
    const buttonText2 = 'Tracks';
    const selected = 'artists';

    const wrapper = shallowMount(ArtistTrackToggler, {
      propsData: { selected },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    expect(wrapper.text()).to.include(buttonText1);
    expect(wrapper.text()).to.include(buttonText2);
  });
});
