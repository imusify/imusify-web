import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import AudioPlayer from '@/components/AudioPlayer.vue';
import Icon from '@/components/Icon.vue';
import ProgressBar from '@/components/ProgressBar.vue';

describe.skip('AudioPlayer.vue', () => {
  const track = {
    id: 20,
    title: 'Be free !',
    slug: 'be-free',
    description: 'Very cool song, check it out!',
    owner: {
      id: 13,
      username: 'TadejKrevh1',
      first_name: 'Tadej',
      last_name: 'Krevh',
      image: 'profile.jpg',
      image_url: 'https://imusify-prod.s3.amazonaws.com/profile.jpg',
      date_created: '2018-02-17 12:31:57',
      date_modified: '2018-03-05T07:34:44+0000',
      bio: 'Check out my profile at https://angel.co/tadej-krevh',
      date_of_birth: null,
      imu_balance: 400000000,
    },
    categories: [],
    tags: [],
    channels: [48],
    vote_up_count: 8,
    vote_down_count: 2,
    attachment: 'free.mp3',
    attachment_url: 'https://imusify-prod.s3.amazonaws.com/free.mp3',
    date_created: '2018-02-26 18:51:42',
    attachment_streaming_url: 'rtmp://s3s4uaqsuwvcsf.cloudfront.net/cfx/st/free.mp3',
    streaming_url: 'rtmp://s3s4uaqsuwvcsf.cloudfront.net/cfx/st',
    voted_up: 0,
    voted_down: 0,
  };

  beforeEach(() => {
    global.videojs = { my: 'mock', object: 'here', player: { play: () => {} } };
  });

  afterEach(() => {
    delete global.videojs; // Cleanup
  });

  it.skip('hide audio player if no track is selected', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {},
    });
    expect(wrapper.findAll('div').length).to.equal(0);
  });
  it.only('show audio player if track is selected', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {
        track,
      },
    });
    expect(wrapper.findAll('div').length).to.equal(4);
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
  it('time progress bar width is nothing', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {
        track,
      },
    });
    expect(wrapper.find('.controls').findAll(ProgressBar).at(0).props().width).to.equal('');
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
  it.skip('renders track background cover', () => {
    const wrapper = shallowMount(AudioPlayer, {
      propsData: {
        track,
      },
    });
    expect(wrapper.find('.cover').element.style.backgroundImage).to.equal(`url(${(track.coverUrl)})`);
  });
});
