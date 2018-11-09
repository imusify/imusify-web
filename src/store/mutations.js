export default {
  toggleModal(state, isOpen) {
    state.isModalOpen = isOpen;
    document.body.className = isOpen ? 'modal-open' : '';
  },

  isTrackPlaying(state, isPlaying) {
    state.isTrackPlaying = isPlaying;
  },
};
