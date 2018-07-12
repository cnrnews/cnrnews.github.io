const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: 'All Right',
        artist: '金艺林',
        url: 'https://f1.w.hjfile.cn/doc/201306/all%20right020665424.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20130625/20130625203104423771.jpg',
      },
      {
        name: '懂得又如何',
        artist: '金艺林',
        url: 'https://f1.w.hjfile.cn/doc/201306/dongdeyouruhe020676161.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20150720/20150720104058467780.jpg',
      }
    ]
});