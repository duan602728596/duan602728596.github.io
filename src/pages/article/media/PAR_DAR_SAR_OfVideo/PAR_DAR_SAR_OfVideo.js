import { Typography, Alert } from 'antd';
import style from './parDarSarOfVideo.module.sass';
import ArticleLayout from '../../components/ArticleLayout/ArticleLayout';
import HighLight from '../../../../components/HighLight/HighLight';
import BlankLink from '../../../../components/BlankLink/BlankLink';

const { Title, Paragraph, Text } = Typography;

/* 视频参数PAR、DAR、SAR的区别 */
function PAR_DAR_SAR_OfVideo(props) {
  return (
    <ArticleLayout>
      <Title>视频参数PAR、DAR、SAR的区别</Title>
      <Paragraph>
        昨天接到编辑的反馈，尺寸524×360的视频，转码后给到的尺寸变成了640x360。
        我将视频下载下来后，通过FFmpeg来获取视频的编码，得到了如下信息：
      </Paragraph>
      <HighLight type="text">
        { `Stream #0:0(eng): Video: h264 (Main) (avc1 / 0x31637661), yuv420p,
640x360 [SAR 59:72 DAR 118:81],646 kb/s, 25 fps, 25 tbr, 12800 tbn, 50 tbc (default)` }
      </HighLight>
      <Paragraph>我又将A站的视频通过FFmpeg来获取视频的编码，得到了如下信息：</Paragraph>
      <HighLight type="text">
        { `Stream #0:0(und): Video: h264 (High) (avc1 / 0x31637661), yuv420p,
3840x2160 [SAR 1:1 DAR 16:9], 7555 kb/s, 25 fps, 25 tbr, 90k tbn, 50 tbc (default)` }
      </HighLight>
      <Paragraph>
        其中涉及到了PAR、DAR、SAR的计算，由于平时的视频采样纵横比（SAR）比都是1:1，而这个视频的采样纵横比（SAR）是59:72。这就导致了
        获取的尺寸有问题。
      </Paragraph>
      <Paragraph>
        FFmpeg中的视频参数PAR、DAR、SAR的解释：
        <ol>
          <li>
            PAR - pixel aspect ratio，单个像素的宽高比，大多数情况像素宽高比为1:1，也就是一个正方形像素，如果不是1:1，则该像素可以
            理解为长方形像素。常用的PAR比率有(1:1，10:11, 40:33, 16:11, 12:11)。
          </li>
          <li>
            DAR - display aspect ratio，显示宽高比。即最终播放出来的画面的宽与高之比。比如常见的16:9和4:3等。缩放视频也要按这个比例
            来，否则会使图像看起来被压扁或者拉长了似的。
          </li>
          <li className={ style.keepAll }>
            SAR - Sample aspect ratio，采样纵横比，表示横向的像素点数和纵向的像素点数的比值，即为我们通常提到的分辨率宽高比。就是对图像
            采集时，横向采集与纵向采集构成的点阵，横向点数与纵向点数的比值。比如VGA图像
            <Text className="inline-block" code={ true }>640 / 480 = 4 : 3</Text>，D-1 PAL图像
            <Text className="inline-block" code={ true }>720 / 576 = 5 : 4</Text>，高清视频等。
          </li>
        </ol>
        三者的关系：
        <Text className="inline-block" code={ true }>PAR x SAR = DAR</Text>或者
        <Text className="inline-block" code={ true }>PAR = DAR / SAR</Text>。
      </Paragraph>
      <Alert type="info"
        message={ [
          <h2 key="cankaodizhi" className="mb-0 py-[8px] text-[16px]">参考地址：</h2>,
          <div key="stackoverflow" className="py-[8px]">
            相同的问题：
            <BlankLink href="https://stackoverflow.com/questions/5839475/ffmpeg-reports-different-wrong-video-resolution-compared-to-how-it-actually-pl">
              https://stackoverflow.com/questions/5839475/ffmpeg-reports-different-wrong-video-resolution-compared-to-how-it-actually-pl
            </BlankLink>
          </div>,
          <div key="ffmpeg" className="py-[8px]">
            FFmpeg基础概念之PAR，DAR和SAR：
            <BlankLink href="https://www.yuv420.com/2020/02/20/ffmpeg-ji-chu-gai-nian-zhi-par-dar-he-sar/">
              https://www.yuv420.com/2020/02/20/ffmpeg-ji-chu-gai-nian-zhi-par-dar-he-sar/
            </BlankLink>
          </div>
        ] }
      />
    </ArticleLayout>
  );
}

export default PAR_DAR_SAR_OfVideo;