import { IconButton } from "./button";
import { ErrorBoundary } from "./error";

import styles from "./mask.module.scss";

import "./mask.module.scss";

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

        
            <div className="article" onClick= {() =>{window.open('https://mp.weixin.qq.com/s?__biz=Mzg5MTk4Mjg2MA==&mid=2247483776&idx=1&sn=656987bcde8b569f8a945eb3ac122046&scene=19#wechat_redirect', '_blank')}}>
              <a>ChatGPT</a>
              <img src="https://alicliimg.clewm.net/744/317/2317744/1687004951324fee7aede13c1606f5f21e4acc0bf78261687004949.png" alt="Article Image" />  
              <a>安卓设备快速使用ChatGPT方式</a>
            </div>



      </div>



    </ErrorBoundary>
  );
}
