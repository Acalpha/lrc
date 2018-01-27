import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';


class IndexPage extends React.PureComponent {
  componentWillMount = () => {
  }
  componentDidMount = () => {
    const Timer = setInterval(() => {
      this.props.dispatch({
        type: 'example/fetch',
      });
    }, 1000);

    this.props.dispatch({
      type: 'example/save',
      payload: {
        Timer,
        shuzi: 0,
      },
    });
    this.mod.addEventListener('click', () => {
      this.mod.style.display = 'none';
      this.mp3.play();
    });
  }

  componentWillUnmount = () => {
    const { Timer } = this.props.example;
    clearTimeout(Timer);
    this.props.dispatch({
      type: 'example/save',
      payload: {
        Timer: undefined,
        shuzi: 0,
        txt: '点击开始',
      },
    });
  }
  onChangeSong = (song) => {
    this.props.dispatch({
      type: 'example/changeSong',
      payload: {
        song,
        cb: this.onStartSong,
      },
    });
  }
  onStartSong = () => {
    const Timer = setInterval(() => {
      this.props.dispatch({
        type: 'example/fetch',
      });
    }, 1000);

    this.props.dispatch({
      type: 'example/save',
      payload: {
        Timer,
        shuzi: 0,
      },
    });
  }
  handlerClose = () => {
    this.mp3.load();
    const { Timer } = this.props.example;
    clearTimeout(Timer);
    this.props.dispatch({
      type: 'example/save',
      payload: {
        Timer: undefined,
        shuzi: 0,
        txt: '停止',
      },
    });
  }
  handlerPause = () => {
    this.mp3.pause();
    const { Timer, txt } = this.props.example;
    if (txt === '停止') return;
    clearTimeout(Timer);
    this.props.dispatch({
      type: 'example/save',
      payload: {
        Timer: undefined,
        shuzi: Math.round(this.mp3.currentTime),
        txt: '暂停',
      },
    });
  }
  handlerStart = () => {
    this.mp3.play();
    if (this.props.example.Timer !== undefined) {
      return;
    }
    const Timer = setInterval(() => {
      this.props.dispatch({
        type: 'example/fetch',
      });
    }, 1000);
    this.props.dispatch({
      type: 'example/save',
      payload: {
        Timer,
        txt: '播放中',
      },
    });
  }
  render() {
    const { shuzi, lrcContent, lrcTime, arr, txt, audioSrc, currentSong } = this.props.example;
    const lrcArr = [];
    let tempLrc = null;
    for (let i = 0; i < lrcTime.length - 1; i += 1) {
      tempLrc = shuzi > lrcTime[i] && shuzi < lrcTime[i + 1] + 1
        ? <div className={arr[lrcTime[i] % 71]} key={i}>{lrcContent[i]}</div> : null;
      lrcArr.push(tempLrc);
    }
    tempLrc = shuzi > lrcTime[lrcTime.length - 1]
      ? <div className={arr[lrcTime[lrcTime.length - 1] % 71]} key={lrcTime.length - 1}>{lrcContent[lrcTime.length - 1]}</div> : null;
    lrcArr.push(tempLrc);
    tempLrc = null;
    const x = arr.map((v, i) => {
      return (
        <div
          key={i}
          className={v}
          style={{
            animationDuration: 2,
            animationIterationCount: 'infinite',
            display: 'inline-block',
            width: '15px',
            height: '15px',
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
          }}
        ></div>
      );
    });
    return (
      <div className={styles.normal}>
        <div
          ref={(ref) => { this.mod = ref; }}
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
          }}
        />
        <div style={{ marginTop: '2em', marginBottom: '15px' }}>
          <button onClick={() => this.onChangeSong('Seasons')} className="button button-3d">Seasons in the Sun</button>
          <button onClick={() => this.onChangeSong('really')} className="button button-3d button-caution">讲真的</button>
        </div>
        <div
          style={{
            position: 'relative',
            width: '150px',
            height: '150px',
            paddingBottom: '20px',
            margin: '0 auto 10px',
          }}
        >{x}</div>
        <div style={{ animationDuration: 0.5 }}>
          <audio autoPlay id="audioMp3" ref={(ref) => { this.mp3 = ref; }} src={audioSrc} loop >
              Your browser does not support the audio tag.
          </audio>
        </div>
        <div>
          <button className="button button-3d button-primary button-rounde" onClick={this.handlerStart}>开始</button>
          <button className="button button-3d button-action" onClick={this.handlerPause}>暂停</button>
          <button className="button button-3d button-royal" onClick={this.handlerClose}>结束</button>
        </div>
        {/* { shuzi < 10 ? <div className={arr[39]}>数字小于10</div> : null }
        { shuzi < 20 && shuzi >= 10 ? <div className={arr[5]}>数字小于20大于等于10</div> : null }
        { shuzi < 30 && shuzi >= 20 ? <div className={arr[11]}>数字小于30大于等于20</div> : null }
        { shuzi < 40 && shuzi >= 30 ? <div className={arr[61]}>数字小于40大于等于30</div> : null }
        { shuzi < 50 && shuzi >= 40 ? <div className={arr[16]}>数字小于50大于等于40</div> : null }
        { shuzi < 60 && shuzi >= 50 ? <div className={arr[16]}>数字小于60大于等于50</div> : null }
        { shuzi < 70 && shuzi >= 60 ? <div className={arr[16]}>数字小于70大于等于60</div> : null }
        { shuzi >= 70 ? <div className={arr[19]}>数字大于70</div> : null }
        <div>Timer：{Timer + ''}</div> */}
        <div style={{ marginTop: '20px',marginBottom: '20px' }}>
          {
            currentSong ? <div style={{ marginBottom: '15px' }}>当前正在播放{currentSong}</div> : null
          }
          { +shuzi === 0 || txt === '暂停' || txt === '停止' ? (
            <div className={arr[10 % 71]} style={{ animationDuration: 1, animationIterationCount: 'infinite' }}>{txt}</div>
          ) : (
            <div className={arr[10 % 71]} style={{ animationDuration: 1, animationIterationCount: 'infinite' }}>时间：
            {Math.floor(shuzi / 60) < 10 ? '0' + Math.floor(shuzi / 60) : Math.floor(shuzi / 60) } :
                {Math.floor(shuzi % 60) < 10 ? '0' + Math.floor(shuzi % 60) : Math.floor(shuzi % 60) }</div>
          )}
        </div>
        {lrcArr}
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect(({ example }) => ({ example }))(IndexPage);
