// import { effects } from 'redux-saga';

// const {call, put, select} = effects;

export default {

  namespace: 'example',

  state: {
    shuzi: 0,
    Timer: undefined,
    arr: 'bounce,flash,pulse,rubberBand,shake,headShake,swing,tada,wobble,jello,bounceIn,bounceInDown,bounceInLeft,bounceInRight,bounceInUp,bounceOut,bounceOutDown,bounceOutLeft,bounceOutRight,bounceOutUp,fadeIn,fadeInDown,fadeInDownBig,fadeInLeft,fadeInLeftBig,fadeInRight,fadeInRightBig,fadeInUp,fadeInUpBig,fadeOut,fadeOutDown,fadeOutDownBig,fadeOutLeft,fadeOutLeftBig,fadeOutRight,fadeOutRightBig,fadeOutUp,fadeOutUpBig,flipInX,flipInY,flipOutX,flipOutY,lightSpeedIn,lightSpeedOut,rotateIn,rotateInDownLeft,rotateInDownRight,rotateInUpLeft,rotateInUpRight,rotateOut,rotateOutDownLeft,rotateOutDownRight,rotateOutUpLeft,rotateOutUpRight,hinge,jackInTheBox,rollIn,rollOut,zoomIn,zoomInDown,zoomInLeft,zoomInRight,zoomInUp,zoomOut,zoomOutDown,zoomOutLeft,zoomOutRight,zoomOutUp,slideInDown,slideInLeft,slideInRight,slideInUp,slideOutDown,slideOutLeft,slideOutRight,slideOutUp'.split(','),
    lrc: '{"sgc":false,"sfy":false,"qfy":false,"lyricUser":{"id":30987293,"status":0,"demand":0,"userid":259758115,"nickname":"云之彼端你我约定的地方","uptime":1487136918809},"lrc":{"version":3,"lyric":"[by:却连一句我爱你都不能说出口]\n[ti:讲真的]\n[ar:曾惜]\n[al:不要你为难]\n[by:冰城离殇]\n[00:18.39]今夜特别漫长\n[00:21.46]有个号码一直被存放\n[00:25.68]源自某种倔强\n[00:30.07]不舍删去又不敢想\n[00:33.26]明明对你念念不忘\n[00:37.41]思前想后愈发紧张\n[00:41.38]无法深藏\n[00:43.75]爱没爱过想听你讲\n[00:48.61]讲真的\n[00:51.38]会不会是我 被鬼迷心窍了\n[00:54.96]敷衍了太多 我怎么不难过\n[00:58.95]要你亲口说 别只剩沉默\n[01:03.23]或许你早就回答了我\n[01:06.89]讲真的\n[01:08.24]想得不可得 是最难割舍的\n[01:11.84]各自好好过 也好过一直拖\n[01:15.90]自作多情了 好吧我认了\n[01:19.81]至少能换来释怀洒脱\n[01:23.25]没丢失掉自我\n[01:42.10]今夜特别漫长\n[01:44.95]有个号码一直被存放\n[01:49.69]源自某种倔强\n[01:53.55]不舍删去又不敢想\n[01:57.54]明明对你念念不忘\n[02:01.18]思前想后愈发紧张\n[02:05.94]无法深藏\n[02:08.10]爱没爱过想听你讲\n[02:13.54]讲真的\n[02:15.34]会不会是我 被鬼迷心窍了\n[02:19.10]敷衍了太多 我怎么不难过\n[02:23.59]要你亲口说 别只剩沉默\n[02:27.60]或许你早就回答了我\n[02:30.74]讲真的\n[02:32.22]想得不可得 是最难割舍的\n[02:35.80]各自好好过 也好过一直拖\n[02:40.22]自作多情了 好吧我认了\n[02:44.66]至少能换来释怀洒脱\n[02:47.60]没丢失掉自我\n[03:04.18]讲真的\n[03:05.84]会不会是我 被鬼迷心窍了\n[03:09.74]敷衍了太多 我怎么不难过\n[03:14.13]要你亲口说 别只剩沉默\n[03:18.16]或许你早就回答了我\n[03:21.41]讲真的\n[03:22.00]想得不可得 是最难割舍的\n[03:26.48]各自好好过 也好过一直拖\n[03:30.76]自作多情了 好吧我认了\n[03:35.09]至少能换来释怀洒脱\n[03:38.06]没丢失掉自我\n"},"tlyric":{"version":0,"lyric":null},"code":200}',
    audioSrc: 'http://www.aocheng.group/speakReally.mp3',
    // lrc: `{"sgc":true,"sfy":false,"qfy":false,"transUser":{"id":3950239,"status":99,"demand":1,"userid":29471292,"nickname":"追逐风筝的疯子","uptime":1494991730595},"lrc":{"version":9,"lyric":"[00:02.700]           Goodbye to you, my trusted friend.\n[00:06.640] We've known each other since we were nine or ten.\n[00:11.530]Together we've climbed hills and trees,\n[00:16.219]learned of love and ABC's,\n[00:18.500] skinned our hearts and skinned our knees.\n[00:20.810]Goodbye, my friend.\n[00:21.880]It's hard to die\n[00:25.490]when all the birds are singing in the sky.\n[00:30.200]Now that spring is in the air\n[00:35.400]pretty boys are everywhere.\n[00:37.530] Think of me and I'll be there.\n[00:44.150]   Goodbye, Papa, please pray for me.\n[00:48.990] I was the black sheep of the family.\n[00:53.560]You tried to teach me right from wrong.\n[00:58.270] Too much wine and too much song.\n[01:00.710] Wonder how I got along.\n[01:02.940] Goodbye, papa.\n[01:04.200]It's hard to die when all the birds are singing in the sky.\n[01:12.250]Now that the spring is in the air,\n[01:17.500]Little children everywhere.\n[01:19.539] When you see them, I'll be there.\n[01:25.539]\n[01:25.539]\n[01:31.440]   Goodbye, Michelle, my precious one.\n[01:35.900]You gave me love and helped me find the sun.\n[01:40.570] And every time that I was down,\n[01:45.539] you would always come around,\n[01:47.640]and get my feet back on the ground.\n[01:50.330] Goodbye, Michelle.\n[01:51.270]It's hard to die when all the birds are singing in the sky\n[01:59.200]Now that spring is in the air,\n[02:04.380]with the flowers everywhere,\n[02:06.420] I wish that we could both be there.\n[02:09.110]   We had joy, we had fun,\n[02:11.110] we had seasons in the sun,\n[02:13.770]but the hills that we climbed were just seasons out of time.\n[02:18.290]We had joy, we had fun,we had seasons in the sun,\n[02:22.770] but the stars we could reach were just starfish on the beach.\n[02:29.780]\n[02:30.200]\n"},"tlyric":{"version":2,"lyric":"[by:猪猪嘟嘟love]\n[00:02.700]再见了 我的挚友\n[00:06.640]我们从十岁左右就认识了\n[00:11.530]我们一起爬山爬树\n[00:16.219]一起学习爱与字母\n[00:18.500]共同经历成长的伤痛\n[00:20.810]再见了 我的朋友\n[00:21.880]离开你真的很难\n[00:25.490]当所有的鸟儿都在天空尽情歌唱\n[00:30.200]所有的花儿都盛开烂漫\n[00:35.400]美丽的女孩儿随处可见\n[00:37.530]想想我 我就要去那里了\n[00:44.150]再见了 爸爸 请为我祈祷吧\n[00:48.990]我像是家中的害群之马一般\n[00:53.560]你试着教我分清是非\n[00:58.270]我却沉迷于酒乐\n[01:00.710]真不知我是如何过来的\n[01:02.940]再见了 爸爸\n[01:04.200]当所有的鸟儿都在天空尽情歌唱 离开你真的很难\n[01:12.250]闻到了初春的气息\n[01:17.500]到处都会是孩子的身影\n[01:19.539]当你看着他们 我就会在那里\n[01:31.440]再见了 Michelle 我的小宝贝\n[01:35.900]你给予了我爱和阳光\n[01:40.570]每当我沮丧的时候\n[01:45.539]你总是陪在我身边\n[01:47.640]让我重拾信心\n[01:50.330]再见了 Michelle\n[01:51.270]当所有的鸟儿都在天空尽情歌唱 离开你真的很难\n[01:59.200]闻到了初春的气息\n[02:04.380]所有的花儿都盛开烂漫\n[02:06.420]我希望我们能一起享受春光\n[02:09.110]我们曾有过欢声笑语\n[02:11.110]我们曾一起度过阳光四季\n[02:13.770]但我们一起爬山的美好时光 都已一去不返\n[02:18.290]我们曾有过欢声笑语 我们曾一起度过阳光四季\n[02:22.770]但我们所接触的星辰 根本就微不足道"},"code":200}`,
    // audioSrc: 'http://www.aocheng.group/Seasons in the Sun.mp3',
    lrcContent: [],
    lrcTime: [],
    a: null,
    txt: '点击开始',
    currentSong: undefined,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({
        type: 'changeSong',
        payload: {
          song: 'Seasons',
          cb: () => {
            dispatch({
              type: 'clearTime',
            });
          },
          firstC: true,
        },
      });
    },
  },

  effects: {
    *fetch({ payload }, {call, put, select}) {  // eslint-disable-line
      let { shuzi } = yield select(state => state.example);
      const mp3Div = document.getElementById('audioMp3');// eslint-disable-line
      shuzi = mp3Div ? Math.round(mp3Div.currentTime) : 0;
      yield put({
        type: 'save',
        payload: {
          shuzi,
        },
      });
    },
    *clearTime({ payload }, {call, put, select}) { // eslint-disable-line
      const { Timer } = yield select(state => state.example);
      clearTimeout(Timer);
      // yield put({ Timer: undefined });
    },
    *lrcHandler({ payload }, {call, put, select}) { // eslint-disable-line
      const { song, cb, firstC } = payload;
      let lrc = '';
      let audioSrc = '';
      let newCurrentSong = '';
      if (song === 'really') {
        lrc = '{"sgc":false,"sfy":false,"qfy":false,"lyricUser":{"id":30987293,"status":0,"demand":0,"userid":259758115,"nickname":"云之彼端你我约定的地方","uptime":1487136918809},"lrc":{"version":3,"lyric":"[by:却连一句我爱你都不能说出口]\n[ti:讲真的]\n[ar:曾惜]\n[al:不要你为难]\n[by:冰城离殇]\n[00:18.39]今夜特别漫长\n[00:21.46]有个号码一直被存放\n[00:25.68]源自某种倔强\n[00:30.07]不舍删去又不敢想\n[00:33.26]明明对你念念不忘\n[00:37.41]思前想后愈发紧张\n[00:41.38]无法深藏\n[00:43.75]爱没爱过想听你讲\n[00:48.61]讲真的\n[00:51.38]会不会是我 被鬼迷心窍了\n[00:54.96]敷衍了太多 我怎么不难过\n[00:58.95]要你亲口说 别只剩沉默\n[01:03.23]或许你早就回答了我\n[01:06.89]讲真的\n[01:08.24]想得不可得 是最难割舍的\n[01:11.84]各自好好过 也好过一直拖\n[01:15.90]自作多情了 好吧我认了\n[01:19.81]至少能换来释怀洒脱\n[01:23.25]没丢失掉自我\n[01:42.10]今夜特别漫长\n[01:44.95]有个号码一直被存放\n[01:49.69]源自某种倔强\n[01:53.55]不舍删去又不敢想\n[01:57.54]明明对你念念不忘\n[02:01.18]思前想后愈发紧张\n[02:05.94]无法深藏\n[02:08.10]爱没爱过想听你讲\n[02:13.54]讲真的\n[02:15.34]会不会是我 被鬼迷心窍了\n[02:19.10]敷衍了太多 我怎么不难过\n[02:23.59]要你亲口说 别只剩沉默\n[02:27.60]或许你早就回答了我\n[02:30.74]讲真的\n[02:32.22]想得不可得 是最难割舍的\n[02:35.80]各自好好过 也好过一直拖\n[02:40.22]自作多情了 好吧我认了\n[02:44.66]至少能换来释怀洒脱\n[02:47.60]没丢失掉自我\n[03:04.18]讲真的\n[03:05.84]会不会是我 被鬼迷心窍了\n[03:09.74]敷衍了太多 我怎么不难过\n[03:14.13]要你亲口说 别只剩沉默\n[03:18.16]或许你早就回答了我\n[03:21.41]讲真的\n[03:22.00]想得不可得 是最难割舍的\n[03:26.48]各自好好过 也好过一直拖\n[03:30.76]自作多情了 好吧我认了\n[03:35.09]至少能换来释怀洒脱\n[03:38.06]没丢失掉自我\n"},"tlyric":{"version":0,"lyric":null},"code":200}';
        audioSrc = 'http://www.aocheng.group/speakReally.mp3';
        newCurrentSong = '讲真的';
      } else {
        audioSrc = 'http://www.aocheng.group/Seasons in the Sun.mp3';
        lrc = `{"sgc":true,"sfy":false,"qfy":false,"transUser":{"id":3950239,"status":99,"demand":1,"userid":29471292,"nickname":"追逐风筝的疯子","uptime":1494991730595},"lrc":{"version":9,"lyric":"[00:02.700]           Goodbye to you, my trusted friend.\n[00:06.640] We've known each other since we were nine or ten.\n[00:11.530]Together we've climbed hills and trees,\n[00:16.219]learned of love and ABC's,\n[00:18.500] skinned our hearts and skinned our knees.\n[00:20.810]Goodbye, my friend.\n[00:21.880]It's hard to die\n[00:25.490]when all the birds are singing in the sky.\n[00:30.200]Now that spring is in the air\n[00:35.400]pretty boys are everywhere.\n[00:37.530] Think of me and I'll be there.\n[00:44.150]   Goodbye, Papa, please pray for me.\n[00:48.990] I was the black sheep of the family.\n[00:53.560]You tried to teach me right from wrong.\n[00:58.270] Too much wine and too much song.\n[01:00.710] Wonder how I got along.\n[01:02.940] Goodbye, papa.\n[01:04.200]It's hard to die when all the birds are singing in the sky.\n[01:12.250]Now that the spring is in the air,\n[01:17.500]Little children everywhere.\n[01:19.539] When you see them, I'll be there.\n[01:25.539]\n[01:25.539]\n[01:31.440]   Goodbye, Michelle, my precious one.\n[01:35.900]You gave me love and helped me find the sun.\n[01:40.570] And every time that I was down,\n[01:45.539] you would always come around,\n[01:47.640]and get my feet back on the ground.\n[01:50.330] Goodbye, Michelle.\n[01:51.270]It's hard to die when all the birds are singing in the sky\n[01:59.200]Now that spring is in the air,\n[02:04.380]with the flowers everywhere,\n[02:06.420] I wish that we could both be there.\n[02:09.110]   We had joy, we had fun,\n[02:11.110] we had seasons in the sun,\n[02:13.770]but the hills that we climbed were just seasons out of time.\n[02:18.290]We had joy, we had fun,we had seasons in the sun,\n[02:22.770] but the stars we could reach were just starfish on the beach.\n[02:29.780]\n[02:30.200]\n"},"tlyric":{"version":2,"lyric":"[by:猪猪嘟嘟love]\n[00:02.700]再见了 我的挚友\n[00:06.640]我们从十岁左右就认识了\n[00:11.530]我们一起爬山爬树\n[00:16.219]一起学习爱与字母\n[00:18.500]共同经历成长的伤痛\n[00:20.810]再见了 我的朋友\n[00:21.880]离开你真的很难\n[00:25.490]当所有的鸟儿都在天空尽情歌唱\n[00:30.200]所有的花儿都盛开烂漫\n[00:35.400]美丽的女孩儿随处可见\n[00:37.530]想想我 我就要去那里了\n[00:44.150]再见了 爸爸 请为我祈祷吧\n[00:48.990]我像是家中的害群之马一般\n[00:53.560]你试着教我分清是非\n[00:58.270]我却沉迷于酒乐\n[01:00.710]真不知我是如何过来的\n[01:02.940]再见了 爸爸\n[01:04.200]当所有的鸟儿都在天空尽情歌唱 离开你真的很难\n[01:12.250]闻到了初春的气息\n[01:17.500]到处都会是孩子的身影\n[01:19.539]当你看着他们 我就会在那里\n[01:31.440]再见了 Michelle 我的小宝贝\n[01:35.900]你给予了我爱和阳光\n[01:40.570]每当我沮丧的时候\n[01:45.539]你总是陪在我身边\n[01:47.640]让我重拾信心\n[01:50.330]再见了 Michelle\n[01:51.270]当所有的鸟儿都在天空尽情歌唱 离开你真的很难\n[01:59.200]闻到了初春的气息\n[02:04.380]所有的花儿都盛开烂漫\n[02:06.420]我希望我们能一起享受春光\n[02:09.110]我们曾有过欢声笑语\n[02:11.110]我们曾一起度过阳光四季\n[02:13.770]但我们一起爬山的美好时光 都已一去不返\n[02:18.290]我们曾有过欢声笑语 我们曾一起度过阳光四季\n[02:22.770]但我们所接触的星辰 根本就微不足道"},"code":200}`; // eslint-disable-line
        newCurrentSong = 'Seasons in the Sun';
      }
      const { currentSong } = yield select(state => state.example);
      if (currentSong === newCurrentSong) {
        return null;
      }
      cb();
      const reg = /\[(\d{2}):(\d{2}).\d{2,3}\](.*)\n/g;
      const lrcContent = [];
      const lrcTime = [];
      let myArray;
      while ((myArray = reg.exec(lrc)) !== null) {
        lrcContent.push(myArray[3]);
        lrcTime.push((+myArray[1] * 60) + (+myArray[2]));
      }
      const changeCurrentSong = song === 'really' ? '讲真的' : 'Seasons in the Sun';
      yield put({
        type: 'save',
        payload: {
          lrcContent,
          lrcTime,
          currentSong: changeCurrentSong,
          txt: firstC ? '点击开始' : `《${changeCurrentSong}》马上播放`,
          audioSrc,
          lrc,
        },
      });
    },
    *changeSong({ payload }, {call, put, select}) { // eslint-disable-line
      yield put({
        type: 'lrcHandler',
        payload,
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
