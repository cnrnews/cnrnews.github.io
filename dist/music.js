const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "一百万个可能",
        artist: 'Christine Welch',
        url: 'http://sc1.111ttt.cn/2016/5/01/14/194140050065.mp3',
        cover: 'http://imge.kugou.com/stdmusic/20150715/20150715222012914700.jpg',
      },
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