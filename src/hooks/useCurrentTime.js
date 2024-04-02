// useDynamicTime.js
import { ref, onMounted, onUnmounted, computed } from 'vue';
let option = {
	timeStyle:'medium',
    hour12: false
}
export default function useCurrentTime(formatOptions = option) {
  const currentTime = ref(new Date());

  let intervalId;

  const updateCurrentTime = () => {
    currentTime.value = new Date();
  };

  const startTimer = () => {
    intervalId = setInterval(updateCurrentTime, 1000); // 每秒更新一次
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  onMounted(startTimer);
  onUnmounted(stopTimer);

  const formattedTime = computed(() => {
    return currentTime.value.toLocaleString([], formatOptions);
  });

  return {
    formattedTime,
  };
}
