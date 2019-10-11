import { shallowMount } from '@vue/test-utils';
import Watch from '@/views/Watch.vue';

describe('Watch.vue', () => {
  it('watch name class should exist', () => {
    const watch = {};
    const wrapper = shallowMount(Watch, {
      propsData: { watch },
    });
    expect(wrapper.find('h3').contains('.watch__name')).toBe(true);
  });

  it('click on remove should emit a event', () => {

    const watch = {};
    const $emit = (event, ...args) => { events[event] = [...args] }
    const wrapper = shallowMount(Watch, {
      propsData: { watch },
    });
    
    const removeBtn = wrapper.find('a.watch__remove');
    removeBtn.trigger('click');
    expect(wrapper.vm.removeWatch.call({$emit}));

  });
});


