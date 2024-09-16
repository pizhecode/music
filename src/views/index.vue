<template>
  <div>
    <div ref="aplayerContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import APlayer from 'aplayer';
import 'aplayer/dist/APlayer.min.css';

const aplayerContainer = ref<HTMLElement | null>(null);

const loadMusicData = async () => {
  try {
    const response = await fetch('/music/music.json'); // 更新为 JSON 文件的实际路径
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to load music data:', error);
    return [];
  }
};

interface MusicItem {
  name: string;
  artist: string;
  url: string;
  cover: string;
  lrc?: string;
}

onMounted(async () => {
  if (aplayerContainer.value) {
    const musicData: MusicItem[] = await loadMusicData();
    new APlayer({
      container: aplayerContainer.value,
      listFolded: false,
      listMaxHeight: 90,
      lrcType: 3,
      audio: musicData.map(item => ({
        name: item.name,
        artist: item.artist,
        url: item.url,
        cover: item.cover,
        lrc: item.lrc,
        theme: '#ebd0c2'
      })),
    });
  }
});
</script>

<style lang="less" scoped>
/* 添加一些自定义样式，如果需要的话 */
</style>
