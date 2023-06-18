import { IconButton } from "./button";
import { ErrorBoundary } from "./error";

import styles from "./mask.module.scss";


import CloseIcon from "../icons/close.svg";


import { useNavigate } from "react-router-dom";


import { FileName, Path } from "../constant";




//a5470 MarkPage=>LearnPage
export function LearnPage() {
  const navigate = useNavigate();




  return (
    <ErrorBoundary>
      <div className={styles["mask-page"]}>
        <div className="window-header">
          <div className="window-header-title">
            <div className="window-header-main-title">
              学习中心
              {/* {Locale.Mask.Page.Title} */}
            </div>
            <div className="window-header-submai-title">
              学习更多ChatGPT使用技巧，尽享AI智能助力
              {/* {Locale.Mask.Page.SubTitle(allMasks.length)} */}
            </div>
          </div>

          <div className="window-actions">


            <div className="window-action-button">
              <IconButton
                icon={<CloseIcon />}
                bordered
                onClick={() => navigate(Path.Home)}
              />
            </div>
          </div>
        </div>

        
            <div style={{ 
                  border: 'solid 2px gray', 

                  maxWidth: '30%',
                  borderRadius: '3px'
                }} 
                onClick= {() =>{window.open('https://mp.weixin.qq.com/s?__biz=Mzg5MTk4Mjg2MA==&mid=2247483776&idx=1&sn=656987bcde8b569f8a945eb3ac122046&scene=19#wechat_redirect', '_blank')}}>
              <img src="https://alicliimg.clewm.net/744/317/2317744/1687004951324fee7aede13c1606f5f21e4acc0bf78261687004949.png" alt="Article Image" style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '3px'
                }}/>
                <p>安卓设备快速使用ChatGPT方式</p>

              {/* <h3>安卓设备快速使用ChatGPT方式</h3>              */}
            </div>


            <div >
              <a href="https://www.cnblogs.com/tangyanzhi1111/p/17481579.html" target="_blank">
                .Net7发现 System.Numerics.Vector 矢量化的一个 bug, Issues 给了 dotnet 团队
              </a>
              <p >
                <a href="https://www.cnblogs.com/tangyanzhi1111/">
                  <img src="https://pic.cnblogs.com/face/490844/20221020190555.png"  alt="博主头像" />
                </a>
                因为前几天做.Net7的矢量化性能优化，发现了一个 bug。在类 System.Numerics.Vector 里面的成员变量 IsHardwareAccelerated。但是实际上不确定这个 bug 是 visual studio 2022 的还是System.Numerics.Vector库的，个人认为应该是前 ...
              </p>
            </div>

      </div>

      <div style={{ 
                  border: 'solid 2px gray', 
                  padding: '10px',
                  maxWidth: '30%',
                  borderRadius: '3px'
                }} 
                onClick= {() =>{window.open('https://mp.weixin.qq.com/s?__biz=Mzg5MTk4Mjg2MA==&mid=2247483776&idx=1&sn=656987bcde8b569f8a945eb3ac122046&scene=19#wechat_redirect', '_blank')}}>
              <img src="https://alicliimg.clewm.net/744/317/2317744/1687004951324fee7aede13c1606f5f21e4acc0bf78261687004949.png" alt="Article Image" style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '3px'
                }}/>
                <p>安卓设备快速使用ChatGPT方式</p>

              {/* <h3>安卓设备快速使用ChatGPT方式</h3>              */}
            </div>

    </ErrorBoundary>
  );
}
