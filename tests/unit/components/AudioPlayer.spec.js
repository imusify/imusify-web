import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import AudioPlayer from '@/components/AudioPlayer.vue';
import Icon from '@/components/Icon.vue';
import ProgressBar from '@/components/ProgressBar.vue';

describe('AudioPlayer.vue', () => {
  const track = {
    id: 1, title: 'Track Listing 1', artist: 'Artist 1', coverUrl: '/artists/cover1.png',
  };
  it('hide audio player if no track is selected', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {},
    });
    expect(wrapper.findAll('div').length).to.equal(0);
  });
  it('show audio player if track is selected', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {
        track,
      },
    });
    expect(wrapper.findAll('div').length).to.equal(5);
  });
  it('shows 4 icons and 2 progress bars inside the controls div section', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {
        track,
      },
    });
    const controlDiv = wrapper.find('.controls');
    expect(controlDiv.findAll(Icon).length).to.equal(4);
    expect(controlDiv.findAll(ProgressBar).length).to.equal(2);
  });
  it('time progress bar width is 45%', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {
        track,
      },
    });
    expect(wrapper.find('.controls').findAll(ProgressBar).at(0).props().width).to.equal('45%');
  });
  it('volume progress bar width is 20%', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {
        track,
      },
    });
    expect(wrapper.find('.controls').findAll(ProgressBar).at(1).props().width).to.equal('20%');
  });
  it('track title is rendered in a h3', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {
        track,
      },
    });
    expect(wrapper.find('aside').find('h3').text()).to.equal(track.title);
  });
  it('artist is rendered in a h4', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {
        track,
      },
    });
    expect(wrapper.find('aside').find('h4').text()).to.equal(track.artist);
  });
  it('renders track background cover', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {
        track,
      },
    });
    expect(wrapper.find('.cover').element.style.backgroundImage).to.equal(`url(${(track.coverUrl)})`);
  });
});
